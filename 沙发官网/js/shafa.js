$(function(){
	//banner图轮播
	const box=$(".bannerTu")[0];
	const tu=$(".banner");
	tu[0].style.opacity=1;
	var num=0;
	var t=setInterval(move,2000);
	function move(){
		num++;
		if(num>tu.length-1){
			num=0;
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=0;
		}
	animate(tu[num],{opacity:1},500);
	}
	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseout=function(){
		t=setInterval(move,3000);
	}

	//精选电视安卓应用遮罩
	const di=$(".jingxuan .neikuan ul li");
	const zhe=$(".jingxuan .neikuan ul li .c1")
		for(let i=0;i<di.length;i++){
			di[i].onmouseover=function(){
				zhe[i].style.opacity=1;
			}
			di[i].onmouseout=function(){
				zhe[i].style.opacity=0;
			}
		} 

	// 智能电视选哪停哪
	const btn11=$(".zindex .xiaomi .xm1");
	const con=$(".zindex .xiaomi .xm1 .xm1_nr");
	for(let i=0;i<btn11.length;i++){
		btn11[i].onmouseover=function(){
			for(let j=0;j<btn11.length;j++){
				con[j].style.display="none";
			}
			con[i].style.display="block";
		}
	}

	//智能电视、电视盒子切换
	const qiehuan=$(".zdys h3");
	const yemian=$(".list");
	for(let i=0;i<qiehuan.length;i++){
		qiehuan[i].onclick=function(){
			for(let j=0;j<qiehuan.length;j++){
				qiehuan[j].classList.remove("active");
				yemian[j].classList.remove("zindex");
			}
		qiehuan[i].classList.add("active");
		yemian[i].classList.add("zindex");

		const btn11=$(".zindex .xiaomi .xm1");
		const con=$(".zindex .xiaomi .xm1 .xm1_nr");
		for(let k=0;k<btn11.length;k++){
			btn11[k].onmouseover=function(){
				for(let l=0;l<btn11.length;l++){
					con[l].style.display="none";
				}
				con[k].style.display="block";
			}
		}
		}
	}



})