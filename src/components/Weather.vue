<template>
  <Card fromColor="#337744" toColor="rgba(0,0,0,0)">
   <div class= "my-0 py-0" slot="title">Purdue Weather</div>
   <p class="p-3 mt-0" v-if="Weather&&Weather.title" style="font-size: 13px; z-index: 100;position:relative;line-height:2.0">
     <strong>{{Weather.title}}</strong><br>
     {{Weather.discOne}}<br>
     {{Weather.discTwo}}
   </p>
  </Card>
</template>
<script>
  import Card from '@/components/Card'
  import axios from 'axios'
  export default {
      components: {
          Card,
      },
      data () {
        return {
          Weather:null
        }
      },
      mounted() {
        axios({
              method: "get",
              url: 'https://api.darksky.net/forecast/88fdc720342283e09b14af968e0aada6/40.425869,-86.9080',
          }).then(response => {
              let weather = null;
              if(response.data.alerts)
              {
                let startDate = new Date(Number(response.data.alerts[0].time)*1000);
                let endDate = new Date(Number(response.data.alerts[0].expires)*1000);
                weather = {
                  title: response.data.alerts[0].title,
                  discOne: response.data.alerts[0].description,
                  discTwo: 'From '+startDate.getMonth()+'/'+startDate.getDate()+','+startDate.getHours()+":"+startDate.getMinutes()+' to '+ +endDate.getMonth()+'/'+endDate.getDate()+','+endDate.getHours()+":"+endDate.getMinutes()
                }
              }
              else
              {
                weather = {
                  title:  'Temperature: '+response.data.currently.temperature+'F;   '+'Humidity: '+response.data.currently.humidity+'RH',
                  discOne: response.data.currently.summary,
                  discTwo: response.data.daily.summary,
                }
              }
              console.log(weather)
              this.Weather = weather
        });
      }
  }
</script>
