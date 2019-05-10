$(function(){
    $("#btn").click(function(){
        let upwd = $("#pwd").val();
        let uname = $("#name").val();
        console.log(upwd,uname);

        if(uname == res.uname && upwd == res.upwd){
            alert("登录成功");
            location = "index.html";
        }
    })
})