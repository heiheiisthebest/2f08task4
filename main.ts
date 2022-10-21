let ok = 0
input.onButtonPressed(Button.A, function () {
    ok = 0
    led.plot(0, 0)
    basic.pause(500)
    basic.clearScreen()
    led.plot(1, 0)
    basic.pause(500)
    basic.clearScreen()
    led.plot(2, 0)
    basic.pause(500)
    basic.clearScreen()
    led.plot(3, 0)
    basic.pause(500)
    basic.clearScreen()
    led.plot(4, 0)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        for (let index = 0; index < 1e+27; index++) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . # .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . # . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    while (false) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    ok = 0
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        led.plot(ok, 0)
    }
})
basic.forever(function () {
	
})
