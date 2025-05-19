import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BlogPost = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="mb-6">
              <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">
                Market Trends
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Navigating Market Volatility in 2023: Strategies for Stability
            </h1>
            <div className="flex items-center space-x-6 text-blue-100">
              <span>March 25, 2023</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900" />
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <article className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="mb-16"
            >
              <div className="bg-gray-300 w-full h-96 rounded-3xl" />
            </motion.div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Understanding Current Market Dynamics
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  In today's rapidly evolving financial landscape, investors
                  face unprecedented challenges...
                </p>

                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  Key Strategies for Portfolio Resilience
                </h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Diversification Tactics",
                    "Risk Management Frameworks",
                    "Liquidity Considerations",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <svg
                        className="w-6 h-6 text-red-600 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 p-8 rounded-xl mb-8">
                  <h4 className="text-xl font-semibold text-blue-900 mb-4">
                    Expert Insight
                  </h4>
                  <p className="text-gray-600 italic">
                    "In volatile markets, disciplined investment strategies
                    become paramount. Our focus remains on long-term value
                    creation through rigorous analysis."
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex items-center space-x-6">
                <div className="bg-gray-300 w-20 h-20 rounded-full" />
                <div>
                  <h4 className="text-xl font-semibold text-blue-900">
                    Sarah Johnson
                  </h4>
                  <p className="text-gray-600">Chief Investment Strategist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-blue-50 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="bg-gray-300 h-56 rounded-t-2xl" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-red-600 text-sm font-medium">
                        Sector Analysis
                      </span>
                      <span className="text-gray-500 text-sm">4 min read</span>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      Emerging Opportunities in Green Energy
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">
                        March 18, 2023
                      </span>
                      <button className="text-red-600 hover:text-red-700 font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
       

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Stay Informed with Expert Analysis
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100">
              Receive exclusive market insights and investment strategies
              directly to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogPost;
