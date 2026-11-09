---
layout: layouts/catalog-page
title: Extra Edge Serial
info: >-
    Edge Serial adds block-based serial read and write helpers for Rib:bit projects, including line padding, buffer reads, delimiter handling, and serial configuration.
plugins:
    - ts-to-blocks
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

## Example

This example sets baud rate and line padding, then handles line-based incoming data.

```ts
edgeserial.setBaudRate(EdgeBaudRate.BaudRate115200)
edgeserial.setWriteLinePadding(16)

edgeserial.onDataReceived("\n", function () {
	let line = edgeserial.readLine()
	console.log(line)
})

edgeserial.writeLine("hello world")
```

## More resources

- TypeScript namespace docs: [Edge Serial Namespace](namespace_edgeserial/)
- TypeScript enum docs: [Edge Serial Pin Enum](enum_edgeserialpin/), [Edge Baud Rate Enum](enum_edgebaudrate/)
