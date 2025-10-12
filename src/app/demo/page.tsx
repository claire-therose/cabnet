"use client"

import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements, useThree } from '@react-three/fiber'
import { Box, Environment } from '@react-three/drei';
import { DVD_File } from "./dvd_file"
import { Cabinet } from "./cabinet"
import * as THREE from 'three'
import { useMotionValue, useSpring, useTransform, Variants } from 'motion/react';
import DVD_Object from './dvd_object';

const cameraZ = 20;

function Cabnet_Scene() {

  const hdri_rotation = 5.5 * Math.PI / 4;

  return (
    <group>
      <Environment files='/3D/flamingo_pan_1k_tinted.hdr' environmentIntensity={0.7} environmentRotation={[0,hdri_rotation,0]} backgroundRotation={[0,hdri_rotation,0]} background={false}/>
      {/* <ambientLight intensity={1} /> */}
      <Cabinet position={[0,0,18]} rotation={[0,3 * Math.PI / 2,0]} scale={[1,1.1,1]} />
      <DVD_Object posX={-0.29}/>
      <DVD_Object posX={-0.27}/>
      <DVD_Object posX={-0.25}/>
      <DVD_Object posX={-0.23}/>
      <DVD_Object posX={-0.21}/>
      <DVD_Object posX={-0.19}/>
      <DVD_Object posX={-0.17}/>
      <DVD_Object posX={-0.15}/>
      <DVD_Object posX={-0.13}/>
      <DVD_Object posX={-0.11}/>
      <DVD_Object posX={-0.09}/>
      <DVD_Object posX={-0.07}/>
      <DVD_Object posX={-0.05}/>
      <DVD_Object posX={-0.03}/>
      <DVD_Object posX={-0.01}/>
      {/* <DVD_Object posX={0.01} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.03} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.05} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.07} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.09} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.11} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.13} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.15} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.17} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.19} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.21} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.23} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.25} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.27} set_inspecting={set_DVD_inspecting}/>
      <DVD_Object posX={0.29} set_inspecting={set_DVD_inspecting}/> */}
    </group>
  )
}

export default function Demo() {
  return (
    <div className='h-dvh w-dvw'>
      <Canvas camera={{fov: 20, position: [0,0,cameraZ]}} className='h-10 w-10'>
        <Cabnet_Scene />
      </Canvas>
    </div>
  );
}