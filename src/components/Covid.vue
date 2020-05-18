<template>
  <div class="covid">
    
    <h1>{{title}}</h1><img :src="image">
    
  </div>
</template>

<script>
import image from '../assets/covidpic.png'

export default {
  name: 'covid',
  props: {
        title: String
    },
    data() {
        return {
            image
        }
    },
}
</script>

<style scoped>
h1 {
  font-size: 36px;
}

img {
  width: 600px;
  height: 600px;
}
</style>
