import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "./games/ProjectBoost/Build/MonoBleedingEdge.loader.js",
    dataUrl: "./games/ProjectBoost/Build/MonoBleedingEdge.data.gz",
    frameworkUrl: "./games/ProjectBoost/Build/MonoBleedingEdge.framework.js.gz",
    codeUrl: "./games/ProjectBoost/Build/MonoBleedingEdge.wasm.gz",
});

const UnityGame = () => {
        return <Unity unityContext={unityContext} />;
    }

      
export default UnityGame;
