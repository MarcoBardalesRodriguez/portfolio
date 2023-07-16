export const api = 'https://portfolio.apps.marcobardalesrodriguez.site/api/';

const auth = async () => {
    const endpoint = 'collections/users/auth-with-password'

    try {
        const response = await fetch(`${api}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identity: 'contact@marcobardalesrodriguez.site',
                password: 'JrpG3Lq4_cUdxGq'
            })
        })
        const data = await response.json()
        // console.log(data.token)
        return data

    } catch (error) {
        console.log(error)
        return null
    }
}

export const login = async () => {
    // console.log('run login')
    if (sessionStorage.getItem('API_TOKEN')) return
    const authorization = await auth()
    if (authorization) sessionStorage.setItem('API_TOKEN', authorization.token)
    console.log(sessionStorage.getItem('API_TOKEN'))
}
