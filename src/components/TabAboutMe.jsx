import { useEffect, useState } from 'react';
import { getAboutUsers } from '../services/api.aboutUsers';
import { CardAboutMe } from './cards/CardAboutMe.Body';
import { LoadingBody } from './cards/CardLoading.Body';

export const TabAboutMe = () => {
    const [aboutUsers, setAboutUsers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAboutUsers = async () => {
            const data = await getAboutUsers();
            setAboutUsers(data);
            setLoading(false);
            console.log("aboutUsers");
            console.log(data);
        }
        fetchAboutUsers();

    }, []);

    return (
        loading ? (
            <LoadingBody />
        ) : aboutUsers ? (
            <CardAboutMe aboutUser={aboutUsers.items[0]} />
        ) : (
            <p>No user</p>
        )
    )
}
