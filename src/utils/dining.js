import axios from 'axios'
import moment from 'moment'

let diningCourtsCache = null
export function diningCourts () {
	if (!diningCourtsCache)
	diningCourtsCache = axios.get('https://api.hfs.purdue.edu/menus/v2/locations')
	.then(response => {
		var courts = response.data.Location
		var now = moment()
		courts.forEach(court => {
			court.UpcomingMeals.forEach(meal => {
				meal.StartTime = moment(meal.StartTime)
				meal.EndTime = moment(meal.EndTime)
			})
			court.NextMeal = court.UpcomingMeals.find(meal => meal.EndTime.isAfter(now)) || court.UpcomingMeals.find(meal => meal.StartTime.isAfter(now)) || court.UpcomingMeals[0]
		})
		courts = courts.sort((a, b) => {
                            return a.NextMeal.StartTime.isAfter(b.NextMeal.StartTime);
                        });
		return courts
	})
	return diningCourtsCache
}

export function diningMenu(court, date) {
	return axios.get(`https://api.hfs.purdue.edu/menus/v2/locations/${court.Name}/2018-9-16`)
	.then(response => {
		return response.data
	})
}
