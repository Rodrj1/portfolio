import "./style.scss";

let projectId = 1;
const maxProjects = 4;

const projectAmount = document.getElementById("projectAmount");

const updateProjectNumber = () => {
  if (projectAmount) projectAmount.innerText = `${projectId}/${maxProjects}`;
};
updateProjectNumber();

const toggleProjectVisibility = (project: HTMLElement | null) => {
  project?.classList.toggle("hidden");
  project?.classList.toggle("visible");
};

const hideButton = (button: HTMLElement | null) => {
  button?.classList.add("hidden");
  button?.classList.remove("visible");
};

const displayButton = (button: HTMLElement | null) => {
  button?.classList.add("visible");
  button?.classList.remove("hidden");
};

const nextProjectButton = document.getElementById("nextProjectButton");
const previousProjectButton = document.getElementById("previousProjectButton");

const updateCurrentShownProject = (NextOrPrevious: "next" | "previous") => {
  const currentShownProject = document.getElementById(`${projectId}`);

  let newShownProject: HTMLElement | null = null;

  if (NextOrPrevious == "next") {
    newShownProject = document.getElementById(`${projectId + 1}`);

    projectId++;

    if (projectId > 1) {
      displayButton(previousProjectButton);
    }

    if (projectId == maxProjects) {
      hideButton(nextProjectButton);
    }
  }

  if (NextOrPrevious == "previous") {
    newShownProject = document.getElementById(`${projectId - 1}`);

    projectId--;

    if (projectId < maxProjects) {
      displayButton(nextProjectButton);
    }

    if (projectId == 1) {
      hideButton(previousProjectButton);
    }
  }

  toggleProjectVisibility(currentShownProject);
  toggleProjectVisibility(newShownProject);

  updateProjectNumber();
};

nextProjectButton?.addEventListener("click", (e) => {
  e.preventDefault();
  updateCurrentShownProject("next");
});

previousProjectButton?.addEventListener("click", (e) => {
  e.preventDefault();
  updateCurrentShownProject("previous");
});
