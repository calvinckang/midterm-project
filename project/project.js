const SERVER_URL = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

window.onload = () => {
    function _getProjectTitleOnURL() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        return params.title.toLowerCase();
    }

    async function _getProjectData() {
        const response = await fetch(SERVER_URL);
        const projects = await response.json();
        const [projectToShow] = projects.filter(project => project.name.toLowerCase() === _getProjectTitleOnURL());
        const [projectFallback] = projects.filter(project => project.name.toLowerCase() === "lorem ipsum");

        _updateProjectData(projectToShow, projectFallback);
    }

    function _updateProjectData(projectToShow, projectFallback) {
        const project = projectToShow ? projectToShow : projectFallback;

        const projectName = document.querySelector("h1");
        projectName.textContent = project.name;
        const projectDescription = document.querySelector("p.main-project-subtitle");
        projectDescription.textContent = project.description;
        const projectContent = document.querySelector("p.main-project-description-paragraph");
        projectContent.textContent = project.content;
        const projectImage = document.querySelector("div.main-project-image img");
        projectImage.setAttribute("src", project.image);
        const projectDate = document.querySelector("span.main-project-date");
        projectDate.textContent = project.completed_on;
    }

    _getProjectData();
};