<template>
    <Card fromColor="#FF0000" toColor="rgba(0,0,0,0)">
        <div slot="title">YouTube subscriptions</div>
        <div id="yt_videos" style="height: 710px; overflow-y: scroll; overflow-x: hidden;">
            <div v-for="video in videos" class="video bg-dark text-white p-0 mx-2 mt-0 mb-2"
                 style="position: relative; overflow: hidden; z-index: 512">

                <div style="width: 100%; height: 180px !important;">

                    <img class="unselectable"
                         style="border-radius: 4px; width: 100%; height: 100%; position: absolute; top: 0; object-fit: cover;"
                         :src="video.cover"/>

                </div>

                <a :href="video.url" style="cursor: default;">
                    <div class="card-img-overlay p-0 video-cover" style="position: absolute;
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
                            {{ video.title }}
                        </h3>

                        <div>
                            <p class="mb-0 secondary-text" style="font-size: 10px;white-space: pre-wrap;">{{ video.timeago }}</p>
                            <font-awesome-icon :icon="play"/>
                            <p class="mb-0 secondary-text" style="font-size: 10px;white-space: pre-wrap;">{{ video.views }}</p>
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
                videos: [
                    {
                        "kind": "youtube#subscription",
                        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/BVrJCHP1Foxfu7XkhqkMa_Cm2YY\"",
                        "id": "MpajmvGNexIkHC8F7y2fiTTFH2HAr8_EV9NkQ5GfiiU",
                        "snippet": {
                            "publishedAt": "2012-10-03T19:11:46.000Z",
                            "title": "Google Search Stories",
                            "description": "This is the place to find the newest Search Stories as soon as they're released.",
                            "resourceId": {
                                "kind": "youtube#channel",
                                "channelId": "UCvceBgMIpKb4zK1ss-Sh90w"
                            },
                            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-Mj3q0yZ7NCY/AAAAAAAAAAI/AAAAAAAAAAA/TY3h8yYXRCA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-Mj3q0yZ7NCY/AAAAAAAAAAI/AAAAAAAAAAA/TY3h8yYXRCA/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-Mj3q0yZ7NCY/AAAAAAAAAAI/AAAAAAAAAAA/TY3h8yYXRCA/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            }
                        },
                        "contentDetails": {
                            "totalItemCount": 10,
                            "newItemCount": 0,
                            "activityType": "all"
                        }
                    },
                    {
                        "kind": "youtube#subscription",
                        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/madqJThuAlw6BNutif5ZJ39ZDz4\"",
                        "id": "MpajmvGNexIkHC8F7y2fie0-418cEl8nFH3GJa_-TDg",
                        "snippet": {
                            "publishedAt": "2008-09-18T17:45:36.000Z",
                            "title": "GoogleTechTalks",
                            "description": "Google Tech Talks is a grass-roots program at Google for sharing information of interest to the technical community.  At its best, it's part of an ongoing discussion about our world featuring top experts in diverse fields.  Presentations range from the broadest of perspective overviews to the most technical of deep dives, on topics well-established to wildly speculative.\n\nDisclaimer:  Google TechTalks are designed to disseminate a wide spectrum of views on topics including Current Affairs, Science, Medicine, Engineering, Business, Humanities, Law, Entertainment, and the Arts.  The views or opinions expressed by the guest speakers are solely their own and do not necessarily represent the views or opinions of Google, Inc.\n\nCredits:  The original title animation and theme were created by Nick Thomas.  The mid-2016 title animation was designed by Matt McDonald.  The mid-2016 theme music was composed and created by Mark Lentczner (https://soundcloud.com/mtnviewmark).",
                            "resourceId": {
                                "kind": "youtube#channel",
                                "channelId": "UCtXKDgv1AVoG88PLl8nGXmw"
                            },
                            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-SePYPtxP53E/AAAAAAAAAAI/AAAAAAAAAAA/H9oYLzbmIZk/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-SePYPtxP53E/AAAAAAAAAAI/AAAAAAAAAAA/H9oYLzbmIZk/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-SePYPtxP53E/AAAAAAAAAAI/AAAAAAAAAAA/H9oYLzbmIZk/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            }
                        },
                        "contentDetails": {
                            "totalItemCount": 2038,
                            "newItemCount": 0,
                            "activityType": "uploads"
                        }
                    },
                    {
                        "kind": "youtube#subscription",
                        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/08kFb57nm7fyLdhVCgIUgYi5bqo\"",
                        "id": "MpajmvGNexIkHC8F7y2fiexLLKZv-njKUCI2ScnQhKs",
                        "snippet": {
                            "publishedAt": "2015-05-18T18:18:15.000Z",
                            "title": "Google Developers Launchpad",
                            "description": "Official YouTube channel of the Google Developers Launchpad program. Hear, see, and learn how other entrepreneurs did it (or didn't) with interviews and demos from our global network. \n\nDISCLAIMER: The views or opinions expressed by the guest speakers are solely their own and do not necessarily represent the views or opinions of Google, Inc. The comments on this channel belong only to the person who posted them. We do, however, reserve the right to remove off-topic or inappropriate comments.",
                            "resourceId": {
                                "kind": "youtube#channel",
                                "channelId": "UCorTyjVGM-PV5CCKbosONow"
                            },
                            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-FB5RMyUe8gg/AAAAAAAAAAI/AAAAAAAAAAA/OB357CuEjVE/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-FB5RMyUe8gg/AAAAAAAAAAI/AAAAAAAAAAA/OB357CuEjVE/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-FB5RMyUe8gg/AAAAAAAAAAI/AAAAAAAAAAA/OB357CuEjVE/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            }
                        },
                        "contentDetails": {
                            "totalItemCount": 21,
                            "newItemCount": 0,
                            "activityType": "all"
                        }
                    },
                    {
                        "kind": "youtube#subscription",
                        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/2rfuKn5t88FEa1XNzBWUh-RLr4U\"",
                        "id": "MpajmvGNexIkHC8F7y2fiZkZghpXG4wLKeJAwW0Pwq8",
                        "snippet": {
                            "publishedAt": "2016-05-19T01:24:21.000Z",
                            "title": "Firebase",
                            "description": "The Youtube channel for all things Firebase! Learn how to build awesome apps with hands-on tutorials from the Firebase team. Firebase helps you build better mobile apps and grow your business.",
                            "resourceId": {
                                "kind": "youtube#channel",
                                "channelId": "UCP4bf6IHJJQehibu6ai__cg"
                            },
                            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-IlfNr4Wok4g/AAAAAAAAAAI/AAAAAAAAAAA/K5Ojjvr8o5s/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-IlfNr4Wok4g/AAAAAAAAAAI/AAAAAAAAAAA/K5Ojjvr8o5s/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-IlfNr4Wok4g/AAAAAAAAAAI/AAAAAAAAAAA/K5Ojjvr8o5s/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            }
                        },
                        "contentDetails": {
                            "totalItemCount": 341,
                            "newItemCount": 0,
                            "activityType": "all"
                        }
                    },
                    {
                        "kind": "youtube#subscription",
                        "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/dj59AeXC53mW7t9RwXBWOUVpa0E\"",
                        "id": "MpajmvGNexIkHC8F7y2fiVt5K3OV8J34D7GVgTb67jY",
                        "snippet": {
                            "publishedAt": "2015-01-19T11:59:01.000Z",
                            "title": "sfhtml5",
                            "description": "The first and largest HTML5 meetup in the world!",
                            "resourceId": {
                                "kind": "youtube#channel",
                                "channelId": "UC9DtDgy-Vt0D3FWjrvnLylQ"
                            },
                            "channelId": "UC_x5XG1OV2P6uZZ5FSM9Ttw",
                            "thumbnails": {
                                "default": {
                                    "url": "https://yt3.ggpht.com/-Mg5bn7uUGLA/AAAAAAAAAAI/AAAAAAAAAAA/hZuXxq3HR98/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "medium": {
                                    "url": "https://yt3.ggpht.com/-Mg5bn7uUGLA/AAAAAAAAAAI/AAAAAAAAAAA/hZuXxq3HR98/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                },
                                "high": {
                                    "url": "https://yt3.ggpht.com/-Mg5bn7uUGLA/AAAAAAAAAAI/AAAAAAAAAAA/hZuXxq3HR98/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
                                }
                            }
                        },
                        "contentDetails": {
                            "totalItemCount": 1,
                            "newItemCount": 0,
                            "activityType": "all"
                        }
                    }
                ]
            }
        },
        components: {
            Card
        },
        mounted() {


            axios.get('https://www.purdueexponent.org/search/?q=&nsa=eedition&t=article&l=10&s=start_time&sd=desc&f=json&c[]=campus')
                .then(response => {
                    response.data.rows.forEach(item => {
                        item.timeago = moment(item.snippet.publishedAt).fromNow();
                        item.cover = item.snippet.thumbnails.high.url;
                        this.videos.push(item);
                        this.$nextTick(function () {
                            new SimpleBar(document.getElementById('yt_videos'))
                        });
                    });
                });
        }
    }
</script>
<style>
    .video {
        border-radius: 4px;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
    }
    .video-cover {
        background: rgba(0, 0, 0, 0.5);
        -webkit-transition: all .25s ease-in-out;
        transition: all .25s ease-in-out;
    }

    .video-cover:hover {
        background: rgba(0, 0, 0, 0.3);
    }

    .video-cover:active {
        background: rgba(0, 0, 0, 0.4);
    }
</style>