// const body = document.body

// const div = document.createElement("div")
// div.innerText = "hello Worl 1"
// // adds text to the div itself 
// body.append(div)

// // just added a div to the whole body 



// your javascript file


// ----------------------------------------------------------------------


// body>
//   <h1>
//     THE TITLE OF YOUR WEBPAGE
//   </h1>
//   <div id="container"></div>
// </body>




// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);

// ----------------------------------------------------------------------
// const child1 = document.createElement("div");
// const child2 = document.createElement("div");
// child1.classList.add("example1");
// child2.classList.add("example2");
// child1.innerHTML = "<p> I am red </p>"

// document.body.append(child1);



// ----------------------------------------------------------------------



// document.body.innerHTML = "<h3>I'm a blue h3</h3>";
// document.body.innerHTML = "<p>I'm red</p>";

// const newDiv = document.createElement("div");
// document.body.append(newDiv);


// ----------------------------------------------------------------------


                        // const red = document.createElement("p")
                        // red.innerHTML = "I'm red";
                        // red.style.color= "red"
                        //     document.body.append(red);


                        // const blue = document.createElement("h3");
                        // blue.innerHTML = "I'm a blue h3";
                        // blue.style.color="blue"
                        //     document.body.append(blue);


// const divName = document.createElement("div")
// divName.setAttribute("id", "theDivID")
// document.body.append(divName);



// const theDivID = document.querySelector("#theDivID");
// const heading = document.createElement("h1");
// heading.classList.add("headingInDiv")
// theDivID.append(heading)

 
                    // const  theNewDiv = document.createElement("div");
                    // theNewDiv.classList.add("thisIsClassName")
                    // theNewDiv.style.backgroundColor = "pink"
                    // theNewDiv.style.border="solid"
                    // // theNewDiv.setAttribute("style", "background-color: red; border: solid")
                    //             // this ^^ set multiple same as above, I prefer the individual ones
                    //     document.body.append(theNewDiv);

                    // const addingToDiv = document.querySelector(".thisIsClassName");
                    // const heading = document.createElement("h1");
                    // const paragraph = document.createElement("p")
                    // heading.innerHTML = "I'm in a div!"
                    // paragraph.innerHTML = "Me Too!"
                    //     addingToDiv.append(heading)
                    //     addingToDiv.append(paragraph)








const red = document.createElement("p");
red.innerHTML = "Hey I'm Red!"
red.style.color = "red"
    document.body.append(red);

const newDiv = document.createElement("div")
newDiv.classList.add("child1");
newDiv.style.border = "solid"
newDiv.style.backgroundColor = "pink"
    document.body.append(newDiv)


const addToDiv = document.querySelector(".child1")
const heading = document.createElement("h3")
const paragraph = document.createElement("p")
heading.innerHTML = "I am a heading inside a div"
paragraph.innerHTML = "I am a para inside a div too"
    addToDiv.append(heading)
    addToDiv.append(paragraph)

