<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <b-card-group columns>
          <Reddit/>
          <ToDoList/>
          <Mail/>
        </b-card-group>
      </b-col>
    </b-row>
    <b-carousel id="background-carousel"
                background="#ababab"
                :interval="10000"
                img-width="100%"
                img-height="100%"
    >
      <!-- Text slides with image -->
      <b-carousel-slide v-for="image in wallpapers"
                        :key="image.hsh"
                        :caption="image.title"
                        :img-src="'//www.bing.com' + image.url"
      ></b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
import axios from 'axios'
import Reddit from '@/components/Reddit'
import ToDoList from '@/components/ToDoList'
import Mail from '@/components/Mail'
export default {
  name: 'home',
  components: {
    Reddit,
    ToDoList,
    Mail,
  },
  data() {
    return {
      wallpapers: []
    }
  },
  mounted () {
    axios.get('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    .then(response => {
      this.wallpapers = response.data.images
    }) 
  },
}
</script>

<style lang="scss">
  #background-carousel {
    z-index: -100;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
</style>
