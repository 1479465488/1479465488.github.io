window.onload=function(){


    //banner
    let ban=document.querySelector('.banner');
    let li=ban.querySelectorAll('li');
    let cir=ban.querySelectorAll('.circle1');
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
    let t=setInterval(move,1000);
    ban.onmousemove=function () {
        clearInterval(t)
    }
    ban.onmouseout=function () {
        t=setInterval(move,1000)
    }
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


  
   

    // 选项卡效果
    let top=document.querySelector('.top')
    let tops=top.querySelectorAll('.top2')
    let topul=top.querySelectorAll('.top2 > ul')
    let topdiv=top.querySelectorAll('.top2 > .jiao')
    // console.log(topdiv)
    tops.forEach(function (value,index) {
        value.onmouseover=function () {
            for(let i=0;i<tops.length;i++){
                topul[i].style.display='none';
                topdiv[i].style.display='none';
            }
            topul[index].style.display='block'
            topdiv[index].style.display='block'
        }
        value.onmouseout=function () {
            for(let i=0;i<tops.length;i++){
                topul[i].style.display='none';
                topdiv[i].style.display='none';
            }
        }
    })


    //最上面
    let topa=document.querySelectorAll('.fh')
    let topdivs=document.querySelectorAll('.fh > div')
    topa.forEach(function (value, index) {
        value.onmouseover=function () {
            for(let i=0;i<2;i++){
                topdivs[i].style.display='none'
            }
            topdivs[index].style.display='block'
        }
        value.onmouseout=function () {
            for(let i=0;i<2;i++){
                topdivs[i].style.display='none'
            }
        }
    })

    //城市
    let city=document.querySelector('.city');
    let many=document.querySelector('.manycity');
    city.onclick=function () {

    }
    document.onclick=function (e) {
        let obj=e.target;
        if(obj.innerHTML=="太原"||obj.className=='xiaosanjiao'||obj.className=='city'){
            many.style.display='block'
            console.log(obj)
        }else{
            many.style.display='none'
        }
    }

    //公告
    let news=document.querySelector(".news")
    let as=document.querySelectorAll('.a');
    let a1=as[0].querySelectorAll('a');
    let a2=as[1].querySelectorAll('a');
    let biaoti=document.querySelectorAll('.biaoti--');
    let biaoti1=[biaoti[0],biaoti[1],biaoti[2]]
    let biaoti2=[biaoti[3],biaoti[4],biaoti[5]]
    let lefta=document.querySelector('.last > a');
    let righta=document.querySelector('.last > a:nth-child(2)');
    let x=0
    let g;
    // console.log(a1,a2,biaoti1,biaoti2)
    function gg(fx='right') {
        if(fx=='left'){
            x++
            if(x>=a1.length){
                x=0
            }
        }
        if(fx=='right'){
            x--
            if(x<0){
                x=a1.length-1
            }
        }
        for(let i=0;i<a1.length;i++){
            a1[i].classList.remove('hi')
            a2[i].classList.remove('hi')
            biaoti1[i].classList.remove('hi')
            biaoti2[i].classList.remove('hi')
        }
        a1[x].classList.add('hi')
        a2[x].classList.add('hi')
        biaoti1[x].classList.add('hi')
        biaoti2[x].classList.add('hi')
    }
    g=setInterval(gg,2000)
    lefta.onclick=function () {
        gg('left')
    }
    righta.onclick=function () {
        gg()
    }
    news.onmouseover=function(){
        clearInterval(g)
    }
      news.onmouseout=function(){
        g=setInterval(gg,2000)
    }
}





window.onload=function() {


    const box = document.querySelector(".box222");
    const imgBox = document.querySelector(".box222 ul");
    const imgW = parseInt(window.getComputedStyle(document.querySelector(".box222 ul li"), null).width);

    const left = document.querySelector(".left11");
    const right = document.querySelector(".right11");
    var n = 1;
    var flag = true;


    var t = setInterval(move, 1000);
    //var t1=setInterval(move("l"),1000);
    function move(type="r") {
        flag = false;
        if (type == "r") {

            animate(imgBox, {left: -imgW * n}, 500, function () {
                for (let i = 0; i < n; i++) {
                    let firstChild = imgBox.children[0];
                    imgBox.appendChild(firstChild);

                }
                imgBox.style.left = 0;
                flag = true;
            })
        } else if (type == "l") {
            for (let i = 0; i < n; i++) {
                let lastChild = imgBox.lastElementChild;
                let firstChild = imgBox.children[0];
                imgBox.insertBefore(lastChild, firstChild);
            }
            imgBox.style.left = -imgW * n + "px";
            animate(imgBox, {left: 0}, 500, function () {
                flag = true;
            })
        }


    }

    box.onmouseover = function () {
        clearInterval(t);
    }
    box.onmouseout = function () {
        t = setInterval(move, 1000);
    }

    left.onclick = function () {
        if (flag) {
            move("l")

        }


    }
    // move("l")


    right.onclick = function () {
        if (flag) {
            move("r");
        }

    }


}




