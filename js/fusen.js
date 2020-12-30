function getBLUENote() {
    return  '<div class="bluenote">' +
            '<input type="text">' +
            '<input class="delete-button" type="button" value="削除">' +
            '</div>';
}
function getREDNote() {
    return  '<div class="rednote">' +
            '<input type="text">' +
            '<input class="delete-button" type="button" value="削除">' +
            '</div>';
}
function getGREENNote() {
    return  '<div class="greennote">' +
            '<input type="text">' +
            '<input class="delete-button" type="button" value="削除">' +
            '</div>';
}
function getYELLOWNote() {
    return  '<div class="yellownote">' +
            '<input type="text">' +
            '<input class="delete-button" type="button" value="削除">' +
            '</div>';
}
function appendFunctions($note) {
    $note.draggable();

    $note.children(".delete-button").on('click', function() {
        $(this).parents('.bluenote').remove();
    });
    $note.children(".delete-button").on('click', function() {
        $(this).parents('.rednote').remove();
    });
    $note.children(".delete-button").on('click', function() {
        $(this).parents('.greennote').remove();
    });
    $note.children(".delete-button").on('click', function() {
        $(this).parents('.yellownote').remove();
    });
}

$('#add-BLUEbutton').on('click', function(){
    var $note = $(getBLUENote());
    appendFunctions($note);

    $('#sticky-note-container').append($note);
});

$('#add-REDbutton').on('click', function(){
    var $note = $(getREDNote());
    appendFunctions($note);

    $('#sticky-note-container').append($note);
});
$('#add-GREENbutton').on('click', function(){
    var $note = $(getGREENNote());
    appendFunctions($note);

    $('#sticky-note-container').append($note);
});
$('#add-YELLOWbutton').on('click', function(){
    var $note = $(getYELLOWNote());
    appendFunctions($note);

    $('#sticky-note-container').append($note);
});
