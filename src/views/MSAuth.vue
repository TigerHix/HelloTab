<template>
<div>
{{$route.hash.substr(1)}}
</div>
</template>

<script>
import qs from 'qs'
import axios from 'axios'
export default {
	mounted () {
		let obj = qs.parse(this.$route.hash.substr(1));
		localStorage.setItem('ms_key', obj.access_token)
		axios.get('https://graph.microsoft.com/v1.0/me/messages', {
			headers: {
				'Authorization': obj.token_type + ' ' + obj.access_token
			}
		})
		.then(response => {
			console.log(response.data)
		})
	}
}
</script>