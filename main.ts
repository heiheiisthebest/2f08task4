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
    notok = 0
    for (let index = 0; index < 5; index++) {
        led.plot(ok, notok)
        basic.pause(200)
        ok += 1
    }
    ok = 4
    notok += 1
    for (let index = 0; index < 5; index++) {
        led.plot(ok, notok)
        basic.pause(200)
        ok += -1
    }
    ok = 0
    notok += 2
    for (let index = 0; index < 5; index++) {
        led.plot(ok, notok)
        basic.pause(200)
        ok += 1
    }
    ok = 4
    notok += 3
    for (let index = 0; index < 5; index++) {
        led.plot(ok, notok)
        basic.pause(200)
        ok += -1
    }
    ok = 0
    notok += 4
    for (let index = 0; index < 5; index++) {
        led.plot(ok, notok)
        basic.pause(200)
        ok += 1
    }
    for (let index = 0; index < 5; index++) {
        basic.pause(200)
        ok += -1
    }
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
