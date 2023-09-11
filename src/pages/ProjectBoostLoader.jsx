// 'use client'
import React,{ useState} from "react";
// import Unity, { UnityContext } from "react-unity-webgl";
import { Unity, useUnityContext }from "react-unity-webgl";



const UnityGame = () => {
    const {unityProvider} = useUnityContext({
        loaderUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.loader.js",
        dataUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.data",
        frameworkUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.framework.js",
        codeUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.wasm",

      });

      console.log("Unity Provider", unityProvider)

    return <Unity unityProvider={unityProvider}  style={{ width: 700, height: 700 }} />;
};



export default UnityGame;
