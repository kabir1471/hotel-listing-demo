import {Endpoint} from '../Endpoint';
import {reqGet} from '../wrapper';

export const getAllHotels = async () => {
  try {
    const resp = await reqGet({url: Endpoint.GET_HOTELS});
    let data = resp.data;
    data.statusCode = resp.status;
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkImageUrl = (image, setImage) => {
  fetch(image)
    .then(res => {
      if (res.status == 404) {
        setImage(
          'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
        );
      }
    })
    .catch(err => {
      setImage(
        'https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png',
      );
    });
};
