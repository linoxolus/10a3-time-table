const subjectEls = document.querySelectorAll(
    '.timetable-item.subject .timetable-text'
);
var subjects = [
    {
        day: 'monday',
        content: [
            'Lịch Sử',
            'Tiếng Anh',
            'Hướng Nghiệp',
            'Hướng Nghiệp',
            'Chào Cờ',
        ],
    },
    {
        day: 'tuesday',
        content: ['Toán', 'Tin Học', 'Vật Lý', 'Ngữ Văn', 'Hóa Học'],
    },
    {
        day: 'wednesday',
        content: ['Công Nghệ', 'Ngữ Văn', 'Ngữ Văn', 'Tiếng Anh', 'Tiếng Anh'],
    },
    {
        day: 'thursday',
        content: ['Vật Lý', 'Toán', 'Hóa Học', '', ''],
    },
    {
        day: 'friday',
        content: ['Toán', 'Toán', 'Tin Học', 'Vật Lý', 'Lịch Sử'],
    },
    {
        day: 'saturday',
        content: ['Công Nghệ', 'Hướng Nghiệp', 'Địa Phương', 'Hóa Học', ''],
    },
];

function render() {
    var fullSubjects = [];
    fullSubjects = subjects.reduce((acc, cur) => {
        cur.content.forEach((value, index) => {
            if (!acc[index]) {
                acc[index] = [];
            }
            acc[index].push(value);
        });
        return acc;
    }, []);
    fullSubjects = fullSubjects.flatMap(obj => obj)
    for(i = 0; i < subjectEls.length; i++) {
        subjectEls[i].innerHTML = fullSubjects[i];
    }
}

render();
