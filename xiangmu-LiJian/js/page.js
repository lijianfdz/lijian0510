$(function(){
    $("nav").load("./header.html");
    $("#nav").load("./header.html #navs");
    $("footer").load("./footer.html");
})

let locationStr = location.search;
let arr = locationStr.split("?")[1].split("&");
let classify = arr[1].split("=")[1];
let id = arr[0].split("=")[1];

$.ajax({
    type : "get",
    url : "data.json",
    async : true,
    success : function(res){
        let arr = res[classify].list;
        let str = "";
        arr.forEach( (pro) => {
            if(pro.id == id){
                str += `<div class="box">
                            <div class="bigimg" style="border: 1px solid #000;">
                                <a href=""><img src="images/${pro.src}" alt=""></a>
                            </div>
                            <div class="smallimg">
                                <a href="" class="bg"><img src="images/${pro.src}" alt="" style="width: 60px; height: 60px;"></a>
                            </div>
                        </div>

            <div class="page-con">
            <div class="pro-title">${pro.name}</div>
            <div class="pro-slog">${pro.desc}</div>
            <div class="play">
                <div class="pro-price"><i class="p">价&nbsp;&nbsp;&nbsp;&nbsp;格</i><span>${pro.price}</span></div>
                <div class="pro-play"><p>促&nbsp;&nbsp;&nbsp;&nbsp;销</p>
                    <div class="con">
                        <ul>
                            <li>
                                <span>赠品</span>
                                <div class="zp">
                                <a href=""><img src="images/play1.png" alt=""></a>
                                <a href=""><img src="images/paly2.png" alt=""></a>
                                </div>
                                <a href="" class="check">选择></a>
                            </li>
                            <li>
                                <span>整点赠送</span>
                                <i class="x">10点/16点/20点 下单前200名送不锈钢保温杯（Mate 20系列共享）</i>
                            </li>
                            <li>
                                <span>分期免息</span>
                                <i class="x">掌上生活、花呗、工行分期支付可享免息</i>
                            </li>
                            <li>
                                <span>赠送积分</span>
                                <i class="x">购买即赠商城积分，积分可抵现~</i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="fuwu">
                <span>服务说明</span>
                <ul>
                    <li><img src="images/1_03.png" alt="">已满48元已免运费</li>
                    <li> <img src="images/1_03.png" alt="">由华为商城负责发货，并提供售后服务</li>
                </ul>
            </div>

            <div class="fuwu">
                <span>商品编码</span>
                <ul>
                    <li class="pro-id">${pro.id}</li>
                </ul>
            </div>

            <hr size="2" color="#DDDDDD">

            <div class="fuwu mar">
                <span>选择颜色</span>
                <ul class="color">
                    <li><a href="">亮黑色</a></li>
                    <li><a href="">宝石蓝</a></li>
                    <li><a href="">极光色</a></li>
                </ul>
            </div>

            <div class="fuwu mar">
                <span>选择版本</span>
                <ul class="color">
                    <li><a href="" style="height: 30px; ">全网通 6GB+128GB</a></li>
                    <li><a href="" style="height: 30px; ">全网通 8GB+128GB</a></li>
                    <li><a href="" style="height: 30px; ">全网通 8GB+256GB</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>选择生物识别</span>
                <ul class="color">
                    <li><a href="" style="height: 30px; ">3D面部识别</a></li>
                    <li><a href="" style="height: 30px; ">3D面部识别+屏内指纹</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>选择套餐</span>
                <ul class="color">
                    <li><a href="" style="height: 30px; ">官方标配</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>增值业务</span>
                <ul class="color">
                    <li><a href="" style="height: 30px;">无增值服务</a></li>
                    <li><a href="" style="height: 30px;">Mate20系列礼品包装服务</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>保障服务</span>
                <ul class="color">
                    <li><a href="" style="height: 30px;">延长服务宝1年</a></li>
                    <li><a href="" style="height: 30px;">碎屏(含后盖)服务宝1年</a></li>
                    <li><a href="" style="height: 30px;">华为无忧服务</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>分期免息</span>
                <ul class="color">
                    <li><a href="" style="height: 30px;">花呗分期</a></li>
                    <li><a href="" style="height: 30px;">掌上生活分期</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>推荐</span>
                <ul class="color">
                    <li><a href="" style="height: 30px; border: 0; background: #F5F5F5; border-radius: 5px;">HUAWEI Mate 20</a></li>
                    <li><a href="" style="height: 30px; border: 0; background: #F5F5F5; border-radius: 5px;">HUAWEI Mate 20 RS 保时捷设计</a></li>
                </ul>
            </div>

            <div class="fuwu" style="margin-top: 15px">
                <span>已选择商品:</span>
                <ul class="color">
                    <li><i style="height: 30px; color: red; border: 0; line-height: 30px; font-size: 10px;">亮黑色 / 全网通 8GB+128GB / 3D面部识别+屏内指纹 / 官方标配 </i></li>
                </ul>
            </div>

            <div class="carAdd">
                <div class="num" style="margin-left: 20px;">
                    <div class="ber">1</div>
                    <div class="ad">+</div>
                    <div class="ev">-</div>
                </div>
                <a href="javascript:;" data-id=${pro.id} data-name=${pro.name} data-src=${pro.src} data-price=${pro.price} class="car" style="margin-left: 20px;">加入购物车</a>
                <a href="list.html" class="car2" style="margin-left: 20px;">前往列表页</a>
            </div>
        </div>`;
            $(".page").html(str);	
            return;
            }
        });

        $(".car").on("click", function(){
            let arr = [];
            let flag = true;
            let shopJson = {
                "id" : $(this).data("id"),
                "name" :$(this).data("name"),
                "src" : $(this).data("src"),
                "price" : $(this).data("price"),
            }

            let proText = localStorage.getItem("prolist");
            console.log(proText)
            let proJson;
            if(proText != null){
                arr = JSON.parse(proText);
            }

            if(flag){
                arr.push(shopJson);
            }

            localStorage.setItem("prolist", JSON.stringify(arr));

            if( !confirm("跳转购物车，请按取消")){
                location = "shopcar.html";
            }
        })
    }
})