<template>
  <Card class="my-2" style="height:300px;background:white">
   <p class="p-3 my-0" style="font-weight: bold; font-size: 18px; z-index: 100; position: relative;">Purdue Weather</p>
   <p id="weather" class="p-3 my-0" style="font-size: 18px; z-index: 100; position: relative;">Loading</p>
  </Card>
</template>
<script>
  import Card from '@/components/Card'
  import axios from 'axios'
  export default {
      components: {
          Card
      },
      mounted() {
        axios({
              method: "get",
              url: 'https://api.darksky.net/forecast/88fdc720342283e09b14af968e0aada6/40.425869,-86.9080',
          }).then(response => {
              document.getElementById('weather').innerHTML = response.data.daily.summary;
        });
      }
  }
</script>
