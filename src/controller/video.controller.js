const getConnection = require('./../commons/Connection');

/**
 * Funciones para los 5 metodos
 */

/* Obtener todos los videos */
const getVideos=async(req, res)=>{
    try{
        const connection=await getConnection();
        const result = await connection.query('SELECT * FROM videos');
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

/* Obtener un video por ID */
const getVideo=async(req, res)=>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query('SELECT * FROM videos WHERE id = ?', id);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

/* Añadir un video */
const addVideo=async(req, res)=>{
    try{
        const {id, video_name, url, duration, views_number, video_type}=req.body;
        if(id===undefined || video_name===undefined || url===undefined || duration === undefined || views_number===undefined || video_type===undefined){
            res.status(400).json({message:'Bad request. Make sure to fill all fields.'})
        }
        const connection=await getConnection();
        const result=await connection.query('INSERT INTO `videos`(`id`, `video_name`, `url`, `duration`, `views_number`, `video_type`) VALUES(?,?,?,?,?,?)', [id, video_name, url, duration, views_number, video_type]);
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

/* Actualizar video */
const updateVideo=async(req, res)=>{
    try{
        const {id}=req.params;
        const {video_name, url, duration, views_number, video_type}=req.body;
        if(video_name===undefined || url===undefined){
            res.status(400).json({message: 'Bad request. Make sure to fill all fields.'});
        }
        const connection = await getConnection();
        const result=await connection.query('UPDATE videos SET `video_name`=?, `url`=?, `duration`=?, `views_number`=?, `video_type`=? WHERE id=?', [video_name, url, duration, views_number, video_type])
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

/* Eliminar video */
const deleteVideo=async (req, res)=>{
    try{
        const {id}=req.params;
        const connection=await getConnection();
        const result = await connection.query('DELETE FROM videos WHERE id=?', id)
        res.json(result);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

/* Exportar los metodos */
module.exports={
    getVideos,
    getVideo,
    addVideo,
    updateVideo,
    deleteVideo
};