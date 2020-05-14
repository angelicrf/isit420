
$(document).ready(function () {
    GetShowData();
});

function formatItem1(item) {
    return 'OrderID:  ' + item.OrdersID + '    SalesId:   ' + item.SalesPersonID + '    StoreNumberId:   ' + item.StoreNumberID +
           '   Price:   ' + item.Price + '  CDid:   ' +
           item.CdID + '  DateTime:   ' + item.Datetime;
}

function formatItem2(item) {
    return 'LastName:     '+ item.LastName + '   Price:    ' + item.Price + '   City:   ' + item.City + '    CDName:   ' + item.CDname;
}


function formatItem3(item) {
    return 'City:   ' +  item.City +  '    DateTime:   ' + item.Datetime + '    Price:   ' + item.Price;
}

function GetShowData() {
    $.getJSON("api/mongooders1")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem1(item) }).appendTo($('#findQuery1'));
            });
        });


    $.getJSON("api/mongooders2")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem2(item) }).appendTo($('#findQuery2'));
            });
        });

    $.getJSON("api/mongooders3")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem3(item) }).appendTo($('#findQuery3'));
            });
        });

}