const fs = require('fs');
var someObject = require('./response.json');
var data='';

console.log("=====================> Volcando de datos <=====================");
console.log("=>"+new Date());



someObject.payload.projects.forEach(element => {
        data=data+' '+element.nombreProceso.replace(/ /g, "_")+'=>'+element.idProject;
});
fs.writeFile("./projectsDump.txt", data+'\n'+'Proyectos', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("=====================> Carga Finalizada <======================");
});

