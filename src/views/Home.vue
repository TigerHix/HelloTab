<template>
    <div style="overflow-y: hidden; overflow-x: hidden; background: #212529">
        <!--<b-carousel id="background-carousel"
                    background="#ababab"
                    :interval="10000"
                    img-width="100%"
                    img-height="100%"
        >
            &lt;!&ndash; Text slides with image &ndash;&gt;
            <b-carousel-slide v-for="image in wallpapers"
                              :key="image.hsh"
                              :caption="image.title"
                              :img-src="'//www.bing.com' + image.url"
            ></b-carousel-slide>
        </b-carousel>-->
        <b-container fluid style="height: 100%">
            <b-row>
                <b-col lg="6" md="12" style="height: 100vh; overflow-y: scroll; overflow-x: hidden;" data-elastic>
                    <b-card-group columns>
                        <PurdueExponent/>
                        <HackerNews/>
                        <Reddit/>
                        <ToDoList/>
                    </b-card-group>
                </b-col>
                <b-col lg="6" md="12">
                    <div class="text-white">Hello</div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import axios from 'axios';
    import Reddit from '@/components/Reddit';
    import PurdueExponent from '@/components/PurdueExponent';
    import HackerNews from '@/components/HackerNews';
    import ToDoList from '@/components/ToDoList';
    export default {
        name: 'home',
        components: {
            Reddit,
            PurdueExponent,
            HackerNews,
            ToDoList
        },
        data() {
            return {
                wallpapers: []
            }
        },
        mounted () {
            axios.get('/wallpaper.json')
                .then(response => {
                        this.wallpapers = response.data.images
                });

            iziToast.settings({
                id: 'show',
                class: 'message',
                progressBar: false,
                displayMode: 2,
                position: 'bottomRight',
                balloon: true,
                closeOnEscape: true,
                closeOnClick: true,
            })

            var skippedIntro = false;

            setTimeout(function () {
                if (skippedIntro) return;
                live2dSprite.startRandomMotionOnce(weeb ? 'tap_body' : "01");
                iziToast.show({
                    message: 'Good evening, Tiger!',
                    timeout: 4000,
                });
            }, 1000);

            setTimeout(function () {
                if (skippedIntro) return;
                live2dSprite.startRandomMotionOnce(weeb ? 'flick_head' : "02");
                iziToast.show({
                    message: 'Tomorrow will be raining. Don\'t forget your umbrella!',
                    timeout: 6000,
                });
            }, 4000);

            live2dSprite.on('click', (evt) => {
                skippedIntro = true;
                const point = evt.data.global;
                if (live2dSprite.hitTest('body', point.x, point.y)) {
                    var action = ['tap_body', 'tap_body', 'tap_body', 'pinch_in', 'pinch_out', 'shake'][getRandomInt(0, 6)];
                    live2dSprite.startRandomMotionOnce(action);
                    if (action == 'tap_body') {
                        iziToast.show({
                            message: 'How can I help?',
                            timeout: 4000,
                            buttons: [
                                ['<button>Schedule</button>', function (instance, toast) {

                                    iziToast.show({
                                        message: '(This feature is still in development!)',
                                        timeout: 3000
                                    });

                                }, true],
                                ['<button>Weather</button>', function (instance, toast) {

                                    iziToast.show({
                                        message: '(This feature is still in development!)',
                                        timeout: 3000
                                    });

                                }],
                                ['<button>Talk</button>', function (instance, toast) {
                                    const trivias = [
                                        "There is a Cat Café in Tokyo where customers pay ¥800 yen (~US$8) an hour to hang out with cats.",
                                        "There are 12 million pets in Japan, more than the number of children under 12 years old.",
                                        "There are over 5 million vending machines in Japan, which is about one machine for every twenty-three people.",
                                        "Contrarily to most Western countries, black cats are considered to bring good luck in Japan!",
                                        "People in Japan sleep less than any other country, usually under 6 hours per night.",
                                        "Officially Japan and Russia are still at war as they haven't signed a peace treaty to end World War II due to the Kuril Islands dispute."
                                    ];
                                    const trivia = trivias[getRandomInt(0, trivias.length)];
                                    iziToast.show({
                                        message: 'Do you know? ' + trivia,
                                        timeout: 123123123
                                    });

                                }]
                            ]
                        });
                    } else {
                        iziToast.show({
                            message: 'How come... You still have 2 tasks unfinished!',
                            timeout: 4000,
                        });
                    }
                } else if (live2dSprite.hitTest('head', point.x, point.y)) {
                    live2dSprite.startRandomMotionOnce('flick_head');
                } else {

                }
            });

        }
    }
</script>

<style lang="scss">

    body {
        overflow: hidden;
    }

    #background-carousel {
        z-index: -100;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;

    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        filter: brightness(0.2);
    }

    }

    .card {
        margin-top: 1rem !important;
        margin-bottom: 0 !important;
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .5);
    }

    .carousel-inner, .carousel-item {
        height: 100%;
    }

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1 !important;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 2 !important;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 2 !important;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 2 !important;
        }
    }

    ::-webkit-scrollbar {
        width: 0;  /* remove scrollbar space */
        background: transparent;  /* optional: just make scrollbar invisible */
    }

    .message {
        margin-bottom: 30rem;
        margin-right: 16rem;
    }

    .iziToast-body {
        max-width: 300px;
    }

    .iziToast.iziToast:after, .iziToast.iziToast-balloon:after {
        background: white;
        box-shadow: 0 0.15rem 0.45rem rgba(0, 0, 0, .3);
    }

    .iziToast-wrapper .iziToast.iziToast-balloon:before {
        border-top-color: white;
    }

    .unselectable {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    canvas {
        position: absolute;
        bottom: 0;
        right: -160px;
        image-rendering: optimizeSpeed;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: optimize-contrast;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
        -ms-interpolation-mode: nearest-neighbor;
    }

</style>
