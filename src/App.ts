const render = (mfeName: "react" | "svelte" | "vue" | "solid") => {
  const element = document.createElement("div");
  const id = `${mfeName}-app`;
  element.id = id;
  element.style.marginTop = "1rem";
  document.getElementById("main-content").appendChild(element);
  try {
    switch (mfeName) {
      case "react":
        require("react/App").default(id);
        break;
      case "svelte":
        require("svelte/App").default(id);
        break;
      case "vue":
        require("vue/App").default(id);
        break;
      case "solid":
        require("solid/App").default(id);
        break;
    }
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};

let count = 0;

(function () {
  // build wrapper and inn
  const wrapper = document.createElement("div");
  wrapper.id = "home";
  wrapper.style.marginTop = "1rem";

  const element = document.createElement("div");
  element.style.color = "#17111c";
  element.style.backgroundColor = "#e1a1ff";
  element.style.width = "100%";
  element.style.height = "250px";
  element.style.padding = "20px";
  element.style.boxSizing = "border-box";
  element.style.borderRadius = "20px";
  element.innerHTML = `
    <h4 style="margin: 0 0 1rem 0;">A host component that is built with VanillaJS (not an MFE)</h4>
  `;

  // build button
  const buttonElement = document.createElement("button");
  buttonElement.style.padding = "0.5rem";
  buttonElement.style.borderRadius = "0.375rem";
  buttonElement.style.backgroundColor = "#fdc3ff";
  buttonElement.style.color = "#17111c";
  buttonElement.style.fontWeight = "600";
  buttonElement.innerHTML = `[Host] Click count: 0`;
  buttonElement.addEventListener("click", function () {
    count++;
    buttonElement.innerHTML = `[Host] Click count: ${count}`;
  });
  buttonElement.addEventListener("mouseover", function () {
    buttonElement.style.opacity = `75%`;
  });
  buttonElement.addEventListener("mouseout", function () {
    buttonElement.style.opacity = `100%`;
  });

  wrapper.appendChild(element);
  element.appendChild(buttonElement);
  document.getElementById("main-content").appendChild(wrapper);
})();

render("react");
render("svelte");
render("vue");
render("solid");
