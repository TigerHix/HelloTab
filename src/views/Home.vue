<template>
  <div>
  <b-container fluid>
    <b-row>
      <b-col md="8">
        <b-card-group columns>
          <Reddit/>
          <ToDoList/>
        </b-card-group>
      </b-col>
    </b-row>
  </b-container>
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
</div>
</template>

<script>
import axios from 'axios'
import Reddit from '@/components/Reddit'
import ToDoList from '@/components/ToDoList'
export default {
  name: 'home',
  components: {
    Reddit,
    ToDoList,
  },
  data() {
    return {
      wallpapers: []
    }
  },
  mounted () {
    //axios.get('https://crossorigin.me/https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
    axios.get('/wallpaper.json')
    .then(response => {
      this.wallpapers = response.data.images
    })
  },
}
</script>

<style lang="scss">
  #background-carousel {
    z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
</style>
