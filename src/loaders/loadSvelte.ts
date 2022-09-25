const elementId = "svelte-app";

export const loadSvelte = () => {
  const element = document.createElement("div");
  element.id = elementId;
  element.classList.add("container");
  document.getElementById("apps").appendChild(element);

  try {
    require("svelte/App").default(elementId);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};
