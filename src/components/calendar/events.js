const events = [
  {
    title: "(Francisco Parra) Actualizar Carnet de Identidad",
    start: getDate("2024-02-21"),
    end: getDate("2024-02-27"),
    backgroundColor: "green"
  },
  {
    title: "(Francisco Parra) Actualizar certificado OS-10",
    start: getDate("2024-02-21"),
    end: getDate("2024-02-23"),
    backgroundColor: "green"
  },
    {
      title: "(Deyruby Rincón) Actualizar Foto Carnet de Identidad",
      start: getDate("2024-02-19"),
      end: getDate("2024-02-27"),
      backgroundColor: "pink"
    },
    {
      title: "(Freddy Lobo) Actualizar certificado OS-10",
      start: getDate("2024-02-20"),
      end: getDate("2024-02-25"),
      backgroundColor: "red"
    },
    {
      title: "(Freddy Lobo) Actualizar certificado Antecedentes penales",
      start: getDate("2024-02-21"),
      end: getDate("2024-02-28"),
      backgroundColor: "red"
    },
    {
      title: "(Victor Fernandez) Actualizar Foto de Perfil",
      start: getDate("2024-02-21"),
      end: getDate("2024-02-29"),
      backgroundColor: "blue"
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