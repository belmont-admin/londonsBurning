function playTune () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Double))
        music.playTone(349, music.beat(BeatFraction.Double))
    }
    if (master == true) {
        channel += 1
        radio.sendString("play")
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Double))
    }
    if (master == true) {
        channel += 1
        radio.sendString("play")
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Double))
        music.playTone(523, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Double))
    }
    if (master == true) {
        channel += 1
        radio.sendString("play")
    }
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Double))
        music.playTone(440, music.beat(BeatFraction.Double))
    }
}
radio.onReceivedString(function (receivedString) {
    playTune()
})
input.onButtonPressed(Button.AB, function () {
    if (channel == 0) {
        master = true
        playTune()
    }
})
input.onButtonPressed(Button.B, function () {
    channel += 1
    radio.setGroup(channel)
})
input.onButtonPressed(Button.A, function () {
    channel += -1
    radio.setGroup(channel)
})
let channel = 0
let master = false
master = false
channel = 0
radio.setGroup(channel)
