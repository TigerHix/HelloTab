<template>
    <Card fromColor="#E83F6F" toColor="rgba(0,0,0,0)">
        <div slot="title">Dining courts</div>
        <div class="table-responsive">
            <table id="dining_courts" class="table mb-2 table-hover table-sm table-dark bg-dark table-borderless"
                   style="white-space: nowrap; overflow-y: scroll; overflow-x: hidden; background-color: unset !important; position: relative;">
                <tbody style="display: table; white-space: normal; width: 100%;">
                <tr v-for="court in diningCourts" :key="court.LocationId">
                    <td style="padding-left: 1.25rem; padding-right: 1.25rem; line-height:1.0" scope=row>
                        <strong><a class="text-light" style="font-size: 14px;">{{court.Name}}</a></strong>
                        <div class="secondary-text">
                            <span style="font-size: 10px;" v-if="court.NextMeal.StartTime.isAfter(now)"><font-awesome-icon :icon="court.icon"/> {{court.NextMeal.Name}} starts
                                {{court.NextMeal.StartTime.fromNow()}}</span>
                            <span style="font-size: 10px;" v-else><font-awesome-icon :icon="court.icon"/> {{court.NextMeal.Name}} ends {{court.NextMeal.EndTime.fromNow()}}</span>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </Card>
</template>

<script>
    import Card from '@/components/Card';
    import moment from 'moment';
    import {diningCourts, diningMenu} from '@/utils/dining';

    export default {
        data () {
            return {
                diningCourts: []
            }
        },
        components: {
            Card
        },
        computed: {
            now () {
                return moment()
            }
        },
        mounted () {
            diningCourts()
                .then(courts => {
                    let now = moment()
                    this.diningCourts = courts
                        .filter(court => {
                            court.icon = court.NextMeal.Name.includes("reakfast") ? "coffee" : "utensils";
                            return court.NextMeal.StartTime.diff(now, 'hours') < 12;
                        })
                    console.log(JSON.parse(JSON.stringify(this.diningCourts)));
                })
        }
    }
</script>