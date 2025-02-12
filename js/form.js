 document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission

        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Construct the mailto link
        var mailtoLink = "mailto:210100018@iitb.ac.in" +
                         "?subject=" + encodeURIComponent(subject) +
                         "&body=" + encodeURIComponent("Name: " + name + 
                                                       "\nEmail: " + email + 
                                                       "\n\nMessage:\n" + message);

        // Open user's email client
        window.location.href = mailtoLink;
    });