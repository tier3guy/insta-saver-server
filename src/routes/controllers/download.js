const DownloadVideoController = (req, res) => {
    const API_KEY = process.env.RAPID_API_KEY;
    const HOST_KEY = process.env.RAPID_API_HOST;
    const BASE_URL =
        "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index";

    fetch(`${BASE_URL}?url=${req?.body?.url}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": HOST_KEY,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
};

module.exports = DownloadVideoController;
