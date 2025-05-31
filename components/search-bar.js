class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <div class="search-bar">
        <input type="text" id="search-input" placeholder="Search...">
      </div>
    `;

    this.input = this.shadowRoot.getElementById('search-input');
  }
}

customElements.define('search-bar', SearchBar);