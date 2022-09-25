const elementId = "solid-app";

export const loadSolid = () => {
  const element = document.createElement("div");
  element.id = elementId;
  element.classList.add("container");
  document.getElementById("apps").appendChild(element);

  try {
    require("solid/App").default(elementId);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};
