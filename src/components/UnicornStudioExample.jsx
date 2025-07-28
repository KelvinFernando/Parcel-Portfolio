import React from 'react';
import UnicornScene from 'unicornstudio-react';
import sceneData from '../../public/Hero-Portfolio.json';

export default function UnicornStudioExample() {
  const handleLoad = () => {
    console.log('Scene loaded successfully!');
  };

  const handleError = error => {
    console.error('Scene loading failed:', error);
  };

  return (
    <UnicornScene
      jsonFilePath={sceneData}
      width="100vw"
      height="100vh"
      scale={1}
      dpi={1.5}
      fps={60}
      altText="Interactive 3D scene"
      ariaLabel="Animated background scene"
      className="my-custom-class"
      lazyLoad={true}
      production={true}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}
