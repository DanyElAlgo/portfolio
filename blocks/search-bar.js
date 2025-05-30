function SearchBar() {
  const content = `
    <div class="main__wrapper">
        <section id="blog">
            <h2 class="main__title">My Blog</h2>
            <div class="blog">
            </div>
        </section>
        </div>
    `;
  render();
}

export default SearchBar;

function render() {
  DOM.searchBar.innerHTML = "";

  const savedState = localStorage.getItem(`post_${post.id}`);
  const isSaved = savedState != null;

  const item = document.createElement("article");
  item.classList.add("blog__post");
  item.innerHTML = `
            <h6 class="blog__date">a</h6>
            <h3 class="blog__title">a</h3>
            <p class="blog__desc">a</p>
            <button class="blog__save" data-post-id="a">
                "Save"
            </button>
        `;
  DOM.searchBar.appendChild(item);
}
