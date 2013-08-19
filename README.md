Witchr
==================
// Named in honour of A. Sapkowski's The Witcher

Witchr is a quick and dirty solution witch lets you refresh your browser by sending a socket message from IDE of your choice (erm... I mean the console. FTW! :P

How it works
----------------------
1. ref.js contains embedded minified socket.io and listens to refresh signals at port 1337 - you simply add it to your project or use the ugly chrome extension
2. witchr's server.js will send refresh signal to your browser when you ask it with GET /ref
2. ... so you can use wget or curl to GET http://localhost:1337/ref and it will refresh. Boom! KAPOW!

Usage
--------------------
0. npm install (just once...)
1. Grab the ugly Chrome extension and install it in developer mode (if you can't or whatever just see the alternative below)
2. put the ref.js file from "Include this" in your site's /    (see below)
3. npm start to run the witchr
4. Whenever you want to reload just use wget or curl to GET http://localhost:1337


Alternative: 
1. if you don't want to use Chrome extension just include this in your html source:

    <script src="/ref.js"></script>
    
How I use it
-------

I created a keyboard shortcut in SciTe and Notepad++ to run 
    
    wget -O - -q http://localhost:1337/ref

Now, whenever I hit Ctrl+Shift+S it saves my files and reloads the browser at the same time.
Brilliant easy fix that saves me some time.
It is awesome when you can pivot your monitor and place the browser above your code (not the other way around! or the code won't work :P

BONUS POINTS
-------------------
if you can make the code uglier, like... it's the *Ugliest JS Oneliner Contest*
