import React from 'react';
import { Card, Image, Button, ListGroup, Stack, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';

export const CardMe = ({ user, aboutUser }) => {
  return (
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
        <Button variant="dark" size="lg"
          href={`https://portfolio.apps.marcobardalesrodriguez.site/api/files/about_users/${aboutUser.id}/${aboutUser.cv}`}
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
  );
};
