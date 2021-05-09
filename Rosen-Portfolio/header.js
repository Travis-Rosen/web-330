class Header extends HTMLElement 
{
    constructor() 
    {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class = "navbar navbar-expand-lg navbar-light">
                <div class = "collapse navbar-collapse">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="about.html" class="nav-link">About</a>
                        </li>
                        <li class="nav-item">
                            <a href="resume.html" class="nav-link">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a href="projects.html" class="nav-link">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="api.html" class="nav-link">API Tests</a>
                        </li>
                        <li class="nav-item">
                            <a href="diagrams.html" class="nav-link">DataBase Diagrams</a>
                        </li>
                        <li class="nav-item">
                            <a href="bucket-list.html" class="nav-link">BucketList</a>
                        </li>
                    <ul>
                </div>
            </nav>
        </header>










        `
    }
}

customElements.define("header-component", Header);