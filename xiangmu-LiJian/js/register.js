$(function(){
    $("#btn").click(function(){
        if(flag&&flaga){
            alert("注册成功");
            location = "login.html";
        }
        return false;
    })

    let flag = null;
    $("#name").blur(function(){
        let uname = $("#name").val();
        let reg = /^1[35789]\d{9}$/;

        if(reg.test(uname)){
            flag = true;
            $("#s1").html("用户名可以使用");
        }else{
            flag = false;
            $("#s1").html("用户名不合法");
        }
    })

    let flaga = null;
    $("#pwd").blur(function(){
        let upwd = $("#pwd").val();
        let reg = /^.{6,}$/;

        if(reg.test(upwd)){
            flaga = true;
            $("#s2").html("密码可以使用");
        }else{
            flaga = false;
            $("#s2").html("密码至少6位数");
        }
    })

    $("#btn").click(function(){
        let upwd = $("#pwd").val();
        let uname = $("#name").val();
        
        let jsoncookie = {
            "upwd" : upwd,
            "uname" : uname
        }

        setCookie("info", JSON.stringify(jsoncookie));
    })
})