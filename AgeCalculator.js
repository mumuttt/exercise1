// elements
const container = document.querySelector('.container');
const dateInput = container.querySelector('.details .date input');
const monthInput = container.querySelector('.details .month input');
const yearInput = container.querySelector('.details .year input');
const submitBtn = container.querySelector('.submit-btn');
const result = container.querySelector('.result');

// function
const calculateAge = () => {
    const inputDate = parseInt(dateInput.value, 10);
    const inputMonth = parseInt(monthInput.value, 10);
    const inputYear = parseInt(yearInput.value, 10);

    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = 1 + currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let days = currentDay - inputDate;
    let months = currentMonth - inputMonth;
    let years = currentYear - inputYear;

    if (days < 0) {
        days += daysInMonth[currentMonth - 2];
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    //  result
    result.style.display = 'block';
    result.innerHTML = `Your age is ${years} Years ${months} Months ${days} Days`;
};

// Submit
submitBtn.addEventListener('click', calculateAge);
