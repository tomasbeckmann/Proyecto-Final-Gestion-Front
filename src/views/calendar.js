import React from 'react';
import CalendarComponent from '../components/calendar/calendar';
import '../App.css'; // Importa tu archivo CSS

export const Calendar = () => {
  return (
    <>
    <section className='gradient'>
      <h1 className="text-center">Calendario</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="container pt-5 card card-custom">
              <div className="card-body">
                <h5 className="card-title"> </h5>
                <CalendarComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
