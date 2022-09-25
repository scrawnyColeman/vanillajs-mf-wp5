import {
  loadComponent,
  loadReact,
  loadSolid,
  loadSvelte,
  loadVue,
} from "./loaders";

loadComponent(document, "home");
loadReact();
loadSolid();
loadSvelte();
loadVue();

document.getElementById("loading").remove();
