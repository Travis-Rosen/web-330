class Footer extends HTMLElement 
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = `

        <footer>
            <div class="footer-content">
                <h3>Travis Rosen</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul class="socials">
                    <li><a href="#"><i class="fab fa-github"></i></a></li>
                    <li><a href="#"><i class="fab fa-github"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="#"><i class="fas fa-university"></i></a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p>Copyright &copy;2021 Travis Rosen - Bellevue University</p>
            </div>
        </footer>
            
        
        
        
        
        
        
        
        
        
        
        
        
        `
    }
}

customElements.define("footer-component", Footer);