import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import woman from "../assets/images/woman.jpg";

const Blog = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const articles = [
    {
      title: "Navigating Market Volatility in 2023",
      excerpt:
        "Strategies for maintaining portfolio stability during economic uncertainty...",
      category: "Market Trends",
      date: "March 25, 2023",
      readTime: "5 min read",
    },
    {
      title: "The Rise of ESG Investing",
      excerpt:
        "How environmental factors are reshaping global investment strategies...",
      category: "Sustainable Investing",
      date: "March 22, 2023",
      readTime: "4 min read",
    },
    {
      title: "Tech Sector Outlook",
      excerpt:
        "Emerging opportunities in artificial intelligence and cloud computing...",
      category: "Sector Analysis",
      date: "March 18, 2023",
      readTime: "6 min read",
    },
    {
      title: "Global Real Estate Trends",
      excerpt:
        "Post-pandemic shifts in commercial and residential property markets...",
      category: "Real Estate",
      date: "March 15, 2023",
      readTime: "5 min read",
    },
    {
      title: "Cryptocurrency Regulation Update",
      excerpt:
        "Impact of new regulatory frameworks on digital asset investments...",
      category: "Digital Assets",
      date: "March 12, 2023",
      readTime: "4 min read",
    },
    {
      title: "Retirement Planning Strategies",
      excerpt:
        "Building tax-efficient portfolios for long-term wealth preservation...",
      category: "Wealth Management",
      date: "March 8, 2023",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Investment Insights</h1>
            <p className="text-xl text-blue-100">
              Expert analysis and market perspectives from our team of financial
              strategists
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900" />
      </section>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-24">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { y: 20 }, visible: { y: 0 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div style={{backgroundImage:`url(${woman})`,backgroundSize:'cover',backgroundPosition:'center'}} className="bg-gray-300 h-56 rounded-t-2xl" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-red-600 font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      {article.date}
                    </span>
                    <Link to="/single-blog">
                      {" "}
                      <button className="text-red-600 hover:text-red-700 font-semibold">
                        Read More →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">
              Stay Ahead of Market Trends
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto text-blue-100">
              Subscribe to receive exclusive research reports and investment
              insights
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

export default Blog;
