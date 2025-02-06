---
title: Connect 4
publishDate: 2020-03-02 00:00:00
img: /assets/connect4.png
img_alt: image of the game
description: |
  I developed a small online 2 player connect 4 game using SFML library and my own TCP system
tags:
  - Online
  - Dev
  - TCP
---
**Connect 4 Blogpost and documentation**
Version 1.0


This blog post primarily explains how does the networking of Connect4 works.


About connect4
==============================================================

Connect4 is a small online game developed for the SAE Institute.
The rules of connect4 are easily found on the internet.
Connect4 uses the SFML library to draw and for the networking.
Connect4 uses the Bark physics engine developped by myself to simulate the physics. 


Goals
--------------------------------------------------------------

- Develop a small turn by turn multiplayer online game
- Save player "ELO" in a database

Test the game locally
==============================================================

To download the game, click on this link: https://github.com/Cochta/Bark_POW4/releases/tag/V1.0

Extract the files somewhere on your pc.

Run 1 time Server.exe

Run 2 times Client.exe

You can now test the game !!!

![What you should have after extracting the folder](/assets/ressources/ressourceConnect4/ReleaseFolder.PNG)

If you want to store the player names and score you can download https://github.com/Cochta/Connect4FastApi

Create a .env file with the following informations
    POSTGRES_DB = name_of_the_db
    POSTGRES_USER = name_of_the_user
    POSTGRES_PASSWORD = password_used
    POSTGRES_HOST = host_used

Launch docker

Run the 2 services in docker-compose.yaml

Run the main.py file

Networking documentation
==============================================================

<a href="/assets/ressources/html/index.html">Click here to see the doc</a>

Thank you for reading so far !!!
==============================================================
I honestly hope, you enjoyed it :)


See Also
==============================================================

[My GitHub page](https://github.com/Cochta).