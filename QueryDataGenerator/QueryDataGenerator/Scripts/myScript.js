
$(document).ready(function () {
    GetShowData();
});

function formatItem1(item) {
    return item.OrderID + '   ' + item.Quantity + '   ' + item.UnitPrice + '    ' + item.ProductName;
}

function formatItem2(item) {
    return item.OrderID + '   ' + item.ProductName + '   ' + item.OrderDate + '    ' + item.ShippedDate;
}


function formatItem3(item) {
    return `OrderID: ${item.OrderID}, Quanity: ${item.Quantity}, UnitPrice: ${item.UnitPrice}, ShipName: ${item.ShipName}`;
}

function GetShowData() {
    $.getJSON("api/northwind1")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem1(item) }).appendTo($('#findData'));
            });
        });


    $.getJSON("api/northwind2")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem2(item) }).appendTo($('#findData2'));
            });
        });

    $.getJSON("api/northwind3")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem3(item) }).appendTo($('#findData3'));
            });
        });

}
