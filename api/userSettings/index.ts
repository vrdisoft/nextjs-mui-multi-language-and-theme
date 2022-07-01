import request from "../axios";
const userSettings = () =>request({ url: "userSettings", type: "get" });

const addUserSettings = (data: object) => request({ url: "userSettings", data });

export { userSettings, addUserSettings };
