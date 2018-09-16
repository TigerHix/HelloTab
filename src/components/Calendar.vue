<template>
  <Card fromColor="#330044" toColor="rgba(0,0,0,0)">
   <h3 v-if='timeString' class="text-center" style="background:#3333FF"> {{ timeString }}</h3>
   <div v-if="currentToday" slot="title">Course Today</div>
   <div v-else slot="title">Course Tomorow</div>
   <ul class="p-2 my-0 ml-3" style="font-size: 15px; z-index: 100; position: relative;">
      <li style="padding-right: 1.25rem; padding-left: 1.25rem; line-height:1.5" v-for="event in todayEvents">
          <strong class="text-light" style="font-size: 14px;">{{
              event.course }}</strong>
          <br>
          <span style="font-size: 14px;">{{event.time}}</span>
          <div class="row mt-0">
            <div class="col-sm-7">
              <p style="font-size: 12px;">{{event.type}}</p>
            </div>
            <div class="col-sm-5">
              <p style="font-size: 12px;">{{event.location}}</p>
            </div>
          </div>
      </li>
  </ul>
  <button v-if="currentToday" v-on:click="myChangeFunction" class="btn btn-dark mx-1 my-1" style="float:right;font-size: 18px; z-index: 100; position: relative">Course Tomorow</button>
  <button v-else v-on:click="myChangeFunction" class="btn btn-dark mx-1 my-1" style="float:right;font-size: 18px; z-index: 100; position: relative">Course Today</button>
  </Card>
</template>
<script>
  import Card from '@/components/Card'
  import Ical2Json from 'ical2json'
  import axios from 'axios'
  export default {
      components: {
          Card
      },
      data() {
        return {
          todayEvents: [],
          currentToday: false,
          timeString: null
        }
      },
      mounted () {
        this.myChangeFunction()
        this.updateTime()
        window.setInterval(this.updateTime,1000)
      },
      methods: {

        updateTime()
        {
          let v = new Date();
          let h=" "
          let m=" "
          let s=" "
          if(Number(v.getHours())<10||Number(v.getHours())>23) h = "0"+v.getHours()
          else h = v.getHours()
          if(Number(v.getMinutes())<10||Number(v.getMinutes())>59) m = "0"+v.getMinutes()
          else m = v.getMinutes()
          if(Number(v.getSeconds())<10||Number(v.getSeconds())>59) s = "0"+v.getSeconds()
          else s = v.getSeconds()

          this.timeString = h+':'+m+':'+s
        },
        myChangeFunction() {
          this.currentToday = !this.currentToday
          let today = new Date();
          if(this.currentToday)
          {
            today = "2018/09/13 12:02:33";
            //const today = new Date();
          }
          else {
            today = "2018/09/14 12:02:33";
            //const today = new Date()-86400000;
          }
          console.log("Running Day:"+today)
          axios({
                method: "get",
                url: 'https://timetable.mypurdue.purdue.edu/Timetabling/export?x=-3kqpzz93bu9lt2sdxbnpyqgskjm428vc9',
            }).then(response => {
                console.log("Running res")
                const da = Ical2Json.convert(response.data);
                const allEventArray = da.VCALENDAR[0].VEVENT;
                var todayEventArray = new Array();
                for(var i=0;i<allEventArray.length;i++){
                    const start = allEventArray[i]["DTSTART;TZID=US/East-Indiana"]
                    const startDate = Date.parse(start.substr(0, 4)+'/'+start.substr(4, 2)+'/'+start.substr(6, 2)+' '+'00'+':'+'00'+':'+'00');
                    var end;
                    if(allEventArray[i].RRULE&&allEventArray[i].RRULE.substr(0,12)=='FREQ=WEEKLY;')
                    {
                      end = allEventArray[i].RRULE.substr(18,15)
                      var isInTheDay = false;

                      var k = allEventArray[i].RRULE.indexOf('WKST')-1
                      while(k>allEventArray[i].RRULE.indexOf('BYDAY=')+7)
                      {
                        let valueOfTheDay = allEventArray[i].RRULE.substr(k-2,2)
                        if (valueOfTheDay) {
                          valueOfTheDay = {
                            'MO': 1,
                            'TU': 2,
                            "WE": 3,
                            "TH": 4,
                            "FR": 5,
                            "SA": 6,
                            "SU": 0
                          }[valueOfTheDay]
                        } else valueOfTheDay = -1;
                        if(new Date(today).getDay() == valueOfTheDay)
                        {
                          isInTheDay = true;
                          break;
                        }
                        k-=3
                      }
                      if(isInTheDay)
                      {
                        const endDate = Date.parse(end.substr(0, 4)+'/'+end.substr(4, 2)+'/'+end.substr(6, 2)+' '+'23'+':'+'59'+':'+'59');
                        if(Number(new Date(today))<=Number(endDate) && Number(new Date(today))>=Number(startDate))
                        {
                          end = allEventArray[i]["DTEND;TZID=US/East-Indiana"]
                          todayEventArray.push(
                            {
                              time: start.substr(9,2)+':'+start.substr(11,2) +' - '+ end.substr(9,2)+':'+end.substr(11,2),
                              type:  allEventArray[i].DESCRIPTION,
                              course: allEventArray[i].SUMMARY,
                              location: allEventArray[i].LOCATION
                            }
                          );
                        }
                      }
                    }
                    else
                    {
                      end = allEventArray[i]["DTEND;TZID=US/East-Indiana"]
                      const endDate = Date.parse(end.substr(0, 4)+'/'+end.substr(4, 2)+'/'+end.substr(6, 2)+' '+'23'+':'+'59'+':'+'59');
                      if(Number(new Date(today))<=Number(endDate) && Number(new Date(today))>=Number(startDate))
                      {
                        todayEventArray.push(
                          {
                            time: start.substr(9,2)+':'+start.substr(11,2)+' - '+ end.substr(9,2)+':'+end.substr(11,2),
                            type:  allEventArray[i].DESCRIPTION,
                            course: allEventArray[i].SUMMARY,
                            location: allEventArray[i].LOCATION
                          }
                        );
                      }
                    }
                }
                console.log(todayEventArray);
                this.todayEvents = todayEventArray;
            })
        }
    }
  }
</script>
