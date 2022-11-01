function Home(props) {
  const { $mainView } = props;
  this.$target = document.createElement("div");
  $mainView.appendChild(this.$target);

  this.render = () => {
    this.$target.innerHTML = "<div><h1>This is main page.</h1></div>";
  };

  this.render();
}

export default Home;
