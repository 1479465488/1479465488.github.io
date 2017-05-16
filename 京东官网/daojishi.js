$(function(){
			const h=$(".daojishi span:nth-child(2)")[0];
			const m=$(".daojishi span:nth-child(4)")[0];
			const s=$(".daojishi span:nth-child(6)")[0];
class time{
				constructor(hEle,mEle,sEle){
					this.hEle=hEle;
					this.mEle=mEle;
					this.sEle=sEle;
				    // this.play();
				    // this.dEle=dEle;
				    // this.hEle=hEle;
				    // this.mEle=mEle;
				    // this.sEle=sEle;
				}
play(){
					// this.getTime()
					this.writes(this.getTime());
					this.update()
					// this.sheng()
				}

getTime(){
					let nowtime=new Date();
					
					let h=nowtime.getHours();
					let m=nowtime.getMinutes();
					let s=nowtime.getSeconds();
				    
					
					let map=new Map();
					map.set("h",h);
					map.set("m",m);
					map.set("s",s);
					
					return map;         
				}
writes(map){
					this.hEle.innerHTML=map.get("h");
					this.mEle.innerHTML=map.get("m");
					this.sEle.innerHTML=map.get("s");
				}
               update(){
               	let that=this;
               	setInterval(function(){
                 that.writes(that.getTime());
               	},1000)
               }

}
			let newtime=new time(h,m,s);
			// console.log(newtime.getTime());
            // newtime.play(console.log(newtime.getTime()));
			newtime.play();

})


























