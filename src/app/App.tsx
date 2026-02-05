import { useState } from "react";
import { motion } from "motion/react";
import {
  Wallet,
  TrendingUp,
  PieChart,
  Bell,
  Shield,
  Smartphone,
  Menu,
  X,
  ChevronRight,
  DollarSign,
  Target,
  BarChart3,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Wallet,
      title: "Smart Budgeting",
      description:
        "Automatically categorize expenses and set intelligent spending limits",
      color: "bg-blue-500",
    },
    {
      icon: TrendingUp,
      title: "AI Assistant",
      description:
        "Get intelligent recommendations and insights powered by AI to help you make smarter financial decisions",
      color: "bg-green-500",
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description:
        "Beautiful charts and graphs to understand your financial health",
      color: "bg-purple-500",
    },
    {
      icon: Bell,
      title: "Transaction History",
      description:
        "Look back at past months to see how your finances are improving.",
      color: "bg-orange-500",
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description:
        "Your financial data stays private with end-to-end encryption and advanced security",
      color: "bg-red-500",
    },
    {
      icon: Smartphone,
      title: "CSV & PDF Uploading",
      description:
        "Upload CSV or PDF bank statements for faster fetching and analyzing. Customize categories your way",
      color: "bg-cyan-500",
    },
  ];

  const stats = [
    {
      value: "Early Access",
      label: "Actively evolving with user feedback",
    },
    {
      value: "Built for Students",
      label: "Simple, practical, no finance jargon",
    },
    {
      value: "Open to Improvements",
      label: "Features added based on real needs",
    },
    {
      value: "Transparent & Secure",
      label: "Your data stays yours",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-900">
                TracSy
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                About
              </a>
              <Button variant="ghost">Sign In</Button>
              <Button asChild>
                <a
                  href="https://tracsy.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 space-y-2"
            >
              <a
                href="#features"
                className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg"
              >
                About
              </a>
              <div className="px-4 pt-2 space-y-2">
                <Button variant="ghost" className="w-full">
                  Sign In
                </Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-4">
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium">
                  🎉 Now with AI-powered insights
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Adulting is hard. Budgeting{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  shouldn't be.
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                For anyone who's tired of wondering where their
                money went. Made for real people with real-life
                expenses. Because your money deserves more than
                guesswork.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <Button
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.open("https://tracsy.streamlit.app", "_blank")}
              >
              Start Free Trial
              <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                Track. Save. Grow. All without the hassle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-0 right-0 z-10"
                >
                  <Card className="p-4 bg-white shadow-xl border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">
                          Saved this month
                        </p>
                        <p className="text-lg font-bold text-slate-900">
                          ₹1,247
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute bottom-10 left-0 z-10"
                >
                  <Card className="p-4 bg-white shadow-xl border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500">
                          Goal Progress
                        </p>
                        <p className="text-lg font-bold text-slate-900">
                          73%
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Main Dashboard Preview */}
                <Card className="p-8 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-400 text-sm mb-2">
                        Total Balance
                      </p>
                      <p className="text-4xl font-bold text-white">
                        ₹24,567.89
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm">
                          Shopping
                        </span>
                        <span className="text-white font-medium">
                          $420
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{
                            duration: 1,
                            delay: 0.5,
                          }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm">
                          Food & Dining
                        </span>
                        <span className="text-white font-medium">
                          $680
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          transition={{
                            duration: 1,
                            delay: 0.7,
                          }}
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-slate-300 text-sm">
                          Transportation
                        </span>
                        <span className="text-white font-medium">
                          $235
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "35%" }}
                          transition={{
                            duration: 1,
                            delay: 0.9,
                          }}
                          className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-slate-900 mb-2 text-[32px]">
                  {stat.value}
                </p>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Powerful features designed to help you manage
              money better and reach your goals faster
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 h-full hover:shadow-xl transition-shadow cursor-pointer border-0 bg-white">
                    <div
                      className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Finances?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join a growing community learning to save more and
              stress less.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
                asChild
              >
                <a
                  href="https://tracsy.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Free
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-semibold text-white">
                  TracSy
                </span>
              </div>
              <p className="text-sm text-slate-400">
                The smarter way to manage your money and achieve
                financial freedom.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2026 TracSy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
