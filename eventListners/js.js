// function alertFunction ()  {
//     alert("you did it")
// }

// bbtn.addEventListener('click', function (e) {
//     console.log(e);
//   });


// btn.addEventListener('click', function (e) {
//     e.target.style.background = 'blue';
//   });

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
      });
    });