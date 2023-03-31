const q_deets = document.querySelector(".q_deets");
const m_deets = document.querySelector(".m_deets");
const s_deets = document.querySelector(".s_deets");
const quiz_read = document.querySelector(".quiz_read");
const movies_read = document.querySelector(".movies_read");
const details_read = document.querySelector(".details_read");

m_deets.innerHTML = "";
s_deets.innerHTML = "";
q_deets.innerHTML = "";

function showDetails(index){
    let details_tag = details[index].tag;
    console.log(details[index].tag);
    if(index==0){
        m_deets.innerHTML = "";
        s_deets.innerHTML = "";
        q_deets.innerHTML = details_tag;
        quiz_read.classList.add("hide");
        movies_read.classList.remove("hide");
        details_read.classList.remove("hide");
    }else if(index==1){
        q_deets.innerHTML = "";
        s_deets.innerHTML = "";
        m_deets.innerHTML = details_tag;
        movies_read.classList.add("hide");
        quiz_read.classList.remove("hide");
        details_read.classList.remove("hide");
    }else if(index==2){
        q_deets.innerHTML = "";
        m_deets.innerHTML = "";
        s_deets.innerHTML = details_tag;
        details_read.classList.add("hide");
        movies_read.classList.remove("hide");
        quiz_read.classList.remove("hide");
    }
}

quiz_read.onclick= ()=>{
    let index = 0;
    showDetails(index);
}

movies_read.onclick= ()=>{
    let index = 1;
    showDetails(index);
}

details_read.onclick= ()=>{
    let index = 2;
    showDetails(index);
}
