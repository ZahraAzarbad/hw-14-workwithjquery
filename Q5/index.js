$('button').on('click',()=>{
   
    $('button').toggleClass('active-btn');
    if($('button').hasClass('active-btn')){
        $('button').text('Log Out');
    }else{
        $('button').text('Log In'); 
    }
})