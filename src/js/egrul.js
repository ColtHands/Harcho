const axios = require('axios')
const FormData = require('form-data')

const runBubaleh = async function() {
    var bodyFormData = new FormData()

    bodyFormData.append('query', '1027700229193')
    bodyFormData.append('vyp3CaptchaToken', '')
    bodyFormData.append('page', '')
    bodyFormData.append('region', '')
    bodyFormData.append('PreventChromeAutocomplete', '')

    console.log('bodyFormData', bodyFormData)

    const token = await axios({
        url: 'https://egrul.nalog.ru/',
        method: 'post',
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        data: bodyFormData
    })
}()