const skills = [
    "HTML/CSS",
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "Python",
    "Java",
    "SQL",
    "Tailwind CSS",
    "Git"
];

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    );
}

export default Skills;
