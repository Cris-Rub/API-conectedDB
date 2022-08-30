const express = require('express');
const videosRouter = express.Router();
const videoController= require('./../controller/videos.controller');

videosRouter.get("/", videoController.getVideos);
videosRouter.get("/:id", videoController.getVideo);
videosRouter.post("/", videoController.addVideo);
videosRouter.put("/:id", videoController.updateVideo);
videosRouter.delete("/:id", videoController.deleteVideo);

module.exports = videosRouter;