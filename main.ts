controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti, randint(100, 600))
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
game.splash("\"It's almost winter break\"")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . . 5 5 . . . . . . 5 5 . . 5 
    . . . 5 5 . . . . . . 5 5 . . 5 
    5 5 . . . . . . . . . . . . 5 5 
    5 5 . . . . . . . . . . . 5 5 5 
    . 5 5 . . . . . . . . . 5 5 5 . 
    . 5 5 5 5 . . . . . . 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    `, SpriteKind.Player)
