const horror = document.querySelector(".horror");
const comedy = document.querySelector(".comedy");
const action = document.querySelector(".action");
const anime = document.querySelector(".anime");
const tvshows = document.querySelector(".tvshows");

let index = 1;

setInterval(function(){
        horror.style.backgroundImage = horror_img[index].tag;
        comedy.style.backgroundImage = comedy_img[index].tag;
        action.style.backgroundImage = action_img[index].tag;
        anime.style.backgroundImage = anime_img[index].tag;
        tvshows.style.backgroundImage = tvshows_img[index].tag;
        if (index+1>9){
            index=0;
        }else{
            index++;
        }
}, 2500);

//Slider

const horrorContainers = [document.querySelector('.container')];
const comedyContainers = [document.querySelector('.comedy_sect .container')];
const actionContainers = [document.querySelector('.action_sect .container')];
const animeContainers = [document.querySelector('.anime_sect .container')];
const tvshowsContainers = [document.querySelector('.tvshows_sect .container')];
const nxtBtn = document.querySelector('.nxt-btn');
const preBtn = document.querySelector('.pre-btn');
const nxtBtn2 = document.querySelector('.comedy_sect .nxt-btn');
const preBtn2 = document.querySelector('.comedy_sect .pre-btn');
const nxtBtn3 = document.querySelector('.action_sect .nxt-btn');
const preBtn3 = document.querySelector('.action_sect .pre-btn');
const nxtBtn4 = document.querySelector('.anime_sect .nxt-btn');
const preBtn4 = document.querySelector('.anime_sect .pre-btn');
const nxtBtn5 = document.querySelector('.tvshows_sect .nxt-btn');
const preBtn5 = document.querySelector('.tvshows_sect .pre-btn');

horrorContainers.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;
    nxtBtn.addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    })
    preBtn.addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    })
})

comedyContainers.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;
    nxtBtn2.addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    })
    preBtn2.addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    })
})

actionContainers.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;
    nxtBtn3.addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    })
    preBtn3.addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    })
})

animeContainers.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;
    nxtBtn4.addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    })
    preBtn4.addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    })
})

tvshowsContainers.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    let containerWidth = containerDimesions.width;
    nxtBtn5.addEventListener('click',() =>{
        item.scrollLeft += containerWidth;
    })
    preBtn5.addEventListener('click',() =>{
        item.scrollLeft -= containerWidth;
    })
})

