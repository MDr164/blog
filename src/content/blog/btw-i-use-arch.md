---
title: "Btw I Use Arch: My (Long) Journey to Linux"
description: "From Raspberry Pi 1 to coreboot ports to tiling window managers — the story of how Arch Linux became my home."
pubDate: "2026-04-05"
draft: false
tags: ["linux", "arch", "personal"]
---

No posts in years and suddenly two in one day. I guess that's what happens when you finally have motivation to write about the topics that have been on the TODO for ages. If you haven't read [my previous post](/blog/porting-a-new-mainboard-to-coreboot/) yet, you probably should — it explains how I accidentally fell into firmware development. This one is sort of the prequel to that story. It's about how I got into Linux in the first place.

## It Started with a Raspberry Pi

Way back in 2014, I got a Raspberry Pi 1 for Christmas. Remember those? They had 256MB of RAM, a single-core CPU, and were basically a miracle of computing for €30 if I remember correctly.

At first, I did what everyone probably does: I installed some kind of media center OS and hooked it up to the TV. XBMC (has nothing to do with actual BMCs which will fill most of future posts), or whatever it was called back then. It was revolutionary — all of a sudden I had a little computer that could play movies on my TV without needing a "real" computer or a proprietary console.

But something about that little board just _stuck_ with me. I wanted to understand what was happening under the hood. What even _was_ this Linux thing that people in YouTube videos and guides kept talking about? And what exactly were these "GPIOs" everyone mentioned in Maker projects?

So I started poking around. I learned what a terminal was. I learned that commands existed and that you could type them and _stuff would happen_. I learned that Linux wasn't just some mysterious operating system that hackers used (I suppose a lot of people used Kali because that's what the movies showed) — it was something you could actually _understand_ if you were willing to put in the time.

## The Dual Boot Era

Eventually, my very own desktop computer entered my life, and naturally, it came with Windows (Windows 7 for that matter). Because what else would it come with? But I'd been bitten by the Linux bug, and I wanted more.

I did what any reasonable person does first: I set up a dual boot. Ubuntu alongside Windows. Every time I turned on the computer, I'd get that little bootloader menu asking which OS I wanted. Windows for gaming (obviously), Ubuntu for... everything else, honestly.

At first, I was just using Ubuntu like I would use Windows. The desktop environment did most of the work. But something kept pulling me deeper. I wanted to know _why_ things worked the way they did. I started poking around in the terminal, installing packages with apt, configuring things that probably didn't need configuring.

And then, eventually, I made the switch. Windows was gone. Ubuntu was now my main (and only) OS. I didn't look back. (Also no more reinstalling GRUB because Windows decided to nuke my bootloader on an unsolicited update).

## The Distrohopper Phase

Now, here's where things get interesting.

Once you're on Linux, you start to realize there's a _whole universe_ of distributions out there. Ubuntu was great, but it wasn't the only option. Far from it.

I started exploring. Fedora. Debian. OpenSUSE. Mint. Each one had its own philosophy, its own way of doing things. I was like a kid in a candy store, except the candy was operating systems and half of it required reading documentation to even figure out how to install.

And then I discovered Arch Linux.

Now, if you've spent any time in Linux circles, you know exactly what Arch is. It's the "btw I use Arch" meme. It's the distribution where you configure everything from scratch and somehow that's supposed to be _fun_. It's the one where wiki pages are longer than some novels and that's considered a _feature_. The one all the neckbeard computer nerds used.

I was hooked.

## Learning How a Linux System Actually Works

The thing about Arch is that you can't just install it and forget about it (at least back then). You _have_ to understand what's happening. The installer (which also didn't exist back then) doesn't hold your hand. The default configuration is basically "here's a terminal, good luck."

And you know what? That was _exactly_ what I needed.

Installing Arch from scratch — not using a pre-built ISO, actually going through the installation process — taught me more about Linux than months of using Ubuntu had. I learned about the kernel. I learned about the userspace. I learned what happens when you run `startx` and why things break when you delete the wrong file. I learned about systemd (and how to complain about it). I learned about all the pieces that make up a Linux system and how they fit together.

This curiosity — this "wait, but _how_ does this work?" — is exactly what led me to coreboot. If you want to understand how a computer starts, you need to understand what's running underneath. And if you want to understand what's running underneath, you need to understand Linux first.

## The Gentoo Incident

At some point, I decided: Arch is great, but what if I went _deeper_? What if I built everything from source? What if I compiled my own packages, my own libraries, my own _everything_ with a compiler of my choice?

Enter: Gentoo.

For those who don't know, Gentoo is a distribution where basically _everything_ is compiled from source. You don't install packages — you build them. For your specific hardware. With your specific optimization flags (most of which felt like snake oil tbh).

I thought this was going to be amazing. I thought I'd finally have the _perfect_ system, tuned exactly to my hardware.

I lasted about two months.

Don't get me wrong — Gentoo is incredible. The documentation is fantastic. The philosophy makes sense. But my laptop was _not_ powerful enough to compile Chromium from source every time I needed to update it. I spent more time waiting for packages to build than actually _using_ my computer.

I went back to Arch. I think I literally typed `sudo pacman -Syu` while mourning the death of my Gentoo setup; all those watts wasted on building clang with pgo just to compile clang again but this time optimized.

## The Window Manager Rabbit Hole

But I wasn't done learning.

Somewhere along the way, I discovered tiling window managers. i3, specifically, at first. And then bspwm. And then... well, let's just say my `.dotfiles` folder got out of control.

The idea was simple: why use a mouse when you can use the keyboard? Why click on windows when you can press a hotkey and have everything arranged perfectly? It felt _efficient_. It felt _cool_.

It also felt like I was slowly becoming the person the "btw I use Arch" meme was making fun of. But you know what? I didn't care. I was having fun.

I also experimented with custom kernels for a while. "I'll build my own kernel with optimized settings," I thought. "I'll remove all the bloat!" That lasted about as long as the Gentoo phase. Eventually, I realized that the official Arch kernels were pretty damn good and I didn't need to rebuild them every time I updated.

## The Setup I Use Today

So where did I end up?

These days, I'm running Arch Linux. Obviously. With Hyprland (a Wayland compositor, for the cool kids). On an F2FS filesystem. With full-disk encryption, TPM bindings, systemd-cryptenroll, all the bells and whistles.

I run UKIs (Unified Kernel Images) — those fancy single-file kernel images that package everything into one neat little blob. I got into them because, well, firmware stuff and operating systems are supposed to play nice together, and UKIs are kind of the bridge between the two.

And speaking of firmware — I recently got a Starlabs Starbook 7, which comes with coreboot _from the factory_. No more hacking my own boards just to have a reasonable laptop. It's a weird full-circle moment: I started with a Raspberry Pi, built my own firmware, and now I have a laptop that just _works_ with open source firmware out of the box.

I'm also planning on integrating my OS more closely with my firmware going forward. Seems like the natural next step.

I even got to visit the all-systems-go conference (via my employer, 9elements — yeah, the same one from the previous post) and meet a bunch of people who are just as obsessed with this stuff as I am. As well as Lennart Poettering, yes the guy that made systemd.

## The Journey So Far

Looking back, it's weird to think about how this all started. A ~30€ Raspberry Pi for Christmas. A curiosity about what happens when you turn on a computer. A willingness to break things and learn from the wreckage.

I've tried Gentoo. I've tried NixOS. I even tried 'Linux from Scratch'. I've tried custom kernels, IDEs and tiling window managers and every possible variation of "but what if I configure this differently?"

And you know what? I keep coming back to Arch. Not because it's the _best_ distribution — there is no "best" distribution — but because it fits my brain. I understand how it works. I can make it do what I want. And honestly, that's what matters.

Plus, the wiki really is that good.

---

_Next time: Something something firmware internals probably. I make no promises about timing._
