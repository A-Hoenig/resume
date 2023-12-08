function sendMail(contactForm) {
    emailjs.send("gmail", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, "nLdosHwfx4OQxa9tf")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

//emailjs.send("gmail", "rosie", {to_name: "Alex", message: "The project I want is..."}, "nLdosHwfx4OQxa9tf");