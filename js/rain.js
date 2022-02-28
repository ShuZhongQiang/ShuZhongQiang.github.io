btf.isJqueryLoad(function() {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    //构建构造函数 创建圆形
    function Circle()
    {
        this.x = Math.random()*canvas.width;
        this.y = -10;
        this.width=Math.random()*2;
        this.height = Math.random()*30;

        //画一个圆
        this.paint = function(){
            context.beginPath();

            context.fillStyle="rgba(255,255,255,0.3)";
            context.fillRect(this.x,this.y,this.width,this.height);
            context.fill();
        }

        //设置步数
        this.step = function(){
            this.y+=8;
        }
    }


    //定义一个全局数组，盛放圆片数组，初始化为0
    var circles = [];
    //将一个圆片放入圆的数组中
    function createCircles(){
        var circle = new Circle();
        circles[circles.length] = circle;
    }

    //将圆画出来
    function paintCircls(){
        for(var i=0;i<circles.length;i++){
            circles[i].paint();
        }
    }

    //将圆画出来
    function stepCircles(){
        for(var i=0;i<circles.length;i++){
            circles[i].step();
        }
    }

    var myimg = new Image();
    myimg.src = "./image/psc%20(3).jpg";

    var time = 0;
    setInterval(
        function(){
            context.drawImage(myimg,0,0); //刷新背景图片
            time++;
            if(time%3==0){
                createCircles(); //新生成一个圆
            }
            paintCircls(); //将当前页面所有圆绘出来
            stepCircles(); //圆向下走
        },10);
})
