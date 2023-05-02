const routes = require("express").Router();

/**
 * Just Home Route
 */
routes.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hey, we are live !",
        status: "OK",
        statusCode: 200,
    });
});

/**
 * Route that will help in downloading or that will be calling the api to download
 * the reel video.
 */
routes.get("/download-reels-stories-video", require("./controllers/download"));

module.exports = routes;
