export default function Post({Project})
{
    return(
    <article>
        <header>  
        <h2><a href={Project.github}>{Project.title}<br />
        </a></h2>
        </header>
        <a href={Project.github} className="image fit"><img src={Project.img} alt={Project.title} /></a>
        <p>
            <b>Technologies:</b>{Project.technologies} <br/>
            <b>Objective:</b> {Project.objective} <br/>
            <b>Result:</b> {Project.result} <br/>
        </p>									
        <ul className="actions special">
            <li><a href={Project.github} className="button">View</a></li>
        </ul>
    </article>
    );
}