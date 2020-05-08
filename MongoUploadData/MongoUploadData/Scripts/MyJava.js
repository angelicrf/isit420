var uri = 'api/orders';

$(document).ready(function () {
    DisplayOrders();
});

function DisplayOrders() {
    $.getJSON(uri)
        .done(function (data) {
          
            $.each(data, function (key, item) {

                $('<li>', { text: item }).appendTo($('#allOrders'));
            });
        });
};