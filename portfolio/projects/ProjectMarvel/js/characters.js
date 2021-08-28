//Character Class (var char1 = new Character(id, name, img)
class Character {
    constructor(id, name, img, description){
        this.id = id
        this.name = name
        this.img = img
        this.description = description
    }
    getCard(){
        let title = this.name
        let imgSrc = this.img
        let characterId = this.id
        let charDescription = this.description
        const card =`<div data-id="${characterId}" data-name="${title}" onclick="viewCardInfo(this)">
                     <div class="card">
                     <img src="${imgSrc}" alt="${title}" class="cardImg">
                     <img src="${imgSrc}" alt="${title}" class="cardBackgroundImg">
                     </div>
                     <div class="cardInfo hidden">
                         <h3>${title}</h3>
                         <p>${charDescription}</p>
                     </div>
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
        description: "Iron Man",
    },
    {
        charId: 2,
        charName:"Captain America",
        img:"https://www.xtrafondos.com/wallpapers/vertical/capitan-america-con-martillo-de-thor-fanart-7197.jpg",
        description: "Captain America",
    },
    {
        charId: 3,
        charName:"Thor",
        img:"https://cdn.wallpapersafari.com/1/34/3sEBnc.jpg",
        description: "Thor",
    },
    {
        charId: 4,
        charName:"Doctor Strange",
        img:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F10%2Fdr-strange.jpg&q=85",
        description: "Doctor Strange",
    },
    {
        charId: 5,
        charName: "Spiderman",
        img:"https://wallpapercave.com/wp/wp2623033.jpg",
        description: "Spiderman",
    },
    {
        charId: 6,
        charName: "Black Widow",
        img: "https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/87626/black-widow-4k-poster-2020-iphone-x-wallpaper-ilikewallpaper_com.jpg",
        description: "Black Widow",
    },
    {
        charId: 7,
        charName: "Hulk",
        img: "https://ringtoneswallpapers.mobi/wp-content/uploads/2020/07/hulk.jpg",
        description: "Hulk",
    },
    {
        charId: 9,
        charName: "Captain Marvel",
        img: "https://i.pinimg.com/originals/40/0b/46/400b464dde7f3ff8d377e70df1b61189.jpg",
        description: "Hulk",
    },
]

//cardsList <div>
const cardsList = document.getElementById("cardsList")

//Adding all the characters from characters list to cards list
charactersList.forEach((char)=>{new Character(char.charId,char.charName, char.img, char.description).addCard()})

function viewCardInfo(cardEl){
    cardEl = cardEl.querySelector(".cardInfo")
    cardEl.classList.remove("hidden")
}