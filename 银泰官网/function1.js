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


function scrollobj(){
			let body=document.body;
			let html=document.documentElement;
			body.scrollTop=1;
			html.scrollTop=1;
			// let scrollobj=document.body.scrollTop?document.body:document.documentElement;
			let obj;
			if(body.scrollTop==1){
				obj=body;
			}
			if(html.scrollTop==1){
				obj=html;
			}
			return obj;
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
        li[j].onmouseover=function(){
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
        if(num>7){
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
          num = 7;
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
  
 function tiaozhuan(lis,boxx,section,louctime,loucHeight,zi){
	    	const box=$(lis);
	    	const ziti=$(zi);
	    	// console.log(box);
	    	const btnbox=$(boxx)[0];
	    	const floor=$(section);
	    	// const nav=$(daohang)[0];
	    	const CH=document.documentElement.clientHeight;//屏幕高度
	    	// const loucyanse=colorArr;
	    	// const body1=$(head)
	    	let flagx=true;
	    	let flags=false;
	    	let sobj=scrollobj();
	    	//楼层点击跳转
	    	for(let i=0;i<box.length-1;i++){
	    		box[i].onclick=function(){	
		    		animate(sobj,{scrollTop:floor[i].offsetTop-50},louctime);
		    		}

		    	
		    	
	    	}

	    	box[9].onclick=function(){
		    		animate(sobj,{scrollTop:0},louctime);
		    	}
	    	window.onscroll=function(){
	    		for(let i=0;i<floor.length;i++){
	    			//楼层换色
	    			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
	    				for(let j=0;j<floor.length;j++){
	    					// box[j].style.background="#ccc";
                            // ziti[j].style.display="none";
                          
	    				}
	    				// box[i].style.background="#e5044f";
                        // ziti[i].style.display="block"
                        //  ziti[j].style.display="block";
	    			}
	    			//按序加载
	    			// if(floor[i].offsetTop>=CH+sobj.scrollTop){
	    			// 	let img=$("img",floor[i]);
	    			// 	for(let j=0;j<img.length;j++){
	    			// 		img[j].src=img[j].getAttribute(imgUrl);	
	    			// 	}   		
	    			// }
	    			
	    		}
	    		//楼层一定高度出现，一定高度消失
	    		if(sobj.scrollTop>=loucHeight){
	    			if(flagx){
	    				flagx=false;
	    				flags=true;
	    				animate(nav,{top:0},function(){
	    					flagx=true;
	    				});
	    			}
	    			btnbox.style.display="block";
	    			
	    		}else{
	    			if(flags){
	    				flags=false;
	    				flagx=true;
	    				animate(nav,{top:daohTop},function(){
	    					flags=true;
	    				});
	    			}
	    			btnbox.style.display="none";
	    		}
	    	}
	    	//导航1s后关闭
	    	// setTimeout(function(){
	    	// 	animate(nav,{top:daohTop},function(){
	    	// 		flags=true;
	    	// 	});
	    	// },daohtime)
	    }







	function jiedianlunbo(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime){
	    	const box=$(hezi)[0];
	    	const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
	    	const leftBen=$(zuokuohao)[0];
	    	const rightBen=$(youkuohao)[0];
	    	let n=num;
	    	let flag=true;
	    	// let t=setInterval(move,lunbotime);
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
	    	// box.onmouseover = function(){
	    	// 	clearInterval(t);
	    	// }
	    	// box.onmouseout = function(){
	    	// 	t=setInterval(move,lunbotime);
	    	// }
	    	// leftBen.onmouseover = function(){
	    	// 	clearInterval(t);
	    	// }
	    	// leftBen.onmouseout = function(){
	    	// 	t=setInterval(move,lunbotime);
	    	// }
	    	// rightBen.onmouseover = function(){
	    	// 	clearInterval(t);
	    	// }
	    	// rightBen.onmouseout = function(){
	    	// 	t=setInterval(move,lunbotime);
	    	// }
	    	
            // window.onblur = function(){
			// 	clearInterval(t);
			// }
			// window.onfocus = function(){
			// 	t=setInterval(move,lunbotime);
			// }
	    	
		}


//透明轮播图
//pic:轮播图 字符串的选择器
//bannerBox：通屏的banner盒子 字符串的选择器
//lis：轮播点 字符串的选择器
//colorArr：通屏banner盒子的所有盒子 数组["red","green","blue"]
//tuactiveopacity:banner图1的透明度
//liactivebgColor;轮播点1开始的颜色
//lubotime：轮播时间
//tuopacity：所有图片开始的透明度
//lisColor：除选中轮播点的颜色
//leftBen:左括号
//rightBen：右括号

function Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor,zuokuohao,youkuohao,bannerwaimian){
    const tu=$(pic);
    const banner=$(bannerBox)[0];
    const li=$(lis);
    const leftBen=$(zuokuohao)[0];
    const rightBen=$(youkuohao)[0];
    const color=colorArr;
    let bannerwai=$(bannerwaimian);
    tu[0].style.opacity=tuactiveopacity;
    li[0].style.background=liactivebgColor;
    // banner.style.background=color[0];
    var num=0;
    var flag=true;
    var t=setInterval(move,lubotime);

    function move(type="r"){
        flag=false;
        if(type=="r"){
            num++;
            if(num>3){
                num=0;
            }
        }else if(type=="l"){
            num--;
            if(num<0){
                num=3;
            }
        }
        for(let i=0;i<tu.length;i++){
            tu[i].style.opacity=tuopacity;
            li[i].style.background=lisColor;
            banner.style.background=color[i];
            bannerwai[i].classList.remove('one');
        }
        animate(tu[num],{opacity:tuactiveopacity},1000,function(){flag=true;});
        // tu[num].style.opacity=tuactiveopacity;
        li[num].style.background=liactivebgColor;
        // banner.style.background=color[num];
        bannerwai[num].classList.add('one');
    }
    banner.onmouseover=function(){
        clearInterval(t);

    }
    banner.onmouseout=function(){
        t=setInterval(move,lubotime);
    }
    for(let j=0;j<li.length;j++){
        li[j].onmouseover=function(){
            for(let i=0;i<tu.length;i++){
                tu[i].style.opacity=tuopacity;
                li[i].style.background=lisColor;
               // banner.style.background=color[i];
                bannerwai[i].classList.remove('one');
            }
            // tu[j].style.opacity=tuactiveopacity;
            animate(tu[j],{opacity:tuactiveopacity},1000);
            li[j].style.background=liactivebgColor;
           //banner.style.background=color[j];
            bannerwai[j].classList.add('one');
            num=j;
        }
    }
    leftBen.onmouseover=function(){
        clearInterval(t);
    }
    rightBen.onmouseover=function(){
        clearInterval(t);
    }
    leftBen.onclick=function(){
        if(flag){
            move("l");
        }
    }
    rightBen.onclick=function(){
        if(flag){
            move("r");
        }
    }
}












function scrollobj(){
			let body=document.body;
			let html=document.documentElement;
			body.scrollTop=1;
			html.scrollTop=1;
			// let scrollobj=document.body.scrollTop?document.body:document.documentElement;
			let obj;
			if(body.scrollTop==1){
				obj=body;
			}
			if(html.scrollTop==1){
				obj=html;
			}
			return obj;

		}


 // function tiaozhuan11(lis,section,louctime){
	//     	const box=$(lis);
	//     	// console.log(box);
	//     	// const btnbox=$(boxx)[0];
	//     	const floor=$(section);
	//     	// const nav=$(daohang)[0];
	//     	// const CH=document.documentElement.clientHeight;//屏幕高度
	//     	// const loucyanse=colorArr;
	//     	// let flagx=true;
	//     	// let flags=false;
	//     	let sobj=scrollobj();
	//     	//楼层点击跳转
	//     	for(let i=0;i<box.length;i++){
	//     		box[i].onclick=function(){
	// 	    		animate(sobj,{scrollTop:floor[i].offsetTop},louctime);
	// 	    	}
	//     	}
	//     }






function ZYlunbo(pic,img4,zuokuohao,youkuohao,lunbodian,chushiyanse,diyigeyanse){
    // 获取轮播图
    const tu = $(pic);
    // 获取banner图
    const img = $(img4)[0];
    // 获取左按钮
    const leftBtn = $(zuokuohao)[0];
    // 获取右按钮
    const rightBtn = $(youkuohao)[0];
    // 获取轮播点
    const lis = $(lunbodian);
    // 获取banner图的宽度
    const imgW = parseInt(window.getComputedStyle(img,null).width);


    // 初始化
    var flag=true;
    for(let i=0;i<tu.length;i++){
        tu[i].style.left=imgW + "px";
        // lis[i].style.background="orange";
    }
    tu[0].style.left=0;
    var now=0;
    var	next=0;
    lis[0].style.background=diyigeyanse;





    var t=setInterval(move,1000);

    function move(type="l"){
        flag=false;
        if(type =="l"){
            next++;
            if(next>tu.length-1){
                next=0;
            }
            // 轮播
            // for(let j=0;j<tu.length;j++){
            // 	lis[j].style.background="orange";
            // }
            // lis[next].style.background="#fff";

            tu[next].style.left=imgW+"px";
            animate(tu[now],{left:-imgW},500);
        }else if(type == "r"){
            next--;
            if(next<0){
                next=tu.length-1;
            }
            // 轮播
            // for(let j=0;j<tu.length;j++){
            // 	lis[j].style.background="orange";
            // }
            // lis[next].style.background="#fff";

            tu[next].style.left=-imgW+"px";
            animate(tu[now],{left:imgW},500);
        }


        animate(tu[next],{left:0},500,function(){
            flag=true;

            lis[next].style.background=diyigeyanse;
            lis[now].style.background=chushiyanse;
            now=next;

        });



    }



    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            clearInterval(t);
            if(flag){

                for(let j=0;j<lis.length;j++){
                    lis[j].style.background=chushiyanse;
                    tu[j].style.left=imgW+"px";
                }
                lis[i].style.background=diyigeyanse;
                tu[i].style.left=0;

                now=i;
                next=i;
            }

        }
    }


    img.onmouseover=function(){
        clearInterval(t);
    }

    img.onmouseout=function(){
        t=setInterval(move,1000);
    }

    leftBtn.onmouseover=function(){
        clearInterval(t);
    }

    leftBtn.onclick=function(){
        if(flag){
            move("l");
        }

    }

    rightBtn.onmouseover=function(){
        clearInterval(t);
    }

    rightBtn.onclick=function(){
        if(flag){
            move("r");
        }

    }









}










