import { api, login } from './api.auth';

export const getAboutUsers = async () => {
    const endpoint = 'collections/about_users/records'
    await login()
    try {
        const response = await fetch(`${api}${endpoint}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('API_TOKEN')
            }
        })
        const data = await response.json()
        //console.log(data)
        return data
    
    } catch (error) {
        console.log(error)
        return null
    }
}
