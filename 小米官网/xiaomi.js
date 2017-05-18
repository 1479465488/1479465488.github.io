window.onload=function(){




let ban=document.querySelector('.tushu');

let li=ban.querySelectorAll('.tushu ul li');

let cir=ban.querySelectorAll('.shulunbodian1');
let width=parseInt(window.getComputedStyle(ban,null).width)
// console.log(width)
let left=ban.querySelector('.left');
let right=ban.querySelector('.right');
let now=0;
let next=0;
let flag=true;
function move(fx='right') {
    if(fx=='right'){
        if(flag){
            flag=false;
            next=now+1;
            if(next>=li.length){
                next=0
            }
            li[next].style.left='100%';
            animate(li[now],{left:-width},500)
            animate(li[next],{left:0},500,function () {
                flag=true;
            })
        }

    }
    if(fx=='left'){
        if(flag){
            flag=false
            next=now-1;
            if(next<0){
                next=li.length-1
            }
            li[next].style.left='-100%';
            animate(li[now],{left:width},500)
            animate(li[next],{left:0},500,function () {
                flag=true;
            })
        }

    }
    for(let i=0;i<li.length;i++){
        cir[i].classList.remove('pink')
    }
    cir[next].classList.add('pink')
    now=next;
}
// let t=setInterval(move,1000);
// ban.onmousemove=function () {
//     clearInterval(t)
// }
// ban.onmouseout=function () {
//     t=setInterval(move,1000)
// }
right.onclick=function () {
    move()
}
left.onclick=function () {
    move(fx='left')
}
let deng
cir.forEach(function (value,index) {
    value.onclick=function () {
        deng=setTimeout(function () {
            if(index>now){
                li[index].style.left='100%';
                animate(li[now],{left:-width},500)
                animate(li[index],{left:0},500)
            }else if(index<now){
                li[index].style.left='-100%';
                animate(li[now],{left:width},500)
                animate(li[index],{left:0},500)
            }
            for(let i=0;i<li.length;i++){
                cir[i].classList.remove('pink')
            }
            cir[index].classList.add('pink')
            now=index;
        },200)
    }
    value.onmouseout=function () {
        clearTimeout(deng)
    }
})







