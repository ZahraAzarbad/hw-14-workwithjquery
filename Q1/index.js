///////1////////
function blink(){
   $('h1').show();
   setTimeout((e)=>{
$('h1').hide();
   },500) 
}

setInterval(() => {
    blink()
}, 1000);