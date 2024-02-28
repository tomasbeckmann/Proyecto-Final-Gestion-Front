const events = [

    {
      title: "Actualizar Carnet de Identidad",
      start: getDate("2024-02-21"),
      end: getDate("2024-02-27"),
      backgroundColor: "green"
    },
    {
      title: "Actualizar certificado OS-10",
      start: getDate("2024-02-21"),
      end: getDate("2024-02-25"),
      backgroundColor: "red"
    },

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