export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


/* Github commands */


/* 

   git status - muestra los archivos modificados, agregados o eliminados en tu proyecto.
   git add . 
   git commit -m "Mensaje descriptivo de tu commit"
   git push -u origin master
   
*/ 