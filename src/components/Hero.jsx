import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { styles } from "../styles";
import { IslandCanvas } from "./canvas";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [tracker, setTracker] = useState(0);
  const navigate = useNavigate();

  const mouse = () => {

    if (tracker < 3) {


      window.scrollBy(0, 30);
      if (tracker === 2) {
        // document.getElementById("overview").scrollIntoView();
        // location.href = '#';
        location.href = '#about';
      }
      setTracker(tracker+1);
    }
  }

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState('screen');
  // const [isMobile, setIsMobile] = useState(false)
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);

      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }

  }, []);

  const isMobile = width <= 768;

  return (
    <section className={`relative w-full h-screen mx-auto`}onMouseUp={mouse}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white z-50`}>
            Hi, I'm <span className='text-[#915EFF]'>Jared</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 z-50`}>
            I'm a fullstack developer with a passion for <br className='sm:block hidden'/>
            creating memorable user experiences
          </p>
        </div>
      </div>

      <IslandCanvas />
      {isMobile ?
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      :
        null

      }
      {/* {isMobile ?
      return <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
    :
    null

  } */}
      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;

//I am a fullstack developer with a passion for <br className='sm:block hidden'/>creating memorable user experiences