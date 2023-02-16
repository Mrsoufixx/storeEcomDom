let products= [
    {
        name: "spaderie",
        mark: "nike",
        image : "/spaderi1.png",
        quantite: 0,
        price : 100,
        new : false

    }
]
let menu={
    Home: "#home",
    Categories : "#categories",
    About : "#About",
    Blog : "#Blog"
}

//style header
let aTagHeader={
    style : "text-decoration: none; color: black; float: right;",
    
}
let liNav={
    style : "display:inline-block; list-stye=none; padding:4px 25px;"
}

//caroussel style
let carousel_Section={
    class: "caroussel"

}
let imgCaroussel={
    style : " max-width: 125%;width:100%;filter: drop-shadow(33px 6px 10px gray);position:absolute; right:-40px; tarnsition: width 0.5s;",
    src : "/spaderi1.png"
}



let moteur = document.querySelector('#moteur')

let header = document.createElement('header')
moteur.appendChild(header)

let nav = document.createElement('nav')
header.appendChild(nav)
let headerUl = document.createElement('ul')
nav.appendChild(headerUl)



Object.keys(menu).map((elt,index)=>{
    let headerLi=document.createElement('li')
    headerUl.appendChild(headerLi)
    Object.keys(liNav).forEach(attribute=>{
        headerLi.setAttribute(attribute,liNav[attribute])
    })
    
    let headerA= document.createElement('a')
    headerLi.appendChild(headerA)
    headerA.textContent=elt
    Object.keys(aTagHeader).forEach(attribute =>{
        headerA.setAttribute(attribute,aTagHeader[attribute])
    })
    headerA.setAttribute("key",index)
    headerA.setAttribute("href",elt[index])

})

//Carousel
//variable Carousel
let carouselSection = document.createElement('section')
let carouselDivImg = document.createElement('div')
let carouselDivDescription = document.createElement('div')
let carouselImg = document.createElement('img')
let carouselText = document.createElement('h1')
let carouselBtn = document.createElement('button')


//appendChild Caroussel 
moteur.appendChild(carouselSection)
carouselSection.append(carouselDivDescription,carouselDivImg)
carouselDivImg.appendChild(carouselImg)
carouselDivDescription.append(carouselText,carouselBtn)
carouselText.innerHTML="New arrival"
carouselBtn.innerHTML="Voir plus"



// set attribute caroussel

Object.keys(carousel_Section).forEach(attribute =>{
    carouselSection.setAttribute(attribute,carousel_Section[attribute])
})
Object.keys(imgCaroussel).forEach(attribute =>{
    carouselImg.setAttribute(attribute,imgCaroussel[attribute])
})

carouselDivImg.classList.add("carouselDivImg")
carouselDivDescription.classList.add("carouselDivDescription")
//

