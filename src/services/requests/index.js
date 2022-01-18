import {reqGet} from '../wrapper';

export const getHotels = async () => {
  try {
    const resp = await reqGet({url: ''});
    let data = resp.data;
    data.statusCode = resp.status;
    return data;
  } catch (error) {
    throw error;
  }
};
