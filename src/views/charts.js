import React from 'react';
import LineChartComponent from '../components/charts/linechart';
import AreaChartComponent from '../components/charts/areachart';
import BarChartComponent from '../components/charts/barchart';
import PieChartComponent from '../components/charts/piechart';

import "../css/charts.css"

// import ChatComponent from '../components/chat/chat';

export const GraphicsChart = () => {
  return (
    <>
      <div className='orden-charts'>
        <div className='container'>
          <div className="container">
            <div className="row">
              <h1 className="text-center title-charts">Gestión de tareas y estadísticas</h1>
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card card-custom" >
                  <div className="card-body">
                    <h5 className="card-title">Estado de documentación</h5>
                    <LineChartComponent />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card card-custom" >
                  <div className="card-body">
                    <h5 className="card-title">Tareas por estado</h5>
                    <AreaChartComponent />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card card-custom" >
                  <div className="card-body">
                    <h5 className="card-title">Tareas por tipo</h5>
                    <BarChartComponent />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 col-lg-6">
                <div className="card card-custom" >
                  <div className="card-body">
                    <h5 className="card-title">Usuarios por estado</h5>
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};