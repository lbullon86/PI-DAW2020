# te haces un script que haga lo siguiente:

# - compilar el back (npm run build)
# - compilar el front (npm run build)
# - mover el front compilado a la carpeta del compilado del back (mv dist ../Back/dist/frontend o algo así)
# - cambiar el script start del back para que sea node main
# - copiar el package.json del back en el dist
# - comprimir todo en un zip
# - subirlo a beanstalk

#!/bin/bash
cd Back
npm run build
cp package.json ./dist/
cd ../Front
npm run build:pro
mv dist ../Back/dist/frontend
cd ../Back/dist
zip -r Project.zip * 

