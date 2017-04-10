$(function() {
    $('#btn-submit').click(sendForm);
});

function sendForm(e) {
    var form = document.querySelector('form');
    if (!form[0].checkValidity()) {
        form.find(':submit').click(); // We try to submit invalid form to show message 
    }
    else {
        e.preventDefault();
        $.ajax({
                url: "https://formspree.io/opokhmurska@gmail.com",
                method: "POST",
                data: {
                    clientName: $('#client-name').val(),
                    clientEmail: $('#client-email').val(),
                    comment: $('#comment').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('#message').html('Thank you for contacting us!');
            });
    }

}