import { useState } from "react"
import { Stack, Card, Button } from "react-bootstrap"
import { api } from "../../services/api.auth"
import { MdModal } from "../modals/MdModal"

export const CardProjects = ({ projects }) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    // console.log(projects)

    return (
        <Stack
            gap={2}
            direction="vertical"
            style={{ maxHeight: "650px", overflowY: "scroll" }}
        >
            {projects.map((project) => {
                return (
                    <div key={project.id}>
                        <Card className="shadow">
                            <Card.Header>{project.title}</Card.Header>
                            <Card.Img
                                variant="top"
                                src={`${api}files/projects/${project.id}/${project.featured_image}`}
                            />
                            <Card.Footer>
                                <Stack direction="horizontal" gap={3}>
                                    <Button variant="dark" onClick={handleOpenModal} className="me-2">
                                        Detalles
                                    </Button>
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
                        <MdModal
                            show={showModal}
                            handleClose={handleCloseModal}
                            title={project.title}
                            markdown={project.description_md}
                        />
                    </div>
                )
            })}
        </Stack>
    )
}