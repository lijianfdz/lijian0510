$(function(){
    $("nav").load("./header.html");
    $("#nav").load("./header.html #navs");
    $("footer").load("./footer.html");
})



let deff = $.ajax({
    type : "get",
    url : "data.json",
    async : true,
})


deff.done(function(res){
    let sp = "";
    let str = "";
    let pro = [];
    console.log(res);
    for(let attr in res){
        sp += `<span classify=${attr}>${res[attr].name}</span>`;
    }
        pro = res["classify001"].list;
        console.log(pro);
        if(pro){
            for(let i = 0; i < pro.length; i++){
            str += `<div class="p">
                        <div class="con">
                            <div class="pro-path"><a href="page.html?pid=${pro[i].id}&classify=${"classify001"}"><img src="images/${pro[i].src}" alt=""></a></div>
                            <div class="pro-name"><a href="page.html?pid=${pro[i].id}&classify=${"classify001"}">${pro[i].name}</a></div>
                            <div class="pro-price">${pro[i].price}</div>
                        </div>

                        <div class="xuan" data-id=${pro[i].id} data-name=${pro[i].name} data-src=${pro[i].src} data-price=${pro[i].price}><a href="page.html?pid=${pro[i].id}&classify=${"classify001"}">选购</a></div>
                        <div class="pin"><i></i>评价</div>
                    </div>`;
            }
        }


    $(".page").html(str);
    $(".navcon").html(sp);

    $(".navcon").on("click", "span", function(){
        let classify = $(this).attr("classify");
        let pro = res[classify].list;
        console.log(pro);
        let strCon = "";
        for(let i = 0; i < pro.length; i++){
            strCon += `<div class="p">
                            <div class="con">
                                <div class="pro-path"><a href="page.html?pid=${pro[i].id}&classify=${classify}"><img src="images/${pro[i].src}" alt=""></a></div>
                                <div class="pro-name"><a href="page.html?pid=${pro[i].id}&classify=${classify}">${pro[i].name}</a></div>
                                <div class="pro-price">${pro[i].price}</div>
                            </div>

                            <div class="xuan"><a href="page.html?pid=${pro[i].id}&classify=${classify}"">选购</a></div>
                            <div class="pin"><i></i>评价</div>
                        </div>`;
        }
        $(".page").html(strCon);
    })
})