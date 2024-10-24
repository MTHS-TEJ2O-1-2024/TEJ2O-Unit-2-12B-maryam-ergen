/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

let distanceToObject: number = 0
let lightAmount: number
let neopixelStrip: neopixel.Strip = null


//setup
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showString("cm")
    basic.showIcon(IconNames.Happy)
})

if (distanceToObject < 10) {
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()

}

if (distanceToObject >= 10) {
    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    neopixelStrip.show()

}
