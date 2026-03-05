import Posts from './Posts'
import Carousel from './carousel';


export default function Main({ selectedCategory })
{
    return(
        <>
        <div id="main">
            {selectedCategory === 'All'? <Carousel /> : null}
            <Posts selectedCategory={selectedCategory} />
        </div>

        </>

    );
}