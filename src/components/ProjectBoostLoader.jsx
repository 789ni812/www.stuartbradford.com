import { useEffect } from 'react';

const UnityGame = () => {
  useEffect(() => {
    var gameInstance = UnityLoader.instantiate(
      "gameContainer", // The ID of the DOM element to host the game
      "/unityGame/Build.json", // The path to the .json file
      { 
        width: 800, 
        height: 600,
        onProgress: UnityProgress 
      }
    );
  }, []);

  return (
    <div id="gameContainer">
      {/* Unity will populate this */}
    </div>
  );
};

export default UnityGame;
