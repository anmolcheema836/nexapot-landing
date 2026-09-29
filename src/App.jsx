// src/App.jsx
import React, { useEffect, useRef, useState } from 'react';
import { 
  MessageCircle, ArrowRight, Layers, ChefHat, 
  Smartphone, ShieldCheck, Heart, Bell, 
  Sparkles, Users, LineChart, ChevronRight,
  Zap, BarChart3, Mail, MapPin, Phone
} from 'lucide-react';
import { draw, effect, frame, init, sampler, surface, target, uniforms } from 'vgpu';
import AeroShards from './components/ReactBits/Aeroshards';
import PlasmaWave from './components/ReactBits/PlasmaWave';
import DitherVeil from './components/ReactBits/DitherViel';
import ElectricLogo from './components/ReactBits/ElectricLogo';
import MoltenMetal from './components/ReactBits/MoltenMetal';
import Lightfall from './components/ReactBits/Lightfall';
import ParticleText from './components/ReactBits/ParticleText';
import Silk from './components/ReactBits/Silk';
import TechText from './components/ReactBits/TechText';

// --- CUSTOM CURSOR COMPONENT (Single Dot) ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, target } = e;
      
      // Instant follow logic applied to the wrapper for zero latency
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      
      // Check if hovering over a clickable element to trigger the CSS scale transition
      setIsHovering(!!target.closest('a, button, [role="button"]'));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: 'transform' }}
    >
      <div 
        className={`w-2 h-2 -ml-1 -mt-1 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.9)] transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isHovering ? 'scale-[2.5] bg-orange-400' : 'scale-100'}`}
      ></div>
    </div>
  );
};

function App() {
  const WHATSAPP_LINK = "https://whatsapp.com/channel/0029VbDz73FKgsO2qSWDv81a";

  return (
    // md:cursor-none hides the default cursor on desktop devices
    <div className="min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden font-sans selection:bg-orange-500/30 md:cursor-none [&_a]:md:cursor-none [&_button]:md:cursor-none">
      
      <CustomCursor />

      {/* --- BACKGROUND GRID --- */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_1_uz3j6m.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 px-4 md:px-8 py-4 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="logo.png" 
              alt="Nexapot" 
              className="h-8 md:h-10 w-auto max-w-[140px] md:max-w-[160px] object-contain" 
            />
          </a>
          <div className="flex items-center gap-3 md:gap-4">
            <a href={WHATSAPP_LINK} className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Book Demo
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-semibold bg-orange-500 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-orange-600 transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]"
            >
              Get Beta Access
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 pt-32 pb-16 md:pb-24 overflow-hidden">
        
        {/* Molten Background */}
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen">
          <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <AeroShards
              backgroundColor="#000000"
              shardColor="#ec6305"
              accentColor="#ff6800"
              placement="full"
              flow="stream"
              material="pearl"
              detail="balanced"
              effect="none"
              scale={1}
              spread={1}
              depth={1}
              speed={1}
              spin={1}
              interaction="repel"
              density={1.5}
              shardSize={1.1}
              stretch={1}
              turbulence={1}
              glow={1}
              edgeSoftness={2}
              bloom={0.5}
              grain={0.05}
              chromaticAberration={0.0075}
              transitionDuration={1}
              interactionRadius={1.5}
              interactionStrength={0.5}
              rippleIntensity={1}
              holdToGather
              paused={false}
            />
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl mt-8 md:mt-10">
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 md:mb-8 leading-[1.1] md:leading-[1.05] px-2 drop-shadow-2xl">
            Run your restaurant on <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-orange-500">
              Autopilot.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl text-zinc-300 max-w-3xl mb-10 md:mb-12 font-normal leading-relaxed px-4">
            Stop losing 30% of your profits to fragmented software. Nexapot merges your POS, inventory, KDS, and analytics into one ridiculously fast ecosystem. Manage less, earn more.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-300 bg-white rounded-full hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform text-black" />
            </a>
            <a 
              href={WHATSAPP_LINK}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-md"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* --- VIDEO DEMO SECTION --- */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 md:px-8 mt-8 md:-mt-20 mb-20 md:mb-24">
        {/* Outer glowing glass frame */}
        <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden p-1.5 md:p-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(234,88,12,0.1)] group hover:shadow-[0_0_80px_rgba(234,88,12,0.25)] transition-all duration-700 hover:scale-[1.01] hover:border-orange-500/30">
          
          {/* Inner video wrapper */}
          <div className="relative rounded-[1.25rem] md:rounded-[2rem] overflow-hidden bg-black/50 aspect-video">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
            
            <video 
              src="https://res.cloudinary.com/jikiqsjk/video/upload/v1790665634/nexapot.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline 
              disablePictureInPicture
              preload="metadata" 
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            />
          </div>
        </div>
      </section>

      {/* --- STATS / SOCIAL PROOF BANNER --- */}
      <div className="relative z-30 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="px-8 w-full md:w-auto">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">99.99%</h4>
            <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest">Uptime Guarantee</p>
          </div>
          <div className="px-8 pt-6 md:pt-0 w-full md:w-auto">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">&lt;15s</h4>
            <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest">Order to Kitchen</p>
          </div>
          <div className="px-8 pt-6 md:pt-0 w-full md:w-auto">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-1">$5K+</h4>
            <p className="text-xs md:text-sm text-zinc-500 uppercase tracking-widest">Avg. Saved Annually</p>
          </div>
        </div>
      </div>

    {/* --- FEATURES BENTO GRID --- */}
      <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

        <div className="text-center mb-16 md:mb-24 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-white px-2">
            Eliminate operational chaos.
          </h2>
          <p className="text-zinc-400 text-base md:text-xl max-w-3xl mx-auto leading-relaxed px-4 font-light">
            Stop duct-taping software together. Get a unified system natively built to cut costs, prevent theft, and scale your restaurant's revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-auto relative z-10">
          
          {/* 1. Unify Everything (Span 2) */}
          <div className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 flex flex-col justify-between shadow-2xl hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden">
            <div className="relative z-10 w-full sm:w-4/5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(234,88,12,0.2)]">
                <Layers className="w-6 h-6 md:w-7 md:h-7 text-orange-400" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Replace 5 Expensive Subscriptions</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Stop paying separately for a POS, Inventory tracker, HR app, KDS, and Loyalty CRM. Nexapot unifies your Front-of-House, Kitchen, and Back-Office into a single, lightning-fast cloud platform.
              </p>
            </div>
          </div>

          {/* 2. QR Ordering (Span 1) */}
          <div className="col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 md:mb-6">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Zero-Download App</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Customers scan, browse a 3D menu, and pay via UPI/Card in under 30 seconds. Faster ordering means faster table turns and higher revenue.
              </p>
            </div>
          </div>

          {/* 3. KDS (Span 1) */}
          <div className="col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 md:mb-6">
              <ChefHat className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Chaos-Free Kitchen</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Orders beam instantly to screens. Color-coded timers keep chefs on track, while "Grab-n-Go" items bypass the kitchen automatically.
              </p>
            </div>
          </div>

          {/* 4. Anti-Theft Inventory (Span 2) */}
          <div className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 flex flex-col justify-between shadow-2xl hover:bg-white/[0.05] transition-all duration-500 group relative overflow-hidden">
             <div className="relative z-10 w-full sm:w-4/5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-orange-400 transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Anti-Theft, Gram-Perfect Inventory</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                  Stop losing money to unrecorded waste and theft. Sell one cappuccino, and the system automatically deducts the exact grams of beans and milk. Get live alerts before you run out.
                </p>
             </div>
          </div>

          {/* 5. AI Menu Setup (Span 1) */}
          <div className="col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">AI-Powered Setup</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Paste your menu text or photo. Our AI auto-builds your catalog, prices, and assigns stunning 3D food icons in minutes.
              </p>
            </div>
          </div>

          {/* 6. HR & Payroll (Span 1) */}
          <div className="col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Painless HR & Payroll</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Secure PIN clock-ins track hourly wages perfectly. Generate precise PDF salary slips at month-end with a single click.
              </p>
            </div>
          </div>

          {/* 7. Loyalty CRM (Span 1) */}
          <div className="col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <Heart className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">Autopilot Loyalty</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Turn walk-ins into regulars. Auto-upgrade VIP tiers, issue promo codes, and send push-notification flash sales to their phones.
              </p>
            </div>
          </div>

          {/* 8. Enterprise Analytics (Span 2) */}
          <div className="md:col-span-2 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-10 flex flex-col justify-between shadow-2xl hover:bg-white/[0.05] transition-all duration-500 group relative">
            <div className="relative z-10 w-full sm:w-4/5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <LineChart className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Enterprise-Grade Analytics</h3>
              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Always know your exact profit margins. Track daily expenses against live revenue, view peak-hour heatmaps to optimize staff schedules, and identify your most profitable menu items instantly.
              </p>
            </div>
          </div>

          {/* 9. Silent Service (Span 1) */}
          <div className="col-span-1 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 flex flex-col justify-between group hover:bg-white/[0.05] transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5">
              <Bell className="w-5 h-5 md:w-6 md:h-6 text-zinc-300 group-hover:text-orange-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">The "Silent Service"</h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                Customers can tap their phone to request water, the bill, or a waiter—sending a live, pulsing alert straight to your staff dashboard.
              </p>
            </div>
          </div>

        </div>

        {/* CTA directly under the features to drive Beta signups */}
        <div className="mt-16 flex justify-center relative z-10">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold rounded-full hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300"
          >
            <Users className="w-5 h-5" />
            Join the Founder's Beta Group
          </a>
        </div>
      </section>

      {/* --- PARTICLE TEXT --- */}
      <section className="w-full h-[40vh] md:h-[50vh] flex flex-col justify-center items-center relative overflow-hidden bg-[#09090b]">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_1_uz3j6m.svg')] opacity-10"></div>
        <div className="absolute z-10 text-center top-10 w-full">
           <p className="text-orange-500 font-semibold tracking-widest uppercase text-xs md:text-sm">Experience the</p>
        </div>
        <ParticleText 
          text="FUTURE" 
          particleSize={3}
          color="#ffffff"
          highlightColor="#ea580c"
          trigger="hover"
          className="z-20 scale-75 md:scale-100"
        />
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="max-w-7xl mx-auto py-20 px-4 md:px-8 relative z-20">
        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20 backdrop-blur-sm">
          
          {/* Dither Veil Profile */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
            <DitherVeil
              src="anmol.png"
              pattern="floyd"
              pixelSize={1}
              inkColor="#000000"
              paperColor="#f4f1ea"
              revealRadius={100}
              softness={0.6}
              linger={1}
              fit="contain"
              rimColor="#a78bfa"
              palette="duotone"
              levels={2}
              contrast={1.15}
              brightness={0}
              rim={0}
              reverse={false}
              wander={false}
              clickBurst
            />
          </div>

          {/* Founder Copy */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-semibold mb-6 w-fit">
              <Sparkles className="w-4 h-4" /> Message from the Founder
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built for owners, by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Anmol Cheema</span>.
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-6 font-light">
              "I watched restaurants bleed margins every single month because they were forced to stitch together 5 different expensive software platforms just to operate. It was broken."
            </p>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-8">
              That's why we built Nexapot. It is designed from the ground up to be the ultimate operating system for modern restaurants. We took the complexity out of operations so you can focus entirely on scaling your revenue and perfecting your food. 
            </p>
            <div>
              <img src="logo.png" alt="Nexapot" className="h-8 opacity-50 grayscale" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 flex flex-col items-center overflow-hidden">
        {/* Plasma Background for CTA */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <PlasmaWave colors={["#ea580c", "#000000"]} lightMode={false} speed1={0.015} />
        </div>

        <div className="text-center relative z-10 px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white drop-shadow-lg">
            Stop losing money on outdated systems.
          </h2>
          <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto">
            Join the forward-thinking restaurants actively using Nexapot to run leaner, faster, and more profitably.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-lg font-bold text-black transition-all duration-300 bg-white rounded-full hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
          >
            Claim Your Beta Spot Now
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-2" />
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full bg-black border-t border-white/10 pt-16 pb-8 px-4 md:px-8 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <img src="logo.png" alt="Nexapot" className="h-8 mb-6" />
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
              The ultimate OS built to help restaurants cut software costs, prevent inventory theft, and scale operations smoothly. 
            </p>
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="#" className="hover:text-orange-500 transition-colors"><Mail className="w-5 h-5" /></a>
              <a href={WHATSAPP_LINK} className="hover:text-orange-500 transition-colors"><Phone className="w-5 h-5" /></a>
              <a href="#" className="hover:text-orange-500 transition-colors"><MapPin className="w-5 h-5" /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Point of Sale (POS)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kitchen Display (KDS)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inventory Control</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Founder</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Nexapot. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for performance.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;