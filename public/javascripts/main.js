$(function(){
    $('#search').on('click', function(e){
        var parameters = { user: $('#user').val() };
        $.get( '/follower',parameters, function(data) {
            $('.follower').remove();
            $.each(data, function(index) {
                $('#list').append('<tr class="row follower"><td class="cell"><img src=' + data[index].avatar_url + ' /></td>' +
                    '<td class="cell">' + data[index].login + '</td><td class="cell">' + data[index].url + '</td></tr>');
            });
        });
    });
});