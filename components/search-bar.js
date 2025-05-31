// function SearchBar() {
//   const content = `
//         <div class="search-bar" id="search-bar">
//           <input type="text" id="search-input">
//         </div>
//     `;
//   render();
// }

// export default SearchBar;

// function render() {
//   globalThis.DOM = globalThis.DOM;
//   DOM.searchBar = document.getElementById("search-bar");
//   DOM.searchBar.innerHTML = "";

//   const savedState = localStorage.getItem(`post_${post.id}`);
//   const isSaved = savedState != null;

//   const item = document.createElement("article");
//   item.classList.add("blog__post");
//   item.innerHTML = `
//         <div class="search-bar" id="search-bar">
//           <input type="text" id="search-input">
//         </div>
//     `;
//   DOM.searchBar.appendChild(item);
// }

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
    this.input.addEventListener('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    const query = event.target.value;
    this.dispatchEvent(new CustomEvent('search', { detail: query }));
  }
}

customElements.define('search-bar', SearchBar);