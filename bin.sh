echo ""
echo -e "\e[32m ═══════════════════════════════════════════════════════════════════════════════\e[0m"
echo ""
echo -e "\e[97m ██████╗██╗ ██████╗███╗   ███╗ █████╗           ██████╗  █████╗  █████╗ ██╗  ██╗\e[0m"
echo -e "\e[97m██╔════╝██║██╔════╝████╗ ████║██╔══██╗          ██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝\e[0m"
echo -e "\e[97m╚█████╗ ██║╚█████╗ ██╔████╔██║██║  ██║  █████╗  ██████╦╝███████║██║  ╚═╝█████═╝ \e[0m"
echo -e "\e[97m ╚═══██╗██║ ╚═══██╗██║╚██╔╝██║██║  ██║  ╚════╝  ██╔══██╗██╔══██║██║  ██╗██╔═██╗ \e[0m"
echo -e "\e[97m██████╔╝██║██████╔╝██║ ╚═╝ ██║╚█████╔╝          ██████╦╝██║  ██║╚█████╔╝██║ ╚██╗\e[0m"
echo -e "\e[97m╚═════╝ ╚═╝╚═════╝ ╚═╝     ╚═╝ ╚════╝           ╚═════╝ ╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝\e[0m"
echo ""
echo -e "\e[32m ═══════════════════════════════════════════════════════════════════════════════\e[0m"
echo ""
#===================================Subrutinas==========================================#
#↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓#
menu_from_array (){
  echo -e "\e[1;33m         ===========================================\e[0m"
  echo -e "\e[1;33m         =        ✓ Proyectos Asociados ✓          =\e[0m"
  echo -e "\e[1;33m         = ✓ Selecciona un proyecto de la lista ✓  =\e[0m"
  echo -e "\e[1;33m         ===========================================\e[0m"
  select item; do
  # Check the selected menu item number
  if [ 1 -le "$REPLY" ] && [ "$REPLY" -le $# ];
  then
  echo -e "\e[1;33m         ===========================================\e[0m"
  echo -e "\e[1;33m         =        ✓ Proyecto Seleccionado ✓        =\e[0m"
  echo -e "\e[1;33m          $item                                    \e[0m"
  echo -e "\e[1;33m         ===========================================\e[0m"  
  echo "{\"nombreProceso\":\"$item\"}" > response.json
  echo -e "\e[1;32m            ╭━━╮╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮\e[0m"
  echo -e "\e[1;32m            ╰┫┣╯╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃\e[0m"
  echo -e "\e[1;32m            ╱┃┃╭━╮╭┳━━┳┳━━┫┃╭┳━━━┳━━┳━╮╭━╯┣━━╮\e[0m"
  echo -e "\e[1;32m            ╱┃┃┃╭╮╋┫╭━╋┫╭╮┃┃┣╋━━┃┃╭╮┃╭╮┫╭╮┃╭╮┃\e[0m"
  echo -e "\e[1;32m            ╭┫┣┫┃┃┃┃╰━┫┃╭╮┃╰┫┃┃━━┫╭╮┃┃┃┃╰╯┃╰╯┃\e[0m"
  echo -e "\e[1;32m            ╰━━┻╯╰┻┻━━┻┻╯╰┻━┻┻━━━┻╯╰┻╯╰┻━━┻━━╯\e[0m"
  break;
  else
  echo "                            ¯\_( ͡❛ ͜ʖ ͡❛)_/¯"
  echo -e "\e[1;31mSelección incorrecta: seleccione cualquier número de 1 a $#\e[0m"
  fi
  done
}
listaP (){
    # Declare the array
    IN_FILE='projectsDump.txt' 
    while read -r LINE 
        do 
            a="${LINE}"; 
        done < "$IN_FILE"
    linux=($a)
}
#↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑#
#===================================Subrutinas==========================================#

  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =        ✓ Validando Dependencias  ✓     =\e[0m"
  echo -e "\e[1;32m         ===========================================\e[0m"

DIRECTORIO=node_modules

if [ -d "$DIRECTORIO" ]
then
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =        ✓ Dependencias Instaladas  ✓     =\e[0m"
  echo -e "\e[1;32m         ===========================================\e[0m"
else
  echo -e "\e[1;31m         ===========================================\e[0m"
  echo -e "\e[1;31m         =         x Faltan Dependencias  x         =\e[0m"
  echo -e "\e[1;31m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  sleep 2
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =        ✓ Instalando Dependencias ✓     =\e[0m"
  echo -e "\e[1;32m         ===========================================\e[0m"
  npm i
fi
echo ""
echo  ">>> Ingrese Usuario:"
read -s user 
echo ">>> Password:"
read -s password
echo -e "\e[1;32m         ===========================================\e[0m"
echo -e "\e[1;32m         =            Generardo key de Auth        =\e[0m"
echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
echo {"\"user\"": "\"$user\"","\"password\"": "\"$password\""} > auth.json
echo -e "\e[1;32m         ===========================================\e[0m"
echo -e "\e[1;32m         =          Enviando Peticion Auth         =\e[0m"
echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
response=$(curl -H "Content-Type: application/json" --data @auth.json https://sismo-service.herokuapp.com/api/login)
if [[ "$response" == *"status\":1"* ]]; then    
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =            Login Existoso               =\e[0m"
  echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 1
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =         Obteniendo Informacion          =\e[0m"
  echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 1
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =        Generado informacion de carga.   =\e[0m"
  echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 1
  echo $response > response.json
  echo $response > response1.json
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =          Obteniendo Listado Pj.         =\e[0m"
  echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 2
  node uploadProjects.js
  sleep 1
  # Call the subroutine to create the menu
  listaP
  menu_from_array "${linux[@]}"
  echo -e "\e[1;32m         ===========================================\e[0m"
  echo -e "\e[1;32m         =             Iniciando el Back.          =\e[0m"
  echo -e "\e[1;32m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;35m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 3
  npm start  
else
  if [[ "$response" == *"<!DOCTYPE html>"* ]]; then     
    echo -e "\e[1;31m         ===========================================\e[0m"
    echo -e "\e[1;31m         =        Endpoint no encontrado           =\e[0m"
    echo -e "\e[1;31m         =           intente mas tarde.            =\e[0m"
    echo -e "\e[1;31m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
    echo -e "\e[1;31m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
    echo
    echo -e "\e[1;35m>>> presione Enter para salir\e[0m"
    read 
    bin.sh
    exit
  else
  echo -e "\e[1;31m         ===========================================\e[0m"
  echo -e "\e[1;31m         =        Credenciales Incorrectas         =\e[0m"
  echo -e "\e[1;31m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;31m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 1
  echo -e "\e[1;31m         ===========================================\e[0m"
  echo -e "\e[1;31m         =            Login Fallido               =\e[0m"
  echo -e "\e[1;31m         ===========↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓=============\e[0m"
  echo -e "\e[1;31m                     `date +"%d/%m/%Y  %H:%M"      `\e[0m"
  sleep 1
  echo -e "\e[1;35m>>> presione Enter para salir\e[0m"
  read 
  exit
  fi
fi
$SHELL






