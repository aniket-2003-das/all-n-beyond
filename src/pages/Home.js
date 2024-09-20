// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventCard from '../components/EventCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="hero bg-gradient-to-r from-purple-600 to-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2">All n Beyond</h1>
            <p className="text-xl mb-8">A Code Collaboration Community</p>
            <a href="https://forms.gle/K1aKDFQsHUuswqzo8" className="bg-white text-purple-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">Join Us</a>
          </div>
        </section>
        
        <section className="events py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Join us for exciting workshops, hackathons, and tech talks. Enhance your skills, collaborate with peers, and stay updated with the latest in technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <EventCard 
                title="Smart India Hackathon 2024: Round 0"
                date="Sept 15, 2024"
                ID="Event Id = AB-005"
                description="Basics of web development and deployment. Problem statement selection & discussion on Prototype submission."
              />
              <EventCard 
                title="Buildathon 2024"
                date="July 26, 2024"
                ID="Event Id = LC-002"
                description="Build and deploy an innovative Auto ML solutions in this 24-hour challenge."
              />
              <EventCard 
                title="Kriyeta-3.0 Hackathon Sponsored By DSIR"
                date="June 7, 2024"
                ID="Event Id = AB-001"
                description="Peer code Design and review for Streamlit UI."
              />
              <EventCard 
                title="Club Discussion & Tech Talk"
                date="Apr 10, 2024"
                ID="Event Id = AB-306"
                description="Formation of Technical Sub-Leads and discussion on upcomming events."
              />
              <EventCard 
                title="VIT Bhopal Tech Battle Deployment Meetup"
                date="Mar 5, 2024"
                ID="Event Id = LC-102"
                description="React Native app deployment and Documentation."
              />
              <EventCard 
                title="Dark Pattern Buster Hackathon"
                date="Jan 15, 2024"
                ID="Event Id = AB-001"
                description="Basics of web development and machine learning. Ethichal trickery in ecommerce market Place."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
