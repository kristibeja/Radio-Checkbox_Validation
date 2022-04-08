// get each radio button
// let radio1 = document.getElementById('option1');
// let radio2 = document.getElementById('option2');
let radio3 = document.getElementById('option3');
// get the hidden radiobutton's div
let radiobtn_hidden = document.getElementById('radiobtn-hidden');
// get each hidden radio buttons
// let radio4 = document.getElementById('option4');
// let radio5 = document.getElementById('option5');
// let radio6 = document.getElementById('option6');
// get the checkbox
let checkbox = document.getElementById('checkbox');
// the hidden input div
let hidden_input = document.getElementById('input-hidden');
// get only the hidden input
// let input = document.getElementById('input-form');
// the submit button
let submit_btn = document.getElementById('submit-btn');
// paragraph text
let text = document.getElementById('text');




// main function
submit_btn.addEventListener('click', () => {
    text.innerHTML = 'Please choose an option!';
  })


// on third radio btn check show div 
function showRadiobtns() {
    if (radio3.checked === true){
        radiobtn_hidden.classList.remove("radiobtn-hidden");
    } else {
        // radio3.checked = false;
        radiobtn_hidden.classList.add("radiobtn-hidden");
    }
  }

// on checkbox checked show input 
function showInput() {
    if (checkbox.checked === true){
        hidden_input.classList.remove("input-hidden");
    } else {
       hidden_input.classList.add("input-hidden");
    }
  }

