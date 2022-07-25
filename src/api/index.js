import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    const options = {
        params: {
            bl_latitude: sw?.lat,
            tr_latitude: ne?.lat,
            bl_longitude: sw?.lng,
            tr_longitude: ne?.lng,
        },
        headers: {
          'X-RapidAPI-Key': 'bf0d489235msh2017c271a0d4777p120ce8jsnaf05f20eed1b',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };
    try {
        const {data : { data }} = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            options);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}
