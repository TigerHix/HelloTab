<template>
    <Card fromColor="#337744" toColor="rgba(0,0,0,0)">
        <div class="my-0 py-0" slot="title">Weather forecast</div>
        <p class="p-3 mt-0 mb-0" v-if="Weather&&Weather.title"
           style="font-size: 13px; z-index: 100;position:relative;line-height:2.0">
            <div class="row">
                <div style="padding-left: 3rem;"
                     class="col-6 d-flex flex-column align-items-center justify-content-center">
        <p style="font-size: 48px; margin-bottom: 0;font-weight: bold;"> {{ Weather.temperature }}<span
                style="font-size:24px;font-weight: normal;">°F</span></p>
        <p>Temperature</p>
        </div>
        <div style="padding-right: 3rem;" class="col-6 d-flex flex-column align-items-center justify-content-center">
            <p style="font-size: 48px; margin-bottom: 0;font-weight: bold;"> {{ Weather.humidity }}<span
                    style="font-size:24px;font-weight: normal;">%</span></p>
            <p>Humidity</p>
        </div>
        </div>
        <div class="secondary-text" style="position: relative; padding: 1rem; font-size: 14px;">
            <span style="font-weight:bold;"><font-awesome-icon icon="sun"/> {{Weather.discOne}}.</span>
            {{Weather.discTwo}}
        </div>
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
                Weather: null
            }
        },
        mounted() {
            axios({
                method: "get",
                url: 'https://api.darksky.net/forecast/88fdc720342283e09b14af968e0aada6/40.425869,-86.9080',
            }).then(response => {
                let weather = null;
            if (response.data.alerts) {
                let startDate = new Date(Number(response.data.alerts[0].time) * 1000);
                let endDate = new Date(Number(response.data.alerts[0].expires) * 1000);
                weather = {
                    title: response.data.alerts[0].title,
                    discOne: response.data.alerts[0].description,
                    discTwo: 'From ' + startDate.getMonth() + '/' + startDate.getDate() + ',' + startDate.getHours() + ":" + startDate.getMinutes() + ' to ' + +endDate.getMonth() + '/' + endDate.getDate() + ',' + endDate.getHours() + ":" + endDate.getMinutes()
                }
            }
            else {
                weather = {
                    temperature: Math.floor(response.data.currently.temperature),
                    humidity: Math.floor((response.data.currently.humidity) * 100),
                    discOne: response.data.currently.summary,
                    discTwo: response.data.daily.summary,
                }
            }
            console.log(weather)
            this.Weather = weather
        })
            ;
        }
    }
</script>
