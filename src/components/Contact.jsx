import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn } from '../utils/motion';
import { Alert } from '@mui/material';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_k3ffn1i',
        'template_c8zg19q',
        {
          from_name: form.name,
          to_name: 'Carlos',
          from_email: form.email,
          to_email: 'carlosb@bbhint.com',
          message: form.message,
        },
        'xmKjv0sbEHMt9aLCN'
      )
      .then(
        () => {
          setLoading(false);
          setForm({ name: '', email: '', message: '' });
          setOpen(true);
        },
        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
  };

  return (
    <>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex overflow-hidden'>
        <motion.div variants={fadeIn('down', 'spring', 0.2, 1)} className='rounded-2xl green-pink-gradient p-1 max-w-[500px] xs:min-w-[320px] m-auto xxs:min-w-[220px]'>
          <div className='bg-primary rounded-2xl xs:p-6 xxs:p-[10px]'>
            <h3 className={`${styles.sectionHeadText} text-white md:text-[35px]`}>Get in Touch</h3>
            <form ref={formRef} onSubmit={handleSubmit} className='mt-4 flex flex-col gap-8'>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  required={true}
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className='bg-secondary py-4 px-4 rounded-lg placeholder:text-white text-white outline-none border-none font-medium w-full' // Added w-full for responsiveness
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your E-mail</span>
                <input
                  required={true}
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your e-mail?"
                  className='bg-secondary py-4 px-4 rounded-lg placeholder:text-white text-white outline-none border-none font-medium w-full' // Added w-full for responsiveness
                />
              </label>

              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Message</span>
                <textarea
                  required={true}
                  rows='2'
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className='bg-secondary py-4 px-4 rounded-lg placeholder:text-white text-white outline-none border-none font-medium w-full' // Added w-full for responsiveness
                />
              </label>
              <button
                type='submit'
                className='bg-tertiary py-3 px-8 outline-none w-fit mx-auto text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-emerald-900'
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
      <div>{open ? <Alert onClose={() => setOpen(false)}>Thank you. I'll contact you as soon as possible.</Alert> : ''}</div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');