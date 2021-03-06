// managePhotosBtn = document.getElementById('manage-photos');
// managePhotosBtn.onclick = myFunc()
//
// function myFunc() {
//   modalBody = document.getElementById('modal-body-content');
//   modalBody.innerHTML = "myFunc";
// }

$("#manage-photos").click(function() {
  $.ajax({
    url: "cloud_images/",
    success: function(data) {
      var htmlContent = ``
      $.each(data["resources"], function(key, value) {
        htmlContent += (
          `<img src="` + value["secure_url"] + `"
            class="figure-img img-fluid rounded text-center mt-3" alt="">
          <p class="figure-caption text-left mb-3">
            <small>![](` + value["secure_url"] + `)</small>
          </p>`
        );
        $("#modal-body-content").html(htmlContent);
      })
    },
    failure: function(data) {
      alert("error");
    }
  });
});
