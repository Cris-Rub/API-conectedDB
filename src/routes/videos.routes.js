const express = require('express');
const videosRouter = express.Router();
// const videoController= require('./../controller/videos.controller');
const{
    getVideos,
    getVideo,
    addVideo,
    updateVideo,
    deleteVideo
}= require('./../controller/video.controller');

videosRouter.get("/", getVideos);
videosRouter.get("/:id", getVideo);
videosRouter.post("/", addVideo);
videosRouter.put("/:id", updateVideo);
videosRouter.delete("/:id", deleteVideo);

module.exports = videosRouter;