import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, 
  Menu, 
  X, 
  Wrench, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Star, 
  ChevronRight, 
  Calendar,
  User,
  MessageSquare,
  Bike
} from 'lucide-react';

// --- Components ---

const Navbar = ({ isPromoVisible }: { isPromoVisible: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Motorcycles', href: '#motorcycles' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md h-16 border-gold/20' : 'bg-transparent h-20 border-transparent'} ${isPromoVisible ? 'top-[44px]' : 'top-0'}`}>
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black transition-transform group-hover:rotate-12">
            <Settings size={20} />
          </div>
          <div className="leading-none">
            <div className="font-display font-bold text-lg text-gold tracking-wide">Royal Enfield</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Kakching, Manipur</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-semibold uppercase tracking-widest text-cream hover:text-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
          <a href="#booking" className="bg-gold text-black px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all">
            Book Service
          </a>
        </div>

        <button className="md:hidden text-cream" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-gold/20 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-cream hover:text-gold"
              >
                {link.name}
              </a>
            ))}
            <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="bg-gold text-black px-6 py-3 text-center text-xs font-bold uppercase tracking-widest">
              Book Service
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1920" 
          alt="Royal Enfield Heritage" 
          className="w-full h-full object-cover filter brightness-50 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(201,147,58,0.15)_0%,transparent_60%)] z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block border border-gold px-4 py-1.5 text-[10px] uppercase tracking-[0.5em] text-gold mb-10 font-bold">
            Authorised Main Dealer • Kakching
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Where <span className="text-gold italic">Legend</span><br />Meets the Road
          </h1>
          <p className="font-serif text-xl md:text-2xl text-cream/80 max-w-2xl mb-12 leading-relaxed italic">
            Experience the timeless legacy of Royal Enfield at Kakching's premier dealership. Pure motorcycling since 1901.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#motorcycles" className="bg-gold text-black px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-2xl">
              Explore Lineup
            </a>
            <a href="#booking" className="border border-cream text-cream px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition-all backdrop-blur-sm">
              Book Test Ride
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl">
          {[
            { num: '5000+', label: 'Happy Riders' },
            { num: '10+', label: 'Years of Trust' },
            { num: '15+', label: 'Latest Models' },
            { num: '100%', label: 'Genuine Parts' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-left border-l border-gold/30 pl-6"
            >
              <div className="font-display text-4xl font-bold text-gold">{stat.num}</div>
              <div className="text-[10px] uppercase tracking-widest text-gray-400 mt-2 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.6em] text-gray-500 font-bold">Scroll Down</span>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800" 
            alt="Royal Enfield Showroom Kakching" 
            className="w-full aspect-[4/5] object-cover border-2 border-gold/20 grayscale hover:grayscale-0 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-12 -right-12 bg-gold p-12 hidden md:block shadow-2xl">
            <div className="text-black font-display text-7xl font-black leading-none">10+</div>
            <div className="text-black text-[10px] uppercase tracking-[0.3em] font-bold mt-3">Years of Excellence</div>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="text-gold text-[10px] uppercase tracking-[0.6em] mb-6 font-bold">Our Heritage</div>
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-10">
            The Spirit of<br />Pure Motorcycling
          </h2>
          <div className="gold-rule mb-10" />
          <p className="font-serif text-2xl text-cream/90 leading-relaxed mb-10 italic">
            "Royal Enfield Kakching is more than just a dealership; it's a sanctuary for those who believe that the journey is just as important as the destination."
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Located in the heart of Kakching, we have been serving the motorcycling community for over a decade. Our commitment to the Royal Enfield legacy is reflected in every bike we sell and every service we perform. We pride ourselves on providing an authentic experience that stays true to the brand's 120-year history.
          </p>
          <div className="grid grid-cols-2 gap-12">
            <div className="border-l-2 border-gold/20 pl-8">
              <div className="text-gold font-display text-4xl font-bold mb-2">5000+</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Happy Riders</div>
            </div>
            <div className="border-l-2 border-gold/20 pl-8">
              <div className="text-gold font-display text-4xl font-bold mb-2">100%</div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Genuine Parts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Motorcycles = () => {
  const [selectedBike, setSelectedBike] = useState<any>(null);

  const bikeData: Record<string, any> = {
    classic350: {
      name: 'Classic 350',
      tag: 'Bestseller',
      price: 'Starting ₹ 1,93,000* (Ex-showroom, Kakching)',
      img: 'https://www.bikewale.com/royalenfield-bikes/classic-350/',
      desc: 'Inspired by the iconic 1948 G2 Bullet, the Classic 350 blends timeless retro styling with modern engineering. Powered by the refined J-series 349cc air/oil-cooled engine, it delivers smooth torque for city commutes and long weekend rides alike.',
      specs: [
        {l:'Engine', v:'349cc Single'},
        {l:'Power', v:'20.2 bhp'},
        {l:'Torque', v:'27 Nm'},
        {l:'Gearbox', v:'5-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~35 kmpl'},
      ]
    },
    bullet350: {
      name: 'Bullet 350',
      tag: 'Heritage Icon',
      price: 'Starting ₹ 1,73,000* (Ex-showroom, Kakching)',
      img: 'https://www.bikewale.com/royalenfield-bikes/bullet/images/',
      desc: 'The longest-running motorcycle design in history. The all-new Bullet 350 carries forward 90+ years of legacy with a modern J-series engine, updated chassis, and premium fit and finish.',
      specs: [
        {l:'Engine', v:'349cc Single'},
        {l:'Power', v:'20.2 bhp'},
        {l:'Torque', v:'27 Nm'},
        {l:'Gearbox', v:'5-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~35 kmpl'},
      ]
    },
    meteor350: {
      name: 'Meteor 350',
      tag: 'Cruiser',
      price: 'Starting ₹ 2,09,000* (Ex-showroom, Kakching)',
      img: 'https://www.bikedekho.com/royal-enfield/meteor-350/images',
      desc: 'The Meteor 350 is Royal Enfield\'s most laid-back cruiser — designed for the open road. Its low seat, pulled-back bars, and wide footpegs create an effortlessly relaxed riding posture.',
      specs: [
        {l:'Engine', v:'349cc Single'},
        {l:'Power', v:'20.2 bhp'},
        {l:'Torque', v:'27 Nm'},
        {l:'Gearbox', v:'5-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~35 kmpl'},
      ]
    },
    hunter350: {
      name: 'Hunter 350',
      tag: 'Street Roadster',
      price: 'Starting ₹ 1,50,000* (Ex-showroom, Kakching)',
      img: 'https://www.bikewale.com/royalenfield-bikes/hunter-350/images/',
      desc: 'The Hunter 350 is a nimble, fun-focused street roadster built for urban riding. Light, agile, and stylish, it\'s perfect for riders stepping into the Royal Enfield world.',
      specs: [
        {l:'Engine', v:'349cc Single'},
        {l:'Power', v:'20.2 bhp'},
        {l:'Torque', v:'27 Nm'},
        {l:'Gearbox', v:'5-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~36 kmpl'},
      ]
    },
    himalayan450: {
      name: 'Himalayan 450',
      tag: 'Adventure',
      price: 'Starting ₹ 2,85,000* (Ex-showroom, Kakching)',
      img: 'https://www.team-bhp.com/forum/motorbikes/275280-royal-enfield-himalayan-450-review.html',
      desc: 'The all-new Himalayan 450 is Royal Enfield\'s first liquid-cooled motorcycle, built to conquer the most demanding terrain. Featuring the Sherpa 450 engine and switchable ABS.',
      specs: [
        {l:'Engine', v:'452cc Liquid-Cooled'},
        {l:'Power', v:'40 bhp'},
        {l:'Torque', v:'40 Nm'},
        {l:'Gearbox', v:'6-Speed'},
        {l:'ABS', v:'Switchable'},
        {l:'Mileage', v:'~30 kmpl'},
      ]
    },
    interceptor650: {
      name: 'Interceptor 650',
      tag: 'Parallel Twin',
      price: 'Starting ₹ 3,06,000* (Ex-showroom, Kakching)',
      img: 'https://www.royalenfield.com/in/en/motorcycles/interceptor/',
      desc: 'The Interceptor 650 is an award-winning parallel-twin roadster that punches far above its price. Its 648cc air/oil-cooled twin delivers a thrilling soundtrack.',
      specs: [
        {l:'Engine', v:'648cc Parallel Twin'},
        {l:'Power', v:'47 bhp'},
        {l:'Torque', v:'52 Nm'},
        {l:'Gearbox', v:'6-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~28 kmpl'},
      ]
    },
    continentalgt650: {
      name: 'Continental GT 650',
      tag: 'Café Racer',
      price: 'Starting ₹ 3,12,000* (Ex-showroom, Kakching)',
      img: 'https://in.pinterest.com/dhurusurya4/gt-650/',
      desc: 'The Continental GT 650 is a proper café racer — clip-on handlebars, rear-set footpegs, and a sculpted half-fairing. Powered by the same twin as the Interceptor.',
      specs: [
        {l:'Engine', v:'648cc Parallel Twin'},
        {l:'Power', v:'47 bhp'},
        {l:'Torque', v:'52 Nm'},
        {l:'Gearbox', v:'6-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~28 kmpl'},
      ]
    },
    superMeteor650: {
      name: 'Super Meteor 650',
      tag: 'Grand Cruiser',
      price: 'Starting ₹ 3,49,000* (Ex-showroom, Kakching)',
      img: 'https://zeenews.india.com/auto/royal-enfield-super-meteor-650-cruiser-unveiled-check-images-specs-features-weight-here-2532671.html',
      desc: 'The Super Meteor 650 is Royal Enfield\'s flagship cruiser — broad, low, and commanding. Built for grand touring, it combines the 648cc twin with a relaxed geometry.',
      specs: [
        {l:'Engine', v:'648cc Parallel Twin'},
        {l:'Power', v:'47 bhp'},
        {l:'Torque', v:'52 Nm'},
        {l:'Gearbox', v:'6-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~28 kmpl'},
      ]
    },
    guerrilla450: {
      name: 'Guerrilla 450',
      tag: 'Roadster',
      price: 'Starting ₹ 2,39,000* (Ex-showroom, Kakching)',
      img: 'https://www.bikewale.com/royalenfield-bikes/guerrilla-450/',
      desc: 'The Guerrilla 450 is Royal Enfield\'s most modern, dynamic roadster — powered by the liquid-cooled Sherpa 450 engine. Built for riders who want modern performance.',
      specs: [
        {l:'Engine', v:'452cc Liquid-Cooled'},
        {l:'Power', v:'39.5 bhp'},
        {l:'Torque', v:'40 Nm'},
        {l:'Gearbox', v:'6-Speed'},
        {l:'ABS', v:'Dual Channel'},
        {l:'Mileage', v:'~30 kmpl'},
      ]
    },
  };

  const bikeKeys = Object.keys(bikeData);

  return (
    <section id="motorcycles" className="section-padding bg-[#111]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3">Our Fleet</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Find Your Perfect Ride</h2>
          </div>
          <a href="#booking" className="border border-cream/30 text-cream px-6 py-3 text-xs font-bold uppercase tracking-widest hover:border-gold hover:text-gold transition-all flex items-center gap-2">
            Book Test Ride <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bikeKeys.map((key, i) => {
            const bike = bikeData[key];
            return (
              <div 
                key={key} 
                onClick={() => setSelectedBike(bike)}
                className={`group relative overflow-hidden bg-charcoal/50 border border-white/5 p-8 cursor-pointer transition-all hover:border-gold/30 hover:bg-charcoal ${i === 0 || i === 6 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="bg-gold text-black px-3 py-1 text-[9px] font-bold uppercase tracking-widest w-fit mb-4">
                      {bike.tag}
                    </div>
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{bike.name}</h3>
                    <p className="text-sm text-gold-light tracking-wider mb-4">{bike.price.split('(')[0]}</p>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                      {bike.specs[0].v} • {bike.specs[1].v} • {bike.specs[3].v}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:translate-x-2">
                    View Full Specifications <ChevronRight size={12} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-[10px] text-gray-500 text-right uppercase tracking-widest">
          *Ex-showroom price, Kakching. Prices subject to change. | Click any bike to view full specs.
        </p>
      </div>

      {/* Bike Modal */}
      <AnimatePresence>
        {selectedBike && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBike(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-charcoal max-w-4xl w-full border border-gold/20 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedBike(null)}
                className="absolute top-6 right-6 z-10 text-white hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="p-8 md:p-16">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-gold text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest w-fit mb-6">
                    {selectedBike.tag}
                  </div>
                  <h2 className="font-display text-5xl font-bold text-white mb-4">{selectedBike.name}</h2>
                  <p className="text-xl text-gold-light font-bold mb-10">{selectedBike.price}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                    {selectedBike.specs.map((spec: any, i: number) => (
                      <div key={i} className="bg-gold/5 border-l-2 border-gold p-4">
                        <div className="text-[10px] uppercase tracking-widest text-gold mb-1">{spec.l}</div>
                        <div className="text-base font-bold text-white">{spec.v}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4">Description</h4>
                    <p className="font-serif text-xl text-cream/70 leading-relaxed italic">
                      {selectedBike.desc}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="#booking" 
                      onClick={() => setSelectedBike(null)}
                      className="bg-gold text-black px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all text-center flex-1"
                    >
                      Book Test Ride Now
                    </a>
                    <button 
                      onClick={() => setSelectedBike(null)}
                      className="border border-white/20 text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-center flex-1"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: '🔧', title: 'General Servicing', desc: 'Comprehensive periodic service including oil change, filter replacement, chain lubrication, and full inspection by trained mechanics.' },
    { icon: '⚙️', title: 'Engine Overhaul & Repair', desc: 'Deep engine diagnostics, piston work, valve grinding, bore repair, and complete engine rebuild using only genuine Royal Enfield parts.' },
    { icon: '🛞', title: 'Tyres & Wheels', desc: 'Tyre fitting, balancing, spoke tightening, rim straightening, and tubeless conversion. Stock of branded motorcycle tyres available.' },
    { icon: '⚡', title: 'Electrical & Diagnostics', desc: 'Advanced ECU diagnostics, wiring repair, battery testing, lighting & instrument cluster repair for all Royal Enfield models.' },
    { icon: '🎨', title: 'Body & Paint Work', desc: 'Panel beating, tank repair, OEM colour matching, dent removal, and full custom paint jobs to restore your bike\'s original glory.' },
    { icon: '🛡️', title: 'Warranty Service', desc: 'All warranty claims handled under Royal Enfield\'s official policy. Keep your motorcycle covered with our authorised service team.' },
    { icon: '🧲', title: 'Genuine Spare Parts', desc: 'Wide stock of authentic Royal Enfield spare parts and accessories. No counterfeits — ever. Available over the counter or on order.' },
    { icon: '🏍️', title: 'Accessories & Customisation', desc: 'Official Royal Enfield accessories — saddlebags, windscreens, crash guards, touring kits, riding gear, helmets, and more.' },
  ];

  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3">Our Services</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Complete Care for<br />Your Royal Enfield
            </h2>
            <div className="gold-rule" />
            <p className="font-serif text-lg text-cream/70 leading-relaxed mb-8">
              From routine maintenance to complex repairs, our factory-trained technicians ensure your motorcycle performs at its absolute best — every single ride.
            </p>
            <a href="#booking" className="bg-gold text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all inline-block">
              Schedule Service
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1599812182397-3206a0a57141?q=80&w=700" 
              alt="Service Center" 
              className="w-full aspect-[16/10] object-cover border-2 border-gold/20 filter brightness-75"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, i) => (
            <div key={i} className="bg-[#111] p-8 border-t-2 border-transparent hover:border-gold transition-all group relative overflow-hidden">
              <div className="text-3xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 inline-block">
                {service.icon}
              </div>
              <div className="font-display text-5xl font-black text-gold/5 absolute top-4 right-4 leading-none">0{i+1}</div>
              <h4 className="text-lg font-bold text-white mb-3">{service.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{service.desc}</p>
              <a href="#booking" className="text-[10px] font-bold uppercase tracking-widest text-gold opacity-0 transition-opacity group-hover:opacity-100">
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="bg-charcoal p-10 md:p-16 border border-gold/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -mr-16 -mt-16 rounded-full blur-3xl" />
          <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 font-bold">Service & Test Ride</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">Book Your Session</h2>
          <div className="gold-rule mb-10" />
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gold">Full Name</label>
                <input required type="text" placeholder="e.g. John Doe" className="w-full bg-white/5 border border-gold/20 p-4 text-cream outline-none focus:border-gold transition-colors font-sans" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gold">Phone Number</label>
                <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-white/5 border border-gold/20 p-4 text-cream outline-none focus:border-gold transition-colors font-sans" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gold">Select Model</label>
                <select className="w-full bg-white/5 border border-gold/20 p-4 text-cream outline-none focus:border-gold transition-colors font-sans appearance-none">
                  <option className="bg-charcoal">Classic 350</option>
                  <option className="bg-charcoal">Meteor 350</option>
                  <option className="bg-charcoal">Bullet 350</option>
                  <option className="bg-charcoal">Himalayan 450</option>
                  <option className="bg-charcoal">Interceptor 650</option>
                  <option className="bg-charcoal">Continental GT 650</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gold">Preferred Date</label>
                <input required type="date" className="w-full bg-white/5 border border-gold/20 p-4 text-cream outline-none focus:border-gold transition-colors font-sans" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gold">Additional Notes</label>
              <textarea placeholder="Describe your requirement..." className="w-full bg-white/5 border border-gold/20 p-4 text-cream outline-none focus:border-gold transition-colors font-sans min-h-[120px]" />
            </div>
            <button type="submit" className="w-full bg-gold text-black py-5 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-xl">
              Confirm Booking
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <Phone size={24} />, title: 'Call Us', desc: '+91 98XXXXXX01\n+91 70XXXXXX45' },
              { icon: <MapPin size={24} />, title: 'Visit Us', desc: 'Main Road, Kakching\nManipur – 795103' },
              { icon: <Clock size={24} />, title: 'Timings', desc: 'Mon – Sat: 9 AM – 6 PM\nSun: 10 AM – 2 PM' },
              { icon: <ShieldCheck size={24} />, title: 'Finance', desc: 'Easy EMI options available\nFast approval process' },
            ].map((info, i) => (
              <div key={i} className="bg-gold/5 border border-gold/20 p-8 flex gap-5 group hover:bg-gold/10 transition-all">
                <div className="text-gold flex-shrink-0 group-hover:scale-110 transition-transform">{info.icon}</div>
                <div>
                  <h4 className="font-bold text-white mb-2">{info.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed whitespace-pre-line">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex-grow min-h-[300px] border border-gold/20 relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14511.456789012345!2d93.98765432109876!3d24.48765432109876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37492f1234567890%3A0x1234567890abcdef!2sKakching%2C%20Manipur!5e0!3m2!1sen!2sin!4v1234567890123" 
              className="w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-[100] bg-gold text-black px-8 py-4 font-bold text-sm border-l-4 border-red-800 shadow-2xl"
          >
            ✅ Booking Submitted! We'll confirm within 24 hrs.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-gold/20 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black">
                <Settings size={20} />
              </div>
              <div className="leading-none">
                <div className="font-display font-bold text-lg text-gold tracking-wide">Royal Enfield</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-[0.2em]">Kakching, Manipur</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Serving the riders of Kakching and Manipur with genuine motorcycles, expert service, and authentic spare parts since over a decade.
            </p>
            <div className="flex gap-4">
              {['f', 'in', '📸', '▶'].map((social, i) => (
                <a key={i} href="#" className="w-9 h-9 border border-gold/20 flex items-center justify-center text-gray-500 hover:border-gold hover:text-gold transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {[
            { title: 'Quick Links', links: ['Home', 'About Us', 'Motorcycles', 'Services', 'Gallery', 'Contact'] },
            { title: 'Services', links: ['General Servicing', 'Engine Repair', 'Electrical Work', 'Body & Paint', 'Tyres & Wheels', 'Genuine Parts'] },
            { title: 'Motorcycles', links: ['Bullet 350', 'Classic 350', 'Meteor 350', 'Himalayan 450', 'Interceptor 650', 'Continental GT 650'] },
          ].map((col, i) => (
            <div key={i}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-cream transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">© 2025 Royal Enfield Kakching. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-widest text-gray-600">An <span className="text-gold">Authorised Royal Enfield</span> Dealership · Kakching, Manipur</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [isPromoVisible, setIsPromoVisible] = useState(true);

  return (
    <div className="min-h-screen">
      {/* PROMO BANNER */}
      <AnimatePresence>
        {isPromoVisible && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gold py-3 px-[8%] flex justify-between items-center"
          >
            <span className="text-[13px] font-bold text-black tracking-wide">
              🏍️ Special Festival Offer: Free First Service + Accessories Worth ₹5,000 on All Models | Limited Period
            </span>
            <button onClick={() => setIsPromoVisible(false)} className="text-black hover:scale-110 transition-transform">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar isPromoVisible={isPromoVisible} />
      <Hero />
      <About />
      <Motorcycles />
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-[#111]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600" 
            alt="Royal Enfield" 
            className="w-full aspect-[3/4] object-cover border-2 border-gold/20"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3">Why Choose Us</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              The Royal Standard,<br />Right Here in Kakching
            </h2>
            <div className="gold-rule" />
            <div className="space-y-0">
              {[
                { title: 'Factory-Trained Mechanics', desc: 'Our service team undergoes continuous training at Royal Enfield\'s accredited centres, ensuring top-tier expertise.' },
                { title: '100% Genuine Parts', desc: 'We stock only authentic Royal Enfield spare parts and accessories — zero compromise on quality.' },
                { title: 'Transparent Pricing', desc: 'No hidden charges. Service estimates shared before work begins. Pay only for what you approve.' },
                { title: 'Quick Turnaround', desc: 'We value your time. Routine services completed within the same day. Express service available.' },
                { title: 'Easy Finance & EMI', desc: 'Hassle-free two-wheeler loans through leading banks with minimal paperwork and attractive rates.' },
              ].map((point, i) => (
                <div key={i} className="py-6 border-b border-gold/10 flex gap-6 group hover:pl-4 transition-all">
                  <div className="font-display text-3xl font-black text-gold/40 leading-none">0{i+1}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{point.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3">Testimonials</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">What Our Riders Say</h2>
          <div className="gold-rule mx-auto" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Ranjit Konsam', bike: 'Classic 350', text: 'Bought my Classic 350 from here last year. The team was incredibly helpful — no pressure, great advice on variants and colours.' },
            { name: 'Laishram Arun', bike: 'Himalayan 450', text: 'Got my Himalayan serviced here after a long tour. The mechanics diagnosed a minor issue I hadn\'t noticed and fixed it.' },
            { name: 'Thoibi Haobam', bike: 'Meteor 350', text: 'The accessories section is impressive! Got full touring setup — saddlebags, crash guard, and a windscreen — all genuine parts.' },
          ].map((testi, i) => (
            <div key={i} className="bg-[#111] p-10 text-left border border-gold/10 relative group hover:-translate-y-2 transition-all">
              <div className="font-display text-8xl text-gold/10 absolute top-2 left-6 leading-none select-none group-hover:text-gold/20 transition-colors">"</div>
              <div className="flex text-gold mb-6 relative z-10">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="font-serif text-lg italic text-cream/80 leading-relaxed mb-8 relative z-10">"{testi.text}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {testi.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{testi.name}</div>
                  <div className="text-[10px] text-gold uppercase tracking-widest">{testi.bike} | Kakching</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="section-padding bg-[#0a0a0a]">
        <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3">Gallery</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-12">Life at the Showroom</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800',
            'https://images.unsplash.com/photo-1615810283084-754637e19391?q=80&w=800',
            'https://images.unsplash.com/photo-1558981285-6f0c68243e5d?q=80&w=800',
            'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=800',
            'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800',
          ].map((img, i) => (
            <div key={i} className={`overflow-hidden cursor-pointer group relative ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <img 
                src={img} 
                alt="Gallery" 
                className="w-full h-full object-cover filter brightness-75 grayscale-[0.5] transition-all duration-500 group-hover:brightness-100 group-hover:grayscale-0 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
            </div>
          ))}
        </div>
      </section>

      <Booking />

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-gold text-[10px] uppercase tracking-[0.4em] mb-3">Get in Touch</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Visit Our Showroom</h2>
          <div className="gold-rule" />
          
          <div className="grid lg:grid-cols-2 gap-16 mt-12">
            <div className="space-y-10">
              {[
                { label: 'Address', val: 'Royal Enfield Kakching', sub: 'Main Road, Kakching, Manipur – 795103' },
                { label: 'Phone', val: '+91 98XXXXXX01', sub: '+91 70XXXXXX45 (Service Dept.)' },
                { label: 'Email', val: 'info@rekakching.in', sub: 'service@rekakching.in' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{item.label}</div>
                  <div className="text-2xl font-bold text-white">{item.val}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.sub}</div>
                </div>
              ))}
              
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">Working Hours</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { day: 'Mon – Fri', time: '9:00 – 18:00' },
                    { day: 'Saturday', time: '9:00 – 18:00' },
                    { day: 'Sunday', time: '10:00 – 14:00' },
                    { day: 'Holidays', time: 'Call Ahead' },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between p-3 bg-gold/5 border border-gold/10 text-xs">
                      <span className="text-gray-400">{h.day}</span>
                      <span className="text-gold font-bold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[400px] bg-charcoal border border-gold/20 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57422.63!2d93.98!3d24.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751c5c2a85f8cdf%3A0x1!2sKakching%2C+Manipur!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-none grayscale contrast-125"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
