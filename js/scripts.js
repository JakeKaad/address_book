$(function(){
  $("#contact_new").submit(function(event) {
    var inputtedName = $("#contact_name").val();
    var inputtedPhone = $("#contact_phone").val();
    var inputtedEmail = $("#contact_email").val();
    var newContact = { fullName: inputtedName,
                       phone: inputtedPhone,
                       email: inputtedEmail };

    $("#contact_list").append("<li><span class='contact'>" + newContact.fullName + "</span></li>");

    $("#contact_name").val("");
    $("#contact_phone").val("");
    $("#contact_email").val("");

    $(".contact").last().click(function() {
      $("#card_name").text(newContact.fullName);
      $("#card_phone").text(newContact.phone);
      $("#card_email").text(newContact.email);
    });
    $("#contact_display").show;
    event.preventDefault();
  });
});
