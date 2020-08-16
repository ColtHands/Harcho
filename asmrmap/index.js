const axios = require('axios')
const fs = require('fs')

class YT {
    YT_API_TOKEN = 'AIzaSyA2p8emllzwOt7hs2EwSnJr-VqRXMoCT-o'
    channels = [
        {
            "channelName": "Rambalac",
            "channelId": "UCAcsAE1tpLuP3y7UhxUoWpQ",
            "playlistIds": [],
            "videos": []
        },
        {
            "channelName": "Nomadic Ambience",
            "channelId": "UCqRTj-Nu_8to3jIBlXptOtA",
            "playlistIds": [],
            "videos": []
        },
        {
            "channelName": "TokyoStreetView - Japan The Beautiful",
            "channelId": "UCAxMEpfzdJ2dkrplSWehgcA",
            "playlistIds": [],
            "videos": []
        },
        {
            "channelName": "Tokyo Explorer",
            "channelId": "UCHWmg1FyYtFRiClvHkB-NVA",
            "playlistIds": [],
            "videos": []
        },
        {
            "channelName": "Jesse Yang",
            "channelId": "UCUHwUoMFhNy7wRGbwU4vaGw",
            "playlistIds": [],
            "videos": []
        }
    ]
    channelContentUrl = id => `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${id}&key=${this.YT_API_TOKEN}`
    playlistItemsUrl = (id, pageToken = '') => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=12345&playlistId=${id}&key=${this.YT_API_TOKEN}&pageToken=${pageToken}`

    run() {
        this.getAllVidsWithInfo()
    }

    async getAllVidsWithInfo(channelsArr = this.channels) {
        const channelsWithPlaylistIds = await this.getUploadsPlaylist(channelsArr)
        const channelsWithVids = await this.getVids(channelsWithPlaylistIds)

        fs.writeFileSync('./asmrmap/data/data.json', JSON.stringify({ channelsWithVids }), 'utf-8')
    }

    async getUploadsPlaylist(channelsArr) {
        return await Promise.all(channelsArr.map(async e => {
            return axios(this.channelContentUrl(e.channelId)).then(res => {
                console.log(res.data);
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

class Spotify {

}

new YT().run()

// TODO "подгрузить youtube api"
// TODO "пропарсить каналы"
// TODO "составить список названий видео"
// TODO "научить выделять из этого списка названий те, которые являются асмр прогулкой"
// TODO "из выделенного списка выпарсить адрес"
// TODO "составить базу видео с адресами асмр"