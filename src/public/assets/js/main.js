$(document).ready(function () {
  let sendPassword = (password) => {
    var data = {
      password: password,
    };

    $.ajax({
      url: "../../src/includes/hashGenerator.inc.php",
      method: "POST",
      data: data,
      dataType: "json",
      success: function (response) {
        let errors = response.errors;
        if (errors.length > 0) {
          var sError = "";

          $.each(errors, (index, error) => {
            sError = `${sError}${error}\n`;
          });

          alert(sError);
        } else {
          $("#hash").val(response.hash);
        }
      },
      error: function (xhr, status, error) {
        alert(`An error has occurred: ${error}`);
        console.error(error);
      },
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let password = $("#password").val();

    if (!password) {
      alert("Please fill the password input.");
    } else {
      sendPassword(password);
    }
  };

  $("#submitButton").on("click", handleSubmit);
});
