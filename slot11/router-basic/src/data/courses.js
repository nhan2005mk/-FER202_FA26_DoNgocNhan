export const COURSES = [
    {
        code: 'FER202',
        name: 'Front-End Web Development with React',
        credits: 3,
        semester: 5,
        desc: 'Học xây dựng giao diện ứng dụng web Single Page Application (SPA) với ReactJS, React Router, Hooks và Bootstrap.',
    },
    {
        code: 'PRM392',
        name: 'Mobile Programming',
        credits: 3,
        semester: 6,
        desc: 'Phát triển ứng dụng di động đa nền tảng với React Native hoặc Flutter.',
    },
    {
        code: 'SDN302',
        name: 'Server-side Development with NodeJS',
        credits: 3,
        semester: 5,
        desc: 'Xây dựng RESTful API và backend microservices với Node.js, Express và MongoDB.',
    },
    {
        code: 'WED201c',
        name: 'Web Design',
        credits: 3,
        semester: 3,
        desc: 'Thiết kế giao diện website chuẩn responsive với HTML5, CSS3, JavaScript và Bootstrap/Tailwind.',
    },
    {
        code: 'SWP391',
        name: 'Application Development Project',
        credits: 3,
        semester: 5,
        desc: 'Dự án phát triển phần mềm theo mô hình Agile/Scrum, xây dựng ứng dụng thực tế theo nhóm.',
    },
];

export const findCourse = (code) =>
    COURSES.find((c) => c.code.toLowerCase() === code?.toLowerCase());
