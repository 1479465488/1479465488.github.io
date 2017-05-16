alert(1);
	const zhe =$(".fangkuai");
	const box =$(".shouyenav");
	xuanxiangka(zhe,box);

	// xuanxiangka(".fangkuai",".shouyenav");
	$(function(){
		
		// Zlunbo(".banner ul .bannertup",".banner",".xiaanniu ul li",["#fff"],2,"#A10000",1500,1,"#ddd");



		// 获取轮播图
			const tu = $(".banner ul .bannertup");
			// 获取banner图
			const img = $(".banner")[0];
			// 获取左按钮
			const leftBtn = $(".anniuz")[0];
			// 获取右按钮
			const rightBtn = $(".anniuy")[0];
			// 获取轮播点
			const lis = $(".xiaanniu ul li"); 
			// 获取banner图的宽度
			const imgW = parseInt(window.getComputedStyle(banner,null).width);
			

			// 初始化
			var flag=true;
			for(let i=0;i<tu.length;i++){
				tu[i].style.left=imgW + "px";
				// lis[i].style.background="orange";
			}
			tu[0].style.left=0;
			var now=0;
			var	next=0;
			lis[0].style.background="#dddddd";





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

					lis[next].style.background="#dddddd";
					lis[now].style.background="#A10000";
					now=next;
					
				});

				

			}


			
				

			for(let i=0;i<lis.length;i++){
				lis[i].onmouseover=function(){
					clearInterval(t);
					if(flag){
						for(let j=0;j<lis.length;j++){
							lis[j].style.background="#A10000";
							tu[j].style.left=imgW+"px";
						}
						lis[i].style.background="#ddd";
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
		
	})
