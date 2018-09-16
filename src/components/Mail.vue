<template>
  <b-card>
    <div slot="title">This is the title</div>
    <b-list-group id="email-list-group">
      <b-list-group-item
      href="#"
        v-for="mail in mails"
        :key="mail.id"
        @click="showMail(mail)">
        <h3>{{truncateStr(mail.sender.emailAddress.name)}}</h3>
        <h5>{{truncateStr(mail.subject, 50)}}</h5>
        <p>{{truncateStr(mail.bodyPreview, 100)}}</p>
      </b-list-group-item>
    </b-list-group>
    <b-button @click="login">Login Here</b-button>
    <b-modal lazy size="lg" v-model="showMailModal" id="mail_detail" :title="currentMail ? currentMail.subject : ''">
      <p v-if="currentMail" v-html="currentMail.body.content"></p>
    </b-modal>
  </b-card>
</template>


<script>
import axios from 'axios'
import Card from './Card'
export default {
  data () {
    return {
      mails: [],
      currentMail: null,
      showMailModal: false
    }
  },
  mounted () {
    let key = localStorage.getItem('ms_key')
    if (!key) return
    axios.get('https://graph.microsoft.com/v1.0/me/messages', {
      headers: {
        'Authorization': 'Bearer ' + key
      }
    })
    .then(response => {
      this.mails = response.data.value
      console.log(JSON.parse(JSON.stringify(this.mails)))
    })
    .catch(error => {
      console.log(error)
    })
  },
  components: {
    Card
  },
  methods: {
    truncateStr(theStr, length) {
      return theStr.length > length ? theStr.substring(0, length) + '...' : theStr
    },
    login() {
      require('@/utils/outlook.js').login()
    },
    logedin() {
      return localStorage.getItem('ms_key') !== null
    },
    showMail(mail) {
      this.currentMail = mail
      this.showMailModal = true
    }
  },
}
</script>
<style lang="scss">
#email-list-group {
  h3 {
    font-size: 17px;
  }
  h5 {
    font-size: 13px;
  }
  p{
    font-size: 10px;
    margin: 0;
  }
}
</style>