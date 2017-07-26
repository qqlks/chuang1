
$(".swiper-wrapper").css({
	width:$(window).width(),
	height:$(window).height()
})
var mySwiper = new Swiper ('.swiper-container',{
	direction: 'vertical',//纵向
    freeMode:false,
   	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		if(swiper.activeIndex==1){
			clearInterval(time);
			var d=0,time=null;
			function Amintate(){
				$("#box img").css("display","none");
				$("#box img").eq(d).css("display","block");
				if (d>=71) {
					d=0;
				}
				d++;
				if(swiper.activeIndex!==1){
					clearInterval(time);
				}
			};
			time=setInterval(Amintate,100);
		}
		if(swiper.activeIndex==3){
			$(".slide_4_jihe").children().css("display","block");
			$(".slide_4_ren1").animate({
				left:'2.52rem',
				top:'2.5rem',
				height:'1.39rem',
				width:'1.39rem'
			},2000);
			$(".slide_4_ren2").animate({
				left:'5.36rem',
				top:'3.52rem',
				height:'1.54rem',
				width:'1.54rem'
			},2000);
			$(".slide_4_ren3").animate({
				left:'5.58rem',
				top:'6.3rem',
				height:'1.32rem',
				width:'1.32rem'
			},2000);
			$(".slide_4_ren4").animate({
				left:'5.22rem',
				top:'8.28rem',
				height:'1.39rem',
				width:'1.39rem'
			},2000);
			$(".slide_4_ren5").animate({
				left:'2.88rem',
				top:'9.6rem',
				height:'1.54rem',
				width:'1.54rem'
			},2000);
			$(".slide_4_ren6").animate({
				left:'0.8rem',
				top:'8.4rem',
				height:'1.39rem',
				width:'1.39rem'
			},2000);
			$(".slide_4_ren7").animate({
				left:'0.98rem',
				top:'6.52rem',
				height:'1.54rem',
				width:'1.54rem'
			},2000);
			$(".slide_4_ren8").animate({
				left:'0.25rem',
				top:'3.76rem',
				height:'1.69rem',
				width:'1.69rem'
			},2000,);
			$(".slide_4_ty6").animate({
				left:'0.36rem',
				top:'0.96rem',
				height:'0.76rem',
				width:'0.76rem'
			},2000);
			$(".slide_4_ty12").animate({
				left:'4.45rem',
				top:'1.82rem',
				height:'0.44rem',
				width:'0.44rem'
			},2000);
			$(".slide_4_ty9").animate({
				left:'6.03rem',
				top:'1.43rem',
				height:'1.27rem',
				width:'1.27rem'
			},2000);
			$(".slide_4_ty5").animate({
				left:'0.42rem',
				top:'5.72rem',
				height:'0.13rem',
				width:'0.13rem'
			},2000);
			$(".slide_4_ty15").animate({
				left:'1.92rem',
				top:'5.73rem',
				height:'0.36rem',
				width:'0.36rem'
			},2000);
			$(".slide_4_ty8").animate({
				left:'3.1rem',
				top:'4.98rem',
				height:'0.13rem',
				width:'0.13rem'
			},2000);
			$(".slide_4_ty1").animate({
				left:'3.97rem',
				top:'4.47rem',
				height:'0.7rem',
				width:'0.7rem'
			},2000);
			$(".slide_4_ty4").animate({
				left:'7.32rem',
				top:'3.86rem',
				height:'0.74rem',
				width:'0.73rem'
			},2000);
			$(".slide_4_ty3").animate({
				left:'5.24rem',
				top:'6.04rem',
				height:'0.2rem',
				width:'0.2rem'
			},2000);
			$(".slide_4_ty11").animate({
				left:'4.78rem',
				top:'6.98rem',
				height:'0.08rem',
				width:'0.08rem'
			},2000);
			$(".slide_4_ty14").animate({
				left:'-1.32rem',
				top:'7.5rem',
				height:'2.4rem',
				width:'2.16rem'
			},2000);
			$(".slide_4_ty10").animate({
				left:'3.01rem',
				top:'7.8rem',
				height:'0.13rem',
				width:'0.13rem'
			},2000);
			$(".slide_4_ty13").animate({
				left:'3.84rem',
				top:'8.45rem',
				height:'0.3rem',
				width:'0.3rem'
			},2000);
			$(".slide_4_ty2").animate({
				left:'5.26rem',
				top:'7.27rem',
				height:'0.49rem',
				width:'0.49rem'
			},2000);
			$(".slide_4_ty16").animate({
				left:'4.72rem',
				top:'10.05rem',
				height:'0.78rem',
				width:'0.78rem'
			},2000);
			$(".slide_4_ty17").animate({
				left:'0.39rem',
				top:'11.77rem',
				height:'2.24rem',
				width:'2.42rem'
			},2000);
			$(".slide_4_ty7").animate({
				left:'6.59rem',
				top:'11.25rem',
				height:'0.28rem',
				width:'0.28rem'
			},2000);
		}else{
			$(".slide_4_jihe").children().css({
				display:"none",
				left:"3rem",
				top:"5.82rem",
				height:"0rem",
				width:"0rem"
			});
		}
		if(swiper.activeIndex==4){
			var i=0;
			var time1=setInterval(function(){
				$(".slide_5_m").children().eq(i).slideDown(1000).css("animation","translate1 1s linear 1s normal forwards");
				$(".slide_5_shadow img").eq(i).css("animation","opacity1 1s linear 1s normal forwards");
				i++;
				if(i>=10){
					clearInterval(time1);
				}
			},500);
			$(".slide_5_m p").click(function(){
				var index=$(this).index();
				console.log(index);
				$(".slide_5_jieshao img").eq(index).css({
					animation:"show"+(index+1)+" 1s 0s linear normal forwards"
				})
				$(".close").show(500);
				$(".close").click(function(){
					$(".slide_5_jieshao img").eq(index).css({
					animation:"hide"+(index+1)+" 1s 0s linear normal forwards"
				});
					$(this).hide(500);
				})
			})	
		}else{
			$(".slide_5_m").children().slideUp(1000).css({transform:"translate(0,0)"});
			$(".slide_5_shadow img").css({
					animation:"opacity2 0s 0s linear normal forwards",
				})
				for(var k=0;k<=9;k++){
					$(".slide_5_jieshao p").eq(k).css({
						animation:"hide"+(k)+" 1s 0s linear normal forwards",
					})
				}
		}
		if(swiper.activeIndex==5){
			$(".slide_6_sanjiaoti").children().css("display","block");
			$(".slide_6_s1").css("animation","s1 1.5s linear both");
			$(".slide_6_s2").css("animation","s2 1.5s linear both");
			$(".slide_6_s3").css("animation","s3 1.5s linear both");
			$(".slide_6_s4").css("animation","s4 1.5s linear both");
			$(".slide_6_s5").css("animation","s5 1.5s linear both");
		}else{
			$(".slide_6_sanjiaoti").children().css("display","none");
		}
		if(swiper.activeIndex==6){
			$(".slide_7_S").slideDown(1000);
		}else{
			$(".slide_7_S").css("display","none")
		}
		if(swiper.activeIndex==7){
			$('.p8-1').animate({
				top: '1.68rem',left: '2.24rem'
			},400);
			$('.p8-2').animate({
				left: '0.74rem',top:"1.53rem"
			},400);
			$('.p8-3').animate({
				left: '0rem',top:"1.61rem"
			},400);
			$('.p8-4').animate({
				right: '0.05rem',top:"0.3rem"
			},400);
			$('.p8-5').animate({
				top: '3.26rem',right: '0.7rem'
			},400)
			$('.p8-6').animate({
				top: '1.47rem',left: '4.47rem'
			},400);
			
		}
		if(swiper.activeIndex!=7){
				$('.p8-1').animate({
				top: '3rem',left: '7rem'
			},100);
				$('.p8-2').animate({
				top: '0.28rem',left: '7rem'
			},100);
				$('.p8-3').animate({
				top: '0.3rem',left: '-1rem'
			},100);
				$('.p8-4').animate({
				top: '-0.5rem',right: '-1rem'
			},100);
				$('.p8-5').animate({
				top: '2rem',right: '-0.68rem'
			},100);
				$('.p8-6').animate({
				top: '3rem',left: '-2.5rem'
			},100);
		}
 	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  	} 
}) 
var audioEle=document.getElementsByTagName("audio");
var flag=true;
$(".slide_music").click(function(){
	if(flag){
		audioEle[0].pause();
		$(".slide_music").removeClass("music_rotate");
		flag=false;
	}else{
		audioEle[0].play();
		$(".slide_music").addClass("music_rotate");
		flag=true;
	}
})
