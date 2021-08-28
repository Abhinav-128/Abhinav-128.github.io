const hiddenClass = "hidden"
const hiddenCardClass = "hiddenCard"
const maxCards = 3
const loadCards = 3

const loadBtn = document.querySelector(".loadMore")
const collapseBtn = document.querySelector(".collapse")
collapseBtn.classList.add(hiddenClass)

var cards = document.getElementsByClassName("card")
cards = Array.from(cards)

const hideCards = () => {cards.forEach((element, index) => {
    if (index > maxCards-1) {
        element.classList.add(hiddenCardClass)
    }
})}
hideCards()

const loadMore = () => {
    var hiddenCards = document.getElementsByClassName(hiddenCardClass)
    hiddenCards = Array.from(hiddenCards)
    hiddenCards.forEach((element,index) => {
        if (index < loadCards) {
            element.classList.remove(hiddenCardClass)
        }
        if (document.querySelectorAll(`.${hiddenCardClass}`).length === 0) {
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