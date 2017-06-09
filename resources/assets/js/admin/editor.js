$(document).ready(function() {
    $('#myModal').on('hidden.bs.modal', function () {
        // imgSrc = $("#" + valId).val();
        id = $(this).data("img");
        imgSrc = $("#" + $(this).data("img")).val();

        $("#previewImage_" + id).attr({
            'src': imgSrc,
        });

        $("#previewImage_" + id).show();
    });
});

$(".show-modal").click(function(event) {
    imageAdd(this.id);
});

//add image 
function imageAdd(id){
    $("#myModal").data("img", id);
    $("#myModal").modal();
    var metaUrl = document.getElementsByName('base-url')[0].getAttribute('content')
    console.log(metaUrl);
    txthtml = '<iframe width="100%" height="550" frameborder="0" src="' + metaUrl + '/filemanager/dialog.php?type=0&field_id='+ id +'"> </iframe>';
    $("#iframex").html(txthtml);
}

$(".alert").fadeTo(2000, 1000).slideUp(1000, function(){
    $(".alert").slideUp(1000);
});

// add or remove input product image
$(function()
{
    var i;
    $(document).on('click', '.btn-add', function(e)
    {
        i = $("#count_image").val();
        i++;
        $("#count_image").val(i);
        e.preventDefault();

        var controlForm = $('.controls:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);
        newEntry.find('input').val('');
        newEntry.find('input').attr({
            id: 'image_' + i,
        });
        newEntry.find('img').attr({
            id: 'previewImage_image_' + i,
        });
        newEntry.find('img').attr('src', '');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
        $(".show-modal").click(function(event) {
            imageAdd(this.id);
        });
    }).on('click', '.btn-remove', function(e)
    {
        $(this).parents('.entry:first').remove();
        $(".show-modal").click(function(event) {
            imageAdd(this.id);
        });
        e.preventDefault();
        return false;
    });
});
