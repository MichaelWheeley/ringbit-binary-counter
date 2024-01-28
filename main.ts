enum Mode {
    CountUp = 0,
    CountDown,
    AltUp,
    AltDown
}

let numberOfLEDs:uint8 = 30

function InitializeCounter(mode: Mode) {
    if (mode == Mode.CountUp) {
        return 0
    }
    else if (mode == Mode.CountDown) {
        return 0xffffffff
    }
    else {
        return 0x0
    }
}

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

let mode = Mode.AltDown
let strip: neopixel.Strip = neopixel.create(DigitalPin.P0, numberOfLEDs, NeoPixelMode.RGB)
let i: number = InitializeCounter(mode)

basic.forever(function () {
    if(mode == Mode.CountUp)
    {
        ShowNumber(i++)
    }
    else if (mode == Mode.CountDown)
    {
        ShowNumber(i--)
    }
    else if (mode == Mode.AltUp || mode == Mode.AltDown)
    {
        if(mode == Mode.AltUp)
        {
            i++
            if (i > 3) i = 0
        }
        else if(mode == Mode.AltDown)
        {
            i--
            if(i < 0) i = 3
        }

        switch(i)
        {
            case 0:
                ShowNumber(0xeeeeeeee)
                break
            case 1:
                ShowNumber(0xdddddddd)
                break
            case 2:
                ShowNumber(0xbbbbbbbb)
                break
            case 3:
                ShowNumber(0x77777777)
                break
        }
       
        basic.pause(250)
    }
})
