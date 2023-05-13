$(document).ready(function () {
  let sendPassword = (password) => {
    var data = {
      password: password,
    };

    $.ajax({
      url: "../../src/includes/hashGenerator.inc.php",
      method: "POST",
      data: data,
      success: function (response) {
        let mResponse = JSON.parse(response);
        let errors = mResponse.errors;
        if (errors.length > 0) {
          var sError = "";

          $.each(errors, (index, error) => {
            sError = `${sError}${error}\n`;
          });

          alert(sError);
        } else {
          $("#hash").val(mResponse.hash);
        }
      },
      error: function (xhr, status, error) {
        alert(`An error has occured : ${error}`);
        console.error(error);
      },
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let password = $("#password").val();

    if (!password) {
      alert("Please fill password input.");
    } else {
      sendPassword(password);
    }
  };

  $("#submitButton").on("click", handleSubmit);
});
