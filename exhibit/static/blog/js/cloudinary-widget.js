var generateSignature = function(callback, params_to_sign){
  $.ajax({
   url     : `http://localhost`,
   type    : "GET",
   dataType: "text",
   data    : { data: params_to_sign},
   complete: function() {console.log("complete")},
   success : function(signature, textStatus, xhr) { callback(signature); },
   error   : function(xhr, status, error) { console.log(xhr, status, error); }
  });
}

// function cloudinary_upload_widget() {
//   cloudinary.openUploadWidget({upload_preset: 't1bofp1k'},
//   function(error, result) {console.log(error, result)});
// }

$('#upload_widget_opener').cloudinary_upload_widget(
  { cloud_name: 'ddonco', api_key: 383189725254458,
    cropping: 'server', upload_signature: generateSignature},
    function(error, result) { console.log(error, result) });
