const btnSubmitFormWords = document.querySelector('#btn-words-form');

const wordsList = [];
let wordsSplited = []

document.addEventListener('DOMContentLoaded', () => {
  addRowToTable(wordsList)
})

btnSubmitFormWords.addEventListener('click', () => {
  const wordsInput = document.querySelector('#words-input');
  const words = wordsInput.value.trim();

  if (wordsSplited.length > 0) {
    wordsSplited = []
  }

  wordsSplited = words.split(' ')

  emptyRowTable()

  wordsSplited.sort().forEach((word) => {
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

  wordsInput.value = wordsSplited.join(' ')
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
    tbody.innerHTML += `
      <tr>
        <td>${words[index].word}</td>
        <td>${words[index].count}</td>
        <td class="word-btn-action">
          <button data-word="${words[index].word}" class="btn btn-sm btn-danger btn-remove-word">
            Delete
          </button>
        </td>
      </tr>
    `
  }

  const wordBtnAction = document.querySelectorAll('.btn-remove-word')

  wordBtnAction.forEach(item => item.addEventListener('click', function(event) {
    const selectedWord = this.dataset.word;

    removeWord(selectedWord)
  }))

}

function removeWord(word) {
  const findIndexWordList = wordsList.findIndex(item => item.word === word);
  const wordsInput = document.querySelector('#words-input');
  
  if (findIndexWordList > -1) {
    wordsList.splice(findIndexWordList, 1);
    wordsSplited = wordsSplited.filter(item => item !== word)
    
    wordsInput.value = wordsSplited.join(' ')
    emptyRowTable()
    addRowToTable(wordsList)
  }
}