$('.idea2').on('click', function () {
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
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-dark");
      $(".button-chat").removeClass("btn-light");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-secondary");
      $(".modalBackfav").addClass("text-light");
      $(".modalBackfav").addClass("bg-primary");
  } else if(jobId == 2) {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-dark");
      $(".button-chat").removeClass("btn-secondary");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-light");
      $(".modalBackfav").addClass("text-light");
      $(".modalBackfav").addClass("bg-secondary");
  } else if(jobId == 3) {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-dark");
      $(".button-chat").removeClass("btn-light");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-secondary");
      $(".modalBackfav").addClass("text-light");
      $(".modalBackfav").addClass("bg-success");
  } else if(jobId == 4) {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-dark");
      $(".button-chat").removeClass("btn-light");
      $(".favorite").removeClass("fav-red");                

      $(".favorite").addClass("text-dark");
      $(".button-chat").addClass("btn-secondary");
      $(".modalBackfav").addClass("text-light");
      $(".modalBackfav").addClass("bg-danger");
  } else if(jobId == 5) {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-light");
      $(".button-chat").removeClass("btn-light");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-secondary");
      $(".modalBackfav").addClass("text-dark");
      $(".modalBackfav").addClass("bg-warning");
  } else if(jobId == 6) {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-dark");
      $(".button-chat").removeClass("btn-light");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-secondary");
      $(".modalBackfav").addClass("text-light");
      $(".modalBackfav").addClass("bg-info");
  } else if(jobId == 7) {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-dark");
      $(".modalBackfav").removeClass("text-light");
      $(".button-chat").removeClass("btn-light");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-secondary");
      $(".modalBackfav").addClass("text-dark");
      $(".modalBackfav").addClass("bg-light");
  } else {
      $(".modalBackfav").removeClass("bg-primary");
      $(".modalBackfav").removeClass("bg-secondary");
      $(".modalBackfav").removeClass("bg-success");
      $(".modalBackfav").removeClass("bg-danger");
      $(".modalBackfav").removeClass("bg-warning");
      $(".modalBackfav").removeClass("bg-info");
      $(".modalBackfav").removeClass("bg-light");
      $(".modalBackfav").removeClass("text-dark");
      $(".button-chat").removeClass("btn-secondary");
      $(".favorite").removeClass("text-dark");                

      $(".favorite").addClass("fav-red");
      $(".button-chat").addClass("btn-light");
      $(".modalBackfav").addClass("text-light");
      $(".modalBackfav").addClass("bg-dark");
  }

  $('.idea-id').val(id);
  $('.js-like').attr('ideaId',id);
  $('.js-dislike').attr('ideaId',id);
  $('.modal-body').html("<div><p class='h2'>"+body+"</p><p class='display-5 created-at'>"+createdAt+"</p></div>");
  $('.modal-title').html("<div style='display:flex;'><a href='/profile/"+userId+"'><img src='"+picturePath+"' class='profile-image'></a><div class='ml-4'><p>"+nickname+"</p><h2>"+title+"</h2></<h2></div>");
  $('.button-chat').attr('onclick', "openChatBox("+user+","+id+","+profile+");");
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
console.log(ideaId);

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
  console.log("success");
})
.fail(function () {
  console.log("failed");
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
  console.log("success");
})
.fail(function () {
  console.log("failed");
})
.always(function () {
  changeLikeBtn($clickedBtn);            
});
}
