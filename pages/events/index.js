import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import EventCard from '../../components/event/EventCard';
import { getEvents } from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0 10px' }}>
        <h1>Events</h1>
        <Button onClick={() => {
          router.push('/events/new');
        }}
        >Register New Event
        </Button>
      </div>
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '10px 0 10px',
      }}
      >
        {events.map((event) => (
          <section key={`event--${event.id}`} className="event">
            <EventCard id={event.id} game={event.game} description={event.description} date={event.date} time={event.time} organizer={event.organizer} />
          </section>
        ))}
      </div>
    </article>
  );
}

export default Home;
