import React from 'react';
import Tour from './Tour';
const Tours = ({ tours }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours:</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour, removeTour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        }
        )}
      </div>
    </section>
  );
};

export default Tours;
