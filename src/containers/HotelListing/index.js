import React, {useEffect, useState} from 'react';
import {getAllHotels} from '../../services';

export const useHotelListing = () => {
  const [hotels, setHotels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = () => {
    setLoading(true);
    getAllHotels()
      .then(res => {
        setHotels(res);
      })
      .catch(err => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return {
    hotels,
    loading,
    error,
  };
};
