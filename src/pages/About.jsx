import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import woman from "../assets/images/woman.jpg";
import man from "../assets/images/man.jpg";
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Pioneering Intelligent Investment Solutions
            </h1>
            <p className="text-xl text-blue-100">
              For over two decades, we've redefined wealth management through innovation and integrity
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900" />
      </section>

      {/* Stats Grid */}
      <section className="container mx-auto px-6 py-16 -mt-16">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">$256B+</div>
            <div className="text-gray-600">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
            <div className="text-gray-600">Client Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">150+</div>
            <div className="text-gray-600">Global Institutions</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-900 mb-2">27</div>
            <div className="text-gray-600">Countries Operating</div>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-blue-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="relative group">
              <div style={{backgroundImage:`url(${man})`,backgroundSize:'cover',backgroundPosition:'center'}} className=" h-96 rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg w-3/4">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Sustainable Growth</h3>
                <p className="text-gray-600">ESG-integrated investment strategies</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Investment Philosophy</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Long-term Value Creation</h3>
                  <p className="text-gray-600">
                    We focus on fundamental analysis and durable competitive advantages to drive sustainable returns.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Risk-aware Approach</h3>
                  <p className="text-gray-600">
                    Our proprietary risk management framework protects capital while seeking growth opportunities.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Global Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative">
                  <div style={{backgroundImage:`url(${woman})`,backgroundSize:'cover',backgroundPosition:'center'}} className="bg-gray-300 h-96 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                    <p className="text-blue-200">Chief Investment Officer</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm">20+ years in portfolio management</p>
                      <button className="mt-2 text-red-400 hover:text-red-300 font-semibold">
                        View Profile →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-blue-900 text-white py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 w-1 bg-white/20 h-full -translate-x-1/2" />
            {[
              { year: '1998', event: 'Founded in New York City' },
              { year: '2005', event: 'Expanded to European markets' },
              { year: '2012', event: 'Launched ESG investment framework' },
              { year: '2020', event: '$100B+ assets under management' },
            ].map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} p-6`}>
                  <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                    <div className="text-red-400 font-bold mb-2">{item.year}</div>
                    <div className="text-xl">{item.event}</div>
                  </div>
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Partner with Excellence?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100">
            Discover how our innovative strategies can help achieve your financial ambitions
          </p>
          <button className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-xl text-lg font-semibold transition-colors">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;