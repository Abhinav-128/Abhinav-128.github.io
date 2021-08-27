//Character Class (var char1 = new Character(id, name, img)
class Character {
    constructor(id, name, img){
        this.id = id
        this.name = name
        this.img = img
    }
    getCard(){
        let title = this.name
        let imgSrc = this.img
        let characterId = this.id
        const card =`<div class="card" data-id="${characterId}" data-name="${title}" onclick="viewCard(this)">
                    <img src="${imgSrc}" alt="${title}" class="cardImg">
                    <img src="${imgSrc}" alt="${title}" class="cardBackgroundImg">
                    </div>`
        return card
    }
    addCard(){
        let charCard = this.getCard()
        cardsList.innerHTML += charCard
        return true
    }
}

//Characters List
var charactersList = [
    {   
        charId: 1,
        charName: "Iron Man", 
        img: "https://wallpapersflix.com/wp-content/uploads/2020/05/Iron-Man-Wallpaper-For-Mobile-485x1024.jpg",
        description: "",
    },
    {
        charId: 2,
        charName:"Captain America",
        img:"https://www.xtrafondos.com/wallpapers/vertical/capitan-america-con-martillo-de-thor-fanart-7197.jpg",
        description: "",
    },
    {
        charId: 3,
        charName:"Thor",
        img:"https://cdn.wallpapersafari.com/1/34/3sEBnc.jpg",
        description: "",
    },
    {
        charId: 4,
        charName:"Doctor Strange",
        img:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F10%2Fdr-strange.jpg&q=85",
        description: "",
    },
    {
        charId: 5,
        charName: "Spiderman",
        img:"https://wallpapercave.com/wp/wp2623033.jpg",
        description: "",
    },
    {
        charId: 6,
        charName: "Black Widow",
        img: "https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/87626/black-widow-4k-poster-2020-iphone-x-wallpaper-ilikewallpaper_com.jpg",
        description: "",
    },
    {
        charId: 7,
        charName: "Hulk",
        img: "https://ringtoneswallpapers.mobi/wp-content/uploads/2020/07/hulk.jpg",
        description: "",
    },
    {
        charId: 9,
        charName: "Captain Marvel",
        img: "https://i.pinimg.com/originals/40/0b/46/400b464dde7f3ff8d377e70df1b61189.jpg",
        description: "",
    },
]

//cardsList <div>
const cardsList = document.getElementById("cardsList")

//Adding all the characters from characters list to cards list
charactersList.forEach((char)=>{new Character(char.charId,char.charName, char.img).addCard()})

function viewCard(cardEl){
    let cardId = cardEl.dataset.id
    let cardCharName = cardEl.dataset.name
    alert(cardId + " " +cardCharName)
}