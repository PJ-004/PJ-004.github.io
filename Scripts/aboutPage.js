const newDate = new Date();

function findAge(month, dayOfMonth) {
    if (month == 0 && dayOfMonth <= 12) {
        var age = newDate.getFullYear() - 2003;
    }

    age = newDate.getFullYear() - 2004;

    return age;
}

function aboutMe() {
    location.href = 'index.html';
}