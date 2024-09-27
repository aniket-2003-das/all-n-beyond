// src/pages/About.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TeamMemberCard from '../components/TeamMemberCard';

const About = () => {
  const teamMembers = [
    {
      name: "Aniket Das",
      title: "Club President",
      description: "Oversees strategic direction, ensures successful execution of coding projects, and represents the community in external engagements.",
      imageUrl: "images/Aniket.png"
    },
    {
      name: "Anushka Gora",
      title: "Club Secretary",
      description: "Assists in club duties, manages day-to-day operations, and ensures collaboration between teams.",
      imageUrl: "images/Anushka.png"
    },
    {
      name: "Aamna Jain",
      title: "Club Manager",
      description: "Maintains project documentation, records meeting outcomes, and handles internal and external communications.",
      imageUrl: "images/Aamna.png"
    },
    {
      name: "Abhishek Singh Rawat",
      title: "Technical Lead",
      description: "Provides high-level technical direction, oversees all development projects, and ensures the adoption of best coding practices across teams.",
      imageUrl: "images/Abhishek.png"
    },
    {
      name: "Shreya Sanjay Pawale",
      title: "Club Treasurer",
      description: "Manages budget for devlopment tools, resources, and events, ensuring financial sustainability of the club's technical initiatives.",
      imageUrl: "images/Shreya.png"
    },
    {
      name: "Prem Singh",
      title: "Backend Lead",
      description: "Architects and develops server-side solutions, APIs, and database systems to ensure scalability in projects.",
      imageUrl: "images/Prem.png"
    },
    {
      name: "Chaitanya Patil",
      title: "Frontend Lead",
      description: "Oversees the design and implementation of applications, ensuring a responsive UI/UX experience.",
      imageUrl: "images/Patil.png"
    },
    {
      name: "Aryan Tyagi",
      title: "AIML Lead",
      description: "Leads machine learning and AI-driven projects, responsible for model development and training.",
      imageUrl: "images/Aryan.png"
    },
    {
      name: "Ashish Kumar",
      title: "DevOps Lead",
      description: "Manages CI/CD pipelines, automates deployments, and ensures robust infrastructure for code collaboration.",
      imageUrl: "images/Ashish.png"
    },
    {
      name: "Indrakshi Mandal",
      title: "Event Coordinator",
      description: "Organizes workshops, internal hackathons, and meetups, fostering practical skill development among members.",
      imageUrl: "images/Indrakshi.png"
    },
    {
      name: "Palak Mangal",
      title: "Social Media Manager",
      description: "Manages the club's online presence by creating content and engaging with the community on social media.",
      imageUrl: "images/Pallak.png"
    },
    {
      name: "Chitrakavi Sai Chandana",
      title: "Community Manager",
      description: "Facilitates communication within club, ensures member engagement and manages onboarding processes for new members.",
      imageUrl: "images/Sai.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="hero bg-gradient-to-r from-purple-600 to-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2">All n Beyond</h1>
            <p className="text-xl mb-8">Meet the Club Leads</p>
          </div>
        </section>
        
        <section className="about py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              All n Beyond is dedicated to foster a collaborative environment where students can learn, grow, and innovate together. We aim to bridge the gap between academic learning and real-world application, empowering the next generation of tech leaders.
            </p>
            <h2 className="text-3xl font-bold mb-8 text-center">Team Leads, 2024</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
