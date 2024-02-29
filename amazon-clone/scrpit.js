const imgs=document.querySelectorAll(".header-slider ul img");
const pre_btn=document.querySelector('.control-prev');
const nxt_btn=document.querySelector('.control-next');
let n=0;
function slidechanger(){
    for(i=0;i<imgs.length;i++)
    {
        imgs[i].style.display='none';
    }
    imgs[n].style.display='block';

}
slidechanger()
pre_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    slidechanger()
})
nxt_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1 )
    {
        n++;
    }
    else{
        n=0;
    }
    slidechanger()
})
const scrollcontainer = document.querySelectorAll('product');
for(const item of scrollcontainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltay;

    })
}