$(function(){
  $("#contact_new").submit(function() {
    var inputtedName = $("#contact_name").val();
    var inputtedPhone = $("#contact_phone").val();
    var inputtedEmail = $("#contact_email").val();
    var newContact = { name: inputtedName,
                       phone: inputtedPhone,
                       email: inputtedEmail };

    $("#contact_list").append("<li><span class='contact>'" + newContact.name + "</span></li>");

    $("#contact_name").val("");
    $("#contact_phone").val("");
    $("#contact_email").val("");

    $(".contact").last().click(function() {
      $("#card_name").text(newContact.name);
      $("#card_phone").text(newContact.phone);
      $("#card_email").text(newContact.email);
    });
  });
});
