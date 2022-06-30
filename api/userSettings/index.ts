import request from "../axios";
const userSettings = () =>
  request({ url: "userSettings", type: "get" });

const addUserSettings = (data: object) => request({ url: "userSettings", data });

// const editArticles = (extendUrl: string, data: object) =>
//   request({ url: "articles/" + extendUrl, data, type: "put" });

// const deletArticles = (extendUrl: string) =>
//   request({ url: "articles/" + extendUrl, type: "delete" });

// const getArticle = (extendUrl: string) =>
//   request({ url: "articles/" + extendUrl, type: "get" });

// const tags = () => request({ url: "tags", type: "get" });

export { userSettings, addUserSettings/*, tags, editArticles, getArticle, deletArticles */ };
