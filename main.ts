let ok = 0
let notok = 0
input.onButtonPressed(Button.A, function () {
    ok = 0
    ok = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(ok, notok)
            basic.pause(200)
            ok += 1
        }
        ok = 0
        notok += 1
    }
})
input.onButtonPressed(Button.B, function () {
    ok = 0
    led.plot(0, 0)
    basic.pause(500)
    led.plot(1, 0)
    basic.pause(500)
    led.plot(2, 0)
    basic.pause(500)
    led.plot(3, 0)
    basic.pause(500)
    led.plot(4, 0)
    basic.pause(500)
    led.plot(5, 0)
    basic.pause(500)
    led.plot(4, 1)
    basic.pause(500)
    led.plot(3, 1)
    basic.pause(500)
    led.plot(2, 1)
    basic.pause(500)
    led.plot(1, 1)
    basic.pause(500)
    led.plot(0, 1)
    basic.pause(500)
    led.plot(0, 2)
    basic.pause(500)
    led.plot(1, 2)
    basic.pause(500)
    led.plot(2, 2)
    basic.pause(500)
    led.plot(3, 2)
    basic.pause(500)
    led.plot(4, 2)
    basic.pause(500)
    led.plot(4, 3)
    basic.pause(500)
    led.plot(3, 3)
    basic.pause(500)
    led.plot(2, 3)
    basic.pause(500)
    led.plot(1, 3)
    basic.pause(500)
    led.plot(0, 3)
    basic.pause(500)
    led.plot(0, 4)
    basic.pause(500)
    led.plot(1, 4)
    basic.pause(500)
    led.plot(2, 4)
    basic.pause(500)
    led.plot(3, 4)
    basic.pause(500)
    led.plot(4, 4)
    basic.pause(500)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(ok, 0)
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(ok, 0)
    }
})
