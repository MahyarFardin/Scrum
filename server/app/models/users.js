const mongoose = require("mongoose");

const InviteRequest = new mongoose.mongoose.Schema({
    teamID: { type: mongoose.Types.ObjectId, required: true },
    caller: { type: String, required: true },
    requestDate: { type: Date, default: new Date() },
    status: { type: String, status: "pending" },
});

const InStageTime = mongoose.Schema({
    loginTime: { type: Number },
    logoutTime: { type: Number },
    time: { type: Number, default: 0 },
});

const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String },
        last_name: { type: String },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        mobile: { type: String, required: true, unique: true },
        roles: { type: [String], default: ["USER"] },
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },
        profile_image: { type: String, default: "default.png" },
        skills: { type: [String], default: [] },
        teams: { type: [mongoose.Types.ObjectId], default: [] },
        token: { type: String, default: "" },
        inviteRequests: { type: [InviteRequest] },
        stageTime: { type: InStageTime, default: {} },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("user", UserSchema);

module.exports = {
    UserModel,
};
