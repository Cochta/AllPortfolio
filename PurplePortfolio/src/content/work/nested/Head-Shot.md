---
title: Head-Shot
publishDate: 2024-11-01 00:00:00
img: /assets/headshot.png
img_alt: image of the game
description: |
  I developped a small online 2 player head-soccer like game with a rollback engine
tags:
  - Dev
  - Online
  - Rollback
---

### Overview

Head-Shot is an online multiplayer game inspired by Head Soccer, developed in C++ with a custom rollback netcode engine. The project was a deep dive into real-time networking, latency compensation, and deterministic game logic.

The primary challenge was implementing a rollback engine to ensure smooth online gameplay, even under high latency conditions. This involved synchronizing game states, predicting player inputs, and efficiently handling network corrections to maintain a seamless experience.

Beyond networking, the game features physics-driven character movement, responsive controls, and competitive gameplay designed for fast-paced matches. Developing Head-Shot provided valuable experience in networking architecture, low-level optimization, and multiplayer game design.

Head-Shot uses "[Bark](/work/nested/bark)" my own physics engine. 

### How it looks like

A match played in real conditions

<video controls width="100%">
  <source src="/assets/ressources/ressourceRollback/HeadShot.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### What did I learn

- Implementing rollback netcode for smooth online multiplayer gameplay
- Handling input prediction and state synchronization to reduce latency effects
- Managing network corrections and reconciling game states efficiently
- Understanding and mitigating desynchronization issues
- Developing a real-time physics-based game in C++
- Ensuring deterministic behavior for consistent multiplayer synchronization
- Optimizing game logic to handle real-time updates with minimal performance impact
- Creating a responsive input system for competitive gameplay
- Handling memory management and performance optimizations in C++
- Implementing custom data structures to improve efficiency
- Profiling and debugging network-related performance bottlenecks
- Working on a complex multiplayer system from scratch
- Testing and debugging networking issues in real-world conditions
- Managing a project with high technical complexity and performance constraints

### Source Code & Download

- [GitHub Repository](https://github.com/Cochta/Head-Shot).
- [Download link](https://github.com/Cochta/Head-Shot/releases/download/1.0/Head.Shot.zip)

