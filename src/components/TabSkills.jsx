import { useEffect, useState } from "react";
import { getSkills } from "../services/api.skills";
import { LoadingBody } from "./cards/CardLoading.Body";
import { CardSkills } from "./cards/CardSkills.Body";

export const TabSkills = () => {
    const [skills, setSkills] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            const data = await getSkills();
            setSkills(data);
            setLoading(false);
        };
        fetchSkills();
    }, []);

    return (
        loading ? (
            <LoadingBody />
        ) : skills ? (
            <CardSkills skills={skills.items}/>
        ) : (
            <p>Skills is empty</p>
        )
    );
}