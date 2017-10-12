$(function(){

    $('.row .addIcon').click(function(){
        alert('s')
    });

    var sale_price_set = function(val){
        if(!val){
            return '';
        }
        val = Math.round(val * 1.6);
        return (Math.floor(val / 10)*10 + 9);
    }

    var getCategory = function(val){
        switch(val){
            case 'shoes' :
            return '鞋子';
            
            case 'coat' :
            return '外套';

            case 'sweater' :
            return '毛衣' ;

            case 'T' :
            return '短袖';

            case 'pants':
            return '裤子';

            case 'skirt':
            return '裙子';

            case 'bag':
            return '背包';

            case 'other':
            return '其他';
        }
    }

    $('.enterInput input').keyup(function(){
        var Pid = $('#Pid').val() || '';
        var description = $('#description').val() || '';
        var stock = $('#stock').val() || '';
        var buyin_price = +$('#buyin_price').val() || '';
        var sale_price = sale_price_set(buyin_price);
        var category = $("#category input:radio:checked").val();
        $('.enterShow .getPidInput').html(Pid);
        $('.enterShow .getDescriptionInput').html(description);
        $('.enterShow .getStockInput').html(stock);
        $('.enterShow .getBuyinInput').html(buyin_price);
        $('.enterShow .getSaleInput').html(sale_price);
        $('.enterShow .getCategoryInput').html(getCategory(category));
    });

    $('.enterInput input:radio').click(function(){
        var category = $(".enterInput input:radio:checked").val();
        $('.enterShow .getCategoryInput').html(getCategory(category));
    });
});