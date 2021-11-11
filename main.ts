input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    soundExpression.soaring.playUntilDone()
})
basic.forever(function () {
	
})
