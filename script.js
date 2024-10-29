// -------------------------Carrossel----------------------------------------------------
const cardwidth = 280;

const gallery = document.getElementById('gallery')
let scrollSize = gallery.scrollLeft;
console.log(scrollSize.length)
function buttonNext() {
    gallery.scrollLeft += 280
}

function buttonPre() {
    gallery.scrollLeft -= 280
}

// -------------------------0----------------------------------------------------

document.getElementById('content-avatar').style.display=`none`
document.getElementById('content-avatar-over').style.display=`none`
document.getElementById('avatar').style.display=`block`

function aumentarTamanho(){
    document.getElementById('card').style.width=`500px`
    document.getElementById('content-avatar-over').style.display=`flex`
    document.getElementById('content-avatar-over').style.flexFlow=`row`
    document.getElementById('content-avatar-over').style.textAlign=`center`
    document.getElementById('content-avatar-leave').style.display=`none`
    document.getElementById('avatar').style.display=`flex`
    document.getElementById('avatar').style.width=`100%`
    document.getElementById('avatar').style.marginBottom=`31px`
    document.getElementById('avatar-foto').style.width=`100px`
    document.getElementById('avatar-foto').style.borderRadius=`100%`
    document.getElementById('left-avatar').style.width=`50%`
    document.getElementById('left-avatar').style.margin=`20px`
    document.getElementById('btn-Gabriel').style.display=`block`
    document.getElementById('btn-Gabriel').style.opacity=`1`
}

function diminuirTamanho(){
    document.getElementById('card').style.width=`280px`
    document.getElementById('content-avatar-over').style.display=`none`
    document.getElementById('content-avatar-leave').style.display=`inline`
    document.getElementById('avatar-foto').style.width=`230px`
    document.getElementById('avatar-foto').style.borderRadius=`30px`
    document.getElementById('avatar').style.display=`block`
    document.getElementById('avatar').style.width=`100%`
    document.getElementById('avatar').style.marginBottom=`0px`
    document.getElementById('left-avatar').style.width=`100%`
    document.getElementById('left-avatar').style.margin=`0px`    
    document.getElementById('left-avatar').style.margin=`0px`
    document.getElementById('left-avatar').style.alignItems=`center`
    document.getElementById('right-avatar').style.display=`flex`
    document.getElementById('right-avatar').style.justifyContent=`center`
    document.getElementById('btn-Gabriel').style.opacity=`0`
}

// -------------------------1----------------------------------------------------

document.getElementById('content-avatar').style.display=`none`
document.getElementById('content-avatar-over').style.display=`none`
document.getElementById('avatar').style.display=`block`

function aumentarTamanho1(){
    document.getElementById('card1').style.width=`500px`
    document.getElementById('content-avatar-over1').style.display=`flex`
    document.getElementById('content-avatar-over1').style.flexFlow=`row`
    document.getElementById('content-avatar-over1').style.textAlign=`center`
    document.getElementById('content-avatar-leave1').style.display=`none`
    document.getElementById('avatar1').style.display=`flex`
    document.getElementById('avatar1').style.width=`100%`
    document.getElementById('avatar1').style.marginBottom=`31px`
    document.getElementById('avatar-foto1').style.width=`100px`
    document.getElementById('avatar-foto1').style.borderRadius=`100%`
    document.getElementById('left-avatar1').style.width=`50%`
    document.getElementById('left-avatar1').style.margin=`20px`
    document.getElementById('right-avatar1').style.height=`210px`
    document.getElementById('btn-Gabriel').style.display=`block`
    document.getElementById('btn-1').style.opacity=`1`
}

function diminuirTamanho1(){
    document.getElementById('card1').style.width=`280px`
    document.getElementById('content-avatar-over1').style.display=`none`
    document.getElementById('content-avatar-leave1').style.display=`inline`
    document.getElementById('avatar1').style.display=`block`
    document.getElementById('avatar1').style.width=`100%`
    document.getElementById('avatar1').style.marginBottom=`0px`
    document.getElementById('avatar-foto1').style.width=`230px`
    document.getElementById('avatar-foto1').style.borderRadius=`30px`
    document.getElementById('left-avatar1').style.width=`100%`
    document.getElementById('left-avatar1').style.margin=`0px`
    document.getElementById('left-avatar1').style.margin=`0px`
    document.getElementById('left-avatar1').style.alignItems=`center`
    document.getElementById('right-avatar1').style.height=`auto`
    document.getElementById('right-avatar1').style.display=`flex`
    document.getElementById('right-avatar1').style.justifyContent=`center`
    document.getElementById('btn-1').style.opacity=`0` 
}

// -------------------------2----------------------------------------------------

document.getElementById('content-avatar').style.display=`none`
document.getElementById('content-avatar-over').style.display=`none`
document.getElementById('avatar').style.display=`block`

function aumentarTamanho2(){
    document.getElementById('card2').style.width=`500px`
    document.getElementById('content-avatar-over2').style.display=`flex`
    document.getElementById('content-avatar-over2').style.flexFlow=`row`
    document.getElementById('content-avatar-over2').style.textAlign=`center`
    document.getElementById('content-avatar-leave2').style.display=`none`
    document.getElementById('avatar2').style.display=`flex`
    document.getElementById('avatar2').style.width=`100%`
    document.getElementById('avatar2').style.marginBottom=`31px`
    document.getElementById('avatar-foto2').style.width=`100px`
    document.getElementById('avatar-foto2').style.borderRadius=`100%`
    document.getElementById('left-avatar2').style.width=`50%`
    document.getElementById('left-avatar2').style.margin=`20px`
    document.getElementById('right-avatar2').style.height=`210px`
    document.getElementById('btn-2').style.display=`block`
    document.getElementById('btn-2').style.opacity=`1`
}

function diminuirTamanho2(){
    document.getElementById('card2').style.width=`280px`
    document.getElementById('content-avatar-over2').style.display=`none`
    document.getElementById('content-avatar-leave2').style.display=`inline`
    document.getElementById('avatar2').style.display=`block`
    document.getElementById('avatar2').style.width=`100%`
    document.getElementById('avatar2').style.marginBottom=`0px`
    document.getElementById('avatar-foto2').style.width=`230px`
    document.getElementById('avatar-foto2').style.borderRadius=`30px`
    document.getElementById('left-avatar2').style.width=`100%`
    document.getElementById('left-avatar2').style.margin=`0px`
    document.getElementById('left-avatar2').style.margin=`0px`
    document.getElementById('left-avatar2').style.alignItems=`center`
    document.getElementById('right-avatar2').style.height=`auto`
    document.getElementById('right-avatar2').style.display=`flex`
    document.getElementById('right-avatar2').style.justifyContent=`center`
    document.getElementById('btn-2').style.opacity=`0` 
}

// -------------------------2----------------------------------------------------

document.getElementById('content-avatar').style.display=`none`
document.getElementById('content-avatar-over').style.display=`none`
document.getElementById('avatar').style.display=`block`

function aumentarTamanho3(){
    document.getElementById('card3').style.width=`500px`
    document.getElementById('content-avatar-over3').style.display=`flex`
    document.getElementById('content-avatar-over3').style.flexFlow=`row`
    document.getElementById('content-avatar-over3').style.textAlign=`center`
    document.getElementById('content-avatar-leave3').style.display=`none`
    document.getElementById('avatar3').style.display=`flex`
    document.getElementById('avatar3').style.width=`100%`
    document.getElementById('avatar3').style.marginBottom=`31px`
    document.getElementById('avatar-foto3').style.width=`100px`
    document.getElementById('avatar-foto3').style.borderRadius=`100%`
    document.getElementById('left-avatar3').style.width=`50%`
    document.getElementById('left-avatar3').style.margin=`20px`
    document.getElementById('right-avatar3').style.height=`210px`
    document.getElementById('btn-3').style.display=`block`
    document.getElementById('btn-3').style.opacity=`1`
}

function diminuirTamanho3(){
    document.getElementById('card3').style.width=`280px`
    document.getElementById('content-avatar-over3').style.display=`none`
    document.getElementById('content-avatar-leave3').style.display=`inline`
    document.getElementById('avatar3').style.display=`block`
    document.getElementById('avatar3').style.width=`100%`
    document.getElementById('avatar3').style.marginBottom=`0px`
    document.getElementById('avatar-foto3').style.width=`230px`
    document.getElementById('avatar-foto3').style.borderRadius=`30px`
    document.getElementById('left-avatar3').style.width=`100%`
    document.getElementById('left-avatar3').style.margin=`0px`
    document.getElementById('left-avatar3').style.margin=`0px`
    document.getElementById('left-avatar3').style.alignItems=`center`
    document.getElementById('right-avatar3').style.height=`auto`
    document.getElementById('right-avatar3').style.display=`flex`
    document.getElementById('right-avatar3').style.justifyContent=`center`
    document.getElementById('btn-3').style.opacity=`0` 
}

// -------------------------2----------------------------------------------------

document.getElementById('content-avatar').style.display=`none`
document.getElementById('content-avatar-over').style.display=`none`
document.getElementById('avatar').style.display=`block`

function aumentarTamanho4(){
    document.getElementById('card4').style.width=`500px`
    document.getElementById('content-avatar-over4').style.display=`flex`
    document.getElementById('content-avatar-over4').style.flexFlow=`row`
    document.getElementById('content-avatar-over4').style.textAlign=`center`
    document.getElementById('content-avatar-leave4').style.display=`none`
    document.getElementById('avatar4').style.display=`flex`
    document.getElementById('avatar4').style.width=`100%`
    document.getElementById('avatar4').style.marginBottom=`31px`
    document.getElementById('avatar-foto4').style.width=`100px`
    document.getElementById('avatar-foto4').style.borderRadius=`100%`
    document.getElementById('left-avatar4').style.width=`50%`
    document.getElementById('left-avatar4').style.margin=`20px`
    document.getElementById('right-avatar4').style.height=`210px`
    document.getElementById('btn-4').style.display=`block`
    document.getElementById('btn-4').style.opacity=`1`
}

function diminuirTamanho4(){
    document.getElementById('card4').style.width=`280px`
    document.getElementById('content-avatar-over4').style.display=`none`
    document.getElementById('content-avatar-leave4').style.display=`inline`
    document.getElementById('avatar4').style.display=`block`
    document.getElementById('avatar4').style.width=`100%`
    document.getElementById('avatar4').style.marginBottom=`0px`
    document.getElementById('avatar-foto4').style.width=`230px`
    document.getElementById('avatar-foto4').style.borderRadius=`30px`
    document.getElementById('left-avatar4').style.width=`100%`
    document.getElementById('left-avatar4').style.margin=`0px`
    document.getElementById('left-avatar4').style.margin=`0px`
    document.getElementById('left-avatar4').style.alignItems=`center`
    document.getElementById('right-avatar4').style.height=`auto`
    document.getElementById('right-avatar4').style.display=`flex`
    document.getElementById('right-avatar4').style.justifyContent=`center`
    document.getElementById('btn-4').style.opacity=`0` 
}

// -------------------------2----------------------------------------------------

document.getElementById('content-avatar').style.display=`none`
document.getElementById('content-avatar-over').style.display=`none`
document.getElementById('avatar').style.display=`block`

function aumentarTamanho5(){
    
    document.getElementById('card5').style.width=`500px`
    document.getElementById('card5').style.marginRight=`40px`
    gallery.scrollLeft += 170

    document.getElementById('content-avatar-over5').style.display=`flex`
    document.getElementById('content-avatar-over5').style.flexFlow=`row`
    document.getElementById('content-avatar-over5').style.textAlign=`center`
    document.getElementById('content-avatar-leave5').style.display=`none`
    document.getElementById('avatar5').style.display=`flex`
    document.getElementById('avatar5').style.width=`100%`
    document.getElementById('avatar5').style.marginBottom=`31px`
    document.getElementById('avatar-foto5').style.width=`100px`
    document.getElementById('avatar-foto5').style.borderRadius=`100%`
    document.getElementById('left-avatar5').style.width=`50%`
    document.getElementById('left-avatar5').style.margin=`20px`
    document.getElementById('right-avatar5').style.height=`210px`
    document.getElementById('btn-5').style.display=`block`
    document.getElementById('btn-5').style.opacity=`1`
}

function diminuirTamanho5(){
    document.getElementById('card5').style.width=`280px`
    document.getElementById('card5').style.marginRight=`25px`
    document.getElementById('content-avatar-over5').style.display=`none`
    document.getElementById('content-avatar-leave5').style.display=`inline`
    document.getElementById('avatar5').style.display=`block`
    document.getElementById('avatar5').style.width=`100%`
    document.getElementById('avatar5').style.marginBottom=`0px`
    document.getElementById('avatar-foto5').style.width=`230px`
    document.getElementById('avatar-foto5').style.borderRadius=`30px`
    document.getElementById('left-avatar5').style.width=`100%`
    document.getElementById('left-avatar5').style.margin=`0px`
    document.getElementById('left-avatar5').style.margin=`0px`
    document.getElementById('left-avatar5').style.alignItems=`center`
    document.getElementById('right-avatar5').style.height=`auto`
    document.getElementById('right-avatar5').style.display=`flex`
    document.getElementById('right-avatar5').style.justifyContent=`center`
    document.getElementById('btn-5').style.opacity=`0` 
}

