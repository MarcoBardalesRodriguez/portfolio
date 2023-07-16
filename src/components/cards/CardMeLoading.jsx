import { Card, Image, Stack, Placeholder } from 'react-bootstrap';

export const CardMeLoading = () => {
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
              maxHeight: '100px',
              backgroundColor: 'gray',
            }}
            roundedCircle
            fluid
          />
        </Stack>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder xs={12} />
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
        <Stack direction="horizontal" className="justify-content-center pt-3">
        <Placeholder.Button variant="dark" size="lg" xs={6} />
        </Stack>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Stack direction="horizontal" gap={3} className="justify-content-center">
        <Placeholder xs={4} />
        </Stack>
      </Card.Footer>
    </Card>
  );
};
