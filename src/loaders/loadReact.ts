const elementId = "react-app";

export const loadReact = () => {
  const element = document.createElement("div");
  element.id = elementId;
  element.classList.add("container");
  document.getElementById("apps").appendChild(element);

  try {
    require("react/App").default(elementId);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};
