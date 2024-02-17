const events = [
    { title: "Renovar cedula de identidad", start: getDate("YEAR-MONTH-02") },
    { title: "Renovar Licencia de conducir", start: getDate("YEAR-MONTH-03") },
    { title: "Charla de Higiene y seguridadd", start: getDate("2024-02-03") },
    
    {
      title: "Levantamiento de datos de Sistema de Gestión integrada",
      start: getDate("YEAR-MONTH-06"),
      end: getDate("YEAR-MONTH-10"),
      backgroundColor: "green"
    },
    { title: "Auditoría documental", start: getDate("YEAR-MONTH-07") },
    { title: "Compra de drone ", start: getDate("YEAR-MONTH-08") },
    {
      title: "Reunion Mensual",
      start: getDate("YEAR-MONTH-09"),
      backgroundColor: "yellow",
      textColor: "black"
    },
    {
      title: "Informe avances proyecto",
      start: getDate("YEAR-MONTH-09"),
      backgroundColor: "purple"
    },
  
    { title: "Cotización limpieza", start: getDate("YEAR-MONTH-28") },
    {
      title: "Visita a terreno",
      start: getDate("YEAR-MONTH-22"),
      backgroundColor: "red",
      textColor: "black"
    }
  ];
  
  function getDate(dayString) {
    const today = new Date();
    const year = today.getFullYear().toString();
    let month = (today.getMonth() + 1).toString();
  
    if (month.length === 1) {
      month = "0" + month;
    }
  
    return dayString.replace("YEAR", year).replace("MONTH", month);
  }
  
  export default events;