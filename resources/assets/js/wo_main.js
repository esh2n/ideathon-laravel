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
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-dark");
      $("#button-edit").removeClass("btn-light");
      $("#button-chat2").removeClass("btn-light");

      $("#button-edit").addClass("btn-secondary");
      $("#button-chat2").addClass("btn-secondary");
      $("#modalBack").addClass("text-light");
      $("#modalBack").addClass("bg-primary");
  } else if(jobId == 2) {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-dark");
      $("#button-edit").removeClass("btn-secondary");
      $("#button-chat2").removeClass("btn-secondary");

      $("#button-edit").addClass("btn-light");
      $("#button-chat2").addClass("btn-light");
      $("#modalBack").addClass("text-light");
      $("#modalBack").addClass("bg-secondary");
  } else if(jobId == 3) {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-dark");
      $("#button-edit").removeClass("btn-light");
      $("#button-chat2").removeClass("btn-light");

      $("#button-edit").addClass("btn-secondary");
      $("#button-chat2").addClass("btn-secondary");
      $("#modalBack").addClass("text-light");
      $("#modalBack").addClass("bg-success");
  } else if(jobId == 4) {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-dark");
      $("#button-edit").removeClass("btn-light");
      $("#button-chat2").removeClass("btn-light");

      $("#button-edit").addClass("btn-secondary");
      $("#button-chat2").addClass("btn-secondary");
      $("#modalBack").addClass("text-light");
      $("#modalBack").addClass("bg-danger");
  } else if(jobId == 5) {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-light");
      $("#button-edit").removeClass("btn-light");
      $("#button-chat2").removeClass("btn-light");

      $("#button-edit").addClass("btn-secondary");
      $("#button-chat2").addClass("btn-secondary");
      $("#modalBack").addClass("text-dark");
      $("#modalBack").addClass("bg-warning");
  } else if(jobId == 6) {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-dark");
      $("#button-edit").removeClass("btn-light");
      $("#button-chat2").removeClass("btn-light");

      $("#button-edit").addClass("btn-secondary");
      $("#button-chat2").addClass("btn-secondary");
      $("#modalBack").addClass("text-light");
      $("#modalBack").addClass("bg-info");
  } else if(jobId == 7) {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-dark");
      $("#modalBack").removeClass("text-light");
      $("#button-edit").removeClass("btn-light");
      $("#button-chat2").removeClass("btn-light");

      $("#button-edit").addClass("btn-secondary");
      $("#button-chat2").addClass("btn-secondary");
      $("#modalBack").addClass("text-dark");
      $("#modalBack").addClass("bg-light");
  } else {
      $("#modalBack").removeClass("bg-primary");
      $("#modalBack").removeClass("bg-secondary");
      $("#modalBack").removeClass("bg-success");
      $("#modalBack").removeClass("bg-danger");
      $("#modalBack").removeClass("bg-warning");
      $("#modalBack").removeClass("bg-info");
      $("#modalBack").removeClass("bg-light");
      $("#modalBack").removeClass("text-dark");
      $("#button-edit").removeClass("btn-secondary");
      $("#button-chat2").removeClass("btn-secondary");

      $("#button-edit").addClass("btn-light");
      $("#button-chat2").addClass("btn-light");
      $("#modalBack").addClass("text-light");
      $("#modalBack").addClass("bg-dark");
  }

  $('.idea-id').val(id);
  $('.modal-body').html("<div><p class='h2'>"+body+"</p><p class='display-5 created-at'>"+createdAt+"</p></div>");
  $('.modal-title').html("<div style='display:flex;'><a href='/profile/"+userId+"'><img src='"+picturePath+"' class='profile-image'></a><div class='ml-4'><p>"+nickname+"</p><h2>"+title+"</h2></<h2></div>");
  $('#button-edit').attr('onclick',"location.href='/idea/edit/"+id+"/'");
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
