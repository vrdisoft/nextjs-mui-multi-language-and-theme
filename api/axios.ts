import axios from "axios";

const BASE_URL = "/api";
axios.defaults.baseURL = BASE_URL;

// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem("token");

//   return !!storedToken ? storedToken : "";
// };

const request = ({
  url,
  type = "post",
  data,
}: {
  url: string;
  type?: string;
  data?: object;
}) => {
  /* eslint-disable */
  //axios.defaults.headers.common["Authorization"] = `Bearer ${retrieveStoredToken()}`;
  if (type === "get") {
    return axios.get(url, data).then((result) => {
      return result;
    })
      .catch((error) => {
        throw error?.response;
      });
  } else {
    return axios({
      method: type,
      url: url,
      data: data,
    })
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error?.response;
      });
  }

};

export default request;
