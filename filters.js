const data = require("./dataUser.json");
const dataFilter = require("./response.json");
const jwt_decode = require('jwt-decode');
const moment = require('moment');


const OPC = {
  alert: () => {
    let alerts = {};
    const dataProject = dataFilter.nombreProceso.replace(/_/g, " ").split("=>");
    data.payload.projects.map((element) => {
      if (element.nombreProceso === dataProject[0]) {
        element.topics.map((element2) => {
          if (element2.alert===true){
            alerts[element2.name] = {
              valueAlert: element2.valueAlert,
              units: element2.units,
              hour:  moment(new Date().getHours()+':'+new Date().getMinutes(),'HH:mm'),
              env: false,
              namepro: dataProject[0]
            } 
          }
        });
      }
    });
    return alerts;
  },
  endpoint: () => {
    let endpoind = "";
    const dataProject = dataFilter.nombreProceso.replace(/_/g, " ").split("=>");
    data.payload.projects.map((element) => {
      if (element.nombreProceso === dataProject[0]) {
        endpoind = element.endpointOPC;
      }
    });
    return endpoind;
  },
  idProject: () => {
    let idProject = "";
    const dataProject = dataFilter.nombreProceso.replace(/_/g, " ").split("=>");
    data.payload.projects.map((element) => {
      if (element.nombreProceso === dataProject[0]) {
        idProject = element.idProject;
      }
    });
    return idProject;
  },
  topics: () => {
    const arrayTopics = [];
    const dataProject = dataFilter.nombreProceso.replace(/_/g, " ").split("=>");
    data.payload.projects.map((element) => {
      if (element.nombreProceso === dataProject[0]) {
        element.topics.map((elemetsTopics) => {
          arrayTopics.push(elemetsTopics.name);
        });
      }
    });
    return arrayTopics;
  },
  clientId: () => {
    const decoded = jwt_decode(data.accessToken);
    const clientId = decoded.id.substr(-10);
    return clientId;
  },  
  clientIdFull: () => {
    const decoded = jwt_decode(data.accessToken);
    return decoded.id;
  }
};

module.exports = OPC;
