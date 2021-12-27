
when I started this project roughly in early Decemeber I gave it a solid run through. I was still
pretty stuck on some areas.

I went through and made reread materials and went over some Udemy course stuff for javascript to 
get a better understanding


things that i learned in this are:


---------------------------------------------1-------------------------------------------

if you have global variables that are needed when you invoke a function they need to be in the parameters

ex ... 

    playerSelection = playersMove();

    computerSelection = computerPlay();

function playRound(playerSelection, computerSelection);{


}

in this case, we need to use the parameters because the varaibles are global scope. we can change that and remove
the parameters by placing the variables within the function creating functional scope 


ex ... 

function playRound(); {

    playerSelection = playersMove();

    computerSelection = computerPlay();


}


-------------------------------------------2------------------------------------------------------

I learned how to properly use a while loop

for this problem I used a while look to continue the game until a score is reached. It took a lot
of playing around with trail and error to figure it out. 

One question i want to address still is that the && vs the || i first had || and it was not working
I changed it to 



-------------------------------------------3------------------------------------------------------

I learned that returning a function will cancel it. Once you run a function and it reaches a return statement that 
is true, the function ends. 

-------------------------------------------4------------------------------------------------------
I learned how to properly google things and searh them for example, I learned to search how to
randomly select from an array. I was able to see an example on W3 schools and then implement it into my own code. 


-------------------------------------------5------------------------------------------------------

I learned to better use if else statements and how to properly format "logic" of an if else statement.
For example, if I do need to define everything in the if else statement. A random example would be
if i want things in to go in catergory A if they are >10 or category B if they are <10 

if (xyzVariable >10) {
    console.log(A);
} else {
    console.log(B);
}