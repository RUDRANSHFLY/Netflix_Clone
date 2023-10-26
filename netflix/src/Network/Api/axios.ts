import axios from 'axios';
import { ApiBaseUrl } from '../../Helpers/Url';

const apiToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTNlMGNhODUxY2I2YTM5MzRmMTU1NTMyYjE4NmMyMCIsInN1YiI6IjY1MzllYTk3Njc4MjU5MDBjN2U4NDhjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zAyoNwjItHBUfwRC7udpUqU6yaIHKFCpmfvLPCJv5Ts" ;

const Axios = axios.create(
    {
        baseURL : ApiBaseUrl,
        headers : {
            authorization : "bearer " + apiToken ,
        },
    }
); 

export default Axios;