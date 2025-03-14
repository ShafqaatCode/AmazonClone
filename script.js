const imgs = document.querySelectorAll(".header-slider ul img")
const prev_btn = document.querySelector(".header-slider .control_Prev")
const next_btn = document.querySelector(".header-slider .control_Next")


let n = 0;
function changeSlide(){
    for(let i=0;i<imgs.length;i++)
    {
        imgs[i].style.display = "none";
    }

    imgs[n].style.display = "block"
}


prev_btn.addEventListener("click" , (e)=>{
    if(n > 0)
    {
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
});


next_btn.addEventListener('click',(e) => {
    if(n < imgs.length - 1)
    {
        n++;
    }
    else
    {
        n = 0;
    }

    changeSlide()
})

// changeSlide()

const scrolContianer = document.querySelectorAll(".products")
for(const item  of scrolContianer)
{
    item.addEventListener('wheel', (e)=>{
        e.preventDefault()
        item.scrollLeft += e.deltaY;
    })
}