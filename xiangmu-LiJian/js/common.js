//根据id获取元素
function $id(id){
	return document.getElementById(id);
}

//获取任意区间内的整数值
function rand(min,max){
	//返回一个[min,max]区间内的随机的整数值
	return Math.round( Math.random()*(max-min) + min );
}

//获取六位十六进制随机颜色值
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";//存储颜色值
	for( var i = 1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}

//颜色值
function getColor2(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//封装一个函数 功能是 将日期转成字符串 显示自定义的时间格式
function dateToString(d){
	var y = d.getFullYear();
	var m =toTwo(  d.getMonth() + 1 );
	var d1 =toTwo( d.getDate() );
	
	var h = toTwo( d.getHours() );
	var mi =toTwo(  d.getMinutes() );
	var s = toTwo( d.getSeconds() );
	
	return y+"-"+m+"-"+d1+" "+h+":"+mi+":"+s;
}
//如果str小于10  前面拼接一个0
function toTwo(str){
	return str < 10 ? "0" + str : str;
}

//封装一个函数 功能是获取任意元素的非行内样式值
function getStyle(obj, attr){
	if(getComputedStyle){
		return window.getComputedStyle(obj)[attr];
	}else{
		return currentStyle[attr];
	}
}


	
function getButton( e ){ //传递的参数是事件处理程序创建的对象
    var evt = e || event; //事件对象创建兼容
    if( e ){ // 高版本浏览器条件 
        return evt.button;
    }else if( window.event ){ //低版本浏览器 条件
        switch( evt.button ){
            case 1 : return 0;
            case 4 : return 1;
            case 2 : return 2;
        }
    }
}