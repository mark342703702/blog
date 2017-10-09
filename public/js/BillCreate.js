
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

    $("#addBill").click(function(){
        var pid = $('#pid').val() || '';
        var price = $('#price').val() || '';
        var number = $('#number').val() || '1';
        var index = $('.BillList tr').length;
        var count = price * number;
        var totalPrice = 0;
        
        var hbs = `<tr><td class="order">${index}</td>
                   <td>${pid}</td>
                   <td class="price">${price}</td>
                   <td>${number}</td>
                   <td>${count}</td></tr>`;

        $('.BillList').append(hbs);

        $('#pid').val('');
        $('#price').val('');
        $('#number').val('1');

    });

});