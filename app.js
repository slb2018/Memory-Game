document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'cat',
            img: 'images/cat.png'
        },
        {
            name: 'dog',
            img: 'images/dog.jpg'
        },
        {
            name: 'dog',
            img: 'images/dog.jpg'
        },
        {
            name: 'fish',
            img: 'images/fish.png'
        },
        {
            name: 'fish',
            img: 'images/fish.png'
        },

        {
            name: 'ghost',
            img: 'images/happy-ghost.png'
        },
        {
            name: 'ghost',
            img: 'images/happy-ghost.png'
        },
        {
            name: 'moose',
            img: 'images/moose.jpg'
        },
        {
            name: 'moose',
            img: 'images/moose.jpg'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        }
    ]

cardArray.sort(() => 0.5 - Math.random())    

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create game board
function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/mountain.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/mountain.jpg')
        cards[optionTwoId].setAttribute('src', 'images/mountain.jpg')
        alert('You Have Chosen the Same Card')
      } else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You Found A Match!')
        cards[optionOneId].setAttribute('src', 'images/white.PNG')
        cards[optionTwoId].setAttribute('src', 'images/white.PNG')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/mountain.jpg')
        cards[optionTwoId].setAttribute('src', 'images/mountain.jpg')
        alert('Not A Match, Keep Trying!')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}

//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})
