const bodyele=document.querySelector('body');
bodyele.addEventListener('mousemove',(event)=>{
    const xPos=event.offsetX;
    const yPos=event.offsetY;
    const spanE1=document.createElement('span');
    spanE1.style.left=xPos+'px';
    spanE1.style.top=yPos+'px';
    bodyele.appendChild(spanE1);
    const size=Math.random()*100;
    spanE1.style.height=size+'px';
    spanE1.style.width=size+'px';
    setTimeout(()=>{
        spanE1.remove();
    },3000)
});