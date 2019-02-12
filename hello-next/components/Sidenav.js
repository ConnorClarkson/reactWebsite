const linkStyle = {
    marginRight: 15
}

const Sidenav = () => (
    <main class="profile">
        <div class="profile-bg"></div>
        <section class="container">
            <aside class="profile-image">
            </aside>
            <section class="profile-info">
                <h1 class="first-name">Connor</h1>
                <h1 class="second-name">Clarkson</h1>
                <h2>ABOUT</h2>
                <p>
                    Hello world! I'm Connor, a Software Developer! <br></br>
                        I studied Computer Science with Games Development (BSC) at the University of Hull.
                        I have worked on developing software for the NHS , Computer graphic research at the university of Hull,
                        and was lucky enough to be able to work at the London 2012 Olympics.
                </p>

                    <aside class="social-media-icons">
                        <a href="https://www.linkedin.com/in/connorclarkson" target="_blank">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com/sqidge" target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    </aside>
            </section>
         </section>
         <br></br>
         <button class="icon close"></button>
    </main>
)
                
export default Sidenav