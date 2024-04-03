function Footer() {
    const glass ={
        'background': 'rgba(46, 47, 48, 0.9)',
        'boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
         'backdropFilter': 'blur(5.8px)', 
         'WebkitBackdropFilter': 'blur(5.8px)'};
    return (
      <section style={glass}>
        <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex justify-center mt-8 space-x-6">
            <a href="https://github.com/KrlosDev" target="_blank" className="text-white hover:text-secondary">
              <span className="sr-only">Github</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/carlosabh/" target="_blank" className="text-white hover:text-secondary">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" version="1.1" id="Layer_1" viewBox="-143 145 512 512">
                <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4	c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6	c35.5,0,63.3,23,63.3,72.4V508.1z"/>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-white">
            © 2024 Carlos Barahona. All rights reserved.
          </p>
        </div>
      </section>
    );
  }
  
  export default Footer;