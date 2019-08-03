function Demo(){
    this.redBall1 = document.querySelectorAll('.redBall1');//获取红球
    this.redBall2 = document.querySelectorAll('.redBall2');
    this.redBall3 = document.querySelectorAll('.redBall3');
    this.redBall4 = document.querySelectorAll('.redBall4');
    this.redBall5 = document.querySelectorAll('.redBall5');

    this.blueBall1 = document.querySelector('.blueBall1');//获取蓝球
    this.blueBall2 = document.querySelector('.blueBall2');
    this.blueBall3 = document.querySelector('.blueBall3');
    this.blueBall4 = document.querySelector('.blueBall4');
    this.blueBall5 = document.querySelector('.blueBall5');
}
Demo.prototype.number = function(){//7位随机数生成
    //随机产生1-33个数字，放到数组中
    var arrRedBall = [];
    var arrBall = [];
    for(var i=1;i<=33;i++){
        arrRedBall.push(i);
    }
    //33取6
    for(var i=1;i<=6;i++){
        var num = Math.floor(Math.random()*arrRedBall.length);
        arrBall.push(arrRedBall[num]);
        arrRedBall.splice(num,1);
    }
    arrBall.sort((a,b)=>{
        return a-b;
    })
    //1~16取1
    var num1 = Math.floor(Math.random()*16)+1;
    arrBall.push(num1);
    return [arrBall,this];
}
var btn = document.getElementsByTagName('button');
for(let i =0 ;i<btn.length;i++){
    btn[i].onclick = function(){
        var demo = new Demo();
        var This = demo.number()[1];
        if(i == 0){
            var numArr = demo.number()[0];
            for(var j=0; j < 6;j++){
                This.redBall1[j].innerHTML = numArr[j];
            }
            This.blueBall1.innerHTML = numArr[6];
        }else if(i==1){
            var numArr1 = demo.number()[0];
            var numArr2 = demo.number()[0];
            for(var j=0; j < 6;j++){
                This.redBall1[j].innerHTML = numArr1[j];
                This.redBall2[j].innerHTML = numArr2[j];
            }
            This.blueBall1.innerHTML = numArr1[6];
            This.blueBall2.innerHTML = numArr2[6];
        }else if(i==2){
            var numArr1 = demo.number()[0];
            var numArr2 = demo.number()[0];
            var numArr3 = demo.number()[0];
            var numArr4 = demo.number()[0];
            var numArr5 = demo.number()[0];
            for(var j=0; j < 6;j++){
                This.redBall1[j].innerHTML = numArr1[j];
                This.redBall2[j].innerHTML = numArr2[j];
                This.redBall3[j].innerHTML = numArr3[j];
                This.redBall4[j].innerHTML = numArr4[j];
                This.redBall5[j].innerHTML = numArr5[j];
            }
            This.blueBall1.innerHTML = numArr1[6];
            This.blueBall2.innerHTML = numArr2[6];
            This.blueBall3.innerHTML = numArr3[6];
            This.blueBall4.innerHTML = numArr4[6];
            This.blueBall5.innerHTML = numArr5[6];

        }
    }
}
// function Demo(){
//     this.arr = [1,2,3];
// }
// Demo.prototype.number = function(){
//     console.log(this.arr);
// }
// var demo = new Demo();

// demo.number();