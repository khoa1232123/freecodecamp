import React, { useEffect, useState } from 'react';
import birthday from '../../api/birthday';
import { BirthdayList } from '../../components';
import './styles.scss';

const BirthdayReminder = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (birthday.length > 0) {
      setPeople(birthday);
    }
  }, []);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <BirthdayList people={people} />
        <button onClick={() => setPeople([])} className="btn">
          Clear all
        </button>
      </section>
    </main>
  );
};

export default BirthdayReminder;
