import React from "react";
import { ThreeDCard } from "./ThreeDCard";
import { dmSerif } from "@/utils/font";

const GuideSection = () => {
  return (
    <div className="md:px-32 max-h-screen h-fit py-16  ">
      <div className="flex justify-center items-center h-[10rem]">
        <p className={`${dmSerif} text-5xl`}>
          Become an Inspiration to millions of travellers.
        </p>
      </div>
      <div className="flex w-full justify-between items-center  h-[30rem]">
        <ThreeDCard
          heading="Sign Up."
          description="Create your free account to start sharing amazing and inspiring journey."
          href="/signup"
          title="Sign Up Now"
          src={
            "https://media.istockphoto.com/id/1279388417/photo/cyber-security-digital-crime-concept.jpg?s=612x612&w=0&k=20&c=EpF01Q2rYbAq1-A_HK5sWYHJVTyCTf4BtuX-7hWBe-o="
          }
        />
        <ThreeDCard
          heading="Share your journey."
          description=" Upload photos, write stories, and tag locations."
          href="/signup"
          title="Share a Story"
          src="https://media.istockphoto.com/id/1294882339/photo/woman-takes-selfie-with-temple.jpg?s=612x612&w=0&k=20&c=0aOj4VidhHhp_lebXfm_dN6gTFl1oisyfi8A5znx-lM="
        />
        <ThreeDCard
          heading="Explore and Connect"
          description="Discover and interact with fellow travelers' experiences."
          href="/signup"
          title="Explore"
          src="https://images.pexels.com/photos/5064910/pexels-photo-5064910.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
};

export default GuideSection;
