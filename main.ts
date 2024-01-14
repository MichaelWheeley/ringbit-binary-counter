let numberOfLEDs:uint8 = 30

function ShowNumber(i:number){
    let led: number = 0
    for (led = 0; led < numberOfLEDs ; led++)
    {
        if(led > 0) {strip.rotate(1)}
        let color: NeoPixelColors = ((i & 0x01) > 0) ? NeoPixelColors.Red : NeoPixelColors.Black
        strip.setPixelColor(0, neopixel.colors(color))
        i /= 2
    }

    strip.show()
}

function ShowNumberUnused (i:number){
    strip.setPixelColor(0, neopixel.colors((i & 0x01) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(1, neopixel.colors((i & 0x02) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(2, neopixel.colors((i & 0x04) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(3, neopixel.colors((i & 0x08) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(4, neopixel.colors((i & 0x10) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(5, neopixel.colors((i & 0x20) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(6, neopixel.colors((i & 0x40) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.setPixelColor(7, neopixel.colors((i & 0x80) > 0 ? NeoPixelColors.Red : NeoPixelColors.Black))
    strip.show()
}

let strip: neopixel.Strip = neopixel.create(DigitalPin.P0, numberOfLEDs, NeoPixelMode.RGB)
let i:number = 0
basic.forever(function () {
    ShowNumber(i++)
    ////basic.pause(1)
})
