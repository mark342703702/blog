exports.checkUpload = function(){
   $('.toolbar .uploadIcon').click(function(){
       $('#excel').trigger('click');
       $('#excel').on('change', function(){
           $('#uploadForm').submit();
       });
   });
}