export default function Nav({ activeCategory, setCategory })
{
     const categories = [
        { id: 'all', label: 'Home page', value: 'All' },
        { id: 'web', label: 'Web Development', value: 'Web-Dev' },
        { id: 'ai', label: 'AI', value: 'AI' },
        { id: 'data', label: 'Data Analysis', value: 'Data-Analysis' },
        { id: 'py', label: 'Python', value: 'Python' },
        { id: 'cyber', label: 'Cyber Security', value: 'Cyber-Security' }
    ];

    return(
        <nav id="nav">
            <ul className="links">
                {categories.map((cat) => (
                    <li 
                        key={cat.id} 
                        className={activeCategory === cat.value ? "active" : "inactive"}
                    >
                        <a 
                            onClick={() => setCategory(cat.value)} 
                            style={{ cursor: 'pointer' }}
                        >
                            {cat.label}
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="icons">
                <li><a href="https://www.youtube.com/@Azure-AI-102Academy" target="_blank" className="icon brands alt fa-youtube"><span className="label">YouTube</span></a></li>
                <li><a href="https://siddharthsamber94.medium.com/" target="_blank" className="icon brands alt fa-medium"><span className="label">Medium</span></a></li> 
                <li><a href="https://www.linkedin.com/in/siddharth-samber-661a281b4/" target="_blank" className="icon brands alt fa-linkedin"><span className="label">Linkedin</span></a></li>
                <li><a href="https://github.com/SIDD58" target="_blank" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
            </ul>
        </nav>


    );
}