
$(function(){

    $(document).keyup(function(event){
        var x = event.which || event.keyCode;
        if( x == 121){
            alert('s');
            console.log('s')
        }
    });

     $(document).keydown(function(event){
        var x = event.which || event.keyCode;
        if( x == 121){
            alert('s');
            console.log('s')
        }
    });

    //计算总价并重新排序
    function getTotal(){
        var totalPrice = 0;
        $('.BillList .item').each(function(i){
            $(this).find('.order').html(i+1);
            totalPrice += +$(this).find('.count').html();
        });
        $('.totalPrice').html(totalPrice);
    }

    //点击按钮添加项目  
    $("#addBill").click(function(event){
        var priceReg = /^\d+$/g;
        var amountReg = /^\d+$/g;
        var pid = $('#pid').val() || '';
        var price = $('#price').val() || '';
        var amount = $('#amount').val() || '';
        var index = $('.BillList tr').length;
        var count = price * amount;
        
        if(pid == ''){
            
            return;
        }

        if(price == '' || !priceReg.test(price)){
            alert('no price');
            return;
        }

        if(amount == '' || !amountReg.test(amount)){
            alert('no amount');
            return;
        }

        var hbs = `<tr class="item"><td class="order">${index}</td>
                   <td>${pid}</td>
                   <td class="price">${price}</td>
                   <td>${amount}</td>
                   <td class="count">${count}</td></tr>`;

        var CountHbs = `<div class="totalPanel">
                            <div class="total">总计:<span class="totalPrice">0</span>元</div>
                        </div>`;

        $('.BillList').append(hbs);

        $('#pid').val('');
        $('#price').val('');
        $('#amount').val('');

        if($('.panel .totalPanel').length == 0){
            $('.BillList').after(CountHbs);
        }
        getTotal();

        //绑定双击删除单项事件
        $('.BillList .item .order').dblclick(function(){
            var $this = $(this);
            $this.closest('.item').remove();
            if($('.BillList .item').length > 0){
                 getTotal();
            }else{
                 $('.totalPanel').remove();
            }  
        });

    });



});