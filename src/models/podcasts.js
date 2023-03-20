const mongoose = require("mongoose");

const PodcastsScheme = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        directory: {
            type: Number,
        },
        audio: {
            type: String,
            validate: {
                validator: (req) => {
                    // return ["mp3", "wav", "ogg"].includes(req);
                    return true;
                },
                message: "Error del archivo de audio",
            },
        },
        author: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            theme: {
                type: String,
            }
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number,
            },
        },
        mediaId: {
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = mongoose.model("podcasts", PodcastsScheme);
