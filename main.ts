input.onButtonPressed(Button.A, function on_button_pressed_a() {
    キャッチャー.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    game.pause()
    basic.showNumber(game.score())
    game.resume()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    キャッチャー.change(LedSpriteProperty.X, 1)
})
let キャッチャー : game.LedSprite = null
キャッチャー = game.createSprite(2, 4)
let りんご = game.createSprite(randint(0, 4), 0)
basic.pause(100)
game.setScore(0)
basic.forever(function on_forever() {
    if (りんご.get(LedSpriteProperty.Y) == 4) {
        りんご.set(LedSpriteProperty.Y, 0)
        りんご.set(LedSpriteProperty.X, randint(0, 4))
    } else {
        りんご.change(LedSpriteProperty.Y, 1)
    }
    
    basic.pause(1000)
})
basic.forever(function on_forever2() {
    if (キャッチャー.isTouching(りんご)) {
        game.addScore(1)
        りんご.set(LedSpriteProperty.Y, 0)
        りんご.set(LedSpriteProperty.X, randint(0, 4))
    } else if (game.score() > 10) {
        basic.showString("CLEAR")
        りんご.delete()
        キャッチャー.delete()
    }
    
})
