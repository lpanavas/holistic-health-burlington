import React from "react";
import { Container, Title, Text, BoldText } from "./styles";
import MyCalendar from "./Calendar";

const App = () => {
  return (
    <Container>
      <Title>Holistic Health Burlington</Title>
      <Text>
        Welcome to Holistic Health Burlington, a community dedicated to staying
        active and fostering social connections through various athletic and
        health activities.
      </Text>
      <Text>
        <BoldText>What We Do:</BoldText> We engage in diverse activities such as
        running, biking, swimming, cold plunging, hiking, and playing sports.
        Our goal is to stay in motion and enjoy the journey together.
      </Text>
      <Text>
        <BoldText>Join Us:</BoldText> Check out our upcoming events and join any
        that interest you. We look forward to having you with us! For questions
        or assistance, text the number listed with the event.
      </Text>
      <MyCalendar />
    </Container>
  );
};

export default App;
