const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

let rootPath = path.resolve(path.join(__dirname), 'article')
let filesList = []
let imgReg = /\.jpeg|.jpg|.gif|.png$/
const readDir = function (artPath) {
  fs.readdir(artPath, (err, files) => {
    if (err) return console.log(err)
    else {
      let fileNode = {}
      files.forEach((file) => {
        fs.stat(`${artPath}/${file}`, (err, stats) => {
          if (err) return console.log(err)
          if (stats.isDirectory()) {
            console.log(`${artPath}/${file}`)
            readDir(`${artPath}/${file}`)
          } else {
            if (imgReg.test(file)) {
              fileNode.img = file
              return
            }
            fileNode.title = file.replace('.md', '')
            fileNode.mtime = stats.mtime.toLocaleDateString()
            console.log(stats.mtime.toLocaleDateString())
            filesList.push(fileNode)
            console.log(fileNode)
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
