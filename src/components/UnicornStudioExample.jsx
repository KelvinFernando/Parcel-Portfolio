import { useEffect, useState } from 'react';
import UnicornScene from 'unicornstudio-react';

export default function HeroScene() {
  const [sceneData, setSceneData] = useState(null);

  useEffect(() => {
    const sceneUrl = `${window.location.origin}/HeroPortfolio.json`;

    fetch(sceneUrl)
      .then(async res => {
        if (!res.ok) {
          const errorText = await res.text();
          console.error('❌ Fetch failed. Status:', res.status);
          console.log('🧪 Raw server response:', errorText);
          throw new Error('Scene file could not be loaded.');
        }
        return res.json();
      })
      .then(setSceneData)
      .catch(err => {
        console.error('🚨 Error loading Unicorn scene:', err);
        alert('Scene failed to load.');
      });
  }, []);

  if (!sceneData) return <p>Loading...</p>;

  return (
    <UnicornScene
      scene={sceneData}
      width="100%"
      height="100vh"
      production={true}
    />
  );
}
