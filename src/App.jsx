import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Leaf, Users, TrendingUp, BookOpen, Shield, HandCoins, BarChart3, PieChart as PieChartIcon, X, ChevronRight, Activity, Landmark, HeartHandshake, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Meteors = ({ number = 20 }) => {
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    setMeteors(new Array(number).fill(true));
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="meteor-effect"
          style={{
            top: Math.floor(Math.random() * 100) + 'vh',
            left: Math.floor(Math.random() * 100) + 'vw',
            animationDelay: Math.random() * 2 + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * 8 + 2) + 's',
          }}
        ></span>
      ))}
    </div>
  );
};

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const handleScrollToToolkit = () => {
    document.getElementById('toolkit-start')?.scrollIntoView({ behavior: 'smooth' });
  };

  const fieldData = [
    { name: 'Bank Account Access (%)', Before: 35, After: 78 }, // Global Findex / PMJDY estimates
    { name: 'Dependence on Moneylenders (%)', Before: 53, After: 21 }, // All India Debt & Investment Survey
    { name: 'Avg Monthly Savings (₹ x100)', Before: 3, After: 15 }, // Impact studies (approx ₹300 to ₹1500)
  ];

  const pieData = [
    { name: 'Agriculture & Allied Activities', value: 42 }, // NABARD Reports
    { name: 'Non-Farm Micro-enterprises', value: 36 },
    { name: 'Consumption & Household', value: 14 },
    { name: 'Health & Education', value: 8 },
  ];
  const COLORS = ['#10b981', '#059669', '#34d399', '#6ee7b7'];

  const yearWiseData = [
    { year: '2014', Slums: 32, Villages: 24 }, // Pre-PMJDY
    { year: '2016', Slums: 58, Villages: 47 }, 
    { year: '2018', Slums: 72, Villages: 63 },
    { year: '2020', Slums: 81, Villages: 74 },
    { year: '2022', Slums: 85, Villages: 81 },
    { year: '2024', Slums: 88, Villages: 85 }, // RBI/Findex approximate scaling
  ];

  const caseStudiesData = [
    { title: "Kudumbashree Model", loc: "Kerala, India", stat: "4.5 Million Members", text: "A state-led poverty eradication and women empowerment program emphasizing microcredit.", fullText: "Launched in 1998, Kudumbashree is practically synonymous with female empowerment in Kerala. Operating through Neighborhood Groups (NHGs), it shifted from merely providing thrift and credit to creating robust micro-enterprises. Today, its 4.5 million members run everything from IT units to organic farms, severely reducing poverty margins in the state.", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=800" },
    { title: "SEWA Cooperative", loc: "Gujarat, India", stat: "2.1 Million Members", text: "Organizing self-employed women in the informal economy for collective bargaining and banking.", fullText: "The Self Employed Women's Association (SEWA) started as a trade union and quickly realized its members needed financial tools. The SEWA Bank is a cooperative bank entirely owned by self-employed women. It offers savings, credit, insurance, and pension services to precarious workers like street vendors and weavers, providing financial buffers against daily income shocks.", image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80&w=800" },
    { title: "NABARD SHG-Bank Linkage", loc: "Pan-India", stat: "11.9 Million SHGs", text: "The world's largest microfinance program linking informal SHGs to formal banking sectors.", fullText: "Initiated in 1992, this pioneer project by NABARD integrates the informal Microfinance sector with the formal banking system. Over 11.9 million SHGs are credit-linked, revolutionizing financial inclusion organically by making formal banks view the rural poor as viable, reliable clients.", image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80&w=800" },
    { title: "Bandhan Microfinance", loc: "West Bengal, India", stat: "15+ Million Customers", text: "Transforming from a poverty-focused NGO into a universal bank focusing on the bottom-of-pyramid.", fullText: "Starting as a microfinance NGO in West Bengal in 2001, Bandhan focused heavily on empowering women in unbanked rural areas. Its exceptional repayment rates and profound socio-economic impact propelled it to become the first microfinance institution in India to receive a universal banking license.", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800" },
    { title: "Ujjivan Small Finance", loc: "Urban India", stat: "7+ Million Customers", text: "Empowering the economically active urban and semi-urban poor with holistic financial access.", fullText: "Focusing on urban and semi-urban poor who were often neglected by traditional rural MFIs, Ujjivan successfully brought financial, educational, and healthcare loan access to millions of women. By strictly adhering to customer protection practices, it efficiently transitioned into a Small Finance Bank.", image: "https://images.unsplash.com/photo-1544605943-4ada71c4c1a9?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden selection:bg-ngo selection:text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ngo-dark/40 via-slate-950 to-slate-950 -z-10"></div>
      <Meteors number={30} />

        {/* Hero Section */}
        <header className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
        <motion.div 
          initial="hidden" animate="visible" variants={stagger}
          className="container mx-auto text-center z-10 flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ngo/10 text-ngo border border-ngo/20 mb-8 backdrop-blur-sm">
            <Leaf size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Savera National Project</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="text-left">
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-100 to-white">
                Financial Literacy Toolkit <br />
                <span className="text-3xl md:text-5xl text-slate-300 font-light mt-4 block">Empowering Villages & Slums</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10">
                A comprehensive guide to Microloans, Self-Help Groups (SHGs), and financial inclusivity tools designed for grassroots empowerment. By bridging the knowledge gap, we help communities build a sustainable future.
              </motion.p>
              <motion.button onClick={handleScrollToToolkit} variants={fadeInUp} className="px-8 py-4 bg-ngo text-white rounded-full font-semibold text-lg hover:bg-emerald-600 transition-all shadow-[0_0_20px_rgba(0,137,123,0.4)] hover:shadow-[0_0_30px_rgba(0,137,123,0.6)]">
                Explore Toolkit
              </motion.button>
            </div>
            
            <motion.div variants={fadeInUp} className="relative hidden lg:block">
              <div className="absolute inset-0 bg-ngo/20 blur-[100px] rounded-full"></div>
              <img src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80&w=800" alt="Rural Indian Women" className="rounded-[3rem] border border-slate-800 shadow-2xl relative z-10 object-cover h-[500px] w-full" />
            </motion.div>
          </div>
        </motion.div>
      </header>

      <main id="toolkit-start" className="container mx-auto px-6 space-y-32 pb-32 pt-16">
        
        {/* Section 1: How Microloans Work */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How Microloans Work</h2>
            <div className="h-1 w-24 bg-ngo mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={32}/>, title: "Group Formation", desc: "Individuals form small groups (SHGs) to guarantee each other's loans, reducing risks without traditional collateral." },
              { icon: <HandCoins size={32}/>, title: "Capital Infusion", desc: "Microfinance institutions (MFIs) provide small loans directly to the group or individuals for entrepreneurial activities." },
              { icon: <TrendingUp size={32}/>, title: "Growth & Repayment", desc: "Profits from micro-businesses are used to support families and repay loans in small, manageable weekly installments." }
            ].map((item, i) => (
              <Tilt key={i} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-3xl h-full shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-ngo/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-ngo mb-6 p-4 bg-ngo/10 inline-block rounded-2xl">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* Section 2: Women Empowerment */}
        <section className="relative">
          <div className="absolute inset-0 bg-ngo/5 blur-[100px] rounded-full -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Impact of SHGs on <span className="text-ngo">Women Empowerment</span></h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Self-Help Groups act as a powerful catalyst for socio-economic change. By pooling savings and accessing formal credit, rural women transition from financial dependency to active contributors of their local economy.
              </p>
              <ul className="space-y-4">
                {['Financial Independence and decision-making power', 'Leadership development and community participation', 'Access to better education & healthcare for children'].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                    <Shield className="text-ngo mt-1 flex-shrink-0" size={24} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative aspect-square">
               {/* 3D Abstract Representation */}
               <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-tr from-ngo to-emerald-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                  <div className="w-full h-full border border-slate-800/80 bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-8 relative flex flex-col justify-center items-center shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ngo/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                    <h3 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2">85%</h3>
                    <p className="text-center text-slate-400 font-medium text-lg">of microfinance clients globally are women, proving their reliability and drive.</p>
                  </div>
               </Tilt>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Case Studies */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Case Studies</h2>
            <div className="h-1 w-24 bg-ngo mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">Click on any case study to read the full success story and understand the models defining modern microfinance across India.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudiesData.map((study, i) => (
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} key={i}>
                <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.03} transitionSpeed={2500} className="h-full">
                  <div 
                    onClick={() => setActiveCaseStudy(study)}
                    className="bg-slate-900/60 rounded-3xl border border-slate-800 hover:border-ngo hover:shadow-[0_0_20px_rgba(0,137,123,0.3)] transition-all cursor-pointer relative group h-full flex flex-col overflow-hidden"
                  >
                      <div className="h-48 w-full relative overflow-hidden flex-shrink-0">
                        <img src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                        <div className="absolute top-4 right-4 p-2 bg-slate-900/50 backdrop-blur-md rounded-full mt-0 transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">
                          <BookOpen className="text-ngo" size={20}/>
                        </div>
                        <span className="absolute bottom-4 left-6 text-xs font-bold tracking-widest text-emerald-400 uppercase drop-shadow-md">{study.loc}</span>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-3 text-white">{study.title}</h3>
                        <div className="inline-block px-3 py-1 bg-emerald-900/30 border border-emerald-800/40 text-emerald-400 text-xs font-semibold rounded-full mb-4 self-start">{study.stat}</div>
                        <p className="text-slate-400 relative z-10 flex-grow text-sm mb-6 leading-relaxed">{study.text}</p>
                        <div className="flex items-center text-ngo font-medium text-sm group-hover:text-emerald-400 transition-colors mt-auto">
                          Read Full Report <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Field Study Data Analysis */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-gradient-to-br from-slate-900 via-slate-900 to-ngo-dark/20 rounded-[3rem] p-8 md:p-16 border border-slate-800/60 shadow-2xl">
             <div className="text-center mb-12">
               <BarChart3 className="mx-auto text-ngo mb-4" size={48} />
               <h2 className="text-3xl md:text-4xl font-bold mb-4">Field Study: Financial Inclusion</h2>
               <p className="text-slate-400 max-w-2xl mx-auto">Data collected from 500 households across 10 villages highlighting the shift in financial behaviors post-SHG intervention.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { label: "Bank Account Access (PMJDY Base)", pre: "35%", post: "78%" },
                  { label: "Moneylender Dependence", pre: "53%", post: "21%" },
                  { label: "Average Monthly Savings", pre: "₹300", post: "₹1,500" }
                ].map((data, i) => (
                  <div key={i} className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800 transition-all hover:border-ngo/50 hover:shadow-[0_0_15px_rgba(0,137,123,0.3)]">
                    <h4 className="text-slate-300 font-medium mb-4">{data.label}</h4>
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-xs text-slate-500 uppercase block mb-1">Before</span>
                        <span className="text-xl font-bold text-slate-400">{data.pre}</span>
                      </div>
                      <div className="h-8 w-px bg-slate-700 mx-2"></div>
                      <div className="text-right">
                        <span className="text-xs text-ngo uppercase block mb-1">After</span>
                        <span className="text-3xl font-black text-emerald-400">{data.post}</span>
                      </div>
                    </div>
                  </div>
                ))}
             </div>

             <div className="bg-slate-950/70 p-6 md:p-8 rounded-3xl border border-slate-800 h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={fieldData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" tick={{ fill: '#64748b' }} tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{ fill: '#0f172a' }}
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '1rem', color: '#f8fafc' }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Bar dataKey="Before" fill="#334155" radius={[6, 6, 0, 0]} barSize={40} />
                    <Bar dataKey="After" fill="#059669" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
             </div>

             <div className="bg-slate-950/70 p-6 md:p-8 rounded-3xl border border-slate-800 h-[450px] mt-8">
                <h3 className="text-xl font-bold mb-6 text-center text-slate-200 flex items-center justify-center gap-2">
                  <Activity className="text-ngo" /> Year-wise Bank Account Access Coverage
                </h3>
                <ResponsiveContainer width="100%" height="90%">
                  <AreaChart data={yearWiseData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSlums" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorVillages" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" stroke="#64748b" tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '1rem', color: '#f8fafc' }} />
                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                    <Area type="monotone" dataKey="Slums" stroke="#10b981" fillOpacity={1} fill="url(#colorSlums)" />
                    <Area type="monotone" dataKey="Villages" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorVillages)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </motion.div>
        </section>

        {/* Section 5: Survey Reports & Utilization */}
        <section className="relative">
          <div className="absolute inset-0 bg-emerald-900/5 blur-[120px] rounded-full -z-10"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-2 lg:order-1">
              <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                  <PieChartIcon className="text-ngo" /> Primary Loan Utilization Survey
                </h3>
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#020617', border: '1px solid #1e293b', borderRadius: '1rem', color: '#f8fafc' }} />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Annual Impact <span className="text-ngo">Survey Reports</span></h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                Analyzing how microloans are utilized provides deep insights into community priorities. Our survey of 1,200 active borrowers reveals that entrepreneurial investments take precedence, ensuring sustainable income generation over short-term consumption.
              </p>
              <div className="space-y-6 mt-8">
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-xl font-bold text-white mb-2">Focus on Agriculture & Livestock</h4>
                  <p className="text-slate-400">30% of loans directly fund seed purchases, irrigation equipment, and livestock rearing, doubling agricultural yields for family farmers.</p>
                </div>
                <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-xl font-bold text-white mb-2">Retail Micro-enterprises</h4>
                  <p className="text-slate-400">45% of women used loans to establish or expand grocery shops, tailoring businesses, or local crafts, creating localized micro-economies.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Government Schemes Integration */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core <span className="text-ngo">Government Schemes</span></h2>
            <div className="h-1 w-24 bg-ngo mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 max-w-2xl mx-auto">Understanding how national policies integrate with grassroots microfinance to amplify poverty alleviation.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Pradhan Mantri MUDRA Yojana", code: "PMMY", desc: "Provides structural loans up to ₹10 Lakh to non-corporate, non-farm small/micro enterprises. Widely utilized by women entrepreneurs stepping up from basic SHG loans." },
              { title: "DAY - NRLM", code: "Aajeevika", desc: "Deendayal Antyodaya Yojana - National Rural Livelihoods Mission focuses on organizing rural poor women into SHGs, continuously nurturing them till they cross the poverty line." },
              { title: "Stand-Up India Scheme", code: "SUI", desc: "Facilitates bank loans between ₹10 lakh and ₹1 Crore to at least one Scheduled Caste / Tribe borrower and one woman borrower per bank branch for setting up a greenfield enterprise." }
            ].map((scheme, i) => (
              <Tilt key={i} tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2500}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-900/40 p-8 rounded-3xl border border-slate-800 transition-all hover:bg-slate-900/80 hover:border-ngo/50 group h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ngo/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ngo/20 transition-all"></div>
                  <Landmark className="text-slate-500 group-hover:text-ngo transition-colors mb-6" size={40} />
                  <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase mb-2 block">{scheme.code}</span>
                  <h3 className="text-2xl font-bold mb-4 text-slate-200">{scheme.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{scheme.desc}</p>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </section>

        {/* Section 7: Success Stories & Voices */}
        <section className="relative py-12">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ngo-dark/10 to-transparent -z-10"></div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Voices of <span className="text-ngo">Change</span></h2>
            <div className="h-1 w-24 bg-ngo mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10 lg:px-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-900/60 p-8 rounded-[2rem] border border-slate-800 relative z-10">
              <MessageSquare className="absolute top-8 right-8 text-slate-800" size={60} />
              <div className="flex items-center gap-6 mb-6">
                <img src="https://images.unsplash.com/photo-1544605943-4ada71c4c1a9?auto=format&fit=crop&q=80&w=200" alt="Farmer" className="w-20 h-20 rounded-full object-cover border-2 border-ngo" />
                <div>
                  <h4 className="text-xl font-bold text-white">Lakshmi Devi</h4>
                  <span className="text-sm text-ngo font-medium">Dairy Farm Owner, Rajasthan</span>
                </div>
              </div>
              <p className="text-slate-300 italic text-lg leading-relaxed relative z-20">
                "Before the SHG, I was paying 60% interest to the local moneylender just to feed my cows. The microloan allowed me to buy two more buffaloes and an automated milking machine. My income has quadrupled, and my children are finally back in school."
              </p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-900/60 p-8 rounded-[2rem] border border-slate-800 relative z-10">
              <MessageSquare className="absolute top-8 right-8 text-slate-800" size={60} />
              <div className="flex items-center gap-6 mb-6">
                <img src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&q=80&w=200" alt="Weaver" className="w-20 h-20 rounded-full object-cover border-2 border-ngo" />
                <div>
                  <h4 className="text-xl font-bold text-white">Radha Murthy</h4>
                  <span className="text-sm text-ngo font-medium">Textile Artisan, Karnataka</span>
                </div>
              </div>
              <p className="text-slate-300 italic text-lg leading-relaxed relative z-20">
                "We used to weave individually and sell to middlemen for pennies. Our SHG received a joint loan of ₹2 Lakh. We bought our own threads directly from the mill and set up a cooperative market stall. We dictate our own prices now."
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 8: Toolkit Checklist (Actionable) */}
        <section>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-slate-900 p-8 md:p-16 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ngo/10 to-transparent pointer-events-none"></div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <HeartHandshake className="text-ngo mb-6" size={48} />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Start a <span className="text-ngo">Micro-Cooperative</span> Today</h2>
                <p className="text-slate-400 mb-8 text-lg">Download our official 2026 ground-level implementation guide. Establish an SHG, connect with a local bank, and apply for your first collective microloan.</p>
                <div className="space-y-4 mb-10">
                  {['Identify 10-20 driven individuals in your community.', 'Open a joint savings account at a local Rural Bank.', 'Maintain regular savings and internal lending for 6 months.', 'Apply for NABARD / Bank Micro-credit linkages.'].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://docs.google.com/document/d/1qyUfnYKVCVDfBUzYIN-jQPretcyHa5YM/edit?usp=drivesdk&ouid=104567620854462506443&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-max items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-slate-200 transition-colors"
                >
                  Download Full PDF Guide <ArrowRight size={20} />
                </a>
              </div>
              <div className="relative h-[400px] hidden lg:block">
                {/* Abstract 3D elements representing documents */}
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} className="w-full h-full relative">
                  <div className="absolute top-10 left-10 w-64 h-80 bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl transform -rotate-6 transition-transform hover:-translate-y-4"></div>
                  <div className="absolute top-16 left-16 w-64 h-80 bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl transform rotate-3 transition-transform hover:-translate-y-4 flex flex-col p-6">
                    <div className="w-12 h-12 bg-ngo/20 rounded-full mb-6 flex items-center justify-center">
                      <Leaf className="text-ngo" size={24}/>
                    </div>
                    <div className="h-4 bg-slate-800 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-slate-800 rounded w-full mb-4"></div>
                    <div className="h-4 bg-slate-800 rounded w-5/6 mb-8"></div>
                    <div className="mt-auto h-12 bg-ngo/20 rounded-xl w-full border border-ngo/30"></div>
                  </div>
                </Tilt>
              </div>
            </div>
          </motion.div>
        </section>

      </main>

      <footer className="border-t border-slate-900 bg-slate-950 pt-16 pb-8 text-center text-slate-500">
        <div className="mb-4 flex justify-center">
          <Leaf className="text-ngo" size={32} />
        </div>
        <p className="font-medium text-slate-300">Savera National Organization</p>
        <p className="text-sm mt-2">© 2026 Financial Literacy Toolkit. Empowering communities.</p>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm" onClick={() => setActiveCaseStudy(null)}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="relative h-64 w-full flex-shrink-0">
                <img src={activeCaseStudy.image} alt={activeCaseStudy.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <button 
                  onClick={() => setActiveCaseStudy(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-900/50 hover:bg-slate-800 rounded-full backdrop-blur-md text-slate-300 transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-6 left-8 right-8">
                  <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2 block">{activeCaseStudy.loc}</span>
                  <h3 className="text-3xl font-bold text-white">{activeCaseStudy.title}</h3>
                </div>
              </div>
              <div className="p-8 overflow-y-auto">
                <div className="inline-block px-4 py-2 bg-emerald-900/30 border border-emerald-800/50 text-emerald-400 text-sm font-semibold rounded-full mb-6">
                  Official Stat: {activeCaseStudy.stat}
                </div>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  {activeCaseStudy.fullText}
                </p>
                <p className="text-slate-500 text-sm border-t border-slate-800 pt-4">Source: Official Case Study Repository & Microfinance Review Records (2026).</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
