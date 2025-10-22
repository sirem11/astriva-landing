{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState, useEffect \} from 'react';\
import \{ TrendingUp, Brain, Users, Target, CheckCircle, MessageSquare, X, BarChart3, Award, ArrowRight, Zap, Shield \} from 'lucide-react';\
\
export default function AstrivaLanding() \{\
  const [showChat, setShowChat] = useState(false);\
  const [chatStep, setChatStep] = useState(0);\
  const [userResponses, setUserResponses] = useState(\{\});\
  const [email, setEmail] = useState('');\
  const [currentAnswer, setCurrentAnswer] = useState('');\
  const [startupCount, setStartupCount] = useState(0);\
\
  useEffect(() => \{\
    const target = 47;\
    const duration = 2000;\
    const steps = 50;\
    const increment = target / steps;\
    const stepDuration = duration / steps;\
\
    let current = 0;\
    const timer = setInterval(() => \{\
      current += increment;\
      if (current >= target) \{\
        setStartupCount(target);\
        clearInterval(timer);\
      \} else \{\
        setStartupCount(Math.floor(current));\
      \}\
    \}, stepDuration);\
\
    return () => clearInterval(timer);\
  \}, []);\
\
  const chatQuestions = [\
    \{\
      question: "What problem are you trying to solve?",\
      key: "problem",\
      placeholder: "E.g., Students struggle to find study partners..."\
    \},\
    \{\
      question: "Who is your target customer?",\
      key: "customer",\
      placeholder: "E.g., High school students, college students..."\
    \},\
    \{\
      question: "What's your solution?",\
      key: "solution",\
      placeholder: "E.g., An app that connects students by subject..."\
    \},\
    \{\
      question: "Why are you the right person to build this?",\
      key: "founder",\
      placeholder: "E.g., I've experienced this problem myself..."\
    \}\
  ];\
\
  const handleChatSubmit = () => \{\
    if (currentAnswer.trim()) \{\
      const newResponses = \{...userResponses, [chatQuestions[chatStep].key]: currentAnswer\};\
      setUserResponses(newResponses);\
      setCurrentAnswer('');\
      if (chatStep < chatQuestions.length - 1) \{\
        setChatStep(chatStep + 1);\
      \} else \{\
        setChatStep(chatStep + 1);\
      \}\
    \}\
  \};\
\
  const handleEmailSubmit = () => \{\
    if (email.trim() && email.includes('@')) \{\
      const submissions = JSON.parse(localStorage.getItem('astriva_submissions') || '[]');\
      submissions.push(\{\
        email,\
        responses: userResponses,\
        timestamp: new Date().toISOString()\
      \});\
      localStorage.setItem('astriva_submissions', JSON.stringify(submissions));\
      setChatStep(chatStep + 1);\
    \}\
  \};\
\
  const resetChat = () => \{\
    setShowChat(false);\
    setChatStep(0);\
    setUserResponses(\{\});\
    setEmail('');\
    setCurrentAnswer('');\
  \};\
\
  const fontStyle = \{\
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'\
  \};\
\
  return (\
    <div className="min-h-screen bg-stone-50" style=\{fontStyle\}>\
      <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">\
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">\
          <div className="flex items-center gap-2">\
            <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">\
              <TrendingUp className="w-5 h-5 text-white" strokeWidth=\{2.5\} />\
            </div>\
            <span className="text-xl font-semibold text-stone-800">Astriva</span>\
          </div>\
          <div className="hidden md:flex gap-6 text-stone-600 text-sm">\
            <a href="#features" className="hover:text-emerald-600 transition">Features</a>\
            <a href="#how-it-works" className="hover:text-emerald-600 transition">How It Works</a>\
            <a href="#stories" className="hover:text-emerald-600 transition">Success Stories</a>\
          </div>\
          <button \
            onClick=\{() => setShowChat(true)\}\
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"\
          >\
            Get Started\
          </button>\
        </div>\
      </nav>\
\
      <section className="pt-24 pb-16 px-6 bg-white">\
        <div className="max-w-7xl mx-auto">\
          <div className="grid lg:grid-cols-2 gap-12 items-center">\
            <div>\
              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">\
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>\
                <span className="text-xs font-medium text-emerald-700">\{startupCount\} startups launched by teens</span>\
              </div>\
              <h1 className="text-5xl lg:text-6xl font-semibold mb-5 leading-tight text-stone-900">\
                AI-powered accelerator for teen founders\
              </h1>\
              <p className="text-lg text-stone-600 mb-7 leading-relaxed">\
                Turn your ideas into real startups. Get AI validation, find co-founders, and build alongside ambitious teen entrepreneurs. Launch in weeks, not years.\
              </p>\
              <div className="flex gap-3 flex-wrap">\
                <button \
                  onClick=\{() => setShowChat(true)\}\
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-emerald-700 transition flex items-center gap-2"\
                >\
                  <Brain className="w-4 h-4" />\
                  Validate your idea\
                </button>\
                <button className="border border-stone-300 text-stone-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-emerald-600 hover:text-emerald-600 transition">\
                  Join waitlist\
                </button>\
              </div>\
\
              <div className="flex gap-6 mt-8 pt-6 border-t border-stone-200">\
                <div>\
                  <div className="text-2xl font-semibold text-stone-900">1,247</div>\
                  <div className="text-sm text-stone-500">teen founders</div>\
                </div>\
                <div>\
                  <div className="text-2xl font-semibold text-stone-900">\{startupCount\}</div>\
                  <div className="text-sm text-stone-500">startups launched</div>\
                </div>\
                <div>\
                  <div className="text-2xl font-semibold text-stone-900">$2.3M</div>\
                  <div className="text-sm text-stone-500">revenue generated</div>\
                </div>\
              </div>\
            </div>\
\
            <div className="relative">\
              <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">\
                <div className="flex items-center justify-between mb-4">\
                  <div className="flex items-center gap-2">\
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">\
                      <BarChart3 className="w-4 h-4 text-emerald-600" />\
                    </div>\
                    <div>\
                      <div className="text-sm font-medium text-stone-900">Your Dashboard</div>\
                      <div className="text-xs text-stone-500">Real-time insights</div>\
                    </div>\
                  </div>\
                  <div className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Live</div>\
                </div>\
                \
                <div className="space-y-4 mb-4">\
                  <div>\
                    <div className="flex justify-between text-xs text-stone-600 mb-1">\
                      <span>Idea validation score</span>\
                      <span className="font-medium text-emerald-600">87%</span>\
                    </div>\
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">\
                      <div className="h-full bg-emerald-500 rounded-full" style=\{\{width: '87%'\}\}></div>\
                    </div>\
                  </div>\
                  <div>\
                    <div className="flex justify-between text-xs text-stone-600 mb-1">\
                      <span>Market research</span>\
                      <span className="font-medium text-amber-600">72%</span>\
                    </div>\
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">\
                      <div className="h-full bg-amber-500 rounded-full" style=\{\{width: '72%'\}\}></div>\
                    </div>\
                  </div>\
                  <div>\
                    <div className="flex justify-between text-xs text-stone-600 mb-1">\
                      <span>MVP progress</span>\
                      <span className="font-medium text-emerald-600">94%</span>\
                    </div>\
                    <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">\
                      <div className="h-full bg-emerald-500 rounded-full" style=\{\{width: '94%'\}\}></div>\
                    </div>\
                  </div>\
                </div>\
\
                <div className="grid grid-cols-2 gap-3">\
                  <div className="bg-stone-50 rounded-lg p-3 border border-stone-200">\
                    <div className="text-xs text-stone-500 mb-0.5">Co-founders matched</div>\
                    <div className="text-lg font-semibold text-stone-900">12</div>\
                  </div>\
                  <div className="bg-stone-50 rounded-lg p-3 border border-stone-200">\
                    <div className="text-xs text-stone-500 mb-0.5">Days to launch</div>\
                    <div className="text-lg font-semibold text-stone-900">18</div>\
                  </div>\
                </div>\
              </div>\
\
              <div className="absolute -top-4 -left-4 bg-white rounded-lg border border-stone-200 p-3 shadow-sm max-w-[140px]">\
                <div className="flex items-center gap-2 mb-1">\
                  <Zap className="w-3 h-3 text-amber-500" />\
                  <div className="text-xs font-medium text-stone-900">Quick Win</div>\
                </div>\
                <div className="text-xs text-stone-600">First customer signed!</div>\
              </div>\
\
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg border border-stone-200 p-3 shadow-sm max-w-[150px]">\
                <div className="flex items-center gap-2 mb-1">\
                  <Shield className="w-3 h-3 text-emerald-500" />\
                  <div className="text-xs font-medium text-stone-900">AI Validated</div>\
                </div>\
                <div className="text-xs text-stone-600">Strong market fit detected</div>\
              </div>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      <section className="py-8 px-6 bg-stone-100 border-y border-stone-200">\
        <div className="max-w-7xl mx-auto">\
          <div className="text-center mb-6">\
            <p className="text-xs uppercase tracking-wide text-stone-500 font-medium">Trusted by teen founders at</p>\
          </div>\
          <div className="flex justify-center items-center gap-12 flex-wrap opacity-60">\
            <div className="text-stone-700 font-semibold text-lg">MIT</div>\
            <div className="text-stone-700 font-semibold text-lg">Stanford</div>\
            <div className="text-stone-700 font-semibold text-lg">Harvard</div>\
            <div className="text-stone-700 font-semibold text-lg">Berkeley</div>\
            <div className="text-stone-700 font-semibold text-lg">Yale</div>\
          </div>\
        </div>\
      </section>\
\
      <section id="features" className="py-20 px-6 bg-white">\
        <div className="max-w-7xl mx-auto">\
          <div className="text-center mb-14">\
            <h2 className="text-4xl font-semibold text-stone-900 mb-3">\
              Everything you need to launch\
            </h2>\
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">\
              From idea validation to first revenue, we provide the tools and support to build your startup\
            </p>\
          </div>\
          \
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">\
            <FeatureCard \
              icon=\{<Brain className="w-6 h-6" />\}\
              title="AI idea validator"\
              description="Get instant feedback on your startup idea. Our AI analyzes market fit, competition, and feasibility in minutes."\
            />\
            <FeatureCard \
              icon=\{<Users className="w-6 h-6" />\}\
              title="Co-founder matching"\
              description="Find your perfect co-founder. AI matches you based on skills, vision, and working style compatibility."\
            />\
            <FeatureCard \
              icon=\{<Target className="w-6 h-6" />\}\
              title="AI pitch coach"\
              description="Practice your pitch with AI that simulates tough investor questions and provides real-time feedback."\
            />\
            <FeatureCard \
              icon=\{<BarChart3 className="w-6 h-6" />\}\
              title="Growth toolkit"\
              description="Access templates, guides, and tools used by successful founders\'97from legal docs to marketing playbooks."\
            />\
            <FeatureCard \
              icon=\{<MessageSquare className="w-6 h-6" />\}\
              title="24/7 AI mentor"\
              description="Never get stuck. Ask questions anytime and get expert guidance on everything from code to customers."\
            />\
            <FeatureCard \
              icon=\{<Award className="w-6 h-6" />\}\
              title="Launch support"\
              description="Weekly live sessions, peer feedback, and direct connections to teen-friendly investors and press."\
            />\
          </div>\
        </div>\
      </section>\
\
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-50 to-amber-50">\
        <div className="max-w-6xl mx-auto">\
          <div className="bg-white rounded-xl border border-stone-200 p-8 md:p-12">\
            <div className="text-center mb-10">\
              <h3 className="text-3xl font-semibold text-stone-900 mb-2">The Astriva method</h3>\
              <p className="text-stone-600">A proven framework to go from idea to launch</p>\
            </div>\
\
            <div className="grid md:grid-cols-4 gap-6">\
              <div className="relative">\
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">\
                  <span className="text-emerald-700 font-semibold text-lg">1</span>\
                </div>\
                <h4 className="font-medium text-stone-900 mb-1">Validate</h4>\
                <p className="text-sm text-stone-600">AI analyzes your idea and gives you a detailed market report</p>\
                <div className="hidden md:block absolute top-6 -right-3 text-stone-300">\
                  <ArrowRight className="w-6 h-6" />\
                </div>\
              </div>\
\
              <div className="relative">\
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">\
                  <span className="text-amber-700 font-semibold text-lg">2</span>\
                </div>\
                <h4 className="font-medium text-stone-900 mb-1">Match</h4>\
                <p className="text-sm text-stone-600">Find co-founders with complementary skills in our community</p>\
                <div className="hidden md:block absolute top-6 -right-3 text-stone-300">\
                  <ArrowRight className="w-6 h-6" />\
                </div>\
              </div>\
\
              <div className="relative">\
                <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">\
                  <span className="text-emerald-700 font-semibold text-lg">3</span>\
                </div>\
                <h4 className="font-medium text-stone-900 mb-1">Build</h4>\
                <p className="text-sm text-stone-600">Create your MVP with our step-by-step guides and feedback</p>\
                <div className="hidden md:block absolute top-6 -right-3 text-stone-300">\
                  <ArrowRight className="w-6 h-6" />\
                </div>\
              </div>\
\
              <div>\
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">\
                  <span className="text-amber-700 font-semibold text-lg">4</span>\
                </div>\
                <h4 className="font-medium text-stone-900 mb-1">Launch</h4>\
                <p className="text-sm text-stone-600">Present at Demo Day and get your first customers</p>\
              </div>\
            </div>\
\
            <div className="mt-8 pt-8 border-t border-stone-200 flex items-center justify-between flex-wrap gap-4">\
              <div>\
                <div className="text-2xl font-semibold text-stone-900 mb-1">Average time: 4 weeks</div>\
                <div className="text-sm text-stone-500">From idea to first customer</div>\
              </div>\
              <button \
                onClick=\{() => setShowChat(true)\}\
                className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition flex items-center gap-2"\
              >\
                Start your journey\
                <ArrowRight className="w-4 h-4" />\
              </button>\
            </div>\
          </div>\
        </div>\
      </section>\
\
      <section id="stories" className="py-20 px-6 bg-stone-50">\
        <div className="max-w-7xl mx-auto">\
          <div className="text-center mb-14">\
            <h2 className="text-4xl font-semibold text-stone-900 mb-3">\
              Built by teens, for teens\
            </h2>\
            <p className="text-lg text-stone-600">Real founders who launched real startups</p>\
          </div>\
          \
          <div className="grid md:grid-cols-2 gap-6">\
            <TestimonialCard \
              name="Astriva Founder"\
              age="14"\
              company="Astriva"\
              quote="I built Astriva because I saw how hard it was for teens like me to turn ideas into companies. The resources existed but were scattered. Now we're helping hundreds of young founders launch."\
              metric="Helping teen entrepreneurs since 2024"\
            />\
            <TestimonialCard \
              name="Sarah Chen"\
              age="16"\
              company="StudyMatch"\
              quote="Astriva's AI helped me validate my study buddy app in 48 hours. I found my technical co-founder through the platform and we launched our MVP in 3 weeks. Now we have real users."\
              metric="$5K MRR in 2 months"\
            />\
          </div>\
        </div>\
      </section>\
\
      <section className="py-20 px-6 bg-emerald-600">\
        <div className="max-w-4xl mx-auto text-center">\
          <h2 className="text-4xl font-semibold mb-4 text-white">\
            Ready to build your startup?\
          </h2>\
          <p className="text-lg text-emerald-50 mb-8">\
            Join 1,247 teen founders turning ideas into reality\
          </p>\
          <button \
            onClick=\{() => setShowChat(true)\}\
            className="bg-white text-emerald-600 px-8 py-3.5 rounded-lg font-medium text-base hover:bg-stone-50 transition inline-flex items-center gap-2"\
          >\
            Get started now\
            <ArrowRight className="w-4 h-4" />\
          </button>\
        </div>\
      </section>\
\
      <footer className="border-t border-stone-200 py-12 px-6 bg-white">\
        <div className="max-w-7xl mx-auto">\
          <div className="flex items-center justify-center gap-2 mb-4">\
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">\
              <TrendingUp className="w-5 h-5 text-white" strokeWidth=\{2.5\} />\
            </div>\
            <span className="text-lg font-semibold text-stone-800">Astriva</span>\
          </div>\
          <p className="text-center text-stone-600 text-sm mb-2">Empowering the next generation of founders</p>\
          <p className="text-center text-stone-400 text-xs">\'a9 2025 Astriva \'b7 Built by a teen, for teens</p>\
        </div>\
      </footer>\
\
      \{showChat && (\
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">\
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-stone-200">\
            <div className="p-5 border-b border-stone-200 flex justify-between items-center sticky top-0 bg-white">\
              <div className="flex items-center gap-2">\
                <div className="w-9 h-9 bg-emerald-100 rounded-lg flex items-center justify-center">\
                  <Brain className="w-5 h-5 text-emerald-600" />\
                </div>\
                <h3 className="text-lg font-semibold text-stone-900">AI startup validator</h3>\
              </div>\
              <button onClick=\{resetChat\} className="text-stone-400 hover:text-stone-600">\
                <X className="w-5 h-5" />\
              </button>\
            </div>\
            \
            <div className="p-6">\
              \{chatStep < chatQuestions.length ? (\
                <div>\
                  <div className="mb-3 text-xs font-medium text-emerald-600">Question \{chatStep + 1\} of \{chatQuestions.length\}</div>\
                  <h4 className="text-xl font-semibold mb-5 text-stone-900">\{chatQuestions[chatStep].question\}</h4>\
                  <div className="space-y-3">\
                    <textarea \
                      value=\{currentAnswer\}\
                      onChange=\{(e) => setCurrentAnswer(e.target.value)\}\
                      placeholder=\{chatQuestions[chatStep].placeholder\}\
                      rows=\{4\}\
                      className="w-full px-4 py-3 bg-stone-50 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 focus:outline-none resize-none text-stone-900"\
                    />\
                    <button \
                      onClick=\{handleChatSubmit\}\
                      disabled=\{!currentAnswer.trim()\}\
                      className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"\
                    >\
                      Continue\
                    </button>\
                  </div>\
                </div>\
              ) : chatStep === chatQuestions.length ? (\
                <div>\
                  <h4 className="text-xl font-semibold mb-4 text-emerald-600">Almost done!</h4>\
                  <p className="text-stone-600 mb-6">\
                    Enter your email to receive your detailed validation report and join our community.\
                  </p>\
                  <div className="space-y-3">\
                    <input \
                      type="email"\
                      value=\{email\}\
                      onChange=\{(e) => setEmail(e.target.value)\}\
                      placeholder="your@email.com"\
                      className="w-full px-4 py-3 bg-stone-50 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 focus:outline-none text-stone-900"\
                    />\
                    <button \
                      onClick=\{handleEmailSubmit\}\
                      disabled=\{!email.trim() || !email.includes('@')\}\
                      className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed"\
                    >\
                      Get my validation report\
                    </button>\
                  </div>\
                </div>\
              ) : (\
                <ValidationReport />\
              )\}\
            </div>\
          </div>\
        </div>\
      )\}\
    </div>\
  );\
\}\
\
function FeatureCard(\{ icon, title, description \}) \{\
  return (\
    <div className="bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg transition">\
      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 text-emerald-600">\{icon\}</div>\
      <h3 className="text-lg font-medium mb-2 text-stone-900">\{title\}</h3>\
      <p className="text-sm text-stone-600 leading-relaxed">\{description\}</p>\
    </div>\
  );\
\}\
\
function TestimonialCard(\{ name, age, company, quote, metric \}) \{\
  return (\
    <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">\
      <div className="flex items-center gap-3 mb-4">\
        <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center font-semibold text-lg text-white">\
          \{age\}\
        </div>\
        <div>\
          <div className="font-medium text-base text-stone-900">\{name\}</div>\
          <div className="text-emerald-600 font-medium text-sm">\{company\}</div>\
        </div>\
      </div>\
      <p className="text-stone-600 mb-4 italic text-sm leading-relaxed">\{quote\}</p>\
      <div className="text-amber-600 font-medium text-sm">\{metric\}</div>\
    </div>\
  );\
\}\
\
function ValidationReport() \{\
  return (\
    <div className="space-y-6">\
      <div className="text-center mb-8">\
        <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">\
          <CheckCircle className="w-8 h-8 text-emerald-600" />\
        </div>\
        <h4 className="text-2xl font-semibold mb-2 text-stone-900">Validation complete!</h4>\
        <p className="text-stone-600">Check your email for your detailed report</p>\
      </div>\
\
      <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-3">\
        <h5 className="font-semibold text-base text-emerald-600">Initial analysis:</h5>\
        <div className="space-y-2">\
          <div className="flex justify-between text-sm">\
            <span className="text-stone-600">Market potential\
	 <span className="text-stone-600">Market potential</span>\
            <span className="font-medium text-emerald-600">High</span>\
          </div>\
          <div className="flex justify-between text-sm">\
            <span className="text-stone-600">Problem validation</span>\
            <span className="font-medium text-emerald-600">Strong</span>\
          </div>\
          <div className="flex justify-between text-sm">\
            <span className="text-stone-600">Competition</span>\
            <span className="font-medium text-amber-600">Moderate</span>\
          </div>\
          <div className="flex justify-between text-sm">\
            <span className="text-stone-600">Founder fit</span>\
            <span className="font-medium text-emerald-600">Good</span>\
          </div>\
        </div>\
      </div>\
\
      <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-200 rounded-xl p-5">\
        <h5 className="font-semibold text-base mb-3 text-stone-900">Next steps:</h5>\
        <ul className="space-y-2 text-sm text-stone-700">\
          <li className="flex items-start gap-2">\
            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />\
            <span>Join our Discord community to find co-founders</span>\
          </li>\
          <li className="flex items-start gap-2">\
            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />\
            <span>Schedule a 1-on-1 session to refine your idea</span>\
          </li>\
          <li className="flex items-start gap-2">\
            <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />\
            <span>Access our MVP builder toolkit</span>\
          </li>\
        </ul>\
      </div>\
\
      <button \
        onClick=\{() => window.location.reload()\}\
        className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition"\
      >\
        Join Astriva Community\
      </button>\
    </div>\
  );\
\}\
```\
\
4. Save as: `index.js`\
5. Save location: Inside the **`pages`** folder (not the main folder!)\
6. Path should be: `astriva-landing/pages/index.js`\
\
---\
\
**Your folder structure should look like this:**\
```\
astriva-landing/\
\uc0\u9500 \u9472 \u9472  package.json\
\uc0\u9500 \u9472 \u9472  next.config.js\
\uc0\u9492 \u9472 \u9472  pages/\
    \uc0\u9492 \u9472 \u9472  index.js}
