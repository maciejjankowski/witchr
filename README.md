Witchr
==================
// Named in honour of A. Sapkowski's The Witcher

Witchr is a quick and dirty solution witch lets you refresh your browser by sending a socket message from IDE of your choice (erm... I mean the console. FTW! :P

Usage
--------------------
0. npm install (just once...)
1. Grab the ugly Chrome extension and install it in developer mode.
2. put the ref.js file from "Include this" in your site's /    (see below)
3. npm start
4. Whenever you want to reload just use wget or curl to GET http://localhost:1337

OR

Alternative: 
1. if you don't want to use Chrome extension just include this in your html source:

    <script src="/ref.js"></script>
    
How I use it
-------

I created a keyboard shortcut in SciTe and Notepad++ to run 
    
    wget -O - -q http://localhost:1337/ref

Now, whenever I hit Ctrl+Shift+S it saves my files and reloads the browser at the same time.
Brilliant easy fix that saves me some time.

BONUS POINTS
-------------------
if you can make the code uglier, like... it's the *Ugliest JS Oneliner Contest*
