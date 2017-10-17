exports.checkUpload = function(){
   $('.toolbar .uploadIcon').click(function(e){
       e.stopPropagation(); // 阻止冒泡
       $('#excel').trigger('click');
       $('#excel').on('change', function(){
        var fileReg = /^.+\.xls$/g;
        var filePath=$(this).val();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        if(!fileReg.test(filePath) || !filePath){
            swal({
                title : '╮(╯_╰)╭ ',
                text : '请上传以xls结尾的文件!',
                confirmButtonText : '知道了',
                confirmButtonColor : '#e86363'
            });
            $('#excel').val('');
            return;
        }else{
            swal({
                title : '╮(╯_╰)╭ ',
                text : '你确定要上传'+ fileName +'吗?',
                showCancelButton : true,
                confirmButtonText : '肯定要传啊!!!',
                confirmButtonColor : '#e86363',
                cancelButtonText : '点错了!!!'
            }, function(isConfirm){ 
                if(isConfirm){
                    $('#uploadForm').submit(); 
                }else{
                    $('#excel').val('');
                }
                
               });
        }
       
       });
       

   });
}