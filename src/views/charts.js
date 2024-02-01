import React from 'react';
import LineChartComponent from "../components/charts/linechart";
import AreaChartComponent from "../components/charts/areachart";
import BarChartComponent from '../components/charts/barchart';
import PieChartComponent from '../components/charts/piechart';
import CalendarComponent from '../components/calendar/calendar';
// import ChatComponent from '../components/chat/chat';

export const Graphics = () => {
  return (
    <>
      <h1>Line and Area Charts</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <LineChartComponent />
          </div>
          <div className="col-md-6">
            <AreaChartComponent />
          </div>
          <div className="col-md-6">
            <BarChartComponent />
          </div>
          <div className="col-md-6">
            <PieChartComponent />
          </div>
          <div className="col-md-12">
            <CalendarComponent />
          </div>
          {/* <div className="col-md-12">
            <ChatComponent />
          </div> */}
        </div>
      </div>
    </>
  );
};