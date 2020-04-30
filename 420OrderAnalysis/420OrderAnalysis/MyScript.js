var uri = 'api/notes';

    $(document).ready(function ()
    {
        $.getJSON(uri).done(function (data)
        {
            $.each(data, function (key, item) {
                $('<li>', { text: formatItem(item) }).appendTo($('#notes'));
            });
        });
    });

    function formatItem(item) {
        return item.Priority + '   ' + item.Subject + '   ' + item.Details
}

    function find() {
        var id = $('#NoteId').val();
        $.getJSON(uri + '/' + id).done(function (data) {
            $('#note').text(formatItem(data));
        })    
            .fail(function (jqXHR, textStatus, err) {
                $('#note').text('Error: ' + err);
            });
        }