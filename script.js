products= [
    {
        name: "spaderie",
        mark: "nike",
        quantite: 0,
        price : 100,
        new : false
    }
]
menu=[{
    Home: "#home",
    Categories : "#categories",
    About : "#About",
    Blog : "#Blog"
}]


let moteur = document.querySelector('#moteur')
let header = document.createElement('header')
moteur.appendChild(header)

menu.map((m)=>{
    let headerA= document.createElement('a')
    header.appendChild(headerA)
    headerA.innerHTML=Object.keys(m)
    headerA.setAttribute("href",Object.values(m))

})

//Carousel
let carouselSection = document.createElement('section')
let carouselImg = document.createElement('img')
let carouselText = document.createElement('h1')
let carouselBtn = document.createElement('button')

//appendChild Caroussel
moteur.appendChild(carouselSection)
carouselSection.append(carouselImg,carouselText,carouselBtn)
carouselText.innerHTML="New arrival"

//

