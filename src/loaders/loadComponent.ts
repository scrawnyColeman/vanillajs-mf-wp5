let count = 0;

export default (document: Document, id: string) => {
  // build wrapper and inn
  const wrapper = document.createElement("div");
  wrapper.id = "vanilla";
  wrapper.classList.add("container");

  const element = document.createElement("div");
  element.style.color = "#17111c";
  element.style.backgroundColor = "#e1a1ff";
  element.style.width = "100%";
  element.style.height = "250px";
  element.style.padding = "20px";
  element.style.boxSizing = "border-box";
  element.style.borderRadius = "20px";
  element.innerHTML = `
    <h4 style="margin: 0 0 1rem 0;">A microfrontend that is built with VanillaJS</h4>
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
  document.getElementById(id).appendChild(wrapper);
};
