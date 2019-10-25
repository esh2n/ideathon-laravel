        $('.idea').on('click', function() {
            var nickname = $(this).attr("nickname");
            var id =  $(this).attr("id");
            var userId = $(this).attr("user-id");
            var jobId = $(this).attr("job-id");
            var title = $(this).attr("title");
            var body = $(this).attr("body");
            var createdAt = $(this).attr("created-at");
            var picturePath = $(this).attr("picture-path");
            var user = $(this).attr("user");
            var profile = $(this).attr("profile");

            if(jobId == 1) {
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-dark");
                $(".button-chat").removeClass("btn-light");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-secondary");
                $(".modal-content").addClass("text-light");
                $(".modal-content").addClass("bg-primary");
            } else if(jobId == 2) {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-dark");
                $(".button-chat").removeClass("btn-secondary");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-light");
                $(".modal-content").addClass("text-light");
                $(".modal-content").addClass("bg-secondary");
            } else if(jobId == 3) {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-dark");
                $(".button-chat").removeClass("btn-light");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-secondary");
                $(".button-favorite").addClass("btn-warning");
                $(".modal-content").addClass("text-light");
                $(".modal-content").addClass("bg-success");
            } else if(jobId == 4) {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-dark");
                $(".button-chat").removeClass("btn-light");
                $(".favorite").removeClass("fav-red");                

                $(".favorite").addClass("text-dark");
                $(".button-chat").addClass("btn-secondary");
                $(".modal-content").addClass("text-light");
                $(".modal-content").addClass("bg-danger");
            } else if(jobId == 5) {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-light");
                $(".button-chat").removeClass("btn-light");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-secondary");
                $(".modal-content").addClass("text-dark");
                $(".modal-content").addClass("bg-warning");
            } else if(jobId == 6) {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-dark");
                $(".button-chat").removeClass("btn-light");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-secondary");
                $(".modal-content").addClass("text-light");
                $(".modal-content").addClass("bg-info");
            } else if(jobId == 7) {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-dark");
                $(".modal-content").removeClass("text-light");
                $(".button-chat").removeClass("btn-light");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-secondary");
                $(".modal-content").addClass("text-dark");
                $(".modal-content").addClass("bg-light");
            } else {
                $(".modal-content").removeClass("bg-primary");
                $(".modal-content").removeClass("bg-secondary");
                $(".modal-content").removeClass("bg-success");
                $(".modal-content").removeClass("bg-danger");
                $(".modal-content").removeClass("bg-warning");
                $(".modal-content").removeClass("bg-info");
                $(".modal-content").removeClass("bg-light");
                $(".modal-content").removeClass("text-dark");
                $(".button-chat").removeClass("btn-secondary");
                $(".favorite").removeClass("text-dark");                

                $(".favorite").addClass("fav-red");
                $(".button-chat").addClass("btn-light");
                $(".modal-content").addClass("text-light");
                $(".modal-content").addClass("bg-dark");
            }
            $('.button-chat').attr("id","button-chat-"+userId);
            $('.idea-id').val(id);
            $('.js-like').attr('ideaId',id);
            $('.modal-body').html("<div><p class='h2'>"+body+"</p><p class='display-5 created-at'>"+createdAt+"</p></div>");
            $('.modal-title').html("<div style='display:flex;'><a href='profile/"+userId+"'><img src='"+picturePath+"' class='profile-image'></a><div class='ml-4'><p>"+nickname+"</p><h2>"+title+"</h2></<h2></div>");
            $('.button-favorite').attr('onclick', "location.href='/favorite/"+id+"'");
            $('.button-chat').attr('onclick', "addUser("+user+","+id+","+profile+");");
        });

        function addUser(user,id,profile) { 
            $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    method: 'GET',
                    url: '/checkConvo/'+ user.id,
                    success: function(response){
                        inputWhoId.value = response;
                        console.log('add user');
                    },
                    error: function(response){
                    },
                    always: function() {
                        console.log('done');
                    }
                });
                window.location.href = "/chat/"+id;
            }

$(document).on('click', '.js-like', function () {
    var ideaId = $(this).attr('ideaId');

    var $clickedBtn = $(this);

    like(ideaId, $clickedBtn);
});

function like(ideaId, $clickedBtn) {
    $.ajax({
        url: '/idea/like/' + ideaId,
        type: 'POST',
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })
        .done(function () {
        })
        .fail(function () {
        })
        .always(function () {
            changeLikeBtn($clickedBtn);            
        });
}
    
function changeLikeBtn(btn) {
    btn.toggleClass('far').toggleClass('fas');
    btn.toggleClass('js-like').toggleClass('js-dislike');
}
    
$(document).on('click', '.js-dislike', function () {
    var ideaId = $(this).attr('ideaId');
  
    var $clickedBtn = $(this);
  
    dislike(ideaId, $clickedBtn);
});
  
  function dislike(ideaId, $clickedBtn) {
    $.ajax({
        url: '/idea/dislike/' + ideaId,
        type: 'POST',
        dataType: 'json',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })
        .done(function () {
        })
        .fail(function () {
        })
        .always(function () {
            changeLikeBtn($clickedBtn);            
        });
  }
  
$(document).ready(function() {
    $('.hello-user-text').fadeIn('slow');
});

nickname = $('.hello-user').attr('user');
console.log(nickname);


helloList = [
    "こんにちは！"+nickname+"さん！",
    "よっ！"+nickname+"！",
    "ハロー！"+nickname+"！",
    "ごきげんよう！"+nickname+"さん！",
    "お帰りなさい！"+nickname+"さま！",
];
helloSentence = helloList[Math.floor( Math.random() * 5 )];
$('.hello-name').html(helloSentence);
