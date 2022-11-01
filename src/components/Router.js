import Home from "./Pages/Home.js";
import Menu1 from "./Pages/Menu1.js";

function Router(props) {
  const { $app, initialState } = props;
  this.$target = document.createElement("div");
  this.$target.className = "main-view";
  $app.appendChild(this.$target);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const path = window.location.pathname;
    this.$target.innerHTML = "";

    switch (path) {
      case "/" || "":
        const home = new Home({ $mainView: this.$target });
        break;
      case "/menu1":
        const menu1 = new Menu1({ $mainView: this.$target });
        break;
      default:
        this.$target.innerHTML =
          "<div><h1>Page Not Found (404 Error)</h1></div>";
    }
  };

  window.addEventListener("popstate", () => {
    console.log("[popstate]", window.location.pathname);
    this.render();
  });

  window.addEventListener("DOMContentLoaded", () => {
    this.render();
  });

  this.render();
}

export default Router;
