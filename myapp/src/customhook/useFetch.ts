import { useState, useEffect, useCallback } from 'react';

export const  useFetch = (url:string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);

  const getData = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setData(products);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);
  return { loading, data };
};