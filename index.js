$(document).ready(function(){
    //Click
    $('p').click(function(){
        $('.txt').hide()
        // $('#id').hide()
        $('#id').show()
    })

    $('.file').hide()
   
    $('.openButton').dblclick(function(){
        $('.file').toggle(function(){
            $('.openButton').text(function(i,v){
                return v === 'Do not push me' ? 'Push me' : 'Do not push me' 
            })
        })
    })

    $('.openButton2').dblclick(function(){
        $('.file').toggle()
        if($(this).text() == "Close"){
            $(this).text('Open')
        } else {
            $(this).text('Close')
        }
    })

    $('#email').blur(function(){
        $('.alert').show()
    })

    $('#name').blur(function(){
        $('.alert2').show()
    })

    $('.changeButton').click(function(){
        $('.box').toggle(400)
        if($('.changeButton').text() == "Change"){
            $(this).text('Back')
            $('.box').animate({
                marginLeft : '300px',
                width: '100px',
                height : '100px'

            },400)
        }  else {
            $('.changeButton').text('Change')
            $('.box').animate({
            marginLeft: '0px',
            width :' 200px',
            height : '200px'
        },400).css({
            backgroundColor:'green'
        }),400}
        if($('.changeButton'.text())== "back"){
            $(this).text('Change')
            $('box').animate({
                marginLeft:"0px",
                width:'100px',
                height:'100px'
            })
        } 
    })

    // $('.inputTerm').click(function(){
    //     $('.btnSubmit').addClass('active')
    // })
    
   $('.inputTerm').click(function(){
    if(('.inputTerm').click(this.checked)){
        $('.btnSubmit').addClass('active')
    } else{
        $('.btnSubmit').removeClass('active')
    }
   })


   //Product Tab
   $('.product-item').hide()
   $('.product-item:first').show()
   $('.color-item a:not(:first)').addClass('inactive')

   $('.color-item a').on('click', function(){
    const n = $(this).attr('id')
    if($(this).hasClass('inactive')){
        $('.color-item a').addClass('inactive')
        $(this).removeClass('inactive')
    }

    $('.product-item').hide()
    $('#'+n+'Image').show()
    
   })











})