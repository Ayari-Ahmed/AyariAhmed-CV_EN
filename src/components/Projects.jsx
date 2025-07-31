const projects = [
    {
        title: "Educational Platform - bacweb.tn",
        description: "Restructured an educational platform used by students on www.bacweb.tn for the National Center for Technologies in Tunisian Education."
    },
    {
        title: "Business Connection Platform - Xsustain",
        description: "Developed a web platform that connects business owners with potential buyers and investors. Built user dashboards and an admin panel. Created RESTful APIs with Node.js/Express.js and managed data with MongoDB."
    },
    {
        title: "E-commerce Website - Castor Pharma",
        description: "Developed an e-commerce website for Castor Pharma to sell their Collagène Booster product, with features for product management, shopping cart, and order tracking."
    }
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
