var numbers= document.querySelectorAll('.number'),
    operations=document.querySelectorAll('.operation'),
    decimalBtn=document.getElementById('decimal'),
    factorial=document.getElementById('factorial'),
    sqr=document.getElementById('sqr'),
    square=document.getElementById('square'),
    result=document.getElementById('result'),
    e=document.getElementById('e'),
    ln=document.getElementById('ln'),
    log=document.getElementById('log'),
    AC=document.getElementById('AC'),
    display=document.getElementById('display'),
    MemoryCurrentNumber='0',
    MemoryNewNumber=false,
    MemoryPendingOperation='';

for (var i =0; i <numbers.length; i++) {
    var number =numbers[i];
    number.addEventListener('click',function(e){
        numberPress(e.target.textContent);
    });
};
for (var i=0; i<operations.length; i++) {
    var operationBtn =operations[i];
    operationBtn.addEventListener('click',function (e){
        operation(e.target.textContent);
    });
};
e.addEventListener('click',function(e){
    console.log('Клик по кнопке e!');
});
result.addEventListener('click',function(e){

    let val=getValue();
    if (val.includes('^')){
      let splt=val.split('^').map(Number);
      let index=[]
      let q=0;
      for(let i=0;i<val.length;i++){
        if (val.charAt(i)==='^'){
          index[q]=i;
          q++;
        }
      }
      for (let i=1;i<splt.length;i++){
        splt[i]=Math.pow(splt[i-1],splt[i]);
      }
      display.value=splt[splt.length-1]
    }

    ///ans=Math.pow(parseFloat(val.substring(0,i)),parseFloat(val.substring(i+1)))
    //console.log(ans);
});

AC.addEventListener('click',function(e){
  display.value=0;
});
decimalBtn.addEventListener('click',decimal);
factorial.addEventListener('click',function(e){
  ans=1;
    for(let i=1;i<parseFloat(getValue());i++){
      ans*=i;
    }
    display.value=ans;
});
sqr.addEventListener('click',function(e){
    display.value=parseFloat(getValue())*parseFloat(getValue());
});
square.addEventListener('click',function(e){
    display.value=getValue()+'^';

});
ln.addEventListener('click',function(e){
    // display.value = Math.log(parseFloat(getValue()));
    console.log('Клик по кнопке ln!');
});
log.addEventListener('click',function(e){
  display.value=getBaseLog(10,parseFloat(getValue()));
});
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
function numberPress(number){
    if (MemoryNewNumber) {
        display.value=number;
        MemoryNewNumber=false;
    }else{
       if (display.value=== '0'){
           display.value=number;
       } else{
           display.value+=number;
       };
    };
};

function operation(op){
    localOperationMemory=display.value;
    if (MemoryNewNumber){
        display.value=MemoryCurrentNumber;
    }else{
        MemoryNewNumber=true;
        if (MemoryPendingOperation==='+'){
            MemoryCurrentNumber+=parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '-'){
            MemoryCurrentNumber-=parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*'){
            MemoryCurrentNumber*=parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '/'){
            MemoryCurrentNumber/=parseFloat(localOperationMemory);
        } else {
            MemoryCurrentNumber=parseFloat(localOperationMemory);
        };
        display.value=MemoryCurrentNumber;
        MemoryPendingOperation=op
    };
    console.log('Клик по кнопке с операцией'+op+'!');
};

function decimal(argument){
    console.log('Клик по кнопке с .!');
};
function clear(argument){
    display.value = 0;
};

window.addEventListener('keydown',function (e) {
  
})




function getValue() {
  display=document.getElementById('display');
  return display.value;

}
