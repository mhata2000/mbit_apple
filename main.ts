input.onButtonPressed(Button.A, function () {
    キャッチャー.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
    basic.showNumber(game.score())
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    キャッチャー.change(LedSpriteProperty.X, 1)
})
let キャッチャー: game.LedSprite = null
キャッチャー = game.createSprite(2, 4)
let りんご = game.createSprite(randint(0, 4), 0)
basic.pause(100)
game.setScore(0)
basic.forever(function () {
    if (りんご.get(LedSpriteProperty.Y) == 4) {
        りんご.set(LedSpriteProperty.Y, 0)
        りんご.set(LedSpriteProperty.X, randint(0, 4))
    } else {
        りんご.change(LedSpriteProperty.Y, 1)
    }
    basic.pause(500)
})
basic.forever(function () {
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
