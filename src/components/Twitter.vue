<template>
    <Card fromColor="#1DA1F2" toColor="rgba(0,0,0,0)">
        <div slot="title">Trending on Twitter</div>
        <div class="table-responsive">
            <table id="twitter_tags" class="table mb-0 table-hover table-sm table-dark bg-dark table-borderless"
                   style="white-space: nowrap; height: 212px; overflow-y: scroll; overflow-x: hidden; background-color: unset !important">
                <tbody style="display: table; white-space: normal; width: 100%;">
                <tr v-for="tag in tags">
                    <td style="padding-left: 1.25rem; padding-right: 1.25rem; line-height:1.0" scope=row>
                        <strong><a class="text-light" :href="'https://twitter.com/search?q=' + tag.tag" style="font-size: 12px;">#{{
                            tag.tag }}</a></strong>
                        <div class="row mt-1">
                            <div class="col-sm-6">
                                <p class="mb-0 align-text-bottom secondary-text" style="font-size: 10px;">
                                    {{ tag.num }} Tweets
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
                tags: []
            }
        },
        components: {
            Card
        },
        mounted() {
            axios.get('https://api.ritekit.com/v1/search/trending?latin=1')
                .then(response => {
                    console.log(response.data);
                    response.data.tags.forEach(item => {
                        if (item.tweets >= 10000) {
                            item.num = Math.floor(item.tweets / 1000) + "K";
                        } else {
                            item.num = item.tweets;
                        }
                        this.tags.push(item);
                        this.$nextTick(function () {
                            new SimpleBar(document.getElementById('twitter_tags'))
                        });
                    });
                });
        }
    }
</script>
