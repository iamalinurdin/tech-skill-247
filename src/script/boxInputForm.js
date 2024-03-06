const boxInputSubmit = document.querySelector('#btn-box-form');

boxInputSubmit.addEventListener('click', (event) => {
  const boxTotal = document.querySelector('#input-number').value
  const boxContainer = document.querySelector('.box-result')

  boxContainer.style.display = 'none'

  for (let index = 0; index < boxTotal; index++) {
    boxContainer.innerHTML +=  `<div class="box"></div>`
  }

  boxContainer.style.display = 'grid'
})