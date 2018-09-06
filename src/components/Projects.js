import React from "react";
import Header from './Header';
import Notifications from "./Notifications";

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.texts = {
      title: "Proyectos"
    }
  }
  render() {
    return (
      <div className="projects__container databoard">
      <Header title={this.texts.title} />
       <div className="projects__statistics--container">
         <div className="statistics__data projects__projects">
           <div className="data-number"><p>15</p></div>
           <div className="data-tags"><p>Proyectos activos</p></div>
         </div>
         <div className="statistics__data projects__tasks">
           <div className="data-number"><p>1.750</p></div>
           <div className="data-tags"><p>tareas a completar</p></div>
         </div>
         <div className="statistics__data projects__weeks">
           <div className="data-number"><p>205</p></div>
           <div className="data-tags"><p>completadas esta semana</p></div>
         </div>
         <div className="statistics__data projects__commits">
           <div className="data-number"><p>50</p></div>
           <div className="data-tags"><p>commits</p></div>
         </div>
         <div className="statistics__data projects__hours">
           <div className="data-number"><p>205.6</p></div>
           <div className="data-tags"><p>horas</p></div>
         </div>
       </div>
       <div className="statistics__chart">
         <div className="chart-commits"><p>Proyectos más activos (commits)</p></div>
         <div className="chart-hours"><p>Proyectos más activos (horas)</p></div>
       </div>
       <Notifications />
     </div>
   );
 }
}
export default Projects;
