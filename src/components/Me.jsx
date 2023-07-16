import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "../services/api.users";
import { getAboutUsers } from "../services/api.aboutUsers";
import { CardMe } from "./cards/CardMe";
import { CardMeLoading } from "./cards/CardMeLoading";


export const Me = () => {
    const [users, setUsers] = useState({});
    const [aboutUsers, setAboutUsers] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };

        const fetchAboutUsers = async () => {
            const data = await getAboutUsers();
            setAboutUsers(data);
        };

        const fetchData = async () => {
            await fetchUsers();
            await fetchAboutUsers();
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        loading ? (
            <CardMeLoading />
        ) : users && aboutUsers ? (
            <CardMe user={users.items[0]} aboutUser={aboutUsers.items[0]} />
        ) : (
            <p>No user</p>
        )
    );
};
