
function formatfailedBanks(item) {
    return 'Bank Name:     ' + item.BankName + '   Certificate:    #' + item.CERT +
    '   City:   ' + item.CITY + '    County:   ' + item.COUNTY
        + '    State:    ' + item.STATE + '     GDP Growth QuarterToQuarter:     ' + item.GDPGrowthQuarterToQuarter + '   Total liability :  $' + item.TotalLiabilities;
}

function GetBankList() {
        fetch("api/bankfinder")
            .then(data => data.json())
            .then(data => {
                let qUL = document.querySelector('#display1');
              
                var header = qUL.createTHead();               
                var row = header.insertRow(0);
                row.style.backgroundColor = "lightblue";
                var cell = row.insertCell(0);
                var cell2 = row.insertCell(0);
                var cell3 = row.insertCell(0);
                var cell4 = row.insertCell(0);
                var cell5 = row.insertCell(0);
                var cell6 = row.insertCell(0);
                var cell7 = row.insertCell(0);

                cell.innerHTML = "<b>Failure date</b>";
                cell2.innerHTML = "<b>HeadQuarters<b>";
                cell3.innerHTML = "<b>Charter Type</b>";
                cell4.innerHTML = "<b>Insurance Fund</b>";
                cell5.innerHTML = "<b>Total Assetes</b>";
                cell6.innerHTML = "<b>Type</b>";
                cell7.innerHTML = "<b>Bank Name</b>";

                for (b of data) {                   
                    qUL.insertRow(-1).innerHTML =
                                                  '<td>' + b.BankName + '</td>' +
                                                  '<td>' + b.Type + '</td>' +
                                                  '<td>' + b.TotalAssets + '</td>' +
                                                  '<td>' + b.CharterType + '</td>' +
                                                  '<td>' + b.InsuranceFund + '</td>' +
                                                  '<td>' + b.Headquarters + '</td>' +
                                                  '<td>' + b.FailureDate + '</td>' ;
                }
            })
            .catch(err => console.log(err));
    };
function GetFailedBanksList () {
    fetch("api/failedfinder")
        .then(data => data.json())
        .then(data => {
            let qUL = document.querySelector('#display2');

            var header = qUL.createTHead();
            var row = header.insertRow(0);
            row.style.backgroundColor = "lightblue";
          
            var cell = row.insertCell(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(0);
            var cell3 = row.insertCell(0);
            var cell4 = row.insertCell(0);
            var cell5 = row.insertCell(0);
            var cell6 = row.insertCell(0);
           
            cell.innerHTML = "<b>TotalLiabilities<b>";
            cell1.innerHTML = "<b>GDP Growth QuarterToQuarter</b>";
            cell2.innerHTML = "<b>State<b>";
            cell3.innerHTML = "<b>County</b>";
            cell4.innerHTML = "<b>City</b>";
            cell5.innerHTML = "<b>Certificate</b>";
            cell6.innerHTML = "<b>Bank Name</b>";

            for (b of data) {
                qUL.insertRow(-1).innerHTML =
                    '<td>' + b.BankName + '</td>' +
                    '<td>' + b.CERT + '</td>' +
                    '<td>' + b.CITY + '</td>' +
                    '<td>' + b.COUNTY + '</td>' +
                    '<td>' + b.STATE + '</td>' +
                    '<td>' + b.GDPGrowthQuarterToQuarter + '</td>' +
                    '<td>' + b.TotalLiabilities + '</td>';    
                
            }
        })
        .catch(err => alert(err));
};
function GetInstitutesList() {
    fetch("api/institutesfinder")
        .then(data => data.json())
        .then(data => {
            let qUL = document.querySelector('#display3');

            var header = qUL.createTHead();
            var row = header.insertRow(0);
            row.style.backgroundColor = "lightblue";
            var cell = row.insertCell(0);
            var cell2 = row.insertCell(0);
            var cell3 = row.insertCell(0);
            var cell4 = row.insertCell(0);
            var cell5 = row.insertCell(0);
            var cell6 = row.insertCell(0);
            var cell7 = row.insertCell(0);
            var cell8 = row.insertCell(0);
            var cell9 = row.insertCell(0);

            cell.innerHTML = "<b>Bank WebSite</b>";
            cell2.innerHTML = "<b>Total Equity<b>";
            cell3.innerHTML = "<b>ROA</b>";
            cell4.innerHTML = "<b>State<b>";
            cell5.innerHTML = "<b>County</b>";
            cell6.innerHTML = "<b>City</b>";
            cell7.innerHTML = "<b>Address</b>";
            cell8.innerHTML = "<b>Certificate</b>";
            cell9.innerHTML = "<b>Bank Name</b>";

            for (b of data) {
               
                qUL.insertRow(-1).innerHTML =
                    '<td>' + b.BankName + '</td>' +
                    '<td>' + b.FK_CERT  + '</td>' +
                    '<td>' + b.ADDRESS + '</td>' +
                    '<td>' + b.CITY + '</td>' +
                    '<td>' + b.COUNTY + '</td>' +
                    '<td>' + b.STATE + '</td>' +
                    '<td>' + b.ROA + '</td>' +
                    '<td>' + b.TotalEquity + '</td>' +
                    '<td>' + b.BankWebSite + '</td>';
            }
        })
        .catch(err => alert(err.message));
};

