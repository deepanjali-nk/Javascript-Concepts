const div = document.querySelector('div');
const button = document.querySelector('button');
const form = document.querySelector('form');

//Event Propagation,Event Bubbling, Event Capturing
button.addEventListener('click', (e) => {
   e.stopPropagation();
  alert('BUTTON clicked');
// },{
//     capture: true
// }
});
div.addEventListener('click', (e) => {
  e.stopPropagation();
  alert('DIV clicked');
// },{
//     capture: true
// }
});
 
form.addEventListener('click', (e) => {
    e.stopPropagation();
    alert('FORM clicked');
// },{
//     capture: true
// }
});
 

// event.target, event.current.target, this.target
div.addEventListener('click', divClick);
button.addEventListener('click', divClick);
form.addEventListener('click', divClick);
 
 
function divClick(event) {
    alert('currentTarget: ' + event.currentTarget.tagName + ', target: ' + event.target.tagName + ',this: ' + this.tagName);
}


// Event Delegation
document.querySelector(".products").addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
      alert("You clicked on: " + event.target.textContent);
  }
});