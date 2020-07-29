const axios = require('axios')
const fs = require('fs')
// const GOOGLE_CLIENT_ID = '1069940620677-dclma97qlcg00t1cdsl5tkigur8blrk7.apps.googleusercontent.com'
// const GOOGLE_CLIENT_SECRET = '709L5MKDaMDKM6ERh5mPzR8M'
// const url1 = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${YT_API_TOKEN}`
// TODO "поменять с forUsername на ID"

class YT {
    YT_API_TOKEN = 'AIzaSyA2p8emllzwOt7hs2EwSnJr-VqRXMoCT-o'
    dataModel = JSON.parse(fs.readFileSync('./asmrmap/data/data.json', 'utf8'));
    channelsArr = this.dataModel.baseData.baseChannels
    channelContentUrl = id => `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${this.YT_API_TOKEN}`
    playlistItemsUrl = (id, pageToken = '') => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12345&playlistId=${id}&key=${this.YT_API_TOKEN}&pageToken=${pageToken}`

    async run() {
        const channelsWithPlaylistIds = await this.getUploadsPlaylist(this.channelsArr)
        const channelsWithVids = await this.getVids(channelsWithPlaylistIds)
        console.log('channelsWithVids', channelsWithVids);
        fs.writeFileSync('./asmrmap/data/channelsWithVids.json', JSON.stringify({ channelsWithVids }), 'utf-8')
    }

    async getUploadsPlaylist(channelsArr) {
        return await Promise.all(channelsArr.map(async e => {
            return axios(this.channelContentUrl(e.channelId)).then(res => {
                const playlistIds = res.data.items.map(e => e.contentDetails.relatedPlaylists.uploads)
                return { ...e, playlistIds }
            })
        }))
    }

    async getVids(channelsWithPlaylistIds) {
        const getVidsWithPage = async (e, pageToken) => {
            return axios(this.playlistItemsUrl(e.playlistIds[0], pageToken)).then(async res => {
                const singleChannelWithNewVids = { ...e, videos: [...e.videos, ...res.data.items]}

                if(res.data.nextPageToken) {
                    console.log('RECUSING')
                    return await getVidsWithPage(singleChannelWithNewVids, res.data.nextPageToken)
                } else {
                    console.log('RETURING');
                    return Promise.resolve(singleChannelWithNewVids)
                }
            })
        }

        return await Promise.all(channelsWithPlaylistIds.map(async e =>  await getVidsWithPage(e) ))
    }
}

new YT().run()


// TODO "подгрузить youtube api"
// TODO "пропарсить каналы"
// TODO "составить список названий видео"
// TODO "научить выделять из этого списка названий те, которые являются асмр прогулкой"
// TODO "из выделенного списка выпарсить адрес"
// TODO "составить базу видео с адресами асмр"