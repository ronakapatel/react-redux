import axios from "./../config/axios.config";

/*
 * Get users API call
 */
const GetUsers = () => {
   return axios
     .get("/?page=1&results=100&inc=id,name,location,picture")
   .catch(err => {
     console.log(err, "Error while loading users.");
   });
};

export default { GetUsers };
