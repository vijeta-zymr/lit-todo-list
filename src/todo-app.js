import TodoApp from "./TodoApp.js";

// Fix for codesandbox
if (customElements.get("todo-app")) {
  window.location.reload();
} else {
  customElements.define("todo-app", TodoApp);
}
