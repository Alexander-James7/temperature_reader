let current_temperature = 0
// Created by: Alexander James
// 
// Date: September 27th 2022
// 
// This code reads the current temperature in the room, displays it on the Microbit, and will loop forever
basic.forever(function () {
    current_temperature = input.temperature()
    basic.showNumber(current_temperature)
    basic.pause(1000)
    basic.clearScreen()
})
