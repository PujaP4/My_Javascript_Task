const imgs = document.getElementById('imgs');
const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');

const img = document.querySelectorAll('#imgs img');

// imgs.style.transform = 'translateX(-900px)'
let idx = 0;

function runInterval(){
    idx++;
    changeImage(); 
}

let interval = setInterval(()=>{
    runInterval();
},2000); //miliseconds delay

function changeImage(){
    if(idx >img.length-1){
        idx=0;
    }else if(idx < 0){
        idx = img.length -1;
    }
    imgs.style.transform = `translate(${-idx*400})`
}

rightBtn.addEventListener('click', ()=>{
    idx++;
    console.log("clicked");
    changeImage();
})


leftBtn.addEventListener('click', ()=>{
    idx--;
    console.log("clicked");
    changeImage();
})

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(runInterval(),2000);
}



























