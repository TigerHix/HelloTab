import axios from 'axios'
import qs from 'qs'

let client_id = '093edd3e-80ae-47e4-94d4-c58ab3dc8314'
let client_secret = 'lVKUK605kzluwrOEB36)~^-'
let redirect_uri = 'http://localhost:8080/msauth'
export function login() {
	let params = qs.stringify({
		'client_id': client_id,
		'redirect_uri': redirect_uri,
		'response_type': 'id_token token',
		'response_mode': 'fragment',
		'nonce': 67890,
		'scope': 'openid Mail.Read',
	})
	open('http://login.microsoftonline.com/common/oauth2/v2.0/authorize?' + params)
}
