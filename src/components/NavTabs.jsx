import { useState } from "react";
import { Nav, Card, Button } from "react-bootstrap";
import { TabAboutMe } from "./TabAboutMe";
import { TabProjects } from "./TabProjects";
import { TabSkills } from "./TabSkills";

const TabAboutMeComponent = () => <TabAboutMe />;
const TabProjectsComponent = () => <TabProjects />;
const TabSkillsComponent = () => <TabSkills />;
const TabNotFoundComponent = () => <p>Not Found!</p>;


export const NavTabs = () => {
    const [currentPage, setCurrentPage] = useState(TabAboutMeComponent);

    const setPage = (page) => {
        if (page === "about") {
            setCurrentPage(TabAboutMeComponent)
            return;
        }
        if (page === "projects") {
            setCurrentPage(TabProjectsComponent)
            return;
        }
        if (page === "skills") {
            setCurrentPage(TabSkillsComponent)
            return;
        }
        if (page === "blog") {
            //redirect to blog
            // location.href = "https://blog.apps.marcobardalesrodriguez.site/"
            return;
        }
        setCurrentPage(TabNotFoundComponent)
    };

    return (
        <Card>
            <Card.Header>
                <Nav 
                    fill 
                    variant="tabs" 
                    defaultActiveKey="about" 
                    onSelect={setPage}
                    className="flex-md-row flex-column-reverse"
                >
                    <Nav.Item>
                        <Nav.Link eventKey="about">Sobre mi</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="projects">Proyectos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="skills">Habilidades</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="d-flex justify-content-md-end justify-content-center align-items-start">
                        <Button variant="dark" href="https://blog.apps.marcobardalesrodriguez.site" target="_blank">Blog</Button>
                        {/* <Nav.Link eventKey="blog" href="https://blog.apps.marcobardalesrodriguez.site">Blog</Nav.Link> */}
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {currentPage}
            </Card.Body>
        </Card>
    );
}