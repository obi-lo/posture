input.onGesture(Gesture.LogoUp, function () {
    music.stopAllSounds()
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.ringTone(349)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.ringTone(349)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
basic.showLeds(`
    . . # . .
    . # # # .
    . . # . .
    . # . # .
    . # . # .
    `)
basic.forever(function () {
	
})
