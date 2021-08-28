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
        const card =`<div class="cardContainer" data-name="${title}"  onclick="viewCardInfo(this)">
                     <div class="card">
                     <img src="${imgSrc}" alt="${title}" class="cardImg">
                     <img src="${imgSrc}" alt="${title}" class="cardBackgroundImg">
                     </div>
                     <div class="cardInfo hidden">
                         <h3>${title}</h3>
                         <h4>Description:</h4>
                         <p class = "description">${charDescription}</p>
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
        charName: "Iron Man", 
        img: "https://wallpapersflix.com/wp-content/uploads/2020/05/Iron-Man-Wallpaper-For-Mobile-485x1024.jpg",
        description: "When billionaire industrialist Tony Stark dons his sophisticated steel-mesh armor, he becomes a living high-tech weapon - the world's greatest fighting machine. Tony has primed his ultra modern creation for waging state of the art campaigns, attaining sonic flight, and defending the greater good! He is the Armored Avenger - driven by a heart that is part machine, but all hero! He is the INVINCIBLE IRON MAN!",
    },
    {
        charName:"Captain America",
        img:"https://www.xtrafondos.com/wallpapers/vertical/capitan-america-con-martillo-de-thor-fanart-7197.jpg",
        description: "Captain America",
    },
    {
        charName:"Thor",
        img:"https://cdn.wallpapersafari.com/1/34/3sEBnc.jpg",
        description: "Thor",
    },
    {
        charName:"Doctor Strange",
        img:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2016%2F10%2Fdr-strange.jpg&q=85",
        description: "Doctor Strange",
    },
    {
        charName: "Spiderman",
        img:"https://wallpapercave.com/wp/wp2623033.jpg",
        description: "Spiderman",
    },
    {
        charName: "Black Widow",
        img: "https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/87626/black-widow-4k-poster-2020-iphone-x-wallpaper-ilikewallpaper_com.jpg",
        description: "Black Widow",
    },
    {
        charName: "Hulk",
        img: "https://ringtoneswallpapers.mobi/wp-content/uploads/2020/07/hulk.jpg",
        description: "Hulk",
    },
    {
        charName: "Captain Marvel",
        img: "https://i.pinimg.com/originals/40/0b/46/400b464dde7f3ff8d377e70df1b61189.jpg",
        description: "Captain Marvel",
    },
]

//cardsList <div>
const cardsList = document.getElementById("cardsList")

//Adding all the characters from characters list to cards list
charactersList.forEach((char)=>{new Character(char.charId,char.charName, char.img, char.description).addCard()})

function viewCardInfo(cardEl){
    hideCardInfo()
    cardEl = cardEl.querySelector(".cardInfo")
    cardEl.classList.remove("hidden")
}

charactersList.forEach((character) => {
    fetch(`https://gateway.marvel.com/v1/public/characters/${character.charName}?apikey=221ecf1d651ec9f3d6baf44d4b9a853a`)
})