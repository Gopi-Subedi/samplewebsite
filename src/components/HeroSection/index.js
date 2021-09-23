import React from "react";

const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBg autoplay loop muted src={Video} type="video/mp4" />
    </HeroContainer>
  );
};

export default HeroSection;
