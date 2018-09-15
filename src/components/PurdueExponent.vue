<template>
    <Card>
        <p class="p-3 mb-0" style="font-weight: bold; font-size: 18px; z-index: 100; position: relative;">Reddit</p>
        <div id="hacker_news_posts" style="height: 400px; overflow-y: scroll; overflow-x: hidden;">

            <div v-for="post in posts" class="post bg-dark text-white p-0 mx-2 mt-0 mb-2"
                 style="position: relative; overflow: hidden;">

                <div style="width: 100%; height: 85px !important;">

                    <img class="unselectable"
                         style="border-radius: 4px; width: 100%; height: 100%; position: absolute; top: 0; object-fit: cover;"
                         :src="post.cover"/>

                </div>

                <a :href="'https://reddit.com' + post.permalink" style="cursor: default;">
                    <div class="card-img-overlay p-0 post" style="position: absolute;
                        width: 100%;
                        border-radius: 4px;">
                    </div>
                </a>

                <div class="card-img-overlay p-0 unselectable" style="pointer-events: none;">

                    <div style="position: absolute;
                        bottom: 0;
                        width: 100%;
                        background: linear-gradient(to top, rgba(0,0,0,0.25) 0%,rgba(0,0,0,0) 100%);
                        pointer-events: none;
                        border-radius: 4px;
                        padding: 1em">

                        <h3 class="trun-text mb-2" style="font-size: 14px">
                            {{ post.title }}
                        </h3>

                        <div class="row">
                            <div class="col-sm-6">
                                <p class="mb-0" style="font-size: 10px;white-space: pre-wrap;">{{ post.timeago }}</p>
                            </div>
                            <div class="col-sm-6">
                                <p class="mb-0 float-right align-text-bottom" style="font-size: 10px;">
                                    <font-awesome-icon icon="arrow-up"/>
                                    {{ post.score }}
                                    &nbsp;&nbsp;
                                    <font-awesome-icon icon="comments"/>
                                    {{ post.num_comments }}
                                </p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

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
        name: 'home',
        data() {
            return {
                threads: []
            }
        },
        components: {
            Card
        },
        mounted() {
            axios.get('https://www.reddit.com/r/funny/hot.json')
                .then(response => {
                    response.data.data.children.forEach(item => {
                        if (item.data.pinned || item.data.stickied) return;
                        item.data.timeago = moment(item.data.created_utc * 1000).fromNow();
                        if (item.data.preview && item.data.preview.images && item.data.preview.images[0] && item.data.preview.images[0].source) {
                            if (!item.data.preview.images[0].source.url.includes('.gif'))
                                item.data.cover = item.data.preview.images[0].source.url;
                        }
                        if (!item.data.cover) {
                            item.data.cover = "https://dummyimage.com/600x400/ff4400/000000&text=+";
                        }
                        this.threads.push(item.data);
                        this.$nextTick(function () {
                            new SimpleBar(document.getElementById('hacker_news_posts'))
                        });
                    });
                });
        }
    }
</script>
<style>
    .post {
        border-radius: 4px;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
    }

    .post-cover {
        background: rgba(0, 0, 0, 0.5);
        -webkit-transition: all .25s ease-in-out;
        transition: all .25s ease-in-out;
    }

    .post-cover:hover {
        background: rgba(0, 0, 0, 0.3);
    }

    .post-cover:active {
        background: rgba(0, 0, 0, 0.4);
    }
</style>