document.getElementById('btn-wi').addEventListener('click',function(){
    const p1=getinput('wi-am');
    const p2=getTex('wi-update');
    const p3=p1+p2;
    setUP('wi-update',p3); 

    const p4=getTex('bal-update');
    const p5=p4-p1;
    setUP('bal-update',p5);
})