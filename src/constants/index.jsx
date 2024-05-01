import port01 from "../assets/img/port01.png"
import port02 from "../assets/img/port02.png"

export const headerNav = [
    {
        title: "intro",
        url: "#intro"
    },
    {
        title: "skill",
        url: "#skill"
    },
    {
        title: "site",
        url: "#site"
    },

    {
        title: "contact",
        url: "#contact"
    }
];

export const introText = {
    title: "I am developer",
    desc: ["my talent is", "found at the end of the", "effort"]
}

export const skillText = [
    {
    title: "내 실력에 정직해지자",
    desc: "마음에서 우러나오도록 정직해지도록 현생을 살아야 그 자체를 즐길 수 있다.",
    },
    {
    title: "열심히 실력을 쌓자",
    desc: "운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하여 실력을 쌓아야 한다. 몰두 하다보면 길이 보이고 방향이 보이게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.",
    },
    {
    title: "직접 설계하자",
    desc: "어린시절부터 레고 조립을 좋아했고 나만의 공간에서의 사색을 좋아했다. 내 창작물을 마음껏 만들 수 있다는 것에 코딩이라는 것은 큰 매력으로 보인다.",
    },
]

export const siteText = [
    {
        text: ["make", "complete","standard"],
        title: "퀴즈 사이트",
        code: "https://github.com/backdfb/QuizProject", //깃주소
        view: "https://quiz-project-pink.vercel.app", //배포 사이트 주소
        info: [
            "site coding",
            "production period: 1 week",
            "use stack: HTML5, CSS3, JavaScript"
        ],
    },
    {
        text: ["make", "complete","react.js"],
        title: "리액트를 이용한 타이핑 효과",
        code: "https://github.com/backdfb/effect1", //깃주소
        view: "https://effect1-backdfbs-projects.vercel.app/", //배포 사이트 주소
        info: [
            "site coding",
            "production period: 2 days",
            "use stack: react.js"
        ],
    },
];

export const portText = [
    {
        num: "01",
        title: "뉴스레터 signUp 페이지",
        desc: "프론트엔드 멘토 사이트의 실습물입니다. HTML, CSS, JavaScript의 기본기를 잊지 않기 위하여 제작해보았습니다. 창작물이 아니라는 점이 한계여서 아쉬움이 남는 작품입니다.",
        img: port01,
        code: "https://github.com/backdfb/newsletterSignup",
        view: "https://newsletter-signup-three-mu.vercel.app/",
        name: "news letter signup",
    },
    {
        num: "02",
        title: "페스티벌 랜딩 페이지",
        desc: "리액트를 이용한 페스티벌 정보 랜딩 페이지 입니다. 클릭할 때마다 이미지를 수평 이동 하도록 효과를 넣었습니다. 여러모로 css나 디자인, 특히 반응형이 구현되지 않아서 아쉬웠습니다. 추후 틈나는 대로 업데이트 예정입니다.",
        img: port02,
        code: "https://github.com/backdfb/miniProject/tree/main",
        view: "https://mini-project-chi-five.vercel.app/",
        name: "f-library",
    },
]

export const contactText = [
    {
        link: "https://www.instagram.com/backdfb",
        title: "ig : @backdfb",
    },
    {
        link: "mailto:wva22lfr@gmail.com",
        title: "mail : wva22lfr@gmail.com",
    },
];
