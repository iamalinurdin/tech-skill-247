const boxInputSubmit = document.querySelector('#btn-box-form');

boxInputSubmit.addEventListener('click', () => {
  const boxTotal = document.querySelector('#input-number').value
  const boxContainer = document.querySelector('.box-result')

  boxContainer.innerHTML = ''
  boxContainer.style.display = 'none'

  if (boxTotal <= 12) {
    boxContainer.style.gridTemplateColumns = 'repeat(12, minmax(auto, 1fr))'
  } else if (boxTotal <= 24) {
    boxContainer.style.gridTemplateColumns = 'repeat(24, minmax(auto, 1fr))'
  } else if (boxTotal <= 36) {
    boxContainer.style.gridTemplateColumns = 'repeat(36, minmax(auto, 1fr))'
  } else {
    boxContainer.style.gridTemplateColumns = 'repeat(48, minmax(auto, 1fr))'
  }

  for (let index = 0; index < boxTotal; index++) {
    boxContainer.innerHTML +=  `<div class="box"></div>`
  }

  const boxes = document.querySelectorAll('.box');

  boxes.forEach(box => {
    if (boxTotal <= 12) {
      box.style.height = '28px'
    } else if (boxTotal <= 24) {
      box.style.height = '12px'
    } else if (boxTotal <= 36) {
      box.style.height = '6px'
    } else {
      box.style.height = '4px'
    }
  })

  boxContainer.style.display = 'grid'
})