//函数库

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
 // $(function(){});
    // $(".box");
	
	//选项卡 btn:选项卡按钮，con:选项卡内容
	function xuanxiangka(btn,con){
		const aa=$(btn);
	    const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    for(let j=0;j<bb.length;j++){
				    bb[j].style.display="none";
			    }
			    bb[i].style.display="block";
		    }
		    
		   aa[i].onmouseout=function(){

                   
			    bb[i].style.display="none";
			    
		    }
	    }
	}
	





 function xuanxiang(btn,con){
      const aa=$(btn);
      const bb=$(con);
      for(let i=0;i<aa.length;i++){
        aa[i].onmouseover=function(){
          for(let j=0;j<bb.length;j++){  
            bb[j].style.display="none";
          }
          bb[i].style.display="block";
        }
        aa[i].onmouseout=function(){
          bb[i].style.display="none";
        }
      }
    }





	//xuanxiangka(lis,div);

	//遮罩 a:外面的盒子 b:遮罩
	function zhezhao(a,b){
		a.onmouseover=function(){
			b.style.display="block";
		}
		a.onmouseout=function(){
			b.style.display="none";
		}
	}
	// zhezhao(box,zhezhao1);

    

    //层级轮播图 
    //pic:轮播图 字符串的选择器
    //bannerBox：通屏的banner盒子 字符串的选择器
    //lis：轮播点 字符串的选择器
    //colorArr：通屏banner盒子的所有盒子 数组["red","green","blue"]
    //tuactiveZ:banner图1的层级
    //liactivebgColor;轮播点1开始的颜色
    //lubotime：轮播时间
    //tuZ：所有图片开始的层级
    //lisColor：除选中轮播点的颜色
    //
    function Clunbo(pic,bannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lubotime,tuZ,lisColor){
	    const tu=$(pic);
		const banner=$(bannerBox)[0];
		const li=$(lis);
		// const color=colorArr;
		tu[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		// banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lubotime);

		function move(){
			num++;
			if(num>5){
				num=0;
			}
			for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
				// banner.style.background=color[i];
			}
			tu[num].style.zIndex=tuactiveZ;
			li[num].style.background=liactivebgColor;
			// banner.style.background=color[num];
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
				    tu[i].style.zIndex=tuZ;
				    li[i].style.background=lisColor;
				    // banner.style.background=color[i];
			    }
			    tu[j].style.zIndex=tuactiveZ;
			    li[j].style.background=liactivebgColor;
			    // banner.style.background=color[j];
			    num=j;
		    }
        }
    }
    // Zlunbo(".tu",".banner",".box ul li",["red","green","blue"],2,"#fff",1000,1,"orange");


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
    function tiaozhuan1(lis,section,louctime){
	    	const box=$(lis);
	    	// console.log(box);
	    	// const btnbox=$(boxx)[0];
	    	const floor=$(section);
	    	// const nav=$(daohang)[0];
	    	// const CH=document.documentElement.clientHeight;//屏幕高度
	    	// const loucyanse=colorArr;
	    	// let flagx=true;
	    	// let flags=false;
	    	let sobj=scrollobj();
	    	//楼层点击跳转
	    	for(let i=0;i<box.length;i++){
	    		box[i].onclick=function(){	
		    		animate(sobj,{scrollTop:floor[i].offsetTop},louctime);
		    	}
	    	}
	    }





















    function Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor){
    	const tu=$(pic);
		const banner=$(bannerBox)[0];
		const li=$(lis);
		// const leftBen=$(zuokuohao)[0];
		// const rightBen=$(youkuohao)[0];
		const color=colorArr;
		tu[0].style.opacity=tuactiveopacity;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var flag=true;
		// var t=setInterval(move,lubotime);

		function move(type="r"){
			flag=false;
			if(type=="r"){
				num++;
				if(num>5){
					num=0;
				}
			}else if(type=="l"){
				num--;
				if(num<0){
					num=5;
				}
			}
			for(let i=0;i<tu.length;i++){
				tu[i].style.opacity=tuopacity;
				li[i].style.background=lisColor;
				banner.style.background=color[i];
			}
			// animate(tu[num],{opacity:tuactiveopacity},1000,function(){flag=true});
			tu[num].style.opacity=tuactiveopacity;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		// banner.onmouseover=function(){
		// 	clearInterval(t);
        //
		// }
		// banner.onmouseout=function(){
		// 	t=setInterval(move,lubotime);
		// }
        for(let j=0;j<li.length;j++){
        	li[j].onmouseover=function(){
        		clearInterval(t);
				
			    for(let i=0;i<tu.length;i++){
				    tu[i].style.opacity=tuopacity;
				    li[i].style.background=lisColor;
				    banner.style.background=color[i];
			    }
			    tu[j].style.opacity=tuactiveopacity;
			    // animate(tu[j],{opacity:tuactiveopacity},1000);
			    li[j].style.background=liactivebgColor;
			    banner.style.background=color[j];
			    num=j;
		   
		   } 
        }
  //       leftBen.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// rightBen.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// leftBen.onclick=function(){
		// 	if(flag){
		// 		move("l");
		// 	}
		// }
		// rightBen.onclick=function(){
		// 	if(flag){
		// 		move("r");
		// 	}
		// }
    }


    //左右轮播图 
    //pic:轮播图 字符串的选择器
    //bannerBox：通屏的banner盒子 字符串的选择器
    //leftBen:左括号
    //rightBen：右括号
    //lunbodian：轮播点 字符串的选择器
    //liscolor:所有轮播点的颜色
    //lisactivebgColor;轮播点1开始的颜色
    //lubotime：轮播时间
    //luoboxiaotime:一次轮播中从左到右(从右到左)的时间
    function Zlunbo(pic,bannerBox,zuokuohao,youkuohao,lunbodian,liscolor,lisactivebgColor,lubotime,luoboxiaotime){
    	const tu=$(pic);
    	// alert(1);
		const img=$(bannerBox)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
		const lis=$(lunbodian);
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
			lis[0].style.background=liscolor;
		}
		tu[0].style.left=0;
		lis[0].style.background=lisactivebgColor;
		var t=setInterval(move,lubotime);
		var now=0;
		var next=0;
		var flag=true;
		for(let j=0;j<lis.length;j++){
        	lis[j].onmouseover=function(){
        		clearInterval(t);
        		if(flag){
        			for(let i=0;i<tu.length;i++){
					    lis[i].style.background=liscolor;
					    tu[i].style.left=imgw+"px";
				    }
				    tu[j].style.left=0;
				    lis[j].style.background=lisactivebgColor;
				    next=j;
				    now=j;
        		}
			    
		    }
        }
		function move(type="l"){
			flag=false;
			if(type=="l"){//left的首字母
				next++;
				if(next>tu.length-1){
					next=0;
				}
				tu[next].style.left=imgw+"px";
				animate(tu[now],{left:-imgw},luoboxiaotime);
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},luoboxiaotime);
			}
			animate(tu[next],{left:0},luoboxiaotime,function(){
				lis[now].style.background=liscolor;
				lis[next].style.background=lisactivebgColor;
				flag=true;
				now=next;
			});
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t=setInterval(move,lubotime);
		}
		leftBen.onmouseover=function(){
			clearInterval(t);
		}
		leftBen.onmouseout=function(){
			t=setInterval(move,lubotime);
		}
		rightBen.onmouseover=function(){
			clearInterval(t);
		}
		rightBen.onmouseout=function(){
			t=setInterval(move,lubotime);
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


	//左右多张图节点轮播
	//hezi:放图片的盒子
	//img:要轮播的每张图
	//zuokuohao:左括号
	//youkuohao：右括号
	//num:一次需要轮播的图片数量
    //lunbotime:轮播时间
	//lunboxiaotime:轮播小时间
	function jiedianlunbo(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime){
	    	const box=$(hezi)[0];
	    	const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
	    	const leftBen=$(zuokuohao)[0];
	    	const rightBen=$(youkuohao)[0];
	    	let n=num;
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

		//获取scrollTop前的对象
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


		//导航的出现于消失、楼层跳转、按序加载
	    //lis:每个楼层对应的窗口定位
	    //box:总的楼层跳转窗口定位
	    //section:每个楼层
	    //daohang:出现消失的窗口定位导航
	    //louctime:楼层 跳转时所需时间
	    //louccolor:所有楼层窗口定位的颜色
	    //colorArr:数组 每个楼层窗口定位选中时的颜色
	    //imgUrl:放图片地址的属性
	    //loucHeight:楼层出现的高度
	    //daohTop:导航消失时的定位Top（是负值）
	    //daohtime:导航多长时间消失
	    // tiaozhuan(".box li",".box","section","nav",500,"#eee",["red","red","red","red"],"imgUrl",600,-50,1000);
	    function tiaozhuan(head,lis,boxx,section,daohang,louctime,louccolor,colorArr,imgUrl,loucHeight,daohTop,daohtime){
	    	const box=$(lis);
	    	// console.log(box);
	    	const btnbox=$(boxx)[0];
	    	const floor=$(section);
	    	const nav=$(daohang)[0];
	    	const CH=document.documentElement.clientHeight;//屏幕高度
	    	const loucyanse=colorArr;
	    	const body1=$(head)
	    	let flagx=true;
	    	let flags=false;
	    	let sobj=scrollobj();
	    	//楼层点击跳转
	    	for(let i=0;i<box.length-1;i++){
	    		box[i].onclick=function(){	
		    		animate(sobj,{scrollTop:floor[i].offsetTop-50},louctime);
		    		}
       //          box[4].onclick=function(){	
		    	// 	animate(sobj,{scrollTop:head.offsetTop},louctime);
		    	// }
		    	
		    	
	    	}
	    	box[4].onclick=function(){	
		    		animate(sobj,{scrollTop:0},louctime);
		    	}
	    	window.onscroll=function(){
	    		for(let i=0;i<floor.length;i++){
	    			//楼层换色
	    			if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
	    				for(let j=0;j<floor.length;j++){
	    					box[j].style.background=louccolor;
	    				}
	    				box[i].style.background=loucyanse[i];
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
	    			// btnbox.style.display="block";
	    			btnbox.style.opacity=1;
	    		}else{
	    			if(flags){
	    				flags=false;
	    				flagx=true;
	    				animate(nav,{top:daohTop},function(){
	    					flags=true;
	    				});
	    			}
	    			// btnbox.style.display="none";
	    			btnbox.style.opacity=0;
	    		}
	    	}
	    	//导航1s后关闭
	    	setTimeout(function(){
	    		animate(nav,{top:daohTop},function(){
	    			flags=true;
	    		});
	    	},daohtime)
	    }
































function shangxialunbo11(imgbox,num){
    const box=$(imgbox)[0];
    var num;
   var t=setInterval(function(){
       
       let last=box.lastElementChild
       
       let first=box.firstElementChild
       
       box.insertBefore(last,first)
       
       last.style.height=0 
       
       animate(last,{height:num},500)
       
       
          
       },1000);  
       
   


}




