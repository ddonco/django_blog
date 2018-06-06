$(function(){
  $(document).ready(function(){
    $('#ghapiprofile').html('<div id="loader"><img src="https://i.imgur.com/UqLN6nl.gif" alt="loading..."></div>');

    var username = 'ddonco';
    var requri   = 'https://api.github.com/users/'+username;
    var repouri  = 'https://api.github.com/users/'+username+'/repos';

    requestJSON(requri, function(json) {
      if(json.message == "Not Found" || username == '') {
        $('#ghapiprofile').html("<h2>No User Info Found</h2>");
      }

      else {
        // else we have a user and we display their info
        var fullname   = json.name;
        var username   = json.login;
        var aviurl     = json.avatar_url;
        var profileurl = json.html_url;
        var location   = json.location;
        var reposnum     = json.public_repos;

        if(fullname == undefined) { fullname = username; }

        var profileHtml = '<h4>Github Repositories <span class="smallname">(@<a href="'+profileurl+'" target="_blank">'+username+'</a>)</span></h4>';
        profileHtml = profileHtml + '<div><div><a href="'+profileurl+'" class="img-thumbnail" target="_blank"><img src="'+aviurl+'" alt="'+username+'"></a></div>';
        profileHtml = profileHtml + '</div>';
        $('#ghapiprofile').html(profileHtml);

        var repositories;
        $.getJSON(repouri, function(json){
          repositories = json;
          outputPageContent();
        });

        function outputPageContent() {
          if(repositories.length == 0) { var dataHtml = '<p>No repos!</p></div>'; }
          else {
            var dataHtml = '';
            $.each(repositories, function(index) {
              dataHtml = (dataHtml +
                `<div class="card-columns">
                  <div class="card bg-light mx-auto" style="width: 30rem;">
                    <div class="card-header">
                      <h5><a href="` + repositories[index].html_url + `" target="_blank">` + repositories[index].name + `</a></h5>
                    </div>
                    <div class="card-body">
                      <p class="card-text">` + repositories[index].description + `</p>
                      <p class="card-text"><small class="text-muted">Last update: ` +
                        repositories[index].updated_at + `</small></p>
                    </div>
                  </div>
                </div>`
              );
            });
          }
          $('#ghapidata').html(dataHtml);
        } // end outputPageContent()
      } // end else statement
    }); // end requestJSON Ajax call
  }); // end document load event handler

  function requestJSON(url, callback) {
    $.ajax({
      url: url,
      complete: function(xhr) {
        callback.call(null, xhr.responseJSON);
      }
    });
  }
});
