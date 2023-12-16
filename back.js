function redirectToCode(event) {
    const projectBox = event.target.closest('.project-box');
    if (projectBox) {
        const codeUrl = projectBox.getAttribute('data-code-url');
        if (codeUrl) {
            window.location.href = codeUrl;
        }
    }
}


// Wait for the DOM to be ready
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
  });

// Wait for the DOM to be ready
  document.addEventListener('DOMContentLoaded', function () {
    // Find the PROJECTS link in the navbar
    var projectsLink = document.querySelector('.navbar-right li a[href="#about"]');

    // Add a click event listener to the PROJECTS link
    projectsLink.addEventListener('click', function (event) {
      // Prevent the default behavior of the link (preventing the browser from navigating to the href)
      event.preventDefault();

      // Redirect to your desired HTML link
      window.location.href = 'index.html';
    });
  });

document.addEventListener('DOMContentLoaded', function () {
  // Find the RESUME link in the navbar
  var resumeLink = document.querySelector('.navbar-right li a[href="#resume"]');

  // Add a click event listener to the RESUME link
  resumeLink.addEventListener('click', function (event) {
    // Prevent the default behavior of the link (preventing the browser from navigating to the href)
    event.preventDefault();

    // Replace 'your-resume-page.html' with the actual HTML page URL of your resume
    window.location.href = 'https://drive.google.com/file/d/1my8AxZSocSSFcxLzeAPnwVOqRpUZshem/view?usp=sharing';
  });
});
