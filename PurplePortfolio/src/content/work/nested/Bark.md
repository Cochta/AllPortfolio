---
title: Bark Physics Engine
publishDate: 2024-12-01 00:00:00
img: /assets/bark.png
img_alt: Image of the collision scene
description: |
  I developed a 2D physics engine from scratch with triggers, collisions and space subdivision
tags:
  - Dev
  - C++
  - Physics
  - Quadtree
  - Optimisation
---

### Context

This **physics engine** was programmed during a **module** on **physics**, **maths**, **optimisation**, **CPU architecture** and **profiling** at SAE Institut Geneva in the **2nd year of a bachelor’s degree in Games Programming**.

The **goal** was to write the **engine** as an **API** that anyone could use, and to **optimise** it accordingly. The **engine** had to be capable of running a **sample** with 1000 colliders in **trigger** mode at a minimum of **60fps**.

We wrote our own **maths library** as well as standard C++ classes such as **smart pointers** in order to use our **custom allocators** to **profile** the program’s **memory management**.

### How it looks like

Here is a demo on my itch.io page.

<p><iframe class="embed" frameborder="0" src="https://itch.io/embed/2594683?bg_color=838383&amp;fg_color=000000&amp;link_color=FFD700&amp;border_color=949494" width="208" height="167"><a href="https://cochta.itch.io/bark-demo">Bark Demo by Cochta</a></iframe></p>

<p><iframe class="embed" frameborder="0" src="https://itch.io/embed-upload/9975414?color=bababa" allowfullscreen="" width="1200" height="820"><a href="https://cochta.itch.io/bark-demo">Play Bark Demo on itch.io</a></iframe></p>

### What did I learn

- Basics of Calculus
- Basics of Linear Algebra
- Basics of Physics
- Choose and use the right C++ data structures in a given context
- Low level C++ API programming
- Template programming
- Writing custom allocators
- Profiling code and memory management
- Optimisation tricks
  - Padding
  - Memory layout
  - Cache hit
  - Quadtree
- How a modern CPU works