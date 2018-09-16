<template>
    <Card fromColor="#ff6600" toColor="rgba(0,0,0,0)">
        <div slot="title">Hacker News</div>
        <div class="table-responsive">
            <table id="hn_posts" class="table mb-0 table-hover table-sm table-dark bg-dark table-borderless"
                   style="white-space: nowrap; height: 316px; overflow-y: scroll; overflow-x: hidden; background-color: unset !important">
                <tbody style="display: table; white-space: normal;">
                <tr v-for="post in posts">
                    <td style="padding-left: 1.25rem; padding-right: 1.25rem; line-height:1.0" scope=row>
                        <strong><a class="text-light" :href="post.source.sourceUrl" style="font-size: 12px;">{{
                            post.title }}</a></strong>
                        <div class="row mt-1">
                            <div class="col-sm-6">
                                <p class="mb-1" style="font-size: 10px;white-space: pre-wrap;">{{ post.timeago
                                    }}</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0 float-right align-text-bottom secondary-text" style="font-size: 10px;">
                                    <font-awesome-icon icon="arrow-up"/>
                                    {{ post.source.likesCount }}
                                    &nbsp;&nbsp;
                                    <font-awesome-icon icon="comments"/>
                                    {{ post.source.commentsCount }}
                                </p>
                            </div>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>
    </Card>
</template>
<script>
    import Card from '@/components/Card'
    import axios from 'axios'
    import moment from "moment";
    import SimpleBar from 'simplebar';
    import 'simplebar/dist/simplebar.css';
    export default {
        data() {
            return {
                posts: []
            }
        },
        components: {
            Card
        },
        mounted() {
            axios.get('https://api.pnd.gs/v1/sources/hackerNews/popular')
                .then(response => {
                    response.data.forEach(item => {
                        item.timeago = moment(item.source.createdAt).fromNow();
                        this.posts.push(item);
                        this.$nextTick(function () {
                            new SimpleBar(document.getElementById('hn_posts'))
                        });
                    });
                });
        }
    }
</script>
