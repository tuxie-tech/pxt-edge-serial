---
layout: layouts/catalog-page
title: Edge Serial Blocks Guide
---

## Overview

This page is a visual-blocks-first guide for learners. Every block is shown here exactly as it appears in MakeCode.

## Suggested block walkthrough order

1. Send one line of output.
2. Listen for incoming lines.
3. Parse received values.
4. Tune baud rate and buffers only if needed.

## Write output blocks

![serial write line](../renders/blocks/writeLine-blocks.png)
![serial write string](../renders/blocks/writeString-blocks.png)
![serial write number](../renders/blocks/writeNumber-blocks.png)

## Value formatting blocks

![serial write value](../renders/blocks/writeValue-blocks.png)

## Read and event blocks

![serial read line](../renders/blocks/readLine-blocks.png)
![serial read until](../renders/blocks/readUntil-blocks.png)
![serial read string](../renders/blocks/readString-blocks.png)
![serial on data received](../renders/blocks/onDataReceived-blocks.png)

## Transport configuration blocks

![serial connect](../renders/blocks/redirect-blocks.png)
![serial set baud rate](../renders/blocks/setBaudRate-blocks.png)
![serial set rx buffer size](../renders/blocks/setRxBufferSize-blocks.png)
![serial set tx buffer size](../renders/blocks/setTxBufferSize-blocks.png)
![serial set write line padding](../renders/blocks/setWriteLinePadding-blocks.png)

## Raw data blocks

![serial read buffer](../renders/blocks/readBuffer-blocks.png)

## Next steps

- TypeScript docs: [Edge Serial TypeScript Reference](../typescript/)
- Full API map: [Edge Serial API Index](../api/)
