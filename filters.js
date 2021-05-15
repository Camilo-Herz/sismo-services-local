const data = require("./dataUser.json");
const dataFilter = require("./response.json");
const jwt_decode = require('jwt-decode');

const OPC = {
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
  }
};

module.exports = OPC;
