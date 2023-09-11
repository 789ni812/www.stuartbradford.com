

import { Unity, useUnityContext } from "react-unity-webgl";

const UnityGame = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.loader.js",
        dataUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.data",
        frameworkUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.framework.js",
        codeUrl: "/games/ProjectBoost/Build/MonoBleedingEdge.wasm",
    });




    return (
        <div className="w-[960px] h-[500px] mx-auto my-8">
            <h1 className="text-4xl font-bold tracking-tight text-teal-700 dark:text-zinc-100 sm:text-5xl mb-2">
                Project Boost
            </h1>



            <div class="w-[960px] h-[500px] flex justify-center items-center">
                <div class="  mx-auto relative z-0">
                    <p class="text-3xl text-teal-700 dark:text-zinc-100">Loading...</p>

                    <div class="absolute inset-0 flex justify-center items-center z-10">
                        <Unity unityProvider={unityProvider} className="w-[960px] h-[500px]" />
                    </div>
                </div>
            </div>



            <ul className="text-zinc-600 dark:text-zinc-400 text-xs flex justify-center">
                <p className="text-white">Keys</p>
                <li className="mx-4">A: Rotate left </li>
                <li className="mx-4">D: Rotate right</li>
                <li className="mx-4">space bar: Thrusters</li>
            </ul>

            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
                3D game developed using Unity and C# to help me with further understand XR development</p>
        </div>



    )
};



export default UnityGame;
