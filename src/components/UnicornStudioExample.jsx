import React from 'react';
import UnicornScene from 'unicornstudio-react';

export default function MyComponent() {
  return (
    <UnicornScene
      jsonFilePath="https://parcelkelvin.netlify.app/HeroPortfolio.json"
      width="100%"
      height="400px"
      scale={0.8}
      dpi={2}
    />
  );
}
