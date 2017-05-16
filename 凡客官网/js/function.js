// 函数库
  function $(select,obj=document){
    if(typeof select == "function"){
      window.onload=function(){
        select();
      }
    }else if(typeof select=="string"){
    return obj.querySelectorAll(select);
    }
  }












// 选项卡
      // xuanxiangka(btn,con)
      // btn 选项卡按钮
      // con 选项卡

  //     function xuanxiangka(btn,con){
  //   for(let i=0;i<btn.length;i++){
  //     btn[i].onmouseover=function(){
  //       con[i].style.display="block";
  //     }
  //     btn[i].onmouseout=function(){
  //       con[i].style.display="none";
  //     }
  //   }
  // }


    // function xuanxiangka(btn,con){
    //   for(let i=0; i<btn.length;i++){
		  //   btn[i].onmouseover=function(){
		  //     for(let j=0;j<con.length;j++){
  		// 		  con[j].style.display="block";
		  //     }
  		// 	 con[i].style.display="none";
  		//   }	
  	 //  }
    // }

    function xuanxiangka(btn,con){
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





// 遮罩
      // btn是父级
      // con是子级
    function zhezhao(btn,con){
    btn.onmouseover=function(){
      con.style.display="block";
      }
    btn.onmouseout=function(){
      con.style.display="none";
      }
    }



  function zhe1(btn,con){
    for(let i=0;i<btn.length;i++){
      btn[i].onmouseover=function(){
        
        con[i].style.display="block";
      }
      btn[i].onmouseout=function(){
        
        con[i].style.display="none";
      }
    }
  }



// 层级轮播图
// pic            轮播图                   (字符串的选择器)
// bigbannerbox   通屏的banner盒子         (字符串的选择器)
// lis            轮播点                   (字符串的选择器)
// colorArr       通屏banner盒子的所以颜色 (数组["red","blue"])
// tuactiveZ      变化的层级               (Number)
// liactivebgColor轮播点变化的背景色       (字符串的选择器)
// Lunbotime      轮播时间                 (Number毫秒)
// tuZ            默认层级                 (Number)
// lisColor       轮播点默认的背景色       (字符串的选择器)
  function Zlunbo(pic,bigbannerbox,lis,colorArr,tuactiveZ,liactivebgColor,Lunbotime,tuZ,lisColor){
      const tu= $(pic);
      const banner = $(bigbannerbox)[0];
      const li = $(lis);
      const color = colorArr;

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
        if(num>6){
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

    }
