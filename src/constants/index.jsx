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
        title: "port",
        url: "#port"
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
    desc: "내 삶의 방향성을 제시해 준 이 말. 단순히 자신의 능력을 인정하는 것에서 그치지 않고, 그것을 통해 우리의 삶을 어떻게 살아갈지에 대한 근본적인 질문을 던진다. 마음에서 우러나오도록 정직해지도록 현생을 살아야 그 자체를 즐길 수 있다.",
    },
    {
    title: "열심히 실력을 쌓자",
    desc: "운을 만들기 위해서는 내가 좋아하는 일이나 내가 하고 싶은 일에 몰두하여 실력을 쌓아야 한다. 성공을 염원하는 우리 모두에게 '운'이라는 요소는 필수불가결한 것처럼 여겨진다. 하지만 운이란 단순히 하늘에서 뚝 떨어지는 행운이 아니라, 내가 좋아하는 일이나 하고 싶은 일에 몰입하여 노력하고 실력을 쌓아가는 과정 속에서 자연스럽게 만들어지는 결과물이다. 이렇게 볼 때, 수많은 성공 사례들이 곧 운의 정의를 재해석하는 사례가 된다. 몰입하다 보면, 처음에는 보이지 않았던 길이 서서히 드러나며, 어떤 방향으로 나아가야 할지 명확해진다. 그렇게 길을 찾아 나가는 과정 속에서, 마침내 자신만의 경로를 발견하게 된다. 운이란 고된 노동과 노력을 통해 스스로 만들어 내는 것이다.",
    },
    {
    title: "직접 설계하자",
    desc: "어린시절부터 레고 블럭을 이어 붙이며 나만의 세꼐를 만드는 것에 큰 즐거움을 느꼈다. 손가락 끝으로 느껴지는 조립의 짜릿함과 그 속에서 펼쳐지는 무한한 가능성은 언제나 나의 상상력을 자극했다. 블록을 맞추어 가면서, 나는 나만의 공간에서 사색에 잠기곤 했고, 그런 순간들은 마음의 평화와 창의적 영감을 주었다. 코딩을 통해, 나는 문자와 숫자들을 조합하여 무언가를 '만드는' 행위에 깊이 몰두할 수 있었다. 이 과정에서 생겨나는 문제들을 해결하며 얻는 성취감, 새로운 것을 창조해나가는 과정 속에서 느끼는 희열은 다른 어떤 활동에서도 찾아볼 수 없는 독특한 경험이었고, 그 연장선에서 코딩은 나만의 공간에서 끊임없이 사색하고 탐구할 수 있는 기회를 제공했으며, 그와 동시에 나의 생각과 아이디어를 현실화할 수 있는 길을 열어주었다",
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
    {
        text: ["make", "complete","react.js"],
        title: "로그인폼",
        code: "https://github.com/backdfb/loginform", //깃주소
        view: "https://loginform-two-mu.vercel.app/", //배포 사이트 주소
        info: [
            "site coding",
            "production period: 1 day",
            "use stack: HTML5, CSS3, JavaScript"
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
