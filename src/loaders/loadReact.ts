const elementId = "react-app";

export default () => {
  const element = document.createElement("div");
  element.id = elementId;
  element.classList.add("container");
  document.getElementById("apps").appendChild(element);

  try {
    require("react-mfe/App").default(elementId);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};
