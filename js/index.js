/*等文档完成之后再执行js代码*/
/*$(document).ready(function(){});*/
$(function(){
	var nowpage=0;
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
	//非jQuery自带，是引入的插件
	//手指触屏滑动事件
	$(".content").swipe({
		swipe:function(event,direction,distance,duration,figerCount){
			console.log(direction);
			if(direction=="up"&&nowpage<3){
				nowpage++;
			}else if(direction=="down"&&nowpage>0){
				nowpage--;
			}
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				if(nowpage==1){
					$(".page2-Farm").fadeIn(1000,function(){
						$(".page2-IT").fadeIn(1000);
					});
				}else{
					$(".page2-Farm").fadeOut(100,function(){
						$(".page2-IT").fadeOut(100);
					});
				}
				if(nowpage==2){
					$(".page3-lastBusTitle").fadeIn(3000);
					$(".page3-earlyTitle").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000});
					$(".page3-lastBusAvatar").animate({right:"50%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-lastBusAvatar").fadeOut("slow");
						$(".page3-lastBusStation").fadeOut("slow");
						$(".page3-lastBusTitle").fadeOut("slow");
						$(".page3-earlyTitle").fadeOut("slow");
						$(".page3-earlyBuilding").fadeIn("slow",function(){
							$(".page3-myTeamWall").fadeIn("slow");
							$(".page3-myTeamAvatar").fadeIn("slow",function(){
								$(".page3-myTeamSpace").animate({width:"30%"},{duration:2000,complete:function(){
									$(".page3-myteamWhereTxt").animate({width:"45%"},{duration:2000});
								}});
							});
						});
					}});
				}else{}
			}});
		}
	});
	
	/*animate{要做的动画效果}，{duration：动画时长，complete：动画执行完了要做的事情}*/
	
	$(".page1-Building").fadeIn(400,function(){
		$(".page1-Flight").animate({width:"70%"},{duration:800});
	});
	$(".page4-lightOff").click(function(){
		$(this).attr("src","img/lightOn.png");
		$(".page4-lightOffBg").fadeOut("slow");
		$(".page4-clickGuide").fadeOut("slow",function(){
			$(".page4-lightOnBg").fadeIn("slow");
			$(".page4-weKnowYou").fadeIn("slow");
		});
	});
});
