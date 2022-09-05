
const GifItem = ({ title, url, id }) => {

   
    return (
        <div className='card'>
        {
            <img src={ url } alt={ title }></img>
        }
        </div>
    );
}

export default GifItem;
