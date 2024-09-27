// src/pages/Blog.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      title: "Blackbox Premium Student Offer 💡",
      author: "BlackBox AI",
      blog: "Dear Fellow Students, I am excited to announce the launch of the BLACKBOX AI Program at VIT-Bhopal. As part of this initiative, we aim to introduce the incredible potential of AI and machine learning to our university community."
    },
    {
      title: "7 Best VS Code Extensions for Faster Development 🚀",
      author: "Social Media Manager @anb",
      blog: "As we head 2025, staying ahead in development productivity means leveraging the best tools. Here are some top VS Code extensions that not only make coding faster but also show why they're essential for the future of development.",
    },
    {
      title: "Apply for $300 AWS Credits today⚡",
      author: "Amazon Web Services",
      blog: "As AWS is  dedicated to help users find the right products and services to help them grow and scale. Students have been invited to apply for $300 in AWS credits.",
    },
    {
      title: "7 Open-Source Libraries to Boost Your CV 🚀",
      author: "Social Media Manager @anb",
      blog: "Mastering niche technologies and building projects around them can make you stand out. Here are 7 open-source libraries to help you do just that.",
    },
    {
      title: "AI and Sustainability: The Hidden Costs of Innovation 🌐",
      author: "Community Manager @anb",
      blog: "CHATGPT-4 model consumes enough water to quench your thirst for a day to generate 100 words.",
    },
    {
      title: "Top 10 ATS Resume Builders to Optimize Your Job Search in 2024 🌱",
      author: "Community Manager @anb",
      blog: "As job competition continues to rise, having an ATS-friendly resume is essential to ensure it gets seen by recruiters. Below are the top 10 resume builders designed to pass through Applicant Tracking Systems (ATS) effortlessly.",
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="hero bg-gradient-to-r from-purple-600 to-blue-600 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-2">All n Beyond</h1>
            <p className="text-xl mb-8">Insights into Web Development, AIML, DevOps and More</p>
          </div>
        </section>
        
        <section className="blog py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Blog Posts</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Our blogs covers a wide range of topics to keep you informed about the rapidly evolving Software World.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;