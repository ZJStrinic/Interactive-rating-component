let buttons = document.querySelectorAll('.btn');
let submit = document.querySelector('.submit-btn');
let span = document.querySelector('span');
let firstCard = document.querySelector('.card-1');
let secondCard = document.querySelector('.card-2');


buttons.forEach( button => {
  button.addEventListener('click', handleRatingBtnClick);
});

function handleRatingBtnClick(event) {
  buttons.forEach(button => {
      button.classList.remove('active');
  });
  

  if (event.target.classList.contains('btn')){
      event.target.classList.add('active');
  } else {
      event.target.parentElement.classList.add('active');
  }
  
  span.textContent = event.target.textContent;
  
}

submit.addEventListener('click', e => {
  firstCard.classList.add('hide');
  secondCard.classList.remove('hide');
})



