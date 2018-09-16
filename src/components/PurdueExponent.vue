<template>
    <Card fromColor="#C28E0E" toColor="rgba(0,0,0,0)">
        <div slot="title">Purdue Exponent</div>
        <div id="exponent_posts" style="height: 710px; overflow-y: scroll; overflow-x: hidden;">
            <div v-for="post in posts" class="post bg-dark text-white p-0 mx-2 mt-0 mb-2"
                 style="position: relative; overflow: hidden; z-index: 512">

                <div style="width: 100%; height: 180px !important;">

                    <img class="unselectable"
                         style="border-radius: 4px; width: 100%; height: 100%; position: absolute; top: 0; object-fit: cover;"
                         :src="post.cover"/>

                </div>

                <a :href="post.url" style="cursor: default;">
                    <div class="card-img-overlay p-0 post-cover" style="position: absolute;
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

                        <div>
                            <p class="mb-0 secondary-text" style="font-size: 10px;white-space: pre-wrap;">{{ post.timeago }}</p>
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
        data() {
            return {
                posts: []
            }
        },
        components: {
            Card
        },
        mounted() {
            axios.get('https://www.purdueexponent.org/search/?q=&nsa=eedition&t=article&l=10&s=start_time&sd=desc&f=json&c[]=campus')
                .then(response => {
                    // WE DON'T WANT WOMEN ARRESTED AT WALC
                    response.data.rows.slice(1, response.data.rows.length).forEach(item => {
                        item.timeago = moment(item.starttime.iso8601).fromNow();
                        if (item.preview.url == null) return;
                        item.cover = item.preview.url;
                        this.posts.push(item);
                        this.$nextTick(function () {
                            new SimpleBar(document.getElementById('exponent_posts'))
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