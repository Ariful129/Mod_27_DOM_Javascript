document.getElementById('bnt-de').addEventListener('click',function(){
    const a1=getinput('de-am');
    const a2=getTex('de-update');
    const a3=a1+a2;
    setUP('de-update',a3); 

    const a4=getTex('bal-update');
    const a5=a1+a4;
    setUP('bal-update',a5);
})