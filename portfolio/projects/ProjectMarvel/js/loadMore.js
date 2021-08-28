const hiddenClass = "hidden"
const maxCards = 3
const loadCards = 3

const loadBtn = document.querySelector(".loadMore")
const collapseBtn = document.querySelector(".collapse")
collapseBtn.classList.add(hiddenClass)

var cards = document.getElementsByClassName("card")
cards = Array.from(cards)

const hideCards = () => {cards.forEach((element, index) => {
    if (index > maxCards-1) {
        element.classList.add(hiddenClass)
    }
})}
hideCards()

const loadMore = () => {
    var hiddenCards = document.getElementsByClassName(hiddenClass)
    hiddenCards = Array.from(hiddenCards)
    hiddenCards.forEach((element,index) => {
        if (index < loadCards) {
            element.classList.remove(hiddenClass)
        }
        if (document.querySelectorAll(`.${hiddenClass}`).length === 0) {
            loadBtn.classList.add(hiddenClass)
            collapseBtn.classList.remove(hiddenClass)
        }
    }
    )
}

const collapse = () => {
    hideCards()
    collapseBtn.classList.add(hiddenClass)
    loadBtn.classList.remove(hiddenClass)
}