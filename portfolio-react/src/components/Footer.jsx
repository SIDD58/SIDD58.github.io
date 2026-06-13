export default function Footer()
{
    return( 
        <footer id="footer">
            <section className="split contact">

                <section>
                    <h3>Phone</h3>
                    <p><a href="#">+1 (403) 561-1500</a></p>
                </section>
                <section>
                    <h3>Email</h3>
                    <p><a href="#">siddharthsamber10@gmail.com</a></p>
                </section>
                <section>
                    <h3>Social</h3>
                    <ul className="icons alt">
                        <li><a href="https://www.youtube.com/@Azure-AI-102Academy" target="_blank" className="icon brands alt fa-youtube"><span className="label">Youtube</span></a></li> 
                        <li><a href="https://siddharthsamber94.medium.com/" target="_blank" className="icon brands alt fa-medium"><span className="label">Medium</span></a></li> 
                        <li><a href="https://www.linkedin.com/in/siddharth-samber-661a281b4/"  target="_blank"className="icon brands alt fa-linkedin"><span className="label">Linkedin</span></a></li>
                        <li><a href="https://github.com/SIDD58"  target="_blank"className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
                        
                    </ul>
                </section>
            </section>
        </footer>
    );
}
