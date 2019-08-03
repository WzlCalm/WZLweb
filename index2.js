function Choose(line){
    this.line = line;//机选几注
    this.numArr = [];//存储所有的机选数字,这是个二维数组
    this.ball = [];//存储dom中的ball
    this.ball1 = document.querySelectorAll('.ball1');
    this.ball2 = document.querySelectorAll('.ball2');
    this.ball3 = document.querySelectorAll('.ball3');
    this.ball4 = document.querySelectorAll('.ball4');
    this.ball5 = document.querySelectorAll('.ball5');
    for(var i=0;i<this.line;i++){
        var num = 'ball'+(i+1);
        this.ball[i] = this[num];
    }
}
Choose.prototype.randomArr = function(){
    for(var i=0;i<this.line;i++){
        var randomNum = []//随机的7位红色加蓝色数字
        var arr1 = [];
        // this.numArr[i] = [];
        for(var j=1;j<=33;j++){//生成1~33的数字
            arr1.push(j);
        }
        arr1.sort(function(){//乱序
            return 0.5 - Math.random();
        })
        randomNum = arr1.splice(0,6);
        randomNum.sort((a,b)=>{
            return a-b;
        })
        randomNum.push(Math.floor(Math.random()*16)+1);
        this.numArr[i]= randomNum;
    }
    // console.log(this.numArr);
    // console.log(this.ball);
    // console.log("randomArr");
}
Choose.prototype.show = function(){
    for(var i=0;i<this.line;i++){
        for(var j=0;j<this.ball1.length;j++){
            this.ball[i][j].innerHTML = this.numArr[i][j];
        }
    }
    // console.log("show");

}
Choose.prototype.clear = function(){
    var span = document.querySelectorAll('span');
    for(var i=0;i<span.length;i++){
        span[i].innerHTML = '?';
    }

}
var btn = document.querySelectorAll('button');
for(var i=0;i<btn.length-1;i++){
    (function(){
        var lineArr = [1,2,5];
        var choose = new Choose(lineArr[i]);
        btn[i].onclick = function(){
            choose.clear();
            choose.randomArr();
            choose.show();
        }
    }())
}
btn[3].onclick = ()=>{
    var choose = new Choose();
    choose.clear();
}