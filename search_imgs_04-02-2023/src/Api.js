import axios from "axios";

const searchImages =  async (term)=>{
   const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization:'Client-ID 4hVO7IgQkreQbmLlvxkrYbqM5-ThKLlGeoidt4pMJgE'
        },
        params:{
            query:term
        }
    });
    return response.data.results
}
export default searchImages;