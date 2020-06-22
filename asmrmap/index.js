const axios = require('axios')
const YT_API_TOKEN = 'AIzaSyA2p8emllzwOt7hs2EwSnJr-VqRXMoCT-o'
// const GOOGLE_CLIENT_ID = '1069940620677-dclma97qlcg00t1cdsl5tkigur8blrk7.apps.googleusercontent.com'
// const GOOGLE_CLIENT_SECRET = '709L5MKDaMDKM6ERh5mPzR8M'

const url1 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YT_API_TOKEN}`
const url2 = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=Rambalac&key=${YT_API_TOKEN}`
const url3 = id => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=${id}&key=${YT_API_TOKEN}`
let playlistsIds = []

const getUploadsPlaylist = () => {
    axios(url2).then(e => {
        e.data.items.forEach(e => {
            const id = e.contentDetails.relatedPlaylists.uploads
            playlistsIds.push(e.contentDetails.relatedPlaylists.uploads)
            getVids(id)
        })
    })
}

const getVids = (id) => {
    axios(url3(id)).then(e => {
        e.data.items.forEach(e => {
            console.log(e.snippet.title)
        })
    })
}

getUploadsPlaylist()

// TODO "подгрузить youtube api"
// TODO "пропарсить каналы"
// TODO "составить список названий видео"
// TODO "научить выделять из этого списка названий те, которые являются асмр прогулкой"
// TODO "из выделенного списка выпарсить адрес"
// TODO "составить базу видео с адресами асмр"