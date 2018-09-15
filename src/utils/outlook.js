import axios from 'axios'
import qs from 'qs'
export function login() {
	let params = qs.stringify({
		'client_id': '093edd3e-80ae-47e4-94d4-c58ab3dc8314',
		'redirect_uri': 'https://localhost:8080/msauth',
		'response_type': 'code',
		'scope': 'openid Mail.Read',
	})
	open('http://login.microsoftonline.com/common/oauth2/v2.0/authorize?' + params)
}
