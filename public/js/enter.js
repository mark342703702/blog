require('../css/enter.css');
var backTop = require('./partials/backTop');
var enterProductTpl = require('../hbs/enterProduct.hbs');
$(function(){

    var NumRegCheck = function(val){
        var reg = /^\d+$/g;
        if(!val || !reg.test(val)){
            return false;
        }else{
            return true;
        }
    }

     $(document).keydown(function(event){
        var x = event.which || event.keyCode;
        var data = [];
        var ProductItem = $('.ProductItem');
        if( x !== 13){
            return;
        }

        ProductItem.each(function(){
            var $this = $(this);
            var temp = {};
            temp.Pid = $this.find('.Pid').val();
            temp.description = $this.find('.description').val();
            temp.stock = $this.find('.stock').val();
            temp.buyin_price = $this.find('.buyin_price').val();
            temp.category = $this.find('input[name = "category"]:checked').val();
            data.push(temp);
        });

        var resCheck = data.every(function(ele){
            if(!ele.Pid || !ele.description || !NumRegCheck(ele.stock) || !NumRegCheck(ele.buyin_price)){
                return false;
            }
            return true;
        });

        if(resCheck){
            alert('数据正常');
        }else{
            alert('数据错误');
        }
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

    var bindAddProductData = function(){

        $('.ProductItem').keyup(function(){
            var $this = $(this);
            var Pid = $this.find('.Pid').val() || '';
            var description = $this.find('.description').val() || '';
            var stock = $this.find('.stock').val() || '';
            var buyin_price = +$this.find('.buyin_price').val() || '';
            var sale_price = sale_price_set(buyin_price);
            var category = $this.find(".category input:radio:checked").val();
            $this.find('.enterShow .getPidInput').html(Pid);
            $this.find('.enterShow .getDescriptionInput').html(description);
            $this.find('.enterShow .getStockInput').html(stock);
            $this.find('.enterShow .getBuyinInput').html(buyin_price);
            $this.find('.enterShow .getSaleInput').html(sale_price);
            $this.find('.enterShow .getCategoryInput').html(getCategory(category));
    
        });

        $('.enterInput input:radio').click(function(e){
            e.stopPropagation(); // 阻止冒泡
            var $this = $(this);
            var category = $this.closest('.ProductItem').find(".enterInput input:radio:checked").val();
            $this.closest('.ProductItem').find('.enterShow .getCategoryInput').html(getCategory(category));
        });
    }

    var bindDeleteProductItem = function(){
        $('.panel .deleteIcon').click(function(e){
            e.stopPropagation();
            var ProductItem = $('.ProductItem');
            var $this = $(this);
            if($(ProductItem).length == 1){
                swal({
                    title : '再删就没了',
                    confirmButtonText : '好啦,知道啦',
                    confirmButtonColor : '#cf4646',
                    type: "warning"
                });
                return;
            }
            swal({
                title : '╮(╯_╰)╭ ',
                text : '你确定要删除该表单吗?',
                showCancelButton : true,
                confirmButtonText : '删了它!!!',
                confirmButtonColor : '#e86363',
                cancelButtonText : '算了,饶了它'
            },function(){
                    $this.closest('.ProductItem').addClass('animated bounceOutLeft');
                    setTimeout(function(){
                         $this.closest('.ProductItem').remove();
                         swal({
                            title : '删除成功 ╮(￣▽￣)╭!',
                            type : 'success',
                            confirmButtonText : '确定',
                            timer: 1500
                        });
                        
                    }, 1000);
            });            
         });
    }

    var bindAddProductItem = function(){
       $('.toolbar .addIcon').click(function(e){
            e.stopPropagation();
            $('.ProductItem:first').before(enterProductTpl);
            bindAddProductData();
            bindDeleteProductItem();
        });
    }

    //绑定事件
    bindAddProductData();
    bindAddProductItem();
    bindDeleteProductItem();

    //绑定返回顶部事件
    backTop.toTheTop();

});