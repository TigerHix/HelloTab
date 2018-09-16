const renderer = new PIXI.WebGLRenderer(
    {
        "width": 800,
        "height": 600,
        "transparent": true,
        "autoResize": true
    }
);
PIXI.settings.RESOLUTION = window.devicePixelRatio;

var modelIndex = 2;

const stage = new PIXI.Container();
let models = {};
models[0] = {
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
models[1] = {
    "type": "Live2D Model Setting",
    "name": "chitose",
    "model": "live2d/assets/chitose/chitose.moc",
    "textures": [
        "live2d/assets/chitose/chitose.2048/texture_00.png"
    ],
    "physics": "live2d/assets/chitose/chitose.physics.json",
    "pose": "live2d/assets/chitose/chitose.pose.json",
    "expressions": [
        {"name": "f01", "file": "live2d/assets/chitose/expressions/f01.exp.json"},
        {"name": "f02", "file": "live2d/assets/chitose/expressions/f02.exp.json"},
        {"name": "f03", "file": "live2d/assets/chitose/expressions/f03.exp.json"},
        {"name": "f04", "file": "live2d/assets/chitose/expressions/f04.exp.json"},
        {"name": "f05", "file": "live2d/assets/chitose/expressions/f05.exp.json"},
        {"name": "f06", "file": "live2d/assets/chitose/expressions/f06.exp.json"},
        {"name": "f07", "file": "live2d/assets/chitose/expressions/f07.exp.json"}
    ],
    "layout": {
        "center_x": 0,
        "y": 0.7,
        "width": 2.5
    },
    "hit_areas": [
        {"name": "head", "id": "D_REF.HEAD"},
        {"name": "body", "id": "D_REF.BODY"}
    ],
    "motions": {
        "idle": [
            {"file": "live2d/assets/chitose/motions/chitose_idle.mtn", "fade_in": 2000, "fade_out": 2000},
        ],
        "handwave": [
            {"file": "live2d/assets/chitose/motions/chitose_handwave.mtn", "fade_in": 2000, "fade_out": 2000},
        ],
        "kime": [
            {"file": "live2d/assets/chitose/motions/chitose_kime01.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/chitose/motions/chitose_kime02.mtn", "fade_in": 2000, "fade_out": 2000},
        ],
    }
};
models[2] = {
    "type": "Live2D Model Setting",
    "name": "wanko",
    "model": "live2d/assets/wanko/wanko.moc",
    "textures": [
        "live2d/assets/wanko/wanko.1024/texture_00.png"
    ],
    "layout": {
        "center_x": 0,
        "y": 1.8,
        "width": 3.5
    },
    "hit_areas": [
        {"name": "head", "id": "D_REF.HEAD"},
        {"name": "body", "id": "D_REF.BODY"}
    ],
    "motions": {
        "idle": [
            {"file": "live2d/assets/wanko/motions/idle_01.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/idle_02.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/idle_03.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/idle_04.mtn", "fade_in": 2000, "fade_out": 2000},
        ],
        "shake": [
            {"file": "live2d/assets/wanko/motions/shake_01.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/shake_02.mtn", "fade_in": 2000, "fade_out": 2000}
        ],
        "touch": [
            {"file": "live2d/assets/wanko/motions/touch_01.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/touch_02.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/touch_03.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/touch_04.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/touch_05.mtn", "fade_in": 2000, "fade_out": 2000},
            {"file": "live2d/assets/wanko/motions/touch_06.mtn", "fade_in": 2000, "fade_out": 2000}
        ],
    }
};

var leftMouseDown = false;

function setLeftButtonState(e) {
    leftMouseDown = e.buttons === undefined
        ? e.which === 1
        : e.buttons === 1;
}

const live2dSprite = new PIXI.Live2DSprite(models[modelIndex], {
    debugLog: true,
    randomMotion: true,
    eyeBlink: false
    // audioPlayer: (...args) => console.log(...args)
});

function initModel() {
    stage.addChild(live2dSprite);
    live2dSprite.adjustScale(0, 0, 1);
    live2dSprite.adjustTranslate(0, 0);
    live2dSprite.startRandomMotion('idle');

    let leftMouseWasDown = true;
    let lastMovedTimestamp = -1;
    let lastPointerPos = null;

    live2dSprite.on('mousemove', (evt) => {
        lastMovedTimestamp = new Date().getTime();
        const point = evt.data.global;
        lastPointerPos = {x: point.x, y: point.y};
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

    let ran = -1;

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

    document.getElementById('app').appendChild(renderer.view);
    document.body.onmousedown = setLeftButtonState;
    document.body.onmousemove = setLeftButtonState;
    document.body.onmouseup = setLeftButtonState;

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}