const elementId = "vue-app";

export const loadVue = () => {
  const element = document.createElement("div");
  element.id = elementId;
  element.classList.add("container");
  document.getElementById("apps").appendChild(element);

  try {
    require("vue/App").default(elementId);
  } catch (e) {
    console.error((e as Error).message);
    element.remove();
  }
};
