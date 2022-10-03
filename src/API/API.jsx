import axios from "axios";

const BYNAME_URL = "https://github.com/search?q";

const GET = {
  ByName: (name) => axios.get(`${BYNAME_URL}=${name}`),
};
export default GET;
