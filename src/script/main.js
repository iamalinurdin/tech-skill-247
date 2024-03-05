import css from '../scss/main.scss'
import * as bootstrap from 'bootstrap'

const btnSubmitFormWords = document.querySelector('#btn-words-form');
const btnRemoveWord = document.querySelectorAll('.btn-remove-word');

btnSubmitFormWords.addEventListener('click', () => {
  const wordsInput = document.querySelector('#words-input');
  const words = wordsInput.value.trim();
  const wordsSplited = words.split(' ')
  let wordsList = [];

  emptyRowTable()

  wordsSplited.forEach((word) => {
    const findIndex = wordsList.findIndex((wordListItem) => wordListItem.word == word)

    if (findIndex > -1) {
      wordsList[findIndex].count += 1
    } else {
      wordsList.push({
        word,
        count: 1
      })
    }
  })

  addRowToTable(wordsList)
})

function emptyRowTable() {
  const tbody = document.querySelector('#words-table tbody');

  tbody.innerHTML = `
    <tr></tr>
  `
}

function addRowToTable(words) {
  const tbody = document.querySelector('#words-table tbody');

  for (let index = 0; index < words.length; index++) {
    tbody.innerHTML = `
      <tr>
        <td>${words[index].word}</td>
        <td>${words[index].count}</td>
        <td>
          <button class="btn btn-sm btn-danger btn-remove-word">
            Delete
          </button>
        </td>
      </tr>
    `
  }
}

function removeWord(word) {
  alert(word)
}