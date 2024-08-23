const newDate = new Date();

function findAge(month, dayOfMonth) {
    if (month == 0 && dayOfMonth <= 12) {
        var age = newDate.getFullYear() - 2003;
    }

    age = newDate.getFullYear() - 2004;

    return age;
}

const aboutText = [`Hello, I am Pranav Jha, I am a ${findAge(newDate.getMonth(), newDate.getDate())} year old Computer Engineering Student at the University of California - Santa Cruz.`, "I have experience in Python, Go, Javascript, and Typescript. I also know how to work with ReactJS, Node, and MySQL.", "Links to my LinkedIn and GitHub page below:"]

function aboutMe() {
    document.getElementById('body').innerHTML  = "<p>" + aboutText[0] + "</p>";
    document.getElementById('body').innerHTML += "<p>" + aboutText[1] + "</p>";
    document.getElementById('body').innerHTML += "<p>" + aboutText[2] + "</p>";
    document.getElementById('body').innerHTML += `<p> <a href="https://linkedin.com/in/pranav--jha"><img id='icon' src="Icons/linkedin.png"/></a> <a href="https://github.com/PJ-004"><img id='icon' src="Icons/github.png"/></a> </p>`;
}