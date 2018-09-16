<template>
    <div>
        <b-modal lazy size="lg" v-model="showScheduleModal" id="mail_detail"
                 title="Schedule a reminder?" style="position: relative; z-index: 5121;" @ok="scheduleReminder">
            <form>
                <div class="form-group">
                    <label for="reminder-text">Reminder</label>
                    <input class="form-control" v-model="reminderText" id="reminder-text" aria-describedby="emailHelp" placeholder="">
                </div>
                <div class="form-group">
                    <label for="select-time">Remind me in</label>
                    <select class="form-control" v-model="reminderTime" id="select-time">
                        <option>15 minutes</option>
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>3 hours</option>
                        <option>4 hours</option>
                    </select>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import {live2dSprite, initModel, modelIndex, renderer, getRandomInt} from '@/utils/pa'
    import moment from 'moment';
    import {diningCourts, diningMenu} from '@/utils/dining';
    export default {
    data () {
        return {
        skippedIntro: false,
            showScheduleModal: false,
            reminderText: "",
            reminderTime: "",
        }
    },
    created() {
    if (!live2dSprite.weInited) {
        live2dSprite.weInited = true
        initModel();
    }
    },
        mounted() {
        this.$el.appendChild(renderer.view);
        renderer.view.onmousedown = () => {
        this.paClicked()
        }
        if (live2dSprite.eventAdded) return
        live2dSprite.eventAdded = true
            let settings = {
                id: 'show',
                class: 'message',
                progressBar: false,
                displayMode: 2,
                position: 'bottomRight',
                balloon: true,
                closeOnEscape: true,
                closeOnClick: true,
            };

            setTimeout( () => {
                if (this.skippedIntro) return;
                switch (modelIndex) {
                    case 0:
                        live2dSprite.startRandomMotionOnce('tap_body');
                        break;
                    case 1:
                        live2dSprite.startRandomMotionOnce('handwave');
                        break;
                    case 2:
                        live2dSprite.startRandomMotionOnce('touch');
                        break;
                }

                this.$toast.show('Good afternoon, <span style="font-weight: bold;">Tiger</span>!');
            }, 1000);

            setTimeout(() => {
                if (this.skippedIntro) return;
                switch (modelIndex) {
                    case 0:
                        live2dSprite.startRandomMotionOnce('flick_head');
                        break;
                    case 1:
                        live2dSprite.startRandomMotionOnce('kime');
                        break;
                    case 2:
                        live2dSprite.startRandomMotionOnce('shake');
                        break;
                }
                this.$toast.show('Tomorrow will be <span style="color: lightskyblue; font-weight: bold">raining</span>. Don\'t forget your umbrella!');
            }, 4000);
        },
        methods: {
        scheduleReminder() {
            this.reminderText = (" " + this.reminderText + " ").replace(/ my /ig, " your ").replace(/ me /ig, " you ").replace(/ I /ig, " you ");
            this.$toast.show("Okay! I will remind you to <span style='font-weight:bold;'>" + this.reminderText.trim() + "</span> in <span style='font-weight:bold;'>" + this.reminderTime + "</span>.");
        },
        paClicked(evt) {
                this.skippedIntro = true;
                let point = null;
                if (evt != null) point = evt.data.global;
                if ((point == null) || (modelIndex == 0 && live2dSprite.hitTest(null, point.x, point.y))) {
                    switch (modelIndex) {
                        case 0:
                            live2dSprite.startRandomMotionOnce('tap_body');
                            break;
                        case 1:
                            live2dSprite.startRandomMotionOnce('kime');
                            break;
                        case 2:
                            live2dSprite.startRandomMotionOnce('touch');
                            break;
                    }
                    this.$toast.show('How can I help?','', {
                        buttons: [
                            ['<button>Food</button>', (instance, toast)=> {
                                diningCourts().then(courts => {
                                    let now = moment()
                                    courts = courts.filter(court => {
                                        return court.NextMeal.StartTime.diff(now, 'hours') < 5;
                                    })
                                    if (courts.length == 0) {
                                        this.$toast.show("There's no dining courts opening right now.");
                                        return
                                    }
                                    let courtToEat = courts[0]
                                    let str = `Eat at ${courtToEat.Name}. `;
                                    if (courtToEat.NextMeal.StartTime.isAfter(now)) {
                                        str += `They are going to serve ${courtToEat.NextMeal.Type} starting from ${courtToEat.NextMeal.StartTime.calendar()}.`;
                                    } else {
                                        str += `They are serving ${courtToEat.NextMeal.Type} until ${courtToEat.NextMeal.EndTime.calendar()}. `;
                                        str += (courtToEat.NextMeal.StartTime.diff(now, 'hours') <= 1) ? "Hurry!" : "";
                                    }
                                    this.$toast.show(str)
                                })
                            }, true],
                            ['<button>Schedule</button>', (instance, toast)=> {

                                this.showScheduleModal = true;

                            }, true],
                            ['<button>Weather</button>', (instance, toast)=> {

                                this.$toast.show('(This feature is still in development!)');

                            }],
                            ['<button>Talk</button>', (instance, toast)=> {

                                const todoCount = 2;
                                if (todoCount > 0 && getRandomInt(0, 1)) {
                                    switch (modelIndex) {
                                        case 0:
                                            live2dSprite.startRandomMotionOnce('flick_head');
                                            break;
                                        case 1:
                                            live2dSprite.startRandomMotionOnce('kime');
                                            break;
                                        case 2:
                                            live2dSprite.startRandomMotionOnce('touch');
                                            break;
                                    }
                                    this.$toast.show('How come... You still have 2 tasks unfinished!');
                                } else {
                                    const trivias = [
                                        "There is a Cat Café in Tokyo where customers pay ¥800 yen (~US$8) an hour to hang out with cats.",
                                        "There are 12 million pets in Japan, more than the number of children under 12 years old.",
                                        "There are over 5 million vending machines in Japan, which is about one machine for every twenty-three people.",
                                        "Contrarily to most Western countries, black cats are considered to bring good luck in Japan!",
                                        "People in Japan sleep less than any other country, usually under 6 hours per night.",
                                        "Officially Japan and Russia are still at war as they haven't signed a peace treaty to end World War II due to the Kuril Islands dispute."
                                    ];
                                    const trivia = trivias[getRandomInt(0, trivias.length - 1)];
                                    this.$toast.show('Do you know? ' + trivia);
                                }
                            }]
                        ]
                    });
                }
            }
        }
    }
</script>
<style>
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
        right: -110px;
        z-index: 5120;
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