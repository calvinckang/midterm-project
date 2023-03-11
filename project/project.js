window.onload = () => {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        .then((response) => response.json())
        .then((data) => {
            const [project] = data.filter((launchObj) => {
                return launchObj.uuid === "3";
            });
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
        })
    .catch((err) => console.log(err));
};