/**
 * Created by xq on 16-11-20.
 */
$(function(){
    $('.shop-tag').click(function(){
        if($(this).hasClass('btn-default')){
            $(this).addClass('btn-primary');
            $(this).removeClass('btn-default');
        }else if ($(this).hasClass('btn-primary')){
            $(this).addClass('btn-default');
            $(this).removeClass('btn-primary');
        }
    })
})