let skills = [
    {
        name: "HTML5",
        logo: "./images/logo-html.png"
    },
    {
        name: "CSS3",
        logo: "./images/logo-css.png"
    },
    {
        name: "Bootstrap",
        logo: "./images/logo-bootstrap.png"
    },
    {
        name: "JavaScript",
        logo: "./images/logo-js.png"
    },
    {
         name: "React",
         logo: "./images/logo-react.png"
    },
    {
        name: "Node.js",
        logo: "./images/logo-node-js.png"
    },
    {
        name: "GitHub",
        logo: "./images/logo-github.svg"
    },
    {
        name: "Ubuntu",
        logo: "./images/logo-ubuntu.png"
    },
    {
        name: "Scrum",
        logo: "./images/logo-scrum.png"
    }
]

const templateSkill = (skill) => {
    const cardSkill = `<figure><figcaption class="color-cuivre text-center">${skill.name}</figcaption><img class="layout-logos" src=${skill.logo} alt=${skill.name}></figure>`;
    document.getElementById("container-skills").insertAdjacentHTML('beforeend', cardSkill);
}

skills.forEach(templateSkill)