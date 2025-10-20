import { useRef, useState } from "react";
import { DVD_File } from "./dvd_file";
import * as THREE from 'three'
import { useSpring, useTransform } from "motion/react";
import { useFrame, useThree } from "@react-three/fiber";

export default function DVD_Object({posX}:{posX : number}) {

  const dvd_ref = useRef<THREE.Group>(null!);

  const state = useThree();

  const rotation_scale = 1;

  const [pointer_down, set_pointer_down] = useState(false);
  const [dvd_selected, set_dvd_selected] = useState(false);

  const DVD_hover_transition = useSpring(0, {stiffness: 2000, damping: 50});
  const DVD_selected_transition = useSpring(0, {stiffness: 1500, damping: 80});

  const DVD_z_pos = useTransform(() => DVD_hover_transition.get() * 0.015 + DVD_selected_transition.get() * 1.2 + 18);
  const DVD_y_pos = useTransform(() => DVD_hover_transition.get() * 0.007 + DVD_selected_transition.get() * 0.015 - 0.015 );
  const DVD_x_pos = useTransform(() => posX - DVD_selected_transition.get() * posX)
  const DVD_x_rotation = useTransform(() => DVD_hover_transition.get() * Math.PI / 20);
  const DVD_y_rotation = useTransform(() => DVD_selected_transition.get() * Math.PI / -2 + Math.PI/2);

  useFrame((state, delta) => {
    dvd_ref.current.position.x = DVD_x_pos.get();
    dvd_ref.current.position.y = DVD_y_pos.get();
    dvd_ref.current.position.z = DVD_z_pos.get();
    dvd_ref.current.rotation.x = DVD_x_rotation.get();
    dvd_ref.current.rotation.y = DVD_y_rotation.get();
    if (dvd_selected) {
      dvd_ref.current.rotation.y += state.pointer.x * rotation_scale;
      dvd_ref.current.rotation.x += state.pointer.y * -1 * rotation_scale;
    }
  })
    
  return (
    <DVD_File 
      position={[posX,-.003,18]} 
      rotation={[0,Math.PI / 2,0]} 
      ref={dvd_ref}
      // little bit of a hacky type solution but it works for now
      onPointerEnter={(e: { stopPropagation: () => void; }) => {
        if (!dvd_selected) {
          DVD_hover_transition.set(1)
        }
        e.stopPropagation()
        }}
      onPointerLeave={() => {
        DVD_hover_transition.set(0);
        set_pointer_down(false);
      }}
      // little bit of a hacky type solution but it works for now
      onClick={(e: { stopPropagation: () => void; }) => {
        if (dvd_selected) {
          DVD_hover_transition.set(0);
          DVD_selected_transition.set(0);
          set_dvd_selected(false);
        } else {
          DVD_hover_transition.set(0);
          DVD_selected_transition.set(1);
          set_dvd_selected(true);
        }
        e.stopPropagation()}}
      onPointerDown={() => {
        set_pointer_down(true)}}
      onPointerUp={() => {
        set_pointer_down(false)}}
      />
  );

}