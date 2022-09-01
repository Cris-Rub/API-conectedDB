# Proyecto JS Avanzado: Api en Express

## Contenido
1. [Descripción](#descripción)
2. [Get](#get)
3. [Post](#post)
4. [Put](#put)
5. [Del](#del)

### Descripción 
Esta api te permite obtener, agregar, editar y eliminar la información de videos guardados en una base de datos.
[Api Videos](https://infinite-sierra-56428.herokuapp.com/)

### GET
Para obtener todos los videos disponibles usamos:
- **GET** https://infinite-sierra-56428.herokuapp.com/videos

Si desea encontrar la información un video en especifico solo agregue el **ID** en la petición:
- **GET** https://infinite-sierra-56428.herokuapp.com/videos/ "id del video"

### POST
Podemos agregar un video con la petición de **POST**, solo asegurese de llenar todos los datos solicitados correctamente:
1. id: número unico e irrepetible.
2. video_name: nombre del video.
3. url: dirección del video.
4. duration: duración del video en string con formato "00.00.00".
5. views_number: número de visualizacionens, valor decimal.
6. video_type: formato con el que se subio el video.
- **POST** https://infinite-sierra-56428.herokuapp.com/videos

### PUT
Si desea editar la información de algun video ya publicado utilice la petición **PUT**. Debera incluir el **ID** unico del video y la información a editar.
- **PUT** https://infinite-sierra-56428.herokuapp.com/videos/ "id del video"

### DEL
Para eliminar por completo un video basta con utilizar la petición **PUT**, especificando la **ID** del video a eliminar.
- **PUT** https://infinite-sierra-56428.herokuapp.com/videos/ "id del video"