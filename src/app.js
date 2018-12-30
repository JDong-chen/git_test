const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

const sortBy = function (filed, rev, primer) {
  rev = (rev) ? -1 : 1
  return function (a, b) {
    a = a[filed]
    b = b[filed]
    if (typeof (primer) !== 'undefined') {
      a = primer(a)
      b = primer(b)
    }
    if (a < b) { return rev * -1 }
    if (a > b) { return rev * 1 }
    return 1
  }
}

let rootPath = path.resolve(path.join(__dirname), 'article')
let filesList = []
let imgReg = /\.jpeg|.jpg|.gif|.png$/
let titleReg = /-\d+\.md/
let idReg = /-\d+/

const readDir = function (artPath) {
  fs.readdir(artPath, (err, files) => {
    if (err) return console.log(err)
    else {
      let imgTemp
      files.forEach((file) => {
        let fileNode = {}
        fs.stat(`${artPath}/${file}`, (err, stats) => {
          if (err) return console.log(err)
          if (stats.isDirectory()) {
            readDir(`${artPath}/${file}`)
          } else {
            if (imgReg.test(file)) {
              imgTemp = file
              return
            }
            if (imgTemp) {
              fileNode.img = imgTemp
              imgTemp = undefined
            }
            fileNode.id = file.match(idReg)[0].replace('-', '')
            fileNode.title = file.replace(titleReg, '')
            fileNode.mtime = stats.mtime.toLocaleDateString()
            filesList.push(fileNode)
            if (filesList.length === 10) {
              filesList.sort(sortBy('id', true, parseInt))
              console.log('*')
              console.log(filesList)
              console.log('*')
            }
          }
        })
      })
    }
  })
}
readDir(rootPath)

app.get('/', (req, res) => res.send('Hello World!'))
  .get('/articleList', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.send(filesList)
    filesList = []
    readDir(rootPath)
  })

app.listen(3000, () => console.log('App listening on port 3000!'))
