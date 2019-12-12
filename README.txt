README: Notes on how to run project3
Time-stamp: <2019-12-12 20:31:18 Jeremy Rico>
------------------------------------------------------------

335 - 04
Project 3 Sort Race
Team: Jeremy Rico
Contents: index.html, sortRace.js, bigO.txt, README.txt

Intro:
index.html has some simple CSS commands as well as the main timing function.
It waits 1500ms before completing the next step. It also uses incementation of y
values through the canvas to print the next step of the array underneath the last.

sortRace.js Contains the main algorithms for the sort functions. It works by
creating a function that does one pass of it's respective algorith. The html file 
then calls these functions for every time the html function is executed. 

There are also some utility functions such as swap() and log().

index.html contains the function to pause the function and print out each pass
of each array. It stops printing when it detects no change between passes (array
is sorted).

It also creates a canvas that lists the stages of each alteration of the original
algorithm

project1bigO.odt contains an analysis of the programs time complexity

How to run: 
Drag and drop index.html into a web browser.