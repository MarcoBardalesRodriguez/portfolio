import { Card, Placeholder } from 'react-bootstrap';

export const LoadingBody = () => {
    return (
        <>
            <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
        </>
    )
}