let Resultado = 0
radio.onReceivedNumber(function (receivedNumber) {
    Resultado = randint(1, 6)
    radio.sendNumber(Resultado)
    if (receivedNumber > Resultado) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Wasaaaa")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Resultado = randint(1, 6)
    radio.sendNumber(Resultado)
})
