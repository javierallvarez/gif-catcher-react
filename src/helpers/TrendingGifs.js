export const TrendingGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&q&limit=20`

  const respuesta = await fetch( url );
  const { data } = await respuesta.json();

  const gifs = data.map( imagen => ({
      id: imagen.id,
      title: imagen.title,
      url: imagen.images.downsized_medium.url
  }));
  
  console.log(gifs)
  return gifs;
 
}
