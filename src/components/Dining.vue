<template>
  <b-card no-body>
  	<b-list-group id="dining-list-group" flush>
      <b-list-group-item
      href="#"
        v-for="court in diningCourts"
        :key="court.LocationId">
        <h5>{{court.Name}}</h5>
        <h5 v-if="court.NextMeal.StartTime.isAfter(now)">{{court.NextMeal.Name}} starts {{court.NextMeal.StartTime.fromNow()}}</h5>
        <h5 v-else>{{court.NextMeal.Name}} ends {{court.NextMeal.EndTime.fromNow()}}</h5>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import moment from 'moment'
import {diningCourts, diningMenu} from '@/utils/dining'

export default {
  data () {
  	return {
  		diningCourts: []
  	}
  },
  computed: {
  	now () { return moment() }
  },
  mounted () {
  	diningCourts()
	.then(courts => {
		let now = moment()
		this.diningCourts = courts
		.filter(court => {
			return court.NextMeal.StartTime.diff(now, 'hours') < 12
			return true
		})
		.sort((a, b) => {
			return a.NextMeal.StartTime.isAfter(b.NextMeal.StartTime)
		})
		console.log(JSON.parse(JSON.stringify(this.diningCourts)))
	})
  }
}
</script>