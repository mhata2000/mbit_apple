def on_button_pressed_a():
    キャッチャー.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    game.pause()
    basic.show_number(game.score())
    game.resume()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    キャッチャー.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

キャッチャー: game.LedSprite = None
キャッチャー = game.create_sprite(2, 4)
りんご = game.create_sprite(randint(0, 4), 0)
basic.pause(100)
game.set_score(0)

def on_forever():
    if りんご.get(LedSpriteProperty.Y) == 4:
        りんご.set(LedSpriteProperty.Y, 0)
        りんご.set(LedSpriteProperty.X, randint(0, 4))
    else:
        りんご.change(LedSpriteProperty.Y, 1)
    basic.pause(1000)
basic.forever(on_forever)

def on_forever2():
    if キャッチャー.is_touching(りんご):
        game.add_score(1)
        りんご.set(LedSpriteProperty.Y, 0)
        りんご.set(LedSpriteProperty.X, randint(0, 4))
    elif game.score() > 10:
        basic.show_string("CLEAR")
        りんご.delete()
        キャッチャー.delete()
basic.forever(on_forever2)
