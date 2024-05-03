import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { cascadia } from "@/utils/cascadia";

const Contact = () => {
  return (
    <div
      className={`mt-20 flex justify-center items-center relative overflow-hidden panel`}
      data-color="black"    
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex flex-col   gap-y-10 bg-black-100 p-8 rounded-2xl"
      >
       
          <h2 className={`${cascadia.className} text-neutral-100 text-5xl text-center`}>Reach out to us</h2>
        <p className={`${cascadia.className} text-neutral-100 text-xl text-center`}>We are available for cutomers across the globe</p>

        <form className="max-w-lg flex flex-col gap-y-5">
        <input
              type='text'
              name='name'
              autoComplete="off"
              
             
              placeholder="What's your good name?"
              className='backdrop-blur-sm bg-neutral-900/60 text-center py-5  placeholder:text-neutral-200 placeholder:text-sm text-neutral-100 rounded-lg outline-none border-none font-medium w-full placeholder:text-center px-4'
            />
        <input
              type='text'
              name='name'
              autoComplete="off"

              
             
              placeholder="What's your mail?"
              className='backdrop-blur-sm bg-neutral-900/60  text-center py-5  placeholder:text-neutral-200 placeholder:text-sm text-neutral-100 rounded-lg outline-none border-none font-medium w-full placeholder:text-center px-4'
            />
        <input
              type='text'
              name='name'
              autoComplete="off"

              
             
              placeholder="What's your Phone Number?"
              className='backdrop-blur-sm bg-neutral-900/60  text-center py-5  placeholder:text-neutral-200 placeholder:text-sm text-neutral-100 rounded-lg outline-none border-none font-medium w-full placeholder:text-center px-4'
            />
 <textarea
              rows={4}
              name='message'
              style={{resize:'none'}}
              // value={form.message}
              // onChange={handleChange}
              
              placeholder='Drop Your Message Here'
              className='backdrop-blur-sm bg-neutral-900/70  py-4 px-6 placeholder:text-neutral-200 placeholder:text-sm placeholder:text-center text-white rounded-lg outline-none border-none font-medium'
            />
<button className="bg-neutral-200 text-neutral-900 w-fit mx-auto p-3 rounded-md hover:bg-neutral-800 hover:text-neutral-100 transition-all">Send Message</button>
        </form>






      </motion.div>











      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="absolute flex justify-center items-center mt-20 -z-10 h-[80%] w-[100%] md:h-[100%]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
