<template>
  <image-item :img_src3="img_src2"></image-item>
</template>
<script>
import ImageItem from '@/components/ImageItem.vue'
export default {
  props: {
    img_src2:String
  },
  components: {
    ImageItem,
  }
}
</script>

