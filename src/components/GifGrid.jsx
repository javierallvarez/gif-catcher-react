import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';


// Get category from its father's props, GifExpertApp.
// Desestructuring:
export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );


    return (
        <div className='gif-grid'>
            <h2>{ category }</h2>
            {
                isLoading && ( <h4>Loading...</h4>)
            }

            <div className='card-grid'>
                {
                    images.map ( ( image ) => (
                        <GifItem
                            key={image.id}
                            {...image}    
                            />
                    ))
                } 
            </div>
        </div>
    );
}


//Another way to do a ternary operation:
    // {
    //     isLoading
    //     ? <h5>Loading</h5>
    //     : null
    // }
