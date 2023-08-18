document.getElementById('btn').addEventListener('click',function(){
    const p1=document.getElementById('ine');
    const email_val=p1.value;
    const p2=document.getElementById('inp');
    const pass_val=p2.value;

    if(email_val==='arif1@gmail.com' && pass_val==12345){
       window.location.href='bank.html';
   }
   else{
       alert('Invalid Email or Password')
   }
    

   p1.value='';
   p2.value='';
})
