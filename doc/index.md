---
layout: layouts/catalog-page
title: Extra Edge Serial
info: >-
    Edge Serial adds block-based serial read and write helpers for Rib:bit projects, including line padding, buffer reads, delimiter handling, and serial configuration.
tags:
    - software
    - makecode
hero:
    - cat-plug.png
---

## Overview

Edge Serial helps you send and receive serial data in MakeCode projects using simple, visual blocks.

This page is designed for beginners. Start in the blocks guide, then use TypeScript docs if you need advanced control.

## What you can build

- Debug consoles and telemetry streams
- Board-to-board command channels
- Host tools that parse line-based serial messages
- Classroom experiments with serial protocols

## Learning path

- Start with blocks: [Edge Serial Blocks Guide](blocks/)
- Use TypeScript when ready: [Edge Serial TypeScript Reference](typescript/)
- Browse the full API structure: [Edge Serial API Index](api/)

## Examples

::: view-switch

<x-example>
<div>

### Send data

Connect serial to pins P0 (TX) and P1 (RX) at 115200 baud, then send a line of text and a named value whenever button A is pressed.

</div>
<div>

::: blocks
<x-photo><img src="renders/serial-write-blocks.png" alt="Blocks: serial connect to TX P0, RX P1 at 115200, then on button A pressed write line hello and write value x = 42" /></x-photo>
:::

::: typescript
```typescript
edgeserial.redirect( EdgeSerialPin.P0, EdgeSerialPin.P1, EdgeBaudRate.BaudRate115200 )
input.onButtonPressed( Button.A, function () {
    edgeserial.writeLine( "hello" )
    edgeserial.writeValue( "x", 42 )
} )
```
:::

</div>
</x-example>

<x-example>
<div>

### Receive data

Run some blocks every time a complete line arrives, and show what was received.

</div>
<div>

::: blocks
<x-photo><img src="renders/serial-read-blocks.png" alt="Blocks: serial on data received new line, show string serial read line" /></x-photo>
:::

::: typescript
```typescript
edgeserial.onDataReceived( edgeserial.delimiters( Delimiters.NewLine ), function () {
    basic.showString( edgeserial.readLine() )
} )
```
:::

</div>
</x-example>

## Block reference

| Block | What it does |
| --- | --- |
| :blocks[![serial write line](renders/blocks/writeLine-blocks.png)] :typescript[`edgeserial.writeLine( text )`] | Sends a line of text, followed by a new line. |
| :blocks[![serial write string](renders/blocks/writeString-blocks.png)] :typescript[`edgeserial.writeString( data )`] | Sends text exactly as given, with no new line. |
| :blocks[![serial write number](renders/blocks/writeNumber-blocks.png)] :typescript[`edgeserial.writeNumber( value )`] | Sends a number as text. |
| :blocks[![serial write value](renders/blocks/writeValue-blocks.png)] :typescript[`edgeserial.writeValue( name, value )`] | Sends a named value, as `name:value`. |
| :blocks[![serial read line](renders/blocks/readLine-blocks.png)] :typescript[`edgeserial.readLine()`] | Reads one line of received text. |
| :blocks[![serial read until](renders/blocks/readUntil-blocks.png)] :typescript[`edgeserial.readUntil( delimiter )`] | Reads received text up to the chosen delimiter. |
| :blocks[![serial read string](renders/blocks/readString-blocks.png)] :typescript[`edgeserial.readString()`] | Reads everything currently waiting in the receive buffer as text. |
| :blocks[![serial on data received](renders/blocks/onDataReceived-blocks.png)] :typescript[`edgeserial.onDataReceived( delimiters, body )`] | Runs your blocks whenever data ending in the chosen delimiter arrives. |
| :blocks[![serial connect](renders/blocks/redirect-blocks.png)] :typescript[`edgeserial.redirect( tx, rx, rate )`] | Moves serial to the chosen TX and RX pins and baud rate. |

### Advanced blocks

These are found under **Advanced** in the Edge Serial drawer, and most projects will not need them.

| Block | What it does |
| --- | --- |
| :blocks[![serial read buffer](renders/blocks/readBuffer-blocks.png)] :typescript[`edgeserial.readBuffer( length )`] | Reads raw bytes from the receive buffer. |
| :blocks[![serial set baud rate](renders/blocks/setBaudRate-blocks.png)] :typescript[`edgeserial.setBaudRate( rate )`] | Changes the baud rate without changing the pins. |
| :blocks[![serial set write line padding](renders/blocks/setWriteLinePadding-blocks.png)] :typescript[`edgeserial.setWriteLinePadding( length )`] | Sets how many bytes each written line is padded to. |
| :blocks[![serial set rx buffer size](renders/blocks/setRxBufferSize-blocks.png)] :typescript[`edgeserial.setRxBufferSize( size )`] | Sets the size of the receive buffer. |
| :blocks[![serial set tx buffer size](renders/blocks/setTxBufferSize-blocks.png)] :typescript[`edgeserial.setTxBufferSize( size )`] | Sets the size of the transmit buffer. |

`edgeserial.writeNumbers( values )` sends an array of numbers separated by commas. It is available in TypeScript only.

## More resources

- TypeScript namespace docs: [Edge Serial Namespace](namespace_edgeserial/)
- TypeScript enum docs: [Edge Serial Pin Enum](enum_edgeserialpin/), [Edge Baud Rate Enum](enum_edgebaudrate/)
