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

  const sortDescending = () => {
    setLoading(true);
    let tempHotels = [...hotels];
    tempHotels.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    setHotels(tempHotels);
  };

  const sortAscending = () => {
    setLoading(true);
    console.log('object');
  };

  return {
    hotels,
    loading,
    error,
    sortDescending,
    sortAscending,
  };
};
