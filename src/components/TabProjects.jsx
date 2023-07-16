import { useEffect, useState } from "react";
import { getProjects } from "../services/api.projects";
import { LoadingBody } from "./cards/CardLoading.Body";
import { CardProjects } from "./cards/CardProjects.Body";

export const TabProjects = () => {
    const [projects, setProjects] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            const data = await getProjects();
            setProjects(data);
            setLoading(false);
        };
        fetchProjects();
    }, []);

    return (
        loading ? (
            <LoadingBody />
        ) : projects ? (
            <CardProjects projects={projects.items}/>
        ) : (
            <p>Projects is empty</p>
        )
    );
}