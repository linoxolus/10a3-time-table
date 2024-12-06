const subjectEls = document.querySelectorAll(
    '.timetable-item.subject .timetable-text'
);

var subjects = [
    {
        day: 'monday',
        content: [
            'Hướng Nghiệp',
            'Hướng Nghiệp',
            'Ngữ Văn',
            'Hóa Học',
            'Hóa Học',
        ],
    },
    {
        day: 'tuesday',
        content: ['Công Nghệ', 'Vật Lý', 'Ngữ Văn', 'Toán', 'Toán'],
    },
    {
        day: 'wednesday',
        content: ['Vật Lý', 'Vật Lý', 'Quốc Phòng', 'Tin Học', 'Toán'],
    },
    {
        day: 'thursday',
        content: ['Địa Phương', 'Tin Học', '', '', ''],
    },
    {
        day: 'friday',
        content: ['Ngữ Văn', 'Hóa Học', 'Công Nghệ', 'Toán', 'Tiếng Anh'],
    },
    {
        day: 'saturday',
        content: [
            'Tiếng Anh',
            'Tiếng Anh',
            'Lịch Sử',
            'Hướng Nghiệp',
            '',
        ],
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
    fullSubjects = fullSubjects.flatMap((obj) => obj);
    for (i = 0; i < subjectEls.length; i++) {
        subjectEls[i].innerHTML = fullSubjects[i];
    }
}

render();
