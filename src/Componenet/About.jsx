import React, { useEffect, useState } from 'react';
import img from "../assets/Logocommunion.0485ada0760e4748313f.png"

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to allow for transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <section className={`introduction ${isVisible ? 'visible' : ''}`}>
        <div className="banner">
          <h2>Welcome to the Communion App!</h2>
        </div>
        <img style={{height:"100px", width:"300px"}}
          src={img} // Replace with your image URL
          alt="Community Gathering"
          className="intro-image"
        />
        <p>
          At the Communion App, we believe in the power of connection. Our platform is designed to bring together individuals from diverse faiths and backgrounds, fostering a sense of community through shared experiences and events. Whether you're looking to participate in local gatherings, volunteer opportunities, or simply connect with like-minded individuals, the Communion App is your gateway to a vibrant and inclusive community.
        </p>
        <p>
          Join us as we celebrate our differences and find common ground through meaningful interactions. Together, we can create a supportive environment where everyone feels valued and connected. Explore our events, engage with your community, and discover the joy of coming together in faith and friendship.
        </p>
      </section>
      <section className="hero">
        <h1>Connecting People Across Faiths & Interests</h1>
        <p>Join a community that celebrates diversity and fosters connections through shared experiences and events.</p>
        <button onClick={() => window.location.href = 'home'}>Explore Events</button>
      </section>
    </>
  );
}

export default About;