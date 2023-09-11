
import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { motion } from "framer-motion";
import projectBoostImage from '@/images/projects/GameProjectBoost.png'
import Image from "next/image";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const LoadingUnity = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    return (
        <div className="text-zinc-600 dark:text-zinc-400 text-3xl mx-auto justify-center my-16 flex">
            <div className="my-auto mx-16 ">Loading</div>
            <motion.div
                initial={false}
                animate={
                    isLoaded && isInView
                        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                }
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setIsInView(true)}
            >
                <div className="mt-8">
                    <Image src={projectBoostImage} alt="" onLoad={() => setIsLoaded(true)}
                        width={250}
                        height={250}
                    />
                </div>
            </motion.div>

        </div>
    )
}


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
            {unityProvider ? <Unity unityProvider={unityProvider} className="w-[960px] h-[500px] " /> : <LoadingUnity />}




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
