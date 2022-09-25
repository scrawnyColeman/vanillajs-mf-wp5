import {
  loadComponent,
  loadReact,
  loadSolid,
  loadSvelte,
  loadVue,
} from "./loaders";

loadComponent();
loadReact();
loadSolid();
loadSvelte();
loadVue();

document.getElementById("loading").remove();
