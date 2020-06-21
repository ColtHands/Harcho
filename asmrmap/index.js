const axios = require('axios')
const YT_API_TOKEN = 'AIzaSyA2p8emllzwOt7hs2EwSnJr-VqRXMoCT-o'
const GOOGLE_CLIENT_ID = '1069940620677-dclma97qlcg00t1cdsl5tkigur8blrk7.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '709L5MKDaMDKM6ERh5mPzR8M'

axios({
    method: 'get',
    url: 'https://www.googleapis.com/youtube/v3/search',
    headers: {
        // Authorization: `Bearer ${ACCESS_TOKEN}`
    }
}).then(e => {
    console.log(e)
})

// TODO "подгрузить youtube api"
// TODO "пропарсить каналы"
// TODO "составить базу видео с адресами асмр"