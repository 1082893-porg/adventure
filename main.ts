enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const House = SpriteKind.create()
    export const loader = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
        mySprite.x += 1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
        mySprite.x += 1
        pause(100)
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
        mySprite.x += 1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . 4 d d e 4 4 4 e f . . . 
. . . . e d d e 2 2 2 2 f . . . 
. . . . f e e f 4 4 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
        mySprite.x += 1
        pause(100)
    }
    if (!(controller.right.isPressed())) {
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
    }
})
controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.down.isPressed()) {
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        mySprite.y += 1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . . f e 4 d d d d 4 e f e . . 
. . f e f 2 2 2 2 e d d 4 e . . 
. . e 4 f 2 2 2 2 e d d e . . . 
. . . . f 4 4 5 5 f e e . . . . 
. . . . f f f f f f f . . . . . 
. . . . f f f . . . . . . . . . 
`)
        mySprite.y += 1
        pause(100)
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        mySprite.y += 1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f . . 
. . e f e 4 d d d d 4 e f . . . 
. . e 4 d d e 2 2 2 2 f e f . . 
. . . e d d e 2 2 2 2 f 4 e . . 
. . . . e e f 5 5 4 4 f . . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . f f f . . . . 
`)
        mySprite.y += 1
        pause(100)
    }
    if (!(controller.down.isPressed())) {
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.up.isPressed()) {
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        mySprite.y += -1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f f 2 f e f . . 
. . f f f 2 f e e 2 2 f f f . . 
. . f e 2 f f e e 2 f e e f . . 
. f f e f f e e e f e e e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . . e f f f f f f f f 4 e . . 
. . . 4 f 2 2 2 2 2 e d d 4 . . 
. . . e f f f f f f e e 4 . . . 
. . . . f f f . . . . . . . . . 
`)
        mySprite.y += -1
        pause(100)
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
        mySprite.y += -1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . . f f f f 2 2 f f f f . . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e f 2 f f f 2 f 2 e f . . 
. . f f f 2 2 e e f 2 f f f . . 
. . f e e f 2 e e f f 2 e f . . 
. f f e e e f e e e f f e f f . 
. f f e e e e e e e e e e f f . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f e . . . 
. . 4 d d e 2 2 2 2 2 f 4 . . . 
. . . 4 e e f f f f f f e . . . 
. . . . . . . . . f f f . . . . 
`)
        mySprite.y += -1
        pause(100)
    }
    if (!(controller.up.isPressed())) {
        mySprite.setImage(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`)
    }
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
        mySprite.x += -1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
        mySprite.x += -1
        pause(100)
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
        mySprite.x += -1
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e d d 4 . . . . 
. . . f 2 2 2 2 e d d e . . . . 
. . f f 5 5 4 4 f e e f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
        mySprite.x += -1
        pause(100)
    }
    if (!(controller.left.isPressed())) {
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
    }
})
let mySprite2: Sprite = null
let mappart = 0
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`10001000030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030103030b0a03030303030303090909090109090101090909090909090c0c0c0c0c0c0c01010c0c0c0c0c0c0c030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
let mySprite1 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . e 2 e 2 2 e 2 e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 e e e 2 2 e 2 e 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 e 2 2 e 2 e 2 2 e e e 2 2 e 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e . . . . . . . . . . . 
. . . . . . . . e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e . . . . . . . . 
. . . . . 2 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 2 . . . . . 
. . . 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 . . . 
4 c c 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 c 6 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 c c 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 2 2 e e e e 2 2 e 2 2 e e e e 2 2 e e e 2 2 e e e 2 2 e e e e 2 2 e 2 2 e e e e 2 2 6 c 6 
4 6 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 6 4 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 c c 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e e e e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e e e e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 6 6 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c e e e 2 2 e 2 2 e e e c c 6 6 6 6 6 c c c c c c 6 6 6 6 6 c c e e e 2 2 e 2 2 e e e c c 4 
6 c 6 2 2 e 2 2 e e e c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c e e e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e 2 2 c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c 2 2 e 2 2 6 6 4 
4 6 6 2 2 c c 6 6 6 6 c c c 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 c c c 6 6 6 6 c c 2 2 6 6 4 
4 c c c 6 6 6 6 c c c 6 4 4 4 b c c 6 6 6 6 6 6 6 6 6 6 6 6 c c b 4 4 4 6 c c c 6 6 6 6 c c c 4 
c c c c c c c c 6 6 6 6 6 6 6 c b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b c 6 6 6 6 6 6 6 c c c c c c c c 
6 4 4 4 4 4 4 4 4 4 4 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 
6 6 c b 4 4 4 4 4 4 4 4 4 c b 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 b c 4 4 4 4 4 4 4 4 4 b c 6 6 
6 6 6 c c c c c c c c c c c d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 d c c c c c c c c c c c 6 6 6 
6 6 6 6 4 4 4 4 4 4 4 4 4 c 1 1 6 e e e e e e e e e e e e e e 6 1 1 c 4 4 4 4 4 4 4 4 4 6 6 6 6 
6 6 6 e 2 2 2 2 2 2 2 e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e 2 2 2 2 2 2 2 e 6 6 6 
6 6 6 e e e e e e e e e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e e e e e e e e e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e 4 e f f f f f f e 4 4 e e 6 6 c 4 e d d d d d d d e 6 6 6 
6 6 6 e d f f d f f d e 4 c 6 6 f 4 e f f f f f f f f f f 4 e e 6 6 c 4 e d f f d f f d e 6 6 6 
6 6 6 e d c c d c c d e 4 c 6 6 f 4 e f f f f f f f f f f e e e 6 6 c 4 e d c c d c c d e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e e e e e e e e e e e e e e 6 6 c 4 e d d d d d d d e 6 6 6 
c 6 6 e d f f d f f d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d f f d f f d e 6 6 c 
c 6 6 e d c c d c c d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d c c d c c d e 6 6 c 
c c 6 6 6 6 6 6 6 6 6 6 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f e e e e 6 6 c 4 6 6 6 6 6 6 6 6 6 6 c c 
. c 6 6 4 4 4 4 4 4 4 4 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f f f f e 6 6 c 4 4 4 4 4 4 4 4 4 6 6 c . 
. . c 6 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 f 4 4 f e 6 6 c 4 e e e 4 e e e 4 6 c . . 
. . . c 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e f f e e 6 6 c 4 e e e 4 e e e 4 c . . . 
. . . . 6 4 4 4 4 4 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 4 4 4 4 4 6 . . . . 
. . . . . 6 4 e e e 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 e e e 4 6 . . . . . 
. . . . . . 6 c c c 6 6 6 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 6 6 6 c c c 6 . . . . . . 
`, SpriteKind.House)
mySprite1.setPosition(72, 72)
mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f e e e e f f . . . . 
. . . f e e e f f e e e f . . . 
. . f f f f f 2 2 f f f f f . . 
. . f f e 2 e 2 2 e 2 e f f . . 
. . f e 2 f 2 f f 2 f 2 e f . . 
. . f f f 2 2 e e 2 2 f f f . . 
. f f e f 2 f e e f 2 f e f f . 
. f e e f f e e e e f e e e f . 
. . f e e e e e e e e e e f . . 
. . . f e e e e e e e e f . . . 
. . e 4 f f f f f f f f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
mySprite.setPosition(129, 125)
info.setLife(3)
info.setScore(0)
let peacefull = 1
forever(function () {
    if (mySprite.x == 73 && mySprite.y == 104) {
        if (controller.A.isPressed()) {
            music.baDing.play()
            color.startFade(color.originalPalette, color.Black)
            tiles.setTilemap(tiles.createTilemap(
            hex`10001000030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030103030b0a03030303030303090909090109090101090909090909090c0c0c0c0c0c0c01010c0c0c0c0c0c0c030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 
. . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
            pause(5000)
            color.startFade(color.Black, color.originalPalette)
            tiles.setTilemap(tiles.createTilemap(
            hex`10001000030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030103030b0a03030303030303090909090109090101090909090909090c0c0c0c0c0c0c01010c0c0c0c0c0c0c030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
        }
    }
})
forever(function () {
    if (mappart == 3) {
        if (mySprite.y == 8) {
            tiles.setTilemap(tiles.createTilemap(
            hex`100010000a0a0a0a0a0a0a03040a0a0a0a0a0a0a0a0a0a0a010a0a03040a0a0a0a0a0a0a0a0a0a0a0a0a0a03040a0a0a0a0a010a0a0a010a0a0a0a03040a0a010a0a0a0a0a0a0a0a0a010a03040a0a0a0a0a0a0a0a0a0a0a0a0a0a03040a0a0a0a0a0a0a0a0a0a010a0a0a03040a0a0a0a010a0a0a0a0a0a0a0a0a03040a0a0a0a0a0a0a0a0a0a0a0a0a0a03040a0a0a0a0a010a0a0a0a0a0a0a0a03040a0a0a0a0a0a0a0a0a0a0a010a0a03040a0a0a0a0a0a0a0a0a010a0a0a0a03040a0a010a0a0a0a0a0a0a0a0a0a0a03040a0a0a0a0a0a0a0a0a0a0a0a0a0a03040a0a0a010a0a0a0a0a010a0a010a03040a0a0a0a0a0a0a0a0a0a0a0a0a0a03040a0a0a0a0a0a0a`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tileGrass3,sprites.castle.tileGrass1],
            TileScale.Sixteen
        ))
            mySprite.setPosition(129, 244)
            mySprite1.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            mappart = 1
        }
    }
    if (mappart == 1) {
        if (mySprite.y == 248) {
            tiles.setTilemap(tiles.createTilemap(
            hex`10001000030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030103030b0a03030303030303090909090109090101090909090909090c0c0c0c0c0c0c01010c0c0c0c0c0c0c030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
            mySprite.setPosition(129, 12)
            mySprite1.setImage(img`
. . . . . . . . . . . . . . . . . . . . e 2 e 2 2 e 2 e . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 2 2 2 e e e 2 2 e 2 e 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 e 2 2 e 2 e 2 2 e e e 2 2 e 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e . . . . . . . . . . . 
. . . . . . . . e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e . . . . . . . . 
. . . . . 2 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 2 . . . . . 
. . . 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 . . . 
4 c c 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 c 6 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 e 2 2 e 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 6 6 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 6 6 4 
4 c c 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e e 2 e 2 2 e 2 e e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 c c 4 
6 c 6 2 2 e e e e 2 2 e 2 2 e e e e 2 2 e e e 2 2 e e e 2 2 e e e e 2 2 e 2 2 e e e e 2 2 6 c 6 
4 6 6 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 6 6 4 
4 6 6 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 6 6 4 
4 c c 2 2 e 2 2 e e e e 2 2 e 2 2 e 2 2 e 2 e 2 2 e 2 e 2 2 e 2 2 e 2 2 e e e e 2 2 e 2 2 c c 4 
6 c 6 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e e e 2 2 e e e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e e e e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e e e e 2 2 6 6 4 
4 6 6 2 2 e 2 2 e 2 2 e 2 2 e e e c c 6 6 6 6 6 6 6 6 6 6 c c e e e 2 2 e 2 2 e 2 2 e 2 2 6 6 4 
4 c c e e e 2 2 e 2 2 e e e c c 6 6 6 6 6 c c c c c c 6 6 6 6 6 c c e e e 2 2 e 2 2 e e e c c 4 
6 c 6 2 2 e 2 2 e e e c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c e e e 2 2 e 2 2 6 c 6 
4 6 6 2 2 e 2 2 c c 6 6 6 6 6 c c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 c c 6 6 6 6 6 c c 2 2 e 2 2 6 6 4 
4 6 6 2 2 c c 6 6 6 6 c c c 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 c c c 6 6 6 6 c c 2 2 6 6 4 
4 c c c 6 6 6 6 c c c 6 4 4 4 b c c 6 6 6 6 6 6 6 6 6 6 6 6 c c b 4 4 4 6 c c c 6 6 6 6 c c c 4 
c c c c c c c c 6 6 6 6 6 6 6 c b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b c 6 6 6 6 6 6 6 c c c c c c c c 
6 4 4 4 4 4 4 4 4 4 4 4 4 6 c 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 c 6 4 4 4 4 4 4 4 4 4 4 4 4 6 
6 6 c b 4 4 4 4 4 4 4 4 4 c b 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 4 b c 4 4 4 4 4 4 4 4 4 b c 6 6 
6 6 6 c c c c c c c c c c c d 1 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 d c c c c c c c c c c c 6 6 6 
6 6 6 6 4 4 4 4 4 4 4 4 4 c 1 1 6 e e e e e e e e e e e e e e 6 1 1 c 4 4 4 4 4 4 4 4 4 6 6 6 6 
6 6 6 e 2 2 2 2 2 2 2 e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e 2 2 2 2 2 2 2 e 6 6 6 
6 6 6 e e e e e e e e e 4 c 1 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 1 c 4 e e e e e e e e e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e 4 e f f f f f f e 4 4 e e 6 6 c 4 e d d d d d d d e 6 6 6 
6 6 6 e d f f d f f d e 4 c 6 6 f 4 e f f f f f f f f f f 4 e e 6 6 c 4 e d f f d f f d e 6 6 6 
6 6 6 e d c c d c c d e 4 c 6 6 f 4 e f f f f f f f f f f e e e 6 6 c 4 e d c c d c c d e 6 6 6 
6 6 6 e d d d d d d d e 4 c 6 6 f 4 e e e e e e e e e e e e e e 6 6 c 4 e d d d d d d d e 6 6 6 
c 6 6 e d f f d f f d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d f f d f f d e 6 6 c 
c 6 6 e d c c d c c d e 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 e d c c d c c d e 6 6 c 
c c 6 6 6 6 6 6 6 6 6 6 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f e e e e 6 6 c 4 6 6 6 6 6 6 6 6 6 6 c c 
. c 6 6 4 4 4 4 4 4 4 4 4 c 6 6 e 4 e 4 4 e 4 4 e 4 4 f f f f e 6 6 c 4 4 4 4 4 4 4 4 4 6 6 c . 
. . c 6 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 f 4 4 f e 6 6 c 4 e e e 4 e e e 4 6 c . . 
. . . c 4 e e e 4 e e e 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e f f e e 6 6 c 4 e e e 4 e e e 4 c . . . 
. . . . 6 4 4 4 4 4 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 4 4 4 4 4 6 . . . . 
. . . . . 6 4 e e e 4 4 4 c 6 6 f 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 4 4 4 e e e 4 6 . . . . . 
. . . . . . 6 c c c 6 6 6 c 6 6 e 4 e 4 4 e 4 4 e 4 4 e 4 4 e e 6 6 c 6 6 6 c c c 6 . . . . . . 
`)
            mappart = 3
        }
    }
    if (mappart == 0) {
        if (mySprite.x == 249) {
            tiles.setTilemap(tiles.createTilemap(
            hex`100010000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e090909090909090909090909090909090c0c0c0c0c0c0c01010c0c0c0c0c0c0c0e0e0e0e0e0e0f0b0a100e0e0e0e0e0e030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303030303030303030b0a03030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles1],
            TileScale.Sixteen
        ))
            mySprite.setPosition(11, 125)
            mySprite1.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            mappart = 2
        }
    }
    if (mappart == 2) {
        if (mySprite.y == 248) {
            tiles.setTilemap(tiles.createTilemap(
            hex`10001000070707070707070b0a0707070707070707070707171f1f07071f1f1d0707070707070707180707070707071c07070707070707071807070707070721070707070707070718070707070707210707070707070707200707070707071c0707070707070707200707070707071c0707070707070707191a1a1a1a1a1a1b070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707070707`,
            img`
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 . . . . . . 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.builtin.forestTiles10,sprites.builtin.forestTiles0,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass2,sprites.builtin.forestTiles13,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles15,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.builtin.forestTiles8,sprites.builtin.forestTiles17,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1],
            TileScale.Sixteen
        ))
            mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . c . . . . . . . . . . . . . 
. . . . . . . . . . c . . . . . . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . . . . 
. . . . . . . . c c 1 c c . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
. . . . . . . . . c 1 c . . . . . . . . . . . . 
`, SpriteKind.loader)
            mySprite2.setPosition(129, 62)
            mySprite.setPosition(129, 4)
            mySprite1.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
            mappart = 0
        }
    }
})
forever(function () {
    scene.cameraFollowSprite(mySprite)
})
