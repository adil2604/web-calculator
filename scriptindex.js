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
    console.log('Клик по кнопке =!');
});
AC.addEventListener('click',function(e){
    console.log('Клик по кнопке AC!');
});
decimalBtn.addEventListener('click',decimal);
factorial.addEventListener('click',function(e){
    console.log('Клик по кнопке x!!');
});
sqr.addEventListener('click',function(e){
    console.log('Клик по кнопке x^2!');
});
square.addEventListener('click',function(e){
    console.log('Клик по кнопке x!');
});
ln.addEventListener('click',function(e){
    console.log('Клик по кнопке ln!');
});
log.addEventListener('click',function(e){
    console.log('Клик по кнопке log!');
});
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

};
