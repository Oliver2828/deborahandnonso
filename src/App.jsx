// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
// import EventDetails from './components/EventDetails';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <Hero />
      <EventDetails />
      <OurStory />
      <Gallery />
      <Countdown />
      {/* <EventDetails /> */}
      <Registry/>
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;