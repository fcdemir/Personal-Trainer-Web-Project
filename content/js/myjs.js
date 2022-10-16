// CALENDER
const myDatePicker = MCDatepicker.create({ 
    el: '#date',
    showCalendarDisplay: false,
    dateFormat: 'DD-MM-YYYY', 
    customClearBTN: 'Clear', 
    customOkBTN: 'Select', 
    customCancelBTN: 'Cancel', 
    customWeekDays: [
     'Monday',
     'Tuesday',
     'Wednesday',
     'Thursday',
     'Friday',
     'Saturday',
     'Monday'
    ],
    customMonths: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ]
});