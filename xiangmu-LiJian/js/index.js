
window.onload = function(){
    // banner轮播效果
    new LunBoImg().init().fnMouse();

    function LunBoImg(){
        this.ulist = $(".item");
        this.slist = $(".slider-nav span");
        this.index = 0;
        this.timer = null;
        this.len = this.ulist.length;

        this.init = function(){
            this.timer = setInterval( function(){
                this.index++;
                if(this.index == this.len){
                    this.index = 0;
                }
                this.slist.eq(this.index).addClass("current").siblings().removeClass("current");
                this.ulist.eq(this.index).animate({"opacity": 1}).siblings().animate({"opacity": 0});
            }.bind(this), 2000);

            return this;
        }

        this.fnMouse = function(){
            for(let i = 0; i < this.len; i++){
                this.slist.eq(i).mouseenter(function () { 
                    clearInterval(this.timer);
                    this.slist.eq(i).addClass("current").siblings().removeClass("current");
                    this.ulist.eq(i).stop().animate({"opacity": 1}).siblings().stop().animate({"opacity": 0});
                }.bind(this));

                this.slist.eq(i).mouseleave(function () { 
                    this.index = i-1;
                    this.init();
                }.bind(this));
            }
        }
    }


    // 选项卡
    new XuanXiangka();
    function XuanXiangka(){
        this.olist = $("#ol li");
        this.ulist = $("#ul li");
        this.div = $(".banner-nav");
        // console.log(this.olist);
        for(let i = 0; i < this.olist.length; i++){
            this.olist.eq(i).mouseenter(function(){
                this.olist.eq(i).addClass("bg").siblings().removeClass("bg");
                this.ulist.eq(i).css("display", "block").siblings().css("display", "none");
            }.bind(this));

            this.div.mouseleave(function(){
                this.ulist.css("display", "none");
            }.bind(this))
        }
    }

    //公告轮播
    new Gougao().init();
    function Gougao(){
        this.ulist = $("#gou li");
        this.oul = $("#gou");
        this.index = 0;
        this.timer = null;
        this.ulist.eq(1).css("display", "block");

        this.init = function(){
            this.timer = setInterval(function(){
                this.index++;
                if(this.index == this.ulist.length){
                    this.index = 0;
                }
                this.ulist.eq(this.index).css("display", "block").siblings().css("display", "none");
            }.bind(this), 2000)
        }
    }


    //小型轮播
    new XiaoLunbo().init().fnMouse();
    function XiaoLunbo(){
        this.olist = $("#oll li");
        this.ulist = $("#ull li");
        this.len = this.olist.length;
        this.timer = null;
        this.index = 0;

        this.init = function(){
            this.timer = setInterval(function(){
                this.index++;
                if(this.index == this.len){
                    this.index = 0;
                }
                this.olist.eq(this.index).addClass("current").siblings().removeClass("current");
                this.ulist.eq(this.index).animate({opacity: 1}).siblings().animate({opacity: 0});
            }.bind(this) , 2000);

            return this;
        }

        this.fnMouse = function(){
            for(let i = 0; i < this.len; i++){
                this.olist.eq(i).mouseenter(function(){
                    clearInterval(this.timer);
                    this.olist.eq(i).addClass("current").siblings().removeClass("current");
                    this.ulist.eq(i).stop().animate({opacity: 1}).siblings().stop().animate({opacity: 0});
                }.bind(this))

                this.olist.eq(i).mouseleave(function(){
                    this.index = i - 1;
                    this.init();              
                }.bind(this))
            }
        }
    }

    //小型无缝轮播
    new WuFen();
    function WuFen(){
        let index = 0;
        $("#right").click(function(){
            $("#wufen")
            .animate({left : -1200} ,function(){
                $("#wufen").css("left" , 0)
                .find(".sub:first")
                .appendTo($("#wufen"))
            })
        })

        $("#left").click(function(){
            $("#wufen")
            .find(".sub:last")
            .prependTo($("#wufen"))
            $("#wufen").css("left" , -1200)
            .animate({left :  0})
        })
    }

}
