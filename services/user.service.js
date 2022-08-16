async function fetchUserData() {
    try {
        const res = await makeRequest.get('user/fetch')
        const data = res.data
        return {'error': null , 'data': data}
    } catch (error) {
        console.log(error.response)
        return {'error': error.response.data.error, 'data': null}
    }
}

export default fetchUserData;