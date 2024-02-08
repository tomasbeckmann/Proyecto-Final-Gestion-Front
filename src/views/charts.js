import React from 'react';
import LineChartComponent from '../components/charts/linechart';
import AreaChartComponent from '../components/charts/areachart';
import BarChartComponent from '../components/charts/barchart';
import PieChartComponent from '../components/charts/piechart';
import { Sidebar } from '../components/application/sidebar'
import "/workspaces/Proyecto-Final-Gestion-Front/src/css/charts.css"

// import ChatComponent from '../components/chat/chat';

export const GraphicsChart = () => {
  return (
    <>
      <Sidebar />
      <div className='chart-container'>
        <h1 className="text-center">Line and Area Charts</h1>
        <div className="container ">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card card-custom" >
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <LineChartComponent />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-custom" >
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <AreaChartComponent />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-custom" >
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <BarChartComponent />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card card-custom" >
                <div className="card-body">
                  <h5 className="card-title"> </h5>
                  <PieChartComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
