---
title: "Porting the Asus Q170T to Coreboot: My Accidental Dive into Firmware"
description: "How I went from knowing nothing about firmware to porting my first board to coreboot, and accidentally discovered my future employer."
pubDate: "2026-04-05"
draft: false
tags: ["coreboot", "firmware", "personal"]
---

So, you've probably noticed this blog has been a bit... quiet. A few test posts, some half-baked ideas, nothing really worth reading. Well, consider this the first _real_ post. The one where I actually have something to say. And it starts with a motherboard I bought on a whim while still in university.

## The Spark

It was 2017, I was deep in my chemistry studies, and I had this nagging feeling that something was missing. Yeah, I could write some basic code as a hobby. Yeah, I could mess around with my Raspberry Pi and tinker with Linux. But there was this whole other world underneath the operating system that I'd never touched. Firmware. The thing that runs _before_ your OS even boots.

I wanted to understand how commodity x86 computers work — not just the fun hobbyist stuff like single-board computers, but the _real_ stuff that actually runs the world.

So I did what any slightly-crazy university student does. I went to a small hardware store in the city and picked out an Asus Q170T motherboard. Why this one? It was ITX form factor — compact — and importantly, it was _thin_. The plan was to strap it to the back of my monitor in some kind of DIY Mac mini setup. Ambitious? Absolutely. Did it work out exactly as planned? Not even slightly. But that's not the point.

The board was decently new back then, came with a Skylake-era BIOS. And because I'm apparently great at making things complicated, I had a Kabylake CPU to go with it. Fun.

## The First Challenge: Getting It to Post

Before I could even _think_ about coreboot, I had a much more fundamental problem: the board wouldn't post with my CPU. The BIOS was too old for Kabylake.

I didn't have a BIOS programmer yet. I didn't have any of the fancy tools. What I _did_ have was a BIOS update file from Asus and a slowly growing panic. Eventually, I found a way to flash the BIOS by just asking a fellow student if he could lend me his CPU. I wasn't met with enthusiasm but eventually received and was able to update via the crude UEFI shell script the vendor provided.

It worked. The board posted. And I thought: _Okay, that was fun. But I want to run something cooler than this stock BIOS._

Enter: coreboot.

## The Firmware Rabbit Hole

I'd heard about coreboot — the open source firmware project that's basically the heartbeat of modern computers before they start doing anything useful. And I thought: _Wouldn't it be cool to actually understand how a computer starts up?_

What I quickly realized was that I had absolutely no idea what I was doing.

I knew coreboot was a thing. I knew it was open source. What I _didn't_ know was:

- How to actually flash a BIOS chip
- What a SPI flash programmer even looked like
- Anything about schematics, boardviews, or really any electrical engineering
- What the hell a "superio" was (the magic chip providing me with a serial on this board)

You know what I _did_ have? Determination, a cheap CH341A SPI flasher I bought for about €10 on eBay, and a USB to UART converter because apparently I'm the kind of person who needs to see what's happening _while_ things are breaking.

## The Community Saved Me

I didn't have schematics. I didn't have boardview files. I didn't have any of the documentation that would make this process sensible. What I _did_ have was the coreboot community — specifically the folks in `#coreboot` on Freenode who were incredibly patient with a random chemistry student asking "um, where does this SPI chip even connect?"

Coreboot had _just_ gotten support for Skylake/Kabylake at that time. But here was the catch: only Intel reference boards had been ported. There was one half-backed port from an ASRock board floating around, and the person who maintained it was kind enough to send me their superio datasheet when I asked about it like five hundred questions in a row.

I learned what a superio does. I learned about the components that make up an Intel firmware image. I learned this _specifically_ because I accidentally deleted the MAC address on my first try and spent a week trying to figure out why ethernet stopped working. Fun times.

The community taught me about:

- How to identify components on a motherboard
- The basics of voltage rails and what happens when you accidentally short something you shouldn't
- Why you should _always_ have a backup of the original firmware before you start playing around
- The mysterious incantations required to make flashrom work with random SPI programmers

I learned about GND. I learned that _every wire matters_. I learned this specifically because I debugged weird serial glitches for _weeks_ before realizing I had a faulty GND wire on my serial converter. One tiny wire. Three or so weeks of my life. Never forget that lesson.

## The Port Itself

After months of:

- Reading coreboot documentation until my eyes glazed over
- Asking probably too many beginner questions in IRC
- Accidentally frying a SPI flash (who got the great idea to put Vcc and GND on opposing edges?)
- Getting extremely good at reading hex dumps
- Staring at the ASRock port and the newly-released 9elements Supermicro X11 port trying to figure out what I was doing wrong

I finally got a _somewhat_ working coreboot build for the Q170T.

Did it boot perfectly the first time? Of course not. Nothing in firmware ever does.

But here's the thing: I only ever got LinuxBoot to work on this board. UEFI never quite worked properly. Some things just... didn't. And you know what? That's okay. It was my first port. I learned more from the failures than I ever did from any tutorial.

## The Happy Accident

Here's where things get fun. During this whole process, I was constantly researching, asking questions, and diving deeper into the coreboot ecosystem. And somewhere along the way, I kept seeing this company called **9elements** pop up — particularly via Phoronix articles about them porting a Supermicro X11 Skylake mainboard to coreboot.

They were doing cool stuff. _Really_ cool stuff. The kind of firmware work that I was desperately trying to understand.

So I did what any reasonable person does when they see a company doing interesting work: I looked at their code. I studied their port. And then I applied for a student worker position. Not because I thought I was qualified — I had _one_ half-working port under my belt and a deep understanding of "sometimes the computer turns on" — but because I wanted to be part of that world.

Oh, and somewhere along the way I switched from chemistry to computer science. Because apparently I didn't have enough going on.

Long story short: they took a chance on me. And now, here I am, writing this from the other side.

## Looking Back

If you're reading this and thinking "I don't know enough to do firmware" — let me tell you something. I didn't either. I was studying chemistry, had a €10 SPI flasher, a USB UART, and an unreasonable amount of curiosity. That's all it took.

The Asus Q170T port isn't the most impressive port in the world. It's not the most complex. It doesn't even fully work. But it's _mine_. It was my gateway into a world I didn't even know existed, and it taught me that you don't need to be an expert to start — you just need to start.

And sometimes, a random trip to a hardware store can change your entire career path.

---

_Next time: Something something deeper into coreboot internals. Probably. Let's see._
