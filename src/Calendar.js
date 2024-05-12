import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events.json";
import Modal from "react-modal";
import { CalendarContainer } from "./styles";

const localizer = momentLocalizer(moment);
Modal.setAppElement("#root"); // assuming #root is the root element of your app

const MyCalendar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    console.log("Selected event:", event); // Debugging line
    setSelectedEvent(event);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const formattedEvents = events.map((event) => ({
    title: event.title,
    start: new Date(event.date + " " + event.start_time),
    end: new Date(event.date + " " + event.end_time),
    about: event.about,
    date: event.date,
    start_time: event.start_time,
    end_time: event.end_time,
    location: event.location,
    contact: event.contact,
  }));

  return (
    <div>
      <CalendarContainer className={modalIsOpen ? "opaque" : ""}>
        <Calendar
          localizer={localizer}
          events={formattedEvents}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={openModal}
          style={{ height: 500 }}
        />
      </CalendarContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        {selectedEvent && (
          <div>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.about}</p>
            <p>Date: {selectedEvent.date}</p>
            <p>Start Time: {selectedEvent.start_time}</p>
            <p>End Time: {selectedEvent.end_time}</p>
            <p>
              Location:{" "}
              <a href={selectedEvent.location.address}>
                {selectedEvent.location.name}
              </a>
            </p>
            <p>
              Contact: {selectedEvent.contact.name} -{" "}
              {selectedEvent.contact.number}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyCalendar;
