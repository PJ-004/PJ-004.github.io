const date = new Date();

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const currentDayOfMonth = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentDayOfWeek = date.getDay();

const currentDate = `${weekdays[currentDayOfWeek]}, ${monthNames[currentMonth]} ${currentDayOfMonth} ${currentYear}`

function aboutMe() {
    location.href = 'index.html';
}

function resumePage() {
    location.href = 'resume.html';
}

function projectPage() {
    location.href = 'projects.html';
}

function birthday(month, dayOfMonth) {
    if (month == 0 && dayOfMonth < 12) {
        return date.getFullYear() - 2005;
    }

    return date.getFullYear() - 2004;
}

document.getElementById('dateToday').innerHTML = `Today is ${currentDate}`;
document.getElementById('age').innerHTML = birthday(currentMonth, currentDayOfMonth);