$(function(){
    $("nav").load("./header.html #cons");
    $("footer").load("./footer.html");


    let proText = localStorage.getItem("prolist");
    if(proText != null){
        let arr = JSON.parse(proText);
        let str = "";
        for(let i = 0; i < arr.length; i++){
            str =  `<div class="shopcar-con"> 
                <div class="int">
                        <input type="checkbox" class="cks">
                    </div>
                    <div class="pro-path">
                        <a href=""><img src="images/${arr[i].src}" alt=""></a>
                    </div>
                    <div class="pro">
                        <div class="pro-name"><a href="">${arr[i].name}</a></div>
                        <div class="pro-price">${arr[i].price}</div>
                        <div class="pro-num">
                            <div class="ber">1</div>
                            <div class="ad">+</div>
                            <div class="ev">-</div>
                        </div>
                        <div class="zp">${arr[i].price}</div>
                        <div class="del" data-id=${arr[i].id}>删除</div>
                    </div>
                </div>`;
            $(".shopsp").html($(".shopsp").html() +str);
        }
    }

    //单行删除功能
    dandell();
    function dandell(){
        $(".shop-con").on("click", ".del", function(){
            if(confirm("确定要删除吗？")){
                $(this).parent().parent().remove();
    
                let id = $(this).data("id");
                console.log(id);
                let prolistText = localStorage.getItem("prolist");
                let arr = JSON.parse(prolistText);
                for(let i = 0; i < arr.length; i++){
                    if(id == arr[i].id){
                        arr.splice(i, 1);
                        localStorage.setItem("prolist", JSON.stringify(arr));
                    }
                }
            }
        })
    }

    //全选功能
    xuan();
    function xuan(){
        let cksall = document.getElementsByClassName("checkall");
        for(let j = 0; j < cksall.length; j++){
            cksall[j].onclick = function(){
                let cks = document.getElementsByClassName("cks");
                console.log(cks.length);
                for( let i = 0 ; i < cks.length ; i++ ){
                    cks[i].checked = cksall[j].checked;
                }
                jiesuan();
            }
        }
    }
    

    //全选删除
    dell();
    function dell(){
        let del = document.querySelector("#delAll");
        del.onclick = function(){
            if(confirm("确定要全部删除吗？")){
                let cks = document.getElementsByClassName("cks");
                for(let i = cks.length - 1 ; i >= 0 ; i-- ){
                    cks[i].parentNode.parentNode.remove();

                    let prolistText = localStorage.getItem("prolist");
                    let prolistArr = JSON.parse( prolistText );
                    prolistArr.splice( i , 1 );
                    localStorage.setItem( "prolist" , JSON.stringify( prolistArr ));
                }
            }
        }
    } 

    /* 结算功能
    jisuan();
    function jisuan(){
        let money = 0;
        let cks = document.getElementsByClassName("cks");
        for(let i = 0; i < cks.length; i++){
            if(cks[i].checked){
                let moneystr = cks[i].parentNode.parentNode.children[2].children[1].innerHTML;
                money += parseInt(moneystr.substr(1));
                console.log(money);
            }
        }
        document.getElementById("nums").innerHTML = money;
    }

    let cks = document.getElementsByClassName("cks");
    for(let i = 0; i < cks.length; i++){
        cks[i].onclick = function(){
            jisuan();
        }
    }
    */

    //结算功能二
    function jiesuan(){
        let money = 0;
        let count = 0;
        $(".cks:checked").each( function(){
            count += Number( $(this).parent().parent().find(".pro .pro-num .ber").html() );
            money += parseInt( $(this).parent().parent().find(".pro .pro-price").html().substr(1) );
        } )

        $("#Xuan").html( count );
        $(".nums").html( money );
        console.log(money,count);
    }

    $(".cks").click( function(){
        jiesuan();
    } )

});
