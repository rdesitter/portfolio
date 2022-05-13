import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(url).data;
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    isLoading,
  };
};

export default useFetchData;