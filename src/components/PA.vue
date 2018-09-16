<template>
</template>

<script>
    export default {
        mounted() {

            iziToast.settings({
                id: 'show',
                class: 'message',
                progressBar: false,
                displayMode: 2,
                position: 'bottomRight',
                balloon: true,
                closeOnEscape: true,
                closeOnClick: true,
            });

            var skippedIntro = false;

            setTimeout(function () {
                if (skippedIntro) return;
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

                iziToast.show({
                    message: 'Good evening, Tiger!',
                    timeout: 4000,
                });
            }, 1000);

            setTimeout(function () {
                if (skippedIntro) return;
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
                iziToast.show({
                    message: 'Tomorrow will be <span style="color: lightskyblue; font-weight: bold">raining</span>. Don\'t forget your umbrella!',
                    timeout: 6000,
                });
            }, 4000);

            function onClick(evt) {
                skippedIntro = true;
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
                                    iziToast.show({
                                        message: 'How come... You still have 2 tasks unfinished!',
                                        timeout: 4000,
                                    });
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
                                    iziToast.show({
                                        message: 'Do you know? ' + trivia,
                                        timeout: 8000
                                    });
                                }
                            }]
                        ]
                    });
                }
            }

            live2dSprite.on('click', (evt) => onClick(evt));
            document.addEventListener("DOMContentLoaded", function (event) {
                initModel();
                renderer.view.onmousedown = function () {
                    onClick();
                };
            });

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