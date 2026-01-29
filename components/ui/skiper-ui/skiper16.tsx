"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef , useContext } from "react";

import { Project } from '../../../types';

import {globalContext} from "../../../App"

import {ProjectCard} from "../../ProjectCard"

// const projects = [
//   {
//     title: "Project 1",
//     src: "/images/1762981553824.jpeg",
//   },
//   {
//     title: "Project 2",
//     src: "/images/1762981553824.jpeg",
//   },
//   {
//     title: "Project 3",
//     src: "/images/1762981553824.jpeg",
//   },
//   {
//     title: "Project 4",
//     src: "/images/lummi/img15.png",
//   },
//   {
//     title: "Project 5",
//     src: "/images/lummi/img12.png",
//   },
// ];

      //  <div key={project.id} className={`${colSpan} p-2`}>
      //           <ProjectCard project={project} onOpen={(p) => {
      //              setSelectedProject(p) 
      //              setIsProjectModalOpen(true)
      //              }} />
      //         </div>

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
  project,
  setSelectedProject
}: {
  i: number;
  title: string;
  src: string;
  progress: any;
  range: [number, number];
  targetScale: number;
  project : Project,
  setSelectedProject: React.Dispatch<
    React.SetStateAction<Project | null>
  >;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  const {setIsProjectModalOpen} = useContext(globalContext)
  

  return (
    <div
      ref={container}
      className="sticky top-0  h-screen flex items-center justify-center"
    >
      <motion.div
        style={{
          scale,
        }}
        className=" relative mt-14 flex  origin-top flex-col 
            h-[85vh] max-h-[550px] w-[92vw]           /* mobile */
            sm:w-[85vw]     /* large phones */
            md:w-[700px]    /* tablets */
            lg:w-[820px]    /* mini laptops */
            xl:w-[900px]    /* laptops */
            2xl:h-[560px] 2xl:w-[1040px] /* desktops */
        "
      >
                 <ProjectCard project={project} onOpen={(p) => {
                    setSelectedProject(p) 
                   setIsProjectModalOpen(true)
                   }} />
        {/* <img src={src} alt={title} className="h-full w-full object-cover" /> */}
      </motion.div>
    </div>
  );
};

const Skiper16 = ({projects , setSelectedProject}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center "
      >

        {projects.length > 0 ? (
        
          projects.map((project, i) => {
            const targetScale = Math.max(
              0.5,
              1 - (projects.length - i - 1) * 0.1,
            );
            return (
              <StickyCard_001
                key={`p_${i}`}
                i={i}
                project={project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                setSelectedProject={setSelectedProject}
              />
            );
          })
         )
        : (
          <div className="col-span-full py-40 text-center glass rounded-[48px] border border-dashed border-white/10">
            <p className="text-white/10 text-3xl font-black uppercase tracking-widest">Registry Empty</p>
          </div>
        )}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.in
 * Twitter: https://x.com/Gur__vi
 */
