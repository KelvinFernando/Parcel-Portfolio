import heroScene from '../assets/HeroPortfolio.json';
import UnicornScene from 'unicornstudio-react';

export default function HeroScene() {
  return (
    <UnicornScene
      jsonFilePath={heroScene}
      width="100%"
      height="100vh"
      production={true}
      onError={err => console.error('Scene load error:', err)}
    />
  );
}
