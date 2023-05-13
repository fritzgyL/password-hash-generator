$(document).ready(function () {
  let submitButton = $("#submitButton");
  let passwordInput = $("#password");

  passwordInput.on("input", function () {
    var password = passwordInput.val();

    if (password.trim() === "") {
      submitButton.prop("disabled", true);
    } else {
      submitButton.prop("disabled", false);
    }
  });

  let sendPassword = async (password) => {
    var data = {
      password: password,
    };

    submitButton.val("Loading...");
    submitButton.attr("disabled", true);

    let generateHash = async () => {
      await $.ajax({
        url: "../../src/includes/hashGenerator.inc.php",
        method: "POST",
        data: data,
        dataType: "json",
        success: function (response) {
          let errors = response.errors;
          if (errors.length > 0) {
            var sError = "";

            $.each(errors, (_, error) => {
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

    await generateHash().finally(() => {
      submitButton.val("Generate Hash");
      submitButton.removeAttr("disabled");
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let password = passwordInput.val();

    if (!password) {
      alert("Please fill the password input.");
    } else {
      sendPassword(password);
    }
  };

  submitButton.on("click", handleSubmit);
});
