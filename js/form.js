$(function() {
    $('#btn-submit').click(sendForm);
});

function sendForm(e) {
  var form = document.querySelector('form');
  if (form.checkValidity()) {
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