<template>
  <Card class="my-2" style="height:550px">
   <p class="p-3 my-0" style="font-weight: bold; font-size: 18px; z-index: 100; position: relative;">Course Today</p>
   <ul class="p-2 my-0 ml-3" style="font-size: 15px; z-index: 100; position: relative;">
      <li v-for="event in todayEvents">
        <p>{{event.course}}<br>
        {{event.time}}<br>
        {{event.type}}<br>
        {{event.location}}
        </p>
      </li>
  </ul>
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
          todayEvents: []
        }
      },
      mounted () {
        axios({
              method: "get",
              url: 'https://timetable.mypurdue.purdue.edu/Timetabling/export?x=-3kqpzz93bu9lt2sdxbnpyqgskjm428vc9',
          }).then(response => {
              const da = Ical2Json.convert(response.data);
              const allEventArray = da.VCALENDAR[0].VEVENT;
              var todayEventArray = new Array();
              const today = "2018/09/13 12:02:33";
              //const today = new Date();
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
              this.todayEvents = todayEventArray
              console.log(this.todayEvents);
          })
      }
  }
</script>
