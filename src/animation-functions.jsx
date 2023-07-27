// Animation library
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function animations (){
  const tl = gsap.timeline()

  useEffect( ()=>{
    tl.to('.to-top', {
      y: -10,
      opacity: 1,
      duration: 1,
      stagger: 0.5,
    });
    tl.to('.show', {
      opacity: 1,
      duration: 0.6,
      stagger: 0.3,
    });

    let movingSection = gsap.utils.toArray(".move-section");

    movingSection.forEach((section) => {
      gsap.to(section.querySelectorAll(".show-element"), {
        scrollTrigger: {
          trigger: section,
          start: "20% 70%",
          end: "20% 20%",
          toggleActions: "restart none resume reverse",
          // markers: true,
        },
        duration: 0.6,
        opacity:1,
        stagger: 0.3,
      });
  });

  }, [])
}
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: "%", top: "%", rotation: "rad"}
});
export default animations;