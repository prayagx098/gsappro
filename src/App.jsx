import { FaPhoneAlt } from "react-icons/fa";
import './App.css'
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import FifthSection from "./components/FifthSection";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
function App() {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{
    let tl_1 = gsap.timeline();
    let tl_2 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-2",
        start: "top center"
      }
    })
    let tl_3 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-3",
        start: "top center"
      }
    })
    let tl_4 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-4",
        start: "top center"
      }
    })
    let tl_5 = gsap.timeline({
      scrollTrigger:{
        trigger:".section-5",
        start: "top center"
      }
    })



    tl_1.from(".bg-1" , { xPercent : 100 , duration : 2 });
    tl_1.from('.txt', { x:50 , duration : 2 });
    tl_1.from('.txt', { opacity:0 , duration : 2 }, 2);
    tl_1.from('.btn-2', {x:-125});
    tl_1.from('.btn-1', {x:60 , opacity:0},"<");
    tl_1.from('.icon' , { opacity : 0, y : 50, duration : 2 });


    tl_2.from(".box-1", { x:200, duration:2, delay: 0.4 });
    tl_2.from(".box-2",{
      x:-200,
      duration:2
    },0);
    tl_2.from(".box-3",{
      x:200,
      duration:2
    },0);
    tl_2.from('.text-content_s2',{ x:-500 , duration:1 },0)
    tl_2.from('.sm_text',{ y:-100 , duration:1 },0.5)


    tl_3.from(".bg-3",{
      x:-900,
      duration:2,
    });
    tl_3.from(".white-box",{
      scaleY:0,
      duration:1,
    },0.5);
    tl_3.from(".white-box-content",{
      opacity:0,
      duration:1,
    });
    tl_3.from(".text-content_s3",{
      x:-500,
      duration:2,
    },0.5)


    tl_4.from(".img_2",{
      x:-1000,
      duration:2
    })
    tl_4.from(".img_1",{
      x:-1000,
      duration:2
    },0.5)
    tl_4.from(".bg-4",{
      x:-1000,
      duration:2
    },0.5)
    tl_4.from(".txt-1",{
      opacity:0,
      duration:2,
    },1)
    tl_4.from(".txt-2",{
      opacity:0,
      duration:2,
    },1.2)
    tl_4.from(".txt-3",{
      opacity:0,
      duration:2,
    },0.8)
    tl_4.from(".txt-4",{
      opacity:0,
      duration:2,
    },1.2)

    tl_5.from(".bg-5",{
      scaleY:0,
      duration:1,
    })
    tl_5.from(".side-1",{
      opacity:0,
      duration:1
    })
    tl_5.from(".side-2",{
      opacity:0,
      duration:1
    })


  })



  return (
    <>
      <div>
        <nav className="h-20 flex items-center justify-between px-12 py-10 border-b border-b-[rgbs(1,1,1,.1)]">
          <div>
            <p className="font-bold text-4xl">
              Spa<span style={{color:"green"}}>Che</span> 
            </p>
          </div>
          <ul className="flex items-center gap-10 font-bold">
            <li>Home</li>
            <li>Decours</li>
            <li>About</li>
            <li>Client</li>
          </ul>
          <div className="flex items-center gap-10">
            <button>SignUp</button>
            <div>
             <FaPhoneAlt />
            </div>
          </div>
        </nav>
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
        <footer className="py-4">
          <div className="flex justify-around items-center p-4">
            <div className="font-bold mb-4">
              <p className="font-bold text-4xl">
                Spa<span style={{color:"green"}}>Che</span> 
              </p>
              <p className="w-72 text">Lorem ipsum dolor, deleniti non. Modi quod sed qui facilis quas voluptates?</p>
            </div>
            <ul className="menu">
              <p>Company</p>
              <li>News</li>
              <li>Technology</li>
              <li>News</li>
            </ul>
            <ul className="menu">
              <p>Expand</p>
              <li>Partners</li>
              <li>Enterprise</li>
              <li>Developer</li>
            </ul>
            <ul className="menu">
              <p>Help</p>
              <li>Help Center</li>
              <li>Products</li>
              <li>Tools</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
