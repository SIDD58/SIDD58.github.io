import Post from './Post'
import { projectData } from '../data.js'
export default function Posts({ selectedCategory })
{
    const filtered = selectedCategory === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === selectedCategory);

    return(
        <section className="posts">
            {
                filtered.map(
                    (project)=>{
                        return (
                            <Post key={project.id} Project={project}/>
                        )
                    }
                )
            }
        </section>

    );
}