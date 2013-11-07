$(function(){
	function Hmenu(){
		$('#menu').animate({left:"-150px"},100);
	};

	$('#menu li').eq(1).stop().click(function(){
		setTimeout(function(){
			$('#c1').stop().animate({height:"100%"});
			setTimeout(function(){
				$('#c1').stop().animate({width:"100%"},Hmenu());
			},400);
				setTimeout(function(){
					$('#menu').css('z-index','200').animate({left:"0px"},400);
				},800);
		},100);
	});
	$('#menu li').eq(0).stop().click(function(){
		setTimeout(function(){
			$('#c1').stop().animate({width:"0",});
			setTimeout(function(){
				$('#c1').stop().animate({height:"0",width:"150"},0);
				setTimeout(function(){
					$('#menu').css('z-index','10').animate({left:"0px"});
				},400);
			},400);
		},100);
	});
});
