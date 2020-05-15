
$(document).ready(function () {
    GetFirstData();
    //toRceiveUser();
   // GetSecondData();
   // GetThirdData();

});

function formatItem1(item) {
    return 'City    ' + item.City + 'OrderID:  ' + item.OrdersID + '    SalesId:   ' + item.SalesPersonID + '    StoreNumberId:   ' + item.StoreNumberID +
        '   Price:   ' + item.Price + '  CDid:   ' +
        item.CdID + '  DateTime:   ' + item.Datetime;
}

function formatItem2(item) {
    return 'LastName:     ' + item.LastName + '   Price:    ' + item.Price + '   City:   ' + item.City + '    CDName:   ' + item.CDname;
}


function formatItem3(item) {
    return 'City:   ' + item.City + '    DateTime:   ' + item.Datetime + '    Price:   ' + item.Price;
}
function GetFirstData() {
    $.getJSON("api/mongooders1")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem1(item) }).appendTo($('#findQuery1'));
            });
        });
}
function GetSecondData() {
        $.getJSON("api/mongooders2")
            .done(function (data) {
                $.each(data, function (key, item) {
                    $('<li>', { text: formatItem2(item) }).appendTo($('#findQuery2'));
                });
  
    });
}
function toRceiveUser() {
    $('#btn1').submit(function () {
        $.ajax({
            url: '/CalcuateMT',  
            type: 'POST',
            datatype: 'text',
            data: {
               agent: myform.agent.value
                   }
      });
});
}
function toShowLastName() {
    $('#btn2').submit(function () {
        $.ajax({
            url: '/FindPerson',
            type: 'POST',
            datatype: 'text',
            data: {
                person: myform2.person.value
            }
        });
    });
}
//function toShowSelectedId() {
//    $('#btn4').submit(function () {
//        $.ajax({
//            url: '/SelectId',
//            type: 'POST',
//            datatype: 'text',
//            data: {
//                person: myform2.person.value
//            }
//        });
//    });
//}
function GetThirdData() {
    $.getJSON("api/mongooders3")
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem3(item) }).appendTo($('#findQuery3'));
            });
        });
 
}