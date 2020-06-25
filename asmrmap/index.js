const axios = require('axios')
const fs = require('fs')
const YT_API_TOKEN = 'AIzaSyA2p8emllzwOt7hs2EwSnJr-VqRXMoCT-o'
// const GOOGLE_CLIENT_ID = '1069940620677-dclma97qlcg00t1cdsl5tkigur8blrk7.apps.googleusercontent.com'
// const GOOGLE_CLIENT_SECRET = '709L5MKDaMDKM6ERh5mPzR8M'
// const url1 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YT_API_TOKEN}`
// TODO "поменять с forUsername на ID"
const url2 = (channelName = 'Rambalac') => `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${channelName}&key=${YT_API_TOKEN}`
const url3 = id => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=${id}&key=${YT_API_TOKEN}`

const dataModel = JSON.parse(fs.readFileSync('./asmrmap/data/data.json', 'utf8'));
const channelsArr = dataModel.baseData.baseChannels

class YT {
    async getUploadsPlaylist (channelName) {
        console.log('GETTING PLAYLISTS FOR', channelName);
        return await axios(url2(channelName)).then(e => {
            console.log('GOT PLAYLISTS FOR', channelName, e.data.items);
            e.data.items.forEach(e => {
                const id = e.contentDetails.relatedPlaylists.uploads
                return id
                // getVids(id)
            })
        })
    }
    async getVids(id) {
        return await axios(url3(id)).then(e => {
            return e.data.items
            // console.log(e.data);
            // console.log(e.data.nextPageToken);
            // console.log('ITEMS:');
            e.data.items.forEach(e => {
                // console.log(e.snippet.title)
                // console.log(e.snippet.description)
            })
            // console.log(e.data.items.length);
        })
    }
}


const program = async function(){
    console.log("read channels from file");
    channelsArr.forEach(({ channelName }) => {
        new YT().getUploadsPlaylist(channelName)
    })

    console.log("write new file with channels playlists");
    console.log("write new file with channels full video's info");
    fs.writeFileSync('./asmrmap/data/newdata.json', 'asdasd11232123')
}

program()

// TODO "подгрузить youtube api"
// TODO "пропарсить каналы"
// TODO "составить список названий видео"
// TODO "научить выделять из этого списка названий те, которые являются асмр прогулкой"
// TODO "из выделенного списка выпарсить адрес"
// TODO "составить базу видео с адресами асмр"