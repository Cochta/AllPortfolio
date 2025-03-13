---
title: Rollback Engine
publishDate: 2019-12-01 00:00:00
img: /assets/headshot.png
img_alt: in game image
description: |
  I implemented a Rollback engine for a small 2 player head-soccer like game
tags:
  - Dev
  - Rollback
  - Multiplayer
---
**Head shot Blogpost and documentation**
Version 1.0

Introduction
==============================================================

This blog post primarily explains how I created "Head Shot" and how I implemented the rollback.

Head Shot is a small online game developed for the SAE Institute.

Head Shot is a "Head-soccer like" game, 2 players can shoot a ball and score goals with it.
A game lasts 1:30 minutes at the end of the time the player having the highest score wins.

The project was done in the scope of 1 month.

<video controls width="100%">
  <source src="/assets/ressources/ressourceRollback/HeadShot.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

A match played in real conditions

Goals
--------------------------------------------------------------

Make a realtime responsive online multiplayer game.

Implement a rollback engine.


Using
==============================================================

Head Shot uses:
- The raylib library to render and to play sounds.
- The Bark physics engine developped by myself to simulate the physics. 
- The Photon library for the netorking

Architecture
==============================================================

The main application handles the networking, the rollback, the game logic and the rendering.

The rollback engine has access to the current game and handles the confirm game.

![the architecture](/assets/ressources/ressourceRollback/architecture.png)


Game Logic
==============================================================

General
--------------------------------------------------------------

Instead of creating complex architecture for the game logic I decided to include all the needed elements into the game class directly.

It made my life a lot easier when I started implementing the rollback engine.

Here are some examples, the details are in the comments:

![All the data a player needs](/assets/ressources/ressourceRollback/player.png)

![All the data the ball needs](/assets/ressources/ressourceRollback/ball.png)

Inputs
--------------------------------------------------------------

To handle the inputs, I store them in a single byte using bit-shifting, it makes the input packets smaller to send them to the other player.

![The input namespace with the Input system and the FrameInput struct](/assets/ressources/ressourceRollback/inputs.png)

Then with some basic logic I process the inputs retrieved each frame.

![The conditions for a player to move depending on the inputs](/assets/ressources/ressourceRollback/inputProcess.png)

Copy method
--------------------------------------------------------------

For the rollback to work properly I have to copy the confirm game state into the current game state before doing a rollback.

To ensure that all needed data is copied properly I copy it manually.

Because the contact listener handles a pointer to the logic I have to set it again each time, otherwise it makes the game non deterministic for both players. 

![The Copy method](/assets/ressources/ressourceRollback/copy.png)

Networking
==============================================================

![The networking is handled using the photon library](/assets/ressources/ressourceRollback/photon.png)

I overrided all the needed functions from the photon lib, here I will show the ones that I use for the netcode of the game.

ReceiveEvent
--------------------------------------------------------------
When a client received a packet, it stores it in a queue.

Then, at the start of a frame the client loops throught all the packets, handles them and pops them.

![The ReceiveEvent method](/assets/ressources/ressourceRollback/receiveEvent.png)

joinRoomEventAction
--------------------------------------------------------------

When the first player joins a room (rooms are entirely handled by photon), his id is set to 0.

When the second player joins a room, his id is set to 1, the game can start for both player and the rollback engine is setup aswell. 

![The joinRoomEventAction method](/assets/ressources/ressourceRollback/joinRoom.png)

Rollback engine
==============================================================

To implement the rollback engine, I decided to implement the rollback first and then add the confirm frame to it

Rollback
--------------------------------------------------------------

Here is the implementation of my rollback method.

![The DoRollback method](/assets/ressources/ressourceRollback/rollbackFunc.png)

When running the simulation, after some time the game started to lag a lot.

It was due to the lack of the confirm frame.

In fact, when I profiled the sim, the game was rollbacking each frame from the very first frame of the game.

![profiling before adding the confirm frame](/assets/ressources/ressourceRollback/tracyPreConfirm.png)

Confirm frame
--------------------------------------------------------------

Here is the implementation of my method to confirm the frame.

![The ConfirmFrame method](/assets/ressources/ressourceRollback/confirmFunc.png)

After adding the logic to confirm the frame and stop rollbacking from the very first frame, the game stopped lagging and I could test the simulation until the end.

After fixing some really small bugs, I couldn't make a single crash happen !!! I'm pretty sure my implementation is fine !  

Here we can see that the game rollbacked trice within a frame and that the program handles it without problems and can handle a lot more.

![profiling after adding the confirm frame](/assets/ressources/ressourceRollback/tracyPostConfirm.png)

I calculated that my program can handle approximatively 16 seconds of rollback.

Yes it is overkill but it proves it works well !!

Rendering
==============================================================

I thought that making the game playable in a web browser could be a good idea,
that is why I chose raylib to render my game because it is compatible with empscripten and seamed easy to use.

The web build still needs to be done.

Conclusion
==============================================================

In conclusion, creating "Head Shot" was a rewarding experience that showcased the integration of raylib, Bark, and Photon libraries.

Implementing the rollback engine and confirm frame was crucial for maintaining smooth, real-time gameplay and resolving performance issues. 

The game runs without significant lags or crashes, indicating a successful and stable rollback mechanism. 

The next step is to finalize the web build and to maybe add some fun features :)

Thank you for reading so far !!!
==============================================================
I honestly hope, you enjoyed it :)

See Also
==============================================================

[My GitHub page](https://github.com/Cochta).

[My Itch.io page](https://cochta.itch.io).
