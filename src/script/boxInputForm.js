const boxInputSubmit = document.querySelector('#btn-box-form');

boxInputSubmit.addEventListener('click', () => {
  const boxTotal = document.querySelector('#input-number').value
  const boxContainer = document.querySelector('.box-result')

  boxContainer.innerHTML = ''
  boxContainer.style.display = 'none'

  if (boxTotal <= 12) {
    boxContainer.style.gridTemplateColumns = 'repeat(2, minmax(auto, 1fr))'
  } else if (boxTotal <= 24) {
    boxContainer.style.gridTemplateColumns = 'repeat(6, minmax(auto, 1fr))'
  } else if (boxTotal <= 36) {
    boxContainer.style.gridTemplateColumns = 'repeat(12, minmax(auto, 1fr))'
  } else {
    boxContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(5px, 1fr))'
  }

  for (let index = 0; index < boxTotal; index++) {
    boxContainer.innerHTML +=  `<div class="box"></div>`
  }

  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    if (boxTotal <= 12) {
      box.style.height = '100%'
    } else if (boxTotal <= 24) {
      box.style.height = '50%'
    } else if (boxTotal <= 36) {
      box.style.height = "calc(" + 100 + "/ 3)"
    } else {
      box.style.height = '5px'
    }
  })

  boxContainer.style.display = 'grid'
})