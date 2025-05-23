export class Router {
    constructor(routes) {
        this.routes = routes;
        this.rootElement = document.querySelector('.main__container');
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash || '#home';
        const route = this.routes[hash.slice(1)];
        
        if (route) {
            this.rootElement.innerHTML = route();
        }
    }
}