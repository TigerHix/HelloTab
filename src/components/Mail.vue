<template>
    <Card fromColor="#0078D7" toColor="rgba(0,0,0,0)">
        <div slot="title">Outlook</div>
        <!-- <b-button @click="login" style="position:relative;z-index: 512;margin: 1rem;">Click to sign in</b-button> -->
        <div id="email-list-group" style="padding-left: 0.5rem; padding-right: 0.5rem; height: 710px; overflow-y: scroll; overflow-x: hidden;">
            <div
                    class="card email-card text-dark"
                    style="border:none;"
                    href="#"
                    v-for="mail in mails"
                    :key="mail.id"
                    @click="showMail(mail)">
                <h5>{{truncateStr(mail.subject, 80)}}</h5>
                <p class="mb-1">{{truncateStr(mail.bodyPreview, 100)}}</p>
                <p class="secondary-text">{{mail.timeAgo + " from " +
                    truncateStr(mail.sender.emailAddress.name)}}</p>
            </div>
        </div>
            <b-modal lazy size="lg" v-model="showMailModal" id="mail_detail"
                     :title="currentMail ? currentMail.subject : ''">
            <p v-if="currentMail" v-html="currentMail.body.content"></p>
        </b-modal>
    </Card>
</template>

<script>
    import axios from 'axios'
    import Card from '@/components/Card'
    import moment from "moment";
    import SimpleBar from 'simplebar';
    import 'simplebar/dist/simplebar.css';
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
            axios.get('https://graph.microsoft.com/v1.0/me/MailFolders/Inbox/messages', {
                headers: {
                    'Authorization': 'Bearer ' + key
                }
            })
                .then(response => {
                    this.mails = response.data.value
                    this.mails.forEach(mail => {
                        mail.timeAgo = moment(mail.receivedDateTime).fromNow()
                    });
                    this.$nextTick(function () {
                        new SimpleBar(document.getElementById('email-list-group'))
                    });
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
                this.currentMail = mail;
                this.showMailModal = true
            }
        },
    }
</script>
<style lang="scss">
    #email-list-group {

    h5 {
        font-size: 14px;
    }

    p {
        font-size: 10px;
        margin: 0;
    }

    .email-card {
        padding: 1rem;
        margin-top: 0 !important;
        margin-bottom: 0.5rem !important;
        filter: brightness(1);
        -webkit-transition: all .25s ease-in-out;
        transition: all .25s ease-in-out;
    }

    .email-card:hover {
        filter: brightness(0.7);
    }

    .email-card:active {
        filter: brightness(0.5);
    }

    }

    .modal-header, .modal-body {
        color: #212529
    }
</style>
