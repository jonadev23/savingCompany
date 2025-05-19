import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';


// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col">
     
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Connect with Our Investment Experts</h1>
            <p className="text-xl text-blue-100">
              Whether you're exploring investment opportunities or seeking financial guidance, 
              we're here to help you navigate your wealth journey.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900" />
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Contact Grid */}
        <section className="container mx-auto px-6 py-24 -mt-16">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Contact Form */}
            <motion.div 
              variants={{ hidden: { x: -50 }, visible: { x: 0 } }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name *</label>
                  <input 
                    {...register("name", { required: true })}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="Johnathan Smith"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">This field is required</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email *</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      className={`w-full px-4 py-3 border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      placeholder="john@example.com"
                      type="email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">Valid email is required</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Phone</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message *</label>
                  <textarea 
                    {...register("message", { required: true })}
                    className={`w-full px-4 py-3 border ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    rows="5"
                    placeholder="How can we assist you today?"
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">Please enter your message</p>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={{ hidden: { x: 50 }, visible: { x: 0 } }}
              className="space-y-8"
            >
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mt-1 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p>456 Financial District</p>
                      <p>New York, NY 10001</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <div>
                      <p>+1 (212) 555-0100</p>
                      <p>Mon-Fri: 9am - 5pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:contact@wiram.com" className="hover:text-blue-600">
                      contact@wiram.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-96 rounded-xl overflow-hidden border border-gray-200">
                <div className="bg-gray-300 absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">Map placeholder</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['LinkedIn', 'Twitter', 'YouTube'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex items-center text-gray-600 hover:text-blue-600"
                    >
                      <span className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                        {platform[0]}
                      </span>
                      <span className="ml-2">{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Global Offices Section */}
        <section className="bg-blue-50 py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Global Offices</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access our investment expertise from key financial hubs around the world
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: 'New York', country: 'United States', phone: '+1 212 555 0100' },
                { city: 'London', country: 'United Kingdom', phone: '+44 20 7946 0000' },
                { city: 'Singapore', country: 'Singapore', phone: '+65 6011 8888' },
              ].map((office, index) => (
                <motion.div
                  key={office.city}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={fadeIn}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg"
                >
                  <div className="bg-gray-300 w-full h-48 rounded-lg mb-6"></div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{office.city}</h3>
                  <p className="text-gray-600 mb-4">{office.country}</p>
                  <p className="text-blue-600 font-medium">{office.phone}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

   
    </div>
  );
};

export default Contact;