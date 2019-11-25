$(document).ready(function(){//// y3ny 4a8al el code da lma page el html t7amel elawl
    let posts = JSON.parse(localStorage.getItem('posts'));/////////////////////////globale

loadPosts();

function loadPosts(){


    // for (let i = 0 ; i < posts.length; i++){
    //     console.log(posts[i])
    // }
    // for in :hatly el index 
    // for(const post in posts) {
        
    //     console.log(post)//el[posts] de 34an a3red elly gowa el []
    // }
    // w7da btgeb el index w el tanya btgeb el elemint
    for(const [index , post] of posts.entries()) { //no3 mn anwa3 el data mohmto 
        
        console.log(post)

        let postTemplate = // حرف ذ بدل ال" عشان بتاخد اكتر من سطر
        `
        <div class="row" data-anything="${index}">
                        
        <!-- باخد عمودين عشان اجيب اللي بعده في النص ... هياخد مساحة عمودين بس مش هيبقي بطبيعته و ياخد السطر كله لما كان بلوك -->
        <div class="col-md-2"></div>
        <div class="col-md-8 col-sm-12">
            <!-- mt-5 a5tsar l margin top w -5 y3ny 5em -->
                <div class="card mt-5">
                        <div class="card-header d-flex justify-content-between">
                        ${post.title}
                        <!-- &times;--> 
                        <button class = "btn btn-danger delete-post">
                        <i class = "fas fa-trash"></i>
                        </<button>
                        </div>
                        <div class="card-body">
                        ${post.body}
                        </div>
        
                    </div>
        
        </div>
        </div>
        
        `;
        $('#container1').prepend(postTemplate);
        // append bta5d el div w t7to t7t ... prepend bta5d el div w bt7to awel haga
    }


}

$('.delete-post').on('click' , function(){
    console.log($(this).parents('.row'));// parents() elly ana 3awzo yo2f 3aleh w yms7o msalan
    $(this).parents('.row').slideUp(1000); // slideUp slideDown show hide

    posts.splice($(this).data('antthing') , 1)
    $(this).remove();// amsa7 b3d ma y5tfy

    localStorage.setItem('posts', JSON.stringify(posts))

})

})