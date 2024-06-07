import React from "react";
import Hero from "./Home/Hero";
import { roboto } from "@/utils/font";
import WelcomeSection from "./Home/WelcomeSection";
import GuideSection from "./Home/GuideSection";
import FeaturedSection from "./Home/FeaturedSection";
import CreatorSection from "./Home/CreatorSection";

const Landing = () => {
  return (
    <div className={`h-fit w-full ${roboto}`}>
      <Hero />
      <WelcomeSection />
      <GuideSection />
      <FeaturedSection />
      <CreatorSection/>
    </div>
  );
};

export default Landing;


// How It Works

// Sign Up: Create your free account.
// Share Your Journey: Upload photos, write stories, and tag locations.
// Explore and Connect: Discover and interact with fellow travelers' experiences.
// Featured Stories/Posts

// [Carousel of featured travel stories with captivating images and short excerpts]
// Community Highlights

// "I love sharing my travel experiences on Voyage Vault! It's like reliving the adventure." - Jane D.
// "Over 10,000 travel memories shared from 50+ countries!"
// Categories/Explore Section

// Adventure | Beach | City | Culture | Nature
// [Search bar with filter options]
// Join the Community

// "Ready to share your travel stories? Sign up today and start inspiring others with your adventures!"
// // 