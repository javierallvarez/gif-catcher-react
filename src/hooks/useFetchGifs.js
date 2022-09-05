import { useEffect, useState } from 'react';
import { GetGifs } from '../helpers/GetGifs';


// Custom hook:
// Recibios category de const { images, isLoading } = useFetchGifs( category ), en GifGrid;
const useFetchGifs = ( category ) => {

  // Creamos un array vacío:
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );


  /**
   * An async function that gets the images from the API
   * and sets the state of the images and isLoading.
   */
  const getImages = async() => {
      const newImages = await GetGifs( category );
      setImages( newImages );
      setIsLoading(false);
  }


  useEffect(() => {
      getImages()
  }, []);


  return {
    images: images,
    // images   //Funciona igual
    isLoading
  }


}

export default useFetchGifs;
