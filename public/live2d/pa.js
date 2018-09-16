const renderer = new PIXI.WebGLRenderer(
    {
        "width": 800,
        "height": 600,
        "transparent": true,
        "autoResize": true
    }
);
PIXI.settings.RESOLUTION = window.devicePixelRatio;

let weeb = true;

const stage = new PIXI.Container();
let model = {};

if (weeb) {
    model = {
        "type": "Live2D Model Setting",
        "name": "shizuku",
        "model": "live2d/assets/shizuku/shizuku.moc",
        "textures": [
            "live2d/assets/shizuku/shizuku.1024/texture_00.png",
            "live2d/assets/shizuku/shizuku.1024/texture_01.png",
            "live2d/assets/shizuku/shizuku.1024/texture_02.png",
            "live2d/assets/shizuku/shizuku.1024/texture_03.png",
            "live2d/assets/shizuku/shizuku.1024/texture_04.png"
        ],
        "physics": "live2d/assets/shizuku/shizuku.physics.json",
        "pose": "live2d/assets/shizuku/shizuku.pose.json",
        "expressions": [
            {"name": "f01", "file": "live2d/assets/shizuku/expressions/f01.exp.json"},
            {"name": "f02", "file": "live2d/assets/shizuku/expressions/f02.exp.json"},
            {"name": "f03", "file": "live2d/assets/shizuku/expressions/f03.exp.json"},
            {"name": "f04", "file": "live2d/assets/shizuku/expressions/f04.exp.json"}
        ],
        "layout": {
            "center_x": 0,
            "y": 0.75,
            "width": 1.7
        },
        "hit_areas": [
            {"name": "head", "id": "D_REF.HEAD"},
            {"name": "body", "id": "D_REF.BODY"}
        ],
        "motions": {
            "idle": [
                {"file": "live2d/assets/shizuku/motions/idle_00.mtn", "fade_in": 2000, "fade_out": 2000},
                {"file": "live2d/assets/shizuku/motions/idle_01.mtn", "fade_in": 2000, "fade_out": 2000},
                {"file": "live2d/assets/shizuku/motions/idle_02.mtn", "fade_in": 2000, "fade_out": 2000}
            ],
            "tap_body": [
                {
                    "file": "live2d/assets/shizuku/motions/tapBody01.mtn",
                    "sound": "live2d/assets/shizuku/sounds/tapBody01.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/tapBody02.mtn",
                    "sound": "live2d/assets/shizuku/sounds/tapBody02.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/tapBody03.mtn",
                    "sound": "live2d/assets/shizuku/sounds/tapBody03.mp3"
                }
            ],
            "pinch_in": [
                {
                    "file": "live2d/assets/shizuku/motions/pinchIn01.mtn",
                    "sound": "live2d/assets/shizuku/sounds/pinchIn01.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/pinchIn02.mtn",
                    "sound": "live2d/assets/shizuku/sounds/pinchIn02.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/pinchIn03.mtn",
                    "sound": "live2d/assets/shizuku/sounds/pinchIn03.mp3"
                }
            ],
            "pinch_out": [
                {
                    "file": "live2d/assets/shizuku/motions/pinchOut01.mtn",
                    "sound": "live2d/assets/shizuku/sounds/pinchOut01.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/pinchOut02.mtn",
                    "sound": "live2d/assets/shizuku/sounds/pinchOut02.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/pinchOut03.mtn",
                    "sound": "live2d/assets/shizuku/sounds/pinchOut03.mp3"
                }
            ],
            "shake": [
                {
                    "file": "live2d/assets/shizuku/motions/shake01.mtn",
                    "sound": "live2d/assets/shizuku/sounds/shake01.mp3",
                    "fade_in": 500
                },
                {
                    "file": "live2d/assets/shizuku/motions/shake02.mtn",
                    "sound": "live2d/assets/shizuku/sounds/shake02.mp3",
                    "fade_in": 500
                },
                {
                    "file": "live2d/assets/shizuku/motions/shake03.mtn",
                    "sound": "live2d/assets/shizuku/sounds/shake03.mp3",
                    "fade_in": 500
                }
            ],
            "flick_head": [
                {
                    "file": "live2d/assets/shizuku/motions/flickHead01.mtn",
                    "sound": "live2d/assets/shizuku/sounds/flickHead01.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/flickHead02.mtn",
                    "sound": "live2d/assets/shizuku/sounds/flickHead02.mp3"
                },
                {
                    "file": "live2d/assets/shizuku/motions/flickHead03.mtn",
                    "sound": "live2d/assets/shizuku/sounds/flickHead03.mp3"
                }
            ]
        }
    };
} else {
    const model = {
        "type": "Live2D Model Setting",
        "name": "hijiki",
        "model": "live2d/assets/hijiki/hijiki.moc",
        "textures": [
            "live2d/assets/hijiki/hijiki.2048/texture_00.png"
        ],
        "pose": "live2d/assets/hijiki/hijiki.pose.json",
        "motions": {
            "idle": [
                {"file": "live2d/assets/hijiki/mtn/00_idle.mtn"},
            ],
            "01": [
                {"file": "live2d/assets/hijiki/mtn/01.mtn"},
            ],
            "02": [
                {"file": "live2d/assets/hijiki/mtn/02.mtn"},
            ],
            "03": [
                {"file": "live2d/assets/hijiki/mtn/03.mtn"},
            ],
            "04": [
                {"file": "live2d/assets/hijiki/mtn/04.mtn"},
            ],
            "05": [
                {"file": "live2d/assets/hijiki/mtn/05.mtn"},
            ],
            "06": [
                {"file": "live2d/assets/hijiki/mtn/06.mtn"},
            ],
            "07": [
                {"file": "live2d/assets/hijiki/mtn/07.mtn"},
            ],
            "08": [
                {"file": "live2d/assets/hijiki/mtn/08.mtn"},
            ],

        }
    };
}

var leftMouseDown = false;

function setLeftButtonState(e) {
    leftMouseDown = e.buttons === undefined
        ? e.which === 1
        : e.buttons === 1;
}

const live2dSprite = new PIXI.Live2DSprite(model, {
    debugLog: true,
    randomMotion: true,
    eyeBlink: false
    // audioPlayer: (...args) => console.log(...args)
});

stage.addChild(live2dSprite);
live2dSprite.adjustScale(0, 0, 1);
live2dSprite.adjustTranslate(0, 0);
live2dSprite.startRandomMotion('idle');

var leftMouseWasDown = true;
var lastMovedTimestamp = -1;
var lastPointerPos = null;

live2dSprite.on('mousemove', (evt) => {
    lastMovedTimestamp = new Date().getTime();
    const point = evt.data.global;
    lastPointerPos = { x: point.x, y: point.y };
    /*
    if (leftMouseDown) {
        const point = evt.data.global;
        live2dSprite.setViewPoint(point.x, point.y);
        leftMouseWasDown = true;
    } else {
        if (leftMouseWasDown) {
            leftMouseWasDown = false;
            live2dSprite.dragMgr.faceTargetX = 0;
            live2dSprite.dragMgr.faceTargetY = 0;
        }
    }*/
});

var ran = -1;

setInterval(function () {
    if (lastPointerPos !== null && new Date().getTime() - lastMovedTimestamp > 3000) {
        lastMovedTimestamp = new Date().getTime() + 5000;
        if (getRandomInt(1, 3) == 1) {
            live2dSprite.setViewPoint(lastPointerPos.x, lastPointerPos.y);
            var i = getRandomInt(0, 10000);
            ran = i;
            setTimeout(function () {
                if (ran == i) {
                    live2dSprite.dragMgr.faceTargetX = 0;
                    live2dSprite.dragMgr.faceTargetY = 0;
                }
            }, 3000);
        }
    }
}, 100);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('app').appendChild(renderer.view);
    document.body.onmousedown = setLeftButtonState;
    document.body.onmousemove = setLeftButtonState;
    document.body.onmouseup = setLeftButtonState;
    animate();
});

document.onmousemove = function (mouseEvent) {
    console.log(lastPointerPos);
};