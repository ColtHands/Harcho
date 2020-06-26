const axios = require('axios')
const fs = require('fs')
const YT_API_TOKEN = 'AIzaSyA2p8emllzwOt7hs2EwSnJr-VqRXMoCT-o'
// const GOOGLE_CLIENT_ID = '1069940620677-dclma97qlcg00t1cdsl5tkigur8blrk7.apps.googleusercontent.com'
// const GOOGLE_CLIENT_SECRET = '709L5MKDaMDKM6ERh5mPzR8M'
// const url1 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YT_API_TOKEN}`
// TODO "поменять с forUsername на ID"
const url2 = id => `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${YT_API_TOKEN}`
const url3 = (id, pageToken = '') => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1000&playlistId=${id}&key=${YT_API_TOKEN}&pageToken${pageToken}`

class YT {
    dataModel = JSON.parse(fs.readFileSync('./asmrmap/data/data.json', 'utf8'));
    channelsArr = this.dataModel.baseData.baseChannels

    async run() {
        const newChannelsData = this.channelsArr.map(async e => {
            const playlists = await axios(url2(e.channelId)).then(e => e.data.items)
            // console.log(playlists);
            return await e
        })
        console.log('newChannelsData', newChannelsData)
        return await newChannelsData
        // fs.writeFileSync('./asmrmap/data/newdata.json', 'asdasd11232123')
    }

    // async getUploadsPlaylist (channelId) {
    //     console.log('GETTING PLAYLISTS FOR channel: ', channelId);

    //     return await axios(url2(channelId))
    // }
    // async getVids(id) {
    //     console.log('GETTING VIDEOS FROM PLAYLIST ID OF CHANNEL ID: ', id)
    //     // setInterval(function(e){

    //     // }, 1500)
    //     console.log('this got vids', this.getVids);
    //     return await axios(url3(id)).then(e => {
    //         // console.log('GOT VIDS items', e.data)
    //         console.log('GOT VIDS next page token', e.data.nextPageToken)
    //         console.log('GOT VIDS page info', e.data.pageInfo)
    //         return e.data.items
    //         e.data.items.forEach(e => {
    //             // console.log(e.snippet.title)
    //             // console.log(e.snippet.description)
    //         })
    //         // console.log(e.data.items.length);
    //     })
    // }
}

console.log(new YT().run())
// new YT().run().then(e => { console.log(e) })
// Promise.all(new YT().run())


// TODO "подгрузить youtube api"
// TODO "пропарсить каналы"
// TODO "составить список названий видео"
// TODO "научить выделять из этого списка названий те, которые являются асмр прогулкой"
// TODO "из выделенного списка выпарсить адрес"
// TODO "составить базу видео с адресами асмр"