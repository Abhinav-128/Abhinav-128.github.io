const button = document.querySelector(".loadMore")
const hiddenClass = "hiddenCard"
const maxCards = 3
const loadCards = 3

var cards = document.getElementsByClassName("card")
cards = Array.from(cards)

cards.forEach((element, index) => {
    if (index > maxCards-1) {
        element.classList.add(hiddenClass)
    }
})

const loadMore = () => {
    var hiddenCards = document.getElementsByClassName(hiddenClass)
    hiddenCards = Array.from(hiddenCards)
    hiddenCards.forEach((element,index) => {
        if (index < loadCards) {
            element.classList.remove(hiddenClass)
        }
        if (document.querySelectorAll(`.${hiddenClass}`).length === 0) {
            button.textContent = "No More Characters"
            button.classList.add("buttonDisabled")
        }
    }
    )
}