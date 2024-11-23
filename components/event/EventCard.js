import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  game, //
  description,
  date,
  time,
  organizer,
}) => (
  <Card className="text-center">
    <Card.Header>{game.title} Event</Card.Header>
    <Card.Body>
      <Card.Title>{date} at {time}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Organized by: User #{organizer.id}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    game_type: PropTypes.shape({
      label: PropTypes.string,
    }),
    title: PropTypes.string,
    maker: PropTypes.string,
    gamer: PropTypes.shape({
      uid: PropTypes.string,
      bio: PropTypes.string,
    }),
    number_of_player: PropTypes.number,
    skill_level: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default EventCard;
