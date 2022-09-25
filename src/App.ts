import {
  loadComponent,
  loadReact,
  loadSolid,
  loadSvelte,
  loadVue,
} from "./loaders";

loadComponent(document, "apps");
loadReact();
loadSolid();
loadSvelte();
loadVue();

document.getElementById("loading").remove();
