// ╔═══════╗╔════╗╔═╗╔═══════╗╔═══════╗╔════╗╔═╗   ╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ║║ ║╚╗ ╔══╗ ║║ ╔═════╝╚══╗ ║║ ║   ╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╚═════╗╔══╝ ╚╝ ║       ║ ║  ║ ╚═════╗
//    ║ ║   ║ ║║ ║║ ║ ║ ║  ║ ║║ ╔═════╝║ ╔╗ ╔══╝       ║ ║  ╚═════╗ ║
// ╔══╝ ╚══╗║ ║║ ╚╝ ║╔╝ ╚══╝ ║║ ╚═════╗║ ║║ ╚══╗╔═╗╔═══╝ ║  ╔═════╝ ║
// ╚═══════╝╚═╝╚════╝╚═══════╝╚═══════╝╚═╝╚════╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔══════╗ ╔═══════╗╔═══════╗
// ║ ╔══╗ ║ ╚══╗ ╔══╝╚══╗ ╔══╝
// ║ ╚══╝ ╚╗   ║ ║      ║ ║
// ║ ╔═══╗ ║   ║ ║      ║ ║
// ║ ╚═══╝ ║╔══╝ ╚══╗   ║ ║
// ╚═══════╝╚═══════╝   ╚═╝

export function getRandomBit() {        // Get a random bit based on tge Math.random function
    return (Math.random() < 0.5) * 1;   // Get a random bit based on tge Math.random function
}
