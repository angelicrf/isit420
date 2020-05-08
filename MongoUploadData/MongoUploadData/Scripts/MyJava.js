var uri = 'api/orders';

$(document).ready(function () {
    DisplayOrders();
});
function formatItem(item) {
    return item.Price;
}
function DisplayOrders() {
    $.getJSON(uri)
        .done(function (data) {
          
            $.each(data, function (key, item) {

                $('<li>', {text: item.$Price} ).appendTo($('#allOrders'));
            });
        });
};