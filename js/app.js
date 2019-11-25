const title = $('#text');
const body = $('#body');
const formm = $('.form')


// badl el required fe html
// fe mo4kal an howa m4 by3ml submet ....aftkr
$('.create-post').on('click' , function(event){
    self=$(this);//

    // بقوله امنع الايفينت ...submet 
    event.preventDefault();
    // 
    // let validInput = false;
    // let validBody = false;

    // if(title.val() === ''){
    //     title.addClass('is-invalid').removeClass('is-valid');
    // }
    // else{
    //     title.removeClass('is-invalid').addClass('is-valid');

    //     validInput = true;
    // }

    // if(body.val() === ''){
    //     body.addClass('is-invalid').removeClass('is-valid');
    // }
    // else{
    //     body.removeClass('is-invalid').addClass('is-valid');

    //     validBody =true;
    // }
    // if (validBody && validInput) {
    //     formm.submit();
    // }
    /////////////////////////////////////////////////////
    let validTitle = validate(title);
    let validBody = validate(body);

    // lw hkteb satr wa7d 3ady lw ma ktbt4 el {}
    if (validTitle && validBody){
        // 3a4an a5lly el submit yb2a mra wahda m4 afdal a3mel submit 3 tool
    self.attr('disabled' , true);
    // fontawsome
    // lw 3awzo loading bas yb2a a5lly el .html .text
    self.html('Loading... <i class="fas fa-spinner fa-spin"></i>');
    // JSON.parse bt7awl json.string to code js

    // b3arf opjct asmo title w el key : gowa = title.val() 
    let post = {title : title.val() , body : body.val()};
    let posts = JSON.parse(localStorage.getItem('posts'));

    if(posts !== null) {
        posts.push(post);

        // 'posts' de elkey w

        localStorage.setItem('posts' , JSON.stringify(posts));//posts de tb2a el var
    }else{
        localStorage.setItem('posts' , JSON.stringify([post]));
    }
    $('.alert').removeClass('d-none').addClass('d-block');///a4el el . mn d-none w d-block 34an howa 3arf any ha2ktb class

////////////// دول عشان لما اخلص يرجع الاستايل زي الاول من غير ما اعمل ري فرش
    setTimeout(function(){//setTimeOut dy 34an a5leh ya5od time 4wya
        title.val('')
        body.val('')
        title.removeClass('is-invalid').removeClass('is-valid')
        body.removeClass('is-invalid').removeClass('is-valid')

        self.attr('disabled', false)///4el el disabled mn el button b3d ma t5las
        self.html('Creat Post')//kol el self 3ayda 3 el button 7ta elly gowa el setTimeOut

        $('.alert').removeClass('d-block').addClass('d-none');



    } , 3000)
///////////
    
    // formm.submit();
}
})

function validate(input){
    if(input.val() === ''){
        input.addClass('is-invalid').removeClass('is-valid'); 
        return false;
    }
    input.removeClass('is-invalid').addClass('is-valid')
    return true;
    
}

