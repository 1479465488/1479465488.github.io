// window.onload=function(){
// 	const lis1 = document.querySelector(".box");
// 	const div1 = document.querySelector(".box1");
// 	const lis = document.querySelectorAll(".xuanxiangka ul li");
// 	const div = document.querySelectorAll(".xuanxiangka ul li div");
//  zhe1(lis1,div1)
//  xuanxiangka(lis,div);
//  alert(1)
// }





// 函数简化
// function $(select,obj=document){
//    if(typeof select=="function"){
//    	window.onload=function(){
//    		select();
//    	}
//    }else if(typeof select=="string"){
//    	return obj.querySelectorAll(select);
//    }

// }

 function $(select,obj=document){
   if(typeof select=="function"){
   	// window.onload=function(){
   	// 	select();
   	// }
   window.addEventListener("load",select,false)	
   }else if(typeof select=="string"){
   	if(/^<\w+>$/.test(select)){
   	return document.createElement(select.slice(1,-1))
   	}else{
   	
   		return obj.querySelectorAll(select)
   	}
   	// if(/^<\w+>$/.text(select)){
   	// 	alert()
   	// }
   
   }

}












	// 选项卡   btn选项卡按钮  con选项卡内容
	function xuanxiangka(anniu,neirong){
 const  btn=$(anniu) 
   const con=$(neirong) 
	 for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				con[j].style.display="none";
			}
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			
			con[i].style.display="none";
		}
	}
}
	// 遮罩  btn是底下的块，con是遮罩的块
	function zhe1(kuai,zhezhao){
     const  btn=$(kuai) 
   const con=$(zhezhao) 

	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
		con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
		con[i].style.display="none";
		}
	}
}
	//函数简化
	// function $(select,obj=document){
	// 	if(typeof select=="function"){
	// 		window.onload=function(){
	// 			select();
	// 		}
	// 	}else if(typeof select=="string"){
	// 		return obj.querySelectorAll(select);
	// 	}
	// }
	//层级轮波
	//pic轮波图，填字符串的选择器；
	// bigbannerBox，通屏的banner盒子，填字符串的选择器；
	// lis，轮波点，填字符串的选择器；
	// colorArr，通屏banner盒子的所有颜色，传的是数组；["red","blue","green"]；
	// tuactiveZ,图片选中层级；
	// liactivebgColor,轮波点选中颜色；
	// lunboTime,时间间隔；
	// tuZ,图片普通层级；
	// lisColor,轮波点普通颜色；
	// bannertushuliang,banner图的数量-1；
	// type不传值时默认层级轮波，type==1时透明轮波


function Zlunbo(pic,bigbannerbox,lis,colorArr,tuactiveZ,liactivebgColor,Lunbotime,tuZ,lisColor,left,right){
      const tu= $(pic);
      const banner = $(bigbannerbox)[0];
      const li = $(lis);
      const color = colorArr;
      const leftBtn=$(left)[0];
      const rightBtn=$(right)[0];
      tu[0].style.zIndex=tuactiveZ;
      li[0].style.background=liactivebgColor;
      banner.style.background=color[0];

      var num = 0;
      var t = setInterval(move,Lunbotime);
      banner.onmouseover=function(){
        clearInterval(t);
      }
      banner.onmouseout=function(){
        t = setInterval(move,Lunbotime);
      }

      for(let j=0;j<li.length;j++){
        li[j].onclick=function(){
          for(let i=0;i<tu.length;i++){
            tu[i].style.zIndex=tuZ;
            li[i].style.background=lisColor;
            
          }
          tu[j].style.zIndex=tuactiveZ;
          li[j].style.background=liactivebgColor;
          banner.style.background=color[j];
          num=j;
        }
      }
        
      function move(){
        num++;
        if(num>4){
          num = 0;
        }
        for(let i=0;i<tu.length;i++){
          tu[i].style.zIndex=tuZ;
          li[i].style.background=lisColor;
          
        }
        tu[num].style.zIndex=tuactiveZ;
        li[num].style.background=liactivebgColor;
        banner.style.background=color[num];


      }
       function mov(){
        num--;
        if(num<0){
          num = 4;
        }
        for(let i=0;i<tu.length;i++){
          tu[i].style.zIndex=tuZ;
          li[i].style.background=lisColor;
          
        }
        tu[num].style.zIndex=tuactiveZ;
        li[num].style.background=liactivebgColor;
        banner.style.background=color[num];
}

      leftBtn.onmouseover=function(){
				clearInterval(t);
			}
		rightBtn.onmouseover=function(){
				clearInterval(t);
			}	
		rightBtn.onclick=function(){
				

 

move()
        }
        leftBtn.onclick=function(){
				

 

mov()
        }

	}

  









































	
	// function Zlunbo(pic,bigbannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lunboTime,tuZ,lisColor,bannertushuliang,type=0){
		
	// 	const tupian=$(pic);
	// 	const banner=$(bigbannerBox)[0];
	// 	const li=$(lis);
	// 	const color=colorArr;
	// 	tupian[0].style.zIndex=tuactiveZ;
	// 	li[0].style.background=liactivebgColor;
	// 	banner.style.background=color[0];
	// 	var num=0;
	// 	var t=setInterval(move,lunboTime);
	// 	banner.onmouseover=function(){
	// 		clearInterval(t);
	// 	}
	// 	banner.onmouseout=function(){
	// 		t=setInterval(move,lunboTime);
	// 	}
	// 	for(let j=0;j<li.length;j++){
	// 		li[j].onmouseover=function(){
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.zIndex=tuZ;
	// 				li[i].style.background=lisColor;
	// 			}
	// 		tupian[j].style.zIndex=tuactiveZ;
	// 		li[j].style.background=liactivebgColor;
	// 		banner.style.background=color[j];
	// 		num=j;
	// 		}
	// 		}
	// 		function move(){
	// 		num++;
	// 		if(num>bannertushuliang){
	// 			num=0;
	// 		}
	// 		for(let i=0;i<tupian.length;i++){
	// 			tupian[i].style.zIndex=tuZ;
	// 			li[i].style.background=lisColor;
	// 		}
	// 		tupian[num].style.zIndex=tuactiveZ;
	// 		li[num].style.background=liactivebgColor;
	// 		banner.style.background=color[num];
	// 	}


	// 	//透明
	// 	if(type==1){
	// 		const tupian=$(pic);
	// 		const banner=$(bigbannerBox)[0];
	// 		const li=$(lis);
	// 		const color=colorArr;
	// 		tupian[0].style.opacity=tuactiveZ;
	// 		li[0].style.background=liactivebgColor;
	// 		banner.style.background=color[0];
	// 		var num=0;
	// 		var t=setInterval(move,lunboTime);
	// 		banner.onmouseover=function(){
	// 			clearInterval(t);
	// 		}
	// 		banner.onmouseout=function(){
	// 			t=setInterval(move,lunboTime);
	// 		}
	// 		for(let j=0;j<li.length;j++){
	// 			li[j].onmouseover=function(){
	// 				for(let i=0;i<tupian.length;i++){
	// 					tupian[i].style.opacity=tuZ;
	// 					li[i].style.background=lisColor;
	// 				}
	// 			tupian[j].style.opacity=tuactiveZ;
	// 			animate(tupian[j],{opacity:0},500);
	// 			li[j].style.background=liactivebgColor;
	// 			banner.style.background=color[j];
	// 			num=j;
	// 			}
	// 			}
	// 			function move(){
	// 			num++;
	// 			if(num>bannertushuliang){
	// 				num=0;
	// 			}
	// 			for(let i=0;i<tupian.length;i++){
	// 				tupian[i].style.opacity=tuZ;
	// 				li[i].style.background=lisColor;
	// 			}
	// 			tupian[num].style.opacity=tuactiveZ;
	// 			animate(tupian[num],{opacity:0},500);
	// 			li[num].style.background=liactivebgColor;
	// 			banner.style.background=color[num];
	// 		}
	// 	}
	// }
function dianlunbo(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime){
			const imgBox=$(hezi)[0];
			const imgW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);

			const left=$(zuokuohao)[0];
			const right=$(youkuohao)[0];
			var n=num;
			var flag=true;


			var t=setInterval(move,lunbotime);

			function move(type="r"){
				flag=false;
				if(type=="r"){
					
					animate(imgBox,{left:-imgW*n},lunboxiaotime,function(){
						for(let i=0;i<n;i++){
							let firstChild=imgBox.children[0];
							imgBox.appendChild(firstChild);
							
						}
						imgBox.style.left=0;
						flag=true;
					})
				}else if(type=="l"){
					for(let i=0;i<n;i++){
						let lastChild=imgBox.lastElementChild;
						let firstChild=imgBox.children[0];
						imgBox.insertBefore(lastChild,firstChild);
					}	
					imgBox.style.left=-imgW*n+"px";
					animate(imgBox,{left:0},lunboxiaotime,function(){
						flag=true;
					})
				}
				
					
			}

			imgBox.onmouseover=function(){
				clearInterval(t);
			}
			imgBox.onmouseout=function(){
				t=setInterval(move,lunbotime);
			}
			left.onmouseover=function(){
				clearInterval(t);
			}
			right.onmouseover=function(){
				clearInterval(t);
			}
			left.onclick=function(){
				if(flag){
					move("l");
				}
				
			}
			right.onclick=function(){
				if(flag){
					move("r");
				}
				
			}








		}
function dianlunbo1(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime,lunbodian){
			const imgBox=$(hezi)[0];
			const imgW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
            const lis=$(lunbodian);
			const left=$(zuokuohao)[0];
			const right=$(youkuohao)[0];
			var n=num;
			var flag=true;


			// var t=setInterval(move,lunbotime);

			function move(type="r"){
				flag=false;
				if(type=="r"){
					
					animate(imgBox,{left:-imgW*n},lunboxiaotime,function(){
						for(let i=0;i<n;i++){
							let firstChild=imgBox.children[0];
							imgBox.appendChild(firstChild);
							
						}
						imgBox.style.left=0;
						flag=true;
					})
				}else if(type=="l"){
					for(let i=0;i<n;i++){
						let lastChild=imgBox.lastElementChild;
						let firstChild=imgBox.children[0];
						imgBox.insertBefore(lastChild,firstChild);
					}	
					imgBox.style.left=-imgW*n+"px";
					animate(imgBox,{left:0},lunboxiaotime,function(){
						flag=true;
					})
				}
				
					
			}

			// imgBox.onmouseover=function(){
			// 	clearInterval(t);
			// }
			// imgBox.onmouseout=function(){
			// 	t=setInterval(move,lunbotime);
			// }
			// left.onmouseover=function(){
			// 	clearInterval(t);
			// }
			// right.onmouseover=function(){
			// 	clearInterval(t);
			// }
			left.onclick=function(){
				if(flag){
					move("l");
				}
				
			}
			right.onclick=function(){
				if(flag){
					move("r");
				}
				
			}



 for(let j=0;j<lis.length;j++){
        lis[j].onclick=function(){
          // 当j=2的时候;第3个按钮
          // if(j>now){
          //   next=j-1;
          //   if(next<0){
          //     next=img.length-1
          //   }
            move("l");
          // }
          // else if(j<now){
          //        next=j+1;

          //        move("r");   
          // }

           
            
          }

          
          
                     
        }
           
      
















     










		}















































































// 左右节点轮播

//  $(function(){
            
//             const box = $('.box ul')[0];
//             // const win = $('.win')[0];
//             // const right = $('.right')[0];
//             // const left = $('.left')[0];
           
//             var flag=true;


//             var t = setInterval(move,1000);
// // 从右到左
//             function move(type = 'right') {
                
//                  flag=false;
//                 if (type == 'right') {
                    
//                     let first=box.firstElementChild
//                     animate(first, {width:0}, 500, function () {
//                         box.appendChild(first);
//                         first.style.width =296+'px';
//                     })
//                     flag=true;
//                 }
//                 else if(type=='left') {
                   
//                     let first=box.firstElementChild
//                     let last=box.lastElementChild
//                     last.style.width=0;
//                     box.insertBefore(last,first);
//                     animate(last,{width:296}, 500)
                    
//                 }
//             }

//             box.onmouseover = function () {
//                 clearInterval(t);
//             }
//             box.onmouseout = function () {
//                  t = setInterval(move, 1000);
//             }
//             // left.onmouseover = function () {
//             //     clearInterval(t);
//             // }
//             // right.onmouseover = function () {
//             //     clearInterval(t);
//             // }


//             // right.onclick = function () {
//             //     if(flag){
//             //         move('left');
//             //     }

//             // }
//             // left.onclick = function () {
//             //     if(flag){
//             //     move('right');
//             //     }
//             // }
//         })






































function jiedianlunbo(hezi,img,zuokuohao,youkuohao,nu,lunbotime,lunboxiaotime){
	    	const box=$(hezi)[0];
	    	const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
	    	const leftBen=$(zuokuohao)[0];
	    	const rightBen=$(youkuohao)[0];
	    	let n=nu;
	    	let flag=true;
	    	let t=setInterval(move,lunbotime);
	    	function move(type="l"){
	    		flag=false;
	    		if(type=="l"){
		    		animate(box,{left:-boxW*n},lunboxiaotime,function(){
		    			for(let i=0;i<n;i++){
		    				let firstChild=box.firstElementChild;
		    				box.appendChild(firstChild);
		    			}
		    			box.style.left=0;
		    			flag=true;
		    		})
	    		}
	    		if(type=="r"){
		    		for(let i=0;i<n;i++){
		    			let lastChild=box.lastElementChild;
		    			let firstChild=box.firstElementChild;
		    			box.insertBefore(lastChild,firstChild);
		    		}
			    	box.style.left=-boxW*n+"px";
		    		animate(box,{left:0},lunboxiaotime,function(){
		    			flag=true;
		    		});
	    		}
	    	}
	    	leftBen.onclick = function(){
	    		if(flag){
	    			move("r");
	    		}
	    	}
	    	rightBen.onclick = function(){
	    		if(flag){
	    			move("l");
	    		}
	    	}
	    	box.onmouseover = function(){
	    		clearInterval(t);
	    	}
	    	box.onmouseout = function(){
	    		t=setInterval(move,lunbotime);
	    	}
	    	leftBen.onmouseover = function(){
	    		clearInterval(t);
	    	}
	    	leftBen.onmouseout = function(){
	    		t=setInterval(move,lunbotime);
	    	}
	    	rightBen.onmouseover = function(){
	    		clearInterval(t);
	    	}
	    	rightBen.onmouseout = function(){
	    		t=setInterval(move,lunbotime);
	    	}
	    	
	    	window.onblur = function(){
				clearInterval(t);
			}
			window.onfocus = function(){
				t=setInterval(move,lunbotime);
			}
	    	
		}


function zuoyoulunbo(hezi,tupian,lunbodian11,zuokuohao,youkuohao){

    let banner = $(hezi)[0];
    let li = $(tupian);
    let lunbodian =$(lunbodian11);
    let width = parseInt(window.getComputedStyle(banner,null).width);
    // console.log(width)
    let left = $(zuokuohao)[0];
    let right =$(youkuohao)[0] ;
    let now = 0;
    let next = 0;
    let flag = true;

    function move(fx = 'right') {
        if (fx == 'right') {
            if (flag) {
                flag = false;
                next = now + 1;
                if (next >= li.length) {
                    next = 0
                }
                li[next].style.left = '100%';
                animate(li[now], {left: -width}, 500)
                animate(li[next], {left: 0}, 500, function () {
                    flag = true;
                })
            }

        }
        if (fx == 'left') {
            if (flag) {
                flag = false
                next = now - 1;
                if (next < 0) {
                    next = li.length - 1
                }
                li[next].style.left = '-100%';
                animate(li[now], {left: width}, 500)
                animate(li[next], {left: 0}, 500, function () {
                    flag = true;
                })
            }

        }
        for (let i = 0; i < li.length; i++) {
            lunbodian[i].classList.remove('pink');
        }
        lunbodian[next].classList.add('pink');
        now = next;
    }

   // let t = setInterval(move, 1000);
    // banner.onmousemove = function () {
    //     clearInterval(t)
    // }
    // banner.onmouseout = function () {
    //     t = setInterval(move, 1000)
    // }
    right.onclick = function () {
        move();
        // if(next=3){
         //    return;
		// }
		console.log(now)
    }
    left.onclick = function () {
        move(fx = 'left')
    }
    let deng
    lunbodian.forEach(function (value, index) {
        value.onclick = function () {
            deng = setTimeout(function () {
                if (index > now) {
                    li[index].style.left = '100%';
                    animate(li[now], {left: -width}, 500)
                    animate(li[index], {left: 0}, 500)
                } else if (index < now) {
                    li[index].style.left = '-100%';
                    animate(li[now], {left: width}, 500)
                    animate(li[index], {left: 0}, 500)
                }
                for (let i = 0; i < li.length; i++) {
                    lunbodian[i].classList.remove('pink')
                }
                lunbodian[index].classList.add('pink')
                now = index;
            }, 200)
        }
        value.onmouseout = function () {
            clearTimeout(deng)
        }
    })





}






     























		