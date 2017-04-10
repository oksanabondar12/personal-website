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
                    clientName: $('#name').val(),
                    clientEmail: $('#email').val(),
                    clientPhone: $('#phone').val(),
                    clientWebsite: $('#website').val(),
                    message: $('#message').val()
                },
                dataType: "json"
            })
            .done(function() {
                $('#messageDone').html('Thank you for contacting us!');
            });
    }

}