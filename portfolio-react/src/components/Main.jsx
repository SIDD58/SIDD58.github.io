import Posts from './Posts'
import Certifications from './Certifications';
import Carousel from './carousel';


export default function Main({ selectedCategory })
{
    return(
        <>
        <div id="main">
            <Carousel/>
            <Posts selectedCategory={selectedCategory} />
        </div>

        </>

    );
}