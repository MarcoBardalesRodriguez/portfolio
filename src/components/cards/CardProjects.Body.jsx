import { api } from "../../services/api.auth"
import { Stack, Card, Button } from "react-bootstrap"
import { OffCanvasProjects } from "../offCanvas/OffCanvasProjects"

export const CardProjects = ({ projects }) => {
    console.log(projects)
    return (
        <Stack 
            gap={2} 
            direction="vertical" 
            style={{maxHeight: "650px", overflowY: "scroll"}}
        >
            {projects.map((project) => {
                return (
                    <Card key={project.id} className="shadow">
                        <Card.Header>{project.title}</Card.Header>
                        <Card.Img
                            variant="top"
                            src={`${api}files/projects/${project.id}/${project.featured_image}`}
                        />
                        <Card.Footer>
                            <Stack direction="horizontal" gap={3}>
                                <OffCanvasProjects
                                    key={project.id}
                                    placement="start"
                                    title={project.title}
                                    description={project.description}
                                />
                                <Button variant="outline-dark" href={project.repository_url} className="ms-auto">
                                    Repositorio
                                </Button>
                                <div className="vr" />
                                <Button variant="outline-dark" href={project.app_url}>
                                    App
                                </Button>
                            </Stack>
                        </Card.Footer>
                    </Card>
                )
            })}
        </Stack>
    )
}