import React from 'react';
import CalendarComponent from '../components/calendar/calendar';
import "../css/calendar.css"

export const Calendar = () => {

  const files = [
    { id: 1, name: "Folder 1", type: "folder", size: "100 MB", modifiedDate: "2022-01-01" },
    { id: 2, name: "File 1", type: "video", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 3, name: "File 1", type: "word", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 4, name: "File 1", type: "pdf", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 5, name: "File 1", type: "pdf", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 6, name: "File 1", type: "pdf", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 7, name: "File 1", type: "pdf", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 8, name: "File 1", type: "pdf", size: "20 MB", modifiedDate: "2022-01-02" },
    { id: 9, name: "File 1", type: "pdf", size: "20 MB", modifiedDate: "2022-01-02" },
    // Add more files as needed
  ];

  return (
    <>
      <div className="orden-calendar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="container pt-5 card card-custom-calendar">
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <CalendarComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};