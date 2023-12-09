const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev_button');
const btnNext = document.getElementById('next_button');
const btn_On = document.getElementById('btn_acessibiledade');
const acessibilidade = document.getElementById('acessibilidade');
const btn_FontA = document.getElementById('botao_aumentarFonte');
const btn_FontD = document.getElementById('botao_diminuirFonte');
const seta = document.getElementById('seta');
const control = document.querySelectorAll('.control');
const item = document.querySelectorAll('.item');
const maxItem = item.length;
const link = document.getElementById('link');
const href = link.getAttribute('href');
const btn_com_contraste = document.getElementById('com_contraste');
const btn_sem_contraste = document.getElementById('sem_contraste');
const img_chat = document.getElementById('img_chat');
const btn_chat = document.getElementById('btn_chat');
const chat = document.getElementById('popup');
const btn_X = document.getElementById('btn_X');

let cont = 0;
let tamanho = 16;
let currentSlider = 0;
let currentItem = 0;

function hidesleider() {
slider.forEach(item => item.classList.remove('on'))
}

function showSlider () {
    slider[currentSlider].classList.add('on')
}

function nextSlider(){
    hidesleider()
    if(currentSlider == slider.length - 1){
        currentSlider = 0
    }else{
        currentSlider++
    }
    showSlider()
}

function prevSlider(){
    hidesleider()
    if(currentSlider == 0){
        currentSlider = slider.length - 1
    }else{
        currentSlider--
    }
    showSlider()
}

function AddOn(){

    if(cont == 0){
        acessibilidade.classList.add('hiden');
        seta.classList.add('vira');
        cont++
    }else{
        acessibilidade.classList.remove('hiden');
        seta.classList.remove('vira');
        cont--
    }
}

function aumentar(){
    tamanho++;
    document.body.style.fontSize=tamanho + 'px';
}
function diminuir(){
    
    if(document.body.style.fontSize >= '16px' ){
        tamanho--;
        document.body.style.fontSize=tamanho + 'px';
    }

}

control.forEach(control => {
    control.addEventListener('click', () =>{
        const isleft = control.classList.contains('arrow_left');

        if(isleft){
            currentItem -= 1;
        }else {
            currentItem += 1;
        }

        if(currentItem >= maxItem){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItem - 1;
        }
        item.forEach(item => item.classList.remove('current_item'));

        item[currentItem].scrollIntoView({ inline:"center", behavior: "smooth", block: "nearest"    });
        item[currentItem].classList.add("current_item");
        console.log("control clicked", isleft), currentItem;
    })
});

function com_contraste(){

        link.setAttribute('href', './Style_Home_Dark.css')
        img_chat.setAttribute('src' , './Img/Duvida-removebg-previewB.png')
}
function sem_contraste(){
        link.setAttribute('href', './Style_Home.css')
        img_chat.setAttribute('src' , './Img/Duvida-removebg-preview.png')
}

function abrir_chat(){
    if(chat.style.display == 'flex'){
        chat.style.display = 'none'
    }else{
        chat.style.display = 'flex'
    }
}
function fechar_chat(){
    chat.style.display = 'none'
}

btn_com_contraste.addEventListener('click' , com_contraste)
btn_sem_contraste.addEventListener('click' , sem_contraste)
btnNext.addEventListener('click' , nextSlider)
btnPrev.addEventListener('click' , prevSlider)
btn_FontA.addEventListener('click' , aumentar)
btn_FontD.addEventListener('click' , diminuir)
btn_On.addEventListener('click' , AddOn)
btn_chat.addEventListener('click', abrir_chat)
btn_X.addEventListener('click', fechar_chat)