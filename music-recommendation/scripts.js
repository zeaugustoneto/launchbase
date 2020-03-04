const modal_overlay = document.querySelector('.modal-overlay')
const cards = document.getElementsByClassName('card') //selectorall para pegar todos classe card


for (let x of cards){
    x.addEventListener('click', function(){
        const videoId = x.getAttribute("id");
        modal_overlay.classList.add('active') //classList.add adiciona
        document.querySelector('iframe').src = 'https://www.youtube.com/embed/'+videoId 
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modal_overlay.classList.remove('active')
    modal_overlay.querySelector('iframe').src = ""
})

