
function valid(data){

}
$(function() {
    var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation=$('#width-validation');
      $heightValidation=$('#height-validation');

      $area = $('#area');
      $width.focusout(function(){
      var w=$width.val();

      if(w===''){
        $widthValidation.html('宽度不能为空');
      }else{
         $widthValidation.html();
      }
    });
    $height.focusout(function(){
      var h=$height.val();

      if(h===''){
        $heightValidation.html('高度不能为空');
        $height.select();
      }else{
         $heightValidation.html();
      }

    });
    $btnCal.click(function(){
      var w = $width.val(),
          h = $height.val();
       if(w===''){
        $widthValidation.html('宽度不能为空');
      }else if(h===''){
        $heightValidation.html('高度不能为空');
        $height.select();
      }else{
        var p = 2 * (w + h),
          a = w * h;
        var r = new Rectangle(w, h);
        $perimeter.val(r.perimeter());
        $area.val(r.area());  
      }         
    });

});

