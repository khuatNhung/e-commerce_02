$(document).ready(function() {
    $('#myModal').on('hidden.bs.modal', function () {
        // imgSrc = $("#" + valId).val();
        id = $(this).data("img");
        imgSrc = $("#" + $(this).data("img")).val();

        $("#previewImage_" + id).attr({
            'src': imgSrc,
        });
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
