//JavaScript that will extend onto html page and display the footer listed below.
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
                <p>Below you can find links to my personal GitHub, Bellevue University GitHub, Bellevue Youtube, and Web Development @ Bellevue University.</p>
                <ul class="socials">
                    <li><a href="https://github.com/Travis-Rosen?tab=repositories" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://github.com/buwebdev/web-330" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="_blank"><i class="fas fa-university"></i></a></li>
                </ul>
            </div>
            <div class="footer-bottom">
                <p><a href="#">Return to top<a></p>
                <p>Copyright &copy;2021 Travis Rosen - Bellevue University</p>
            </div>
        </footer>
            
        
        
        
        
        
        
        
        
        
        
        
        
        `
    }
}

customElements.define("footer-component", Footer);