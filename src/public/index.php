<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./assets/css/style.css">
    <title>Home - Password Hash Generator</title>
</head>

<body>
    <main>
        <section>
            <h1>Welcome to Password Hash Generator!</h1>
            <form>
                <div class="form-input">
                    <label for="password">Password</label>
                    <input type="text" id="password" class="text-input" placeholder="Enter the password" required />
                </div>
                <div class="form-input">
                    <label for="hash">Result</label>
                    <textarea id="hash" rows="5" cols="33" class="text-input" readonly disabled>
                    </textarea>
                </div>
                <div class="form-input">
                    <input type="submit" id="submitButton" value="Generate Hash" />
                </div>
            </form>
        </section>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js" integrity="sha512-3gJwYpMe3QewGELv8k/BX9vcqhryRdzRMxVfq6ngyWXwo03GFEzjsUm8Q7RZcHPHksttq7/GFoxjCVUjkjvPdw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./assets/js/main.js"></script>
</body>

</html>