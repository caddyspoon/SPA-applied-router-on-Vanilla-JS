function Nav(props) {
  const { $app, onClickHandler } = props;

  this.$target = document.createElement("nav");
  this.$target.appendChild(document.createElement("ul"));
  this.$target.className = "main-nav";

  $app.appendChild(this.$target);

  this.onClick = onClickHandler;

  this.render = () => {
    this.$target.innerHTML = `<li class="nav-item" href="/">Home</li><li class="nav-item" href="menu1">Menu1</li>`;
  };

  this.$target.addEventListener("click", (e) => {
    // TODO: 만약 아래 코드가 없다면?
    e.preventDefault();

    const path = e.target.getAttribute("href");
    if (path === window.location.pathname) {
      return;
    }

    history.pushState(null, null, path);
    this.onClick(path);
  });

  this.render();
}

export default Nav;
