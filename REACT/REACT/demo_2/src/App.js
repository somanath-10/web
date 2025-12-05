import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>
      </header>

      <main className="space-y-24 px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-20">
          <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Sell Your Unused Software Licenses with Ease
          </motion.h2>
          <p className="text-lg mb-6">Quick. Reliable. Hassle-free resale of your digital licenses.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get a Quote
          </button>
        </section>

        {/* How It Works */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-10">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              ['Upload License', '📤'],
              ['Get Valuation', '💰'],
              ['Get Paid', '🏦'],
            ].map(([title, icon], i) => (
              <motion.div
                key={i}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h4 className="font-semibold text-xl">{title}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-10">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              ['Fast Payouts', '⏱️'],
              ['Secure Transfers', '🔒'],
              ['Trusted by 1k+ Clients', '🤝'],
              ['24/7 Support', '📞'],
            ].map(([title, icon], i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
                <div className="text-3xl mb-3">{icon}</div>
                <h4 className="font-semibold">{title}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-10">Customer Testimonials</h3>
          <div className="space-y-6">
            {[
              { name: 'Jane Doe', role: 'IT Manager', company: 'TechNova', quote: 'SoftSell made it super easy to resell our old licenses. Highly recommended!' },
              { name: 'John Smith', role: 'Founder', company: 'DevSync', quote: 'Quick process, great support, and fair prices. A+ service.' },
            ].map((t, i) => (
              <blockquote key={i} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
                <p className="italic">"{t.quote}"</p>
                <footer className="mt-2 text-sm">— {t.name}, {t.role} @ {t.company}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-10">Contact Us</h3>
          <form className="grid gap-4 max-w-2xl mx-auto">
            <input type="text" placeholder="Name" required className="p-3 rounded border" />
            <input type="email" placeholder="Email" required className="p-3 rounded border" />
            <input type="text" placeholder="Company" className="p-3 rounded border" />
            <select required className="p-3 rounded border">
              <option value="">Select License Type</option>
              <option value="os">Operating System</option>
              <option value="sw">Software Suite</option>
              <option value="dev">Development Tools</option>
            </select>
            <textarea placeholder="Message" className="p-3 rounded border" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center text-sm py-6 border-t mt-20">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
