const data = require("./response1.json");
const dataFilter = require("./response.json");

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
};

module.exports = OPC;
