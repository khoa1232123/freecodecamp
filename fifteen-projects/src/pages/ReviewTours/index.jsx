import React, { useEffect, useState } from 'react';
import tourData from '../../api/tourData';
import { Loading, Tours } from '../../components';
import './styles.scss';

const ReviewTours = () => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await tourData();
      setTours(data);
      setLoading(false);
    };
    getData();
  }, []);

  const deleteTour = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  console.log(tours);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
};

export default ReviewTours;
