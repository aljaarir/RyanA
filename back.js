document.addEventListener('DOMContentLoaded', function () {
    // Find the PROJECTS link in the navbar
    var projectsLink = document.querySelector('.navbar-right li a[href="#projects"]');

    // Add a click event listener to the PROJECTS link
    projectsLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (preventing the browser from navigating to the href)
        event.preventDefault();

        // Redirect to your desired HTML link
        window.location.href = 'project.html';
    });

    // Find the ABOUT link in the navbar
    var aboutLink = document.querySelector('.navbar-left a[href="#about"]');

    // Add a click event listener to the ABOUT link
    aboutLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (preventing the browser from navigating to the href)
        event.preventDefault();

        // Redirect to your desired HTML link
        window.location.href = 'index.html';
    });

    // Find the RESUME link in the navbar
    var resumeLink = document.querySelector('.navbar-right li a[href="#resume"]');

    // Add a click event listener to the RESUME link
    resumeLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (preventing the browser from navigating to the href)
        event.preventDefault();

        // Replace 'your-resume-page.html' with the actual HTML page URL of your resume
        window.location.href = 'https://drive.google.com/file/d/1SKTFVfmAJFdI2nf7WtSPZU7-SuJDHLiT/view?usp=sharing';
    });

    // Find all project boxes and add click event listeners
    var projectBoxes = document.querySelectorAll('.project-box');

    projectBoxes.forEach(function (projectBox) {
        projectBox.addEventListener('click', redirectToCode);
    });

    function redirectToCode(event) {
        const codeUrl = event.currentTarget.getAttribute('data-code-url');
        if (codeUrl) {
            window.location.href = codeUrl;
        }
    }
});
