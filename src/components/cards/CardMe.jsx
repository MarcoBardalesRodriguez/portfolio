import React, { useState } from 'react';
import { api } from '../../services/api.auth';
import { Card, Image, Button, ListGroup, Stack, Container } from 'react-bootstrap';
import { PdfModal } from '../modals/PdfModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

export const CardMe = ({ user, aboutUser }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Card id="CardMe" className="">
        <Card.Body>
          <Stack direction="horizontal" className="justify-content-center pb-3">
            <Image
              className="object-fit-cover object-position-center shadow"
              style={{
                minWidth: '100px',
                minHeight: '100px',
                maxWidth: '100px',
                maxHeight: '100px'
              }}
              src={`https://portfolio.apps.marcobardalesrodriguez.site/api/files/users/${user.id}/${user.avatar}`}
              alt="logo.png"
              roundedCircle
              fluid
            />
          </Stack>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text className="text-muted">
            {aboutUser.job}
          </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faPhone} size="1x" color="gray" />
              &nbsp;{aboutUser.phone_number}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faEnvelope} size="1x" color="gray" />
              &nbsp;{user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="gray" />
              &nbsp;{aboutUser.address}
            </ListGroup.Item>
          </ListGroup>
          <Stack direction="horizontal" className="justify-content-center pt-3">
            <Button 
              variant="dark" 
              size="lg"
              onClick={handleOpenModal}
            >
              Ver CV
            </Button>
          </Stack>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Stack direction="horizontal" gap={3} className="justify-content-center">
            <a href={aboutUser.github_url} className="rrss-item">
              <FontAwesomeIcon icon={faGithub} size="2x" color="gray" />
            </a>
            {/* <a href="http://youtube.com/@MarcoBardalesRodriguez" className="rrss-item">
            <FontAwesomeIcon icon={faYoutube} size="2x" color="gray" />
          </a> */}
            <a href={aboutUser.linkedin_url} className="rrss-item">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="gray" />
            </a>
          </Stack>
        </Card.Footer>
      </Card>
      <PdfModal
        show={showModal}
        handleClose={handleCloseModal}
        pdfUrl={`${api}files/about_users/${aboutUser.id}/${aboutUser.cv}`}
      />
    </>
  );
};
