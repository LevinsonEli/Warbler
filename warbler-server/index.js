require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler  = require("./handlers/error");
const { loginRequired, ensureCorrectUser } = require("./middleware/auth");
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const db = require("./models");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// all my routes
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, messagesRoutes);

app.get("/api/messages", loginRequired, async function(req, res, next) {
    try {
        console.log("You got here");
        let messages = await db.Message
            .find()
            .sort({ createdAt: "desc"})
            .populate("user", {
                username: true,
                profileImageUrl: true
            });
            console.log(messages[0]);
            return res.status(200).json(messages);
    } catch (err) {
        next(err);
    }
})

app.use(function(req, res, next) {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
    console.log(`Server is starting on port ${PORT}`);
});