const modal_overlay = document.querySelector('.modal-overlay')
const cards = document.getElementsByClassName('card')
const modal = document.querySelector('.modal')


for(let x of cards){
    x.addEventListener('click', function(){
        const videoID = x.getAttribute('id') // pega o ID do card e joga dentro da variavel videoID
        modal_overlay.classList.add('active') //adiciona a tag active para acionar o modal
        document.querySelector('iframe').src = `https://rocketseat.com.br/${videoID}`

    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modal_overlay.classList.remove('active') //remove o active para desativar o modal
    modal_overlay.querySelector('iframe').src = "" //zera o link do iframe
    modal.classList.remove('active')
})

document.querySelector('.max-modal').addEventListener('click', function(){
    
    if(modal.classList.contains('active')){
        modal.classList.remove('active')
    } else{
        modal.classList.add('active') 
    }

})