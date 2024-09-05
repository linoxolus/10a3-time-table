const subjectEls = document.querySelectorAll(
    '.timetable-item.subject .timetable-text'
);

var subjects = [
    {
        day: 'monday',
        content: [
            'Hướng Nghiệp',
            'Hướng Nghiệp',
            'Hóa Học',
            'Hóa Học',
            'Ngữ Văn',
        ],
    },
    {
        day: 'tuesday',
        content: ['Công Nghệ', 'Công Nghệ', 'Địa Phương', 'Toán', 'Hóa Học'],
    },
    {
        day: 'wednesday',
        content: ['Lịch Sử', 'Vật Lý', 'Quốc Phòng', 'Tin Học', 'Toán'],
    },
    {
        day: 'thursday',
        content: ['Toán', 'Tin Học', '', '', ''],
    },
    {
        day: 'friday',
        content: ['Lịch Sử', 'Vật Lý', 'Vật Lý', 'Toán', 'Tiếng Anh'],
    },
    {
        day: 'saturday',
        content: [
            'Tiếng Anh',
            'Tiếng Anh',
            'Ngữ Văn',
            'Ngữ Văn',
            'Hướng Nghiệp',
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
