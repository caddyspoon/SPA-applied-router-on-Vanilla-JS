import Router from "./Router.js";
import Nav from "./UI/Nav.js";

function App($app) {
  this.state = {
    path: "/",
  };

  const nav = new Nav({
    $app,
    onClickHandler: (newPath) => {
      this.setState({ ...this.state, path: newPath });
    },
  });

  const router = new Router({ $app, initialState: this.state.path });

  this.setState = (nextState) => {
    this.state = nextState;

    router.setState(this.state.path);
  };
}

export default App;
