//JavaScript that will extend onto html page and display the navbar listed below.
class Header extends HTMLElement 
{
    constructor() 
    {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div id="navbar">
                <a href="index.html" class="nav-link">Home</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="resume.html" class="nav-link">Resume</a>
                <a href="projects.html" class="nav-link">Projects</a>
                <a href="api.html" class="nav-link">API Tests</a>
                <a href="diagrams.html" class="nav-link">DataBase Diagrams</a>
                <a href="presentations.html" class="nav-link">Dev-Ops</a>
            </div>
        </header> `
    }
}

customElements.define("header-component", Header);