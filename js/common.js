function getinput(inpID){
    const x1=document.getElementById(inpID);
    const x2=parseFloat(x1.value);
    if(isNaN(x2))
    {
       alert('Invalid Input')
    }
    else{
        x1.value='';
        return x2; 
    }
}
function getTex(inpTex){
    const x3=document.getElementById(inpTex);
    const x4=parseFloat(x3.innerText);
    return x4;
}
function setUP(ID,val){
    if(!isNaN(val))
    {
        const x5=document.getElementById(ID);
        x5.innerText=val;
    }
}