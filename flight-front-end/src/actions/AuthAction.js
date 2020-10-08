import  axios from 'axios'
import jwt_decode from 'jwt-decode'

export const ACTION_TYPES = {
    LOGIN : 'LOGIN',
    REGISTER: 'REGISTER'
}

export const loginUser = userData => dispatch => {
    axios.post('/token/', userData)
    .then(res => {
        localStorage.setItem('tokens', JSON.stringify(res.data.access_token))

        const payload = jwt_decode(res.data.access)
        dispatch({
            type: ACTION_TYPES.LOGIN,
            payload: payload.username
        })
    })
    .catch(err=>{
        console.log(err)
    })
}