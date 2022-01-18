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
