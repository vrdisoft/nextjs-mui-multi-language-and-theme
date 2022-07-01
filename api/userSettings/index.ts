import request from "../axios";
const userSettings = () => request({ url: "userSettings", type: "get" });

const addUserSettings = (data: object) => request({ url: "userSettings", data });

const editUserSettings = (extendUrl: string, data: object) =>
  request({ url: "userSettings/" + extendUrl, data, type: "put" });

const deletUserSettings = (extendUrl: string, data: object) =>
  request({ url: "userSettings/" + extendUrl, data, type: "delete" });


export { userSettings, addUserSettings, editUserSettings, deletUserSettings };
