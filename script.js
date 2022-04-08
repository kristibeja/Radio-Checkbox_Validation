// get each radio button
let radio1 = document.getElementById('option1');
let radio2 = document.getElementById('option2');
let radio3 = document.getElementById('option3');
// get the hidden radiobutton's div
let radiobtn_hidden = document.getElementById('radiobtn-hidden');
// get each hidden radio buttons
let radio4 = document.getElementById('option4');
let radio5 = document.getElementById('option5');
let radio6 = document.getElementById('option6');
// get the checkbox
let checkbox = document.getElementById('checkbox');
// the hidden input div
let hidden_input = document.getElementById('input-hidden');
// get only the hidden input
let input = document.getElementById('input-form');
// the submit button
let submit_btn = document.getElementById('submit-btn');
// paragraph text
let text = document.getElementById('text');




// main function
submit_btn.addEventListener('click', () => {
  if(radio1.checked === false && radio2.checked === false && radio3.checked === false && radio4.checked === false && radio5.checked === false && radio6.checked === false && checkbox.checked === false){
    text.innerHTML = 'Please choose an option!';
    text.style.color = 'red';
    // change btn color
    // submit_btn.classList.remove("btn-outline-primary");
    // submit_btn.classList.add("btn-danger");
  } 
    else if (radio1.checked === true){
        text.innerHTML = 'You have chosen the FIRST option.';
        text.style.color = 'rgb(0,129,64)'; //green color
        // change btn color
        // submit_btn.classList.remove("btn-outline-primary");
        // submit_btn.classList.remove("btn-danger");
        // submit_btn.classList.add("btn-success");
    } 
    else if(radio2.checked === true){
        text.innerHTML = 'You have chosen the SECOND option';
        text.style.color = 'rgb(0,129,64)'; //green color
    } 
    else if (radio3.checked === true){
        if (radio4.checked === false && radio5.checked === false && radio6.checked === false){
          text.innerHTML = 'You clicked option three. You should choose one of these other three options!';
          text.style.color = 'red';
        } 
    } 
    else if (radio4.checked === true || radio5.checked === true || radio6.checked === true){
      if(checkbox.checked === false){
        text.innerHTML = 'You should click the Check Me button before submitting!';
        text.style.color = 'red';
      } else if (checkbox.checked === true && input.value === ''){
          text.innerHTML = 'Please enter your name before submitting!';
          text.style.color = 'red';
      }else { 
        text.innerHTML = `Thanks for checking. Your name is < ${input.value} >`;
        text.style.color = 'rgb(0,129,64)'; //green color
      }
    }
    

    // else if (radio4.checked === true && checkbox.checked === true){
    //   text.innerHTML = 'You have chosen the FOURTH option';
    //   text.style.color = 'rgb(0,129,64)'; //green color
    // } 

    // else if (radio5.checked === true){
    //   text.innerHTML = 'You have chosen the FIFTH option';
    //   text.style.color = 'green';
    // } 
    // else if (radio6.checked === true){
    //   text.innerHTML = 'You have chosen the SIXTH option';
    //   text.style.color = 'green';
    // } 
  //   else if (checkbox.checked === true){
  //     if (input.value === ''){
  //     text.innerHTML = 'Please enter your name before submitting!';
  //     text.style.color = 'red';
  //   } else {
  //       text.innerHTML = `Thanks for checking. Your name is < ${input.value} >`;
  //       text.style.color = 'green';
  //   }
  //  }

  });


// on third radio btn check show div 
function showRadiobtns() {
    if (radio3.checked === true){
        radiobtn_hidden.classList.remove("radiobtn-hidden");
    } else if(radio1.checked === true || radio2.checked === true){
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

