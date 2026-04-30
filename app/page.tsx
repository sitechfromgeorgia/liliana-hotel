'use client';

import { useEffect, useState } from 'react';

// Unsplash image URLs - hotel and room photos
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80',
  standard: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  deluxe: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
  family: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80',
  luxury: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  beach: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
  pool: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  restaurant: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
};

export default function Home() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl">🌊</span>
              <span className="text-xl font-bold text-[#2E86AB]">ლილიანა</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#rooms" className="text-sm text-gray-600 hover:text-[#2E86AB] transition-colors font-medium">
                ოთახები
              </a>
              <a href="#gallery" className="text-sm text-gray-600 hover:text-[#2E86AB] transition-colors font-medium">
                გალერეა
              </a>
              <a href="#services" className="text-sm text-gray-600 hover:text-[#2E86AB] transition-colors font-medium">
                სერვისები
              </a>
              <a href="#location" className="text-sm text-gray-600 hover:text-[#2E86AB] transition-colors font-medium">
                მდებარეობა
              </a>
              <a href="#contact" className="text-sm text-gray-600 hover:text-[#2E86AB] transition-colors font-medium">
                კონტაქტი
              </a>
            </div>
            <a
              href="tel:+995568808093"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-[#2E86AB] text-white text-sm font-semibold rounded-full hover:bg-[#1B4965] transition-all hover:scale-105 hover:shadow-lg"
            >
              დაჯავშნე
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Photo Background */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${IMAGES.hero})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/80 text-sm sm:text-base uppercase tracking-[0.3em] mb-4">
              საოჯახო სასტუმრო ქობულეთში
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              სასტუმრო <span className="text-[#F5A623]">ლილიანა</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              თქვენი სახლი ზღვასთან — კომფორტი, სიმშვიდე და სტუმართმოყვარეობა
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a
              href="tel:+995568808093"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F5A623] text-gray-900 font-bold rounded-full hover:bg-[#e09513] transition-all hover:scale-105 hover:shadow-xl"
            >
              📞 დარეკე ახლავე
            </a>
            <a
              href="https://wa.me/995568808093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Feature badges */}
          <div className={`mt-16 flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: '📶', label: 'უფასო WiFi' },
              { icon: '🚗', label: 'უფასო პარკინგი' },
              { icon: '❄️', label: 'კონდიციონერი' },
              { icon: '🌊', label: 'ზღვასთან 5 წთ' },
            ].map((badge, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full text-white border border-white/20"
              >
                <span className="text-xl">{badge.icon}</span>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-[#2E86AB] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '14+', label: 'კომფორტული ოთახი' },
              { num: '60+', label: 'საწოლი ადგილი' },
              { num: '5წთ', label: 'ზღვამდე სავალი' },
              { num: '₾50-150', label: 'ფასი ღამეში' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                  {stat.num}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section with Real Photos */}
      <section id="rooms" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2E86AB] text-sm uppercase tracking-widest mb-3">ჩვენი ოთახები</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              აირჩიეთ თქვენი <span className="text-[#F5A623]">ოთახი</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ყველა ოთახი აღჭურვილია თანამედროვე კომფორტით — WiFi, TV, კონდიციონერი, მინი მაცივარი
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'სტანდარტული ოთახი',
                desc: 'ერთი ორსაწოლიანი საწოლი ან ორი ცალსაწოლიანი, სველი წერტილი, TV, კონდიციონერი',
                price: '₾50-80',
                image: IMAGES.standard,
                features: ['1-2 სტუმარი', 'WiFi', 'TV', 'AC', 'სველი წერტილი'],
              },
              {
                name: 'ნახევრად ლუქსი',
                desc: 'გაზირებული სივრცე, ბალკონი, მინი მაცივარი, უფასო პარკინგი',
                price: '₾80-120',
                image: IMAGES.deluxe,
                features: ['2-3 სტუმარი', 'ბალკონი', 'მინი მაცივარი', 'WiFi', 'AC'],
              },
              {
                name: 'ოჯახური ნომერი',
                desc: 'სამი საწოლი, საბავშვო სივრცე, დიდი აბაზანა, პარკინგი',
                price: '₾100-150',
                image: IMAGES.family,
                features: ['3-4 სტუმარი', 'ოჯახური', 'დიდი აბაზანა', 'WiFi', 'AC'],
              },
              {
                name: 'ლუქსი',
                desc: 'პანორამული ხედი, ჯაკუზი, მინი ბარი, VIP მომსახურება',
                price: '₾120-150',
                image: IMAGES.luxury,
                features: ['2 სტუმარი', 'ჯაკუზი', 'VIP', 'WiFi', 'AC'],
              },
            ].map((room, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Room Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#F5A623] text-gray-900 font-bold px-4 py-2 rounded-full">
                    {room.price}
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{room.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-[#2E86AB]/10 text-[#2E86AB] text-xs font-medium rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="tel:+995568808093"
                    className="block w-full text-center py-4 bg-[#2E86AB] text-white font-semibold rounded-xl hover:bg-[#1B4965] transition-colors"
                  >
                    დაჯავშნე ახლა
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2E86AB] text-sm uppercase tracking-widest mb-3">გალერეა</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ჩვენი <span className="text-[#F5A623]">სასტუმრო</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              დაათვალიერეთ ჩვენი სასტუმროს ტერიტორია, ოთახები და სერვისები
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: IMAGES.hero, title: 'სასტუმროს ლობი' },
              { img: IMAGES.pool, title: 'აუზი' },
              { img: IMAGES.beach, title: 'ზღვა' },
              { img: IMAGES.restaurant, title: 'რესტორანი' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white font-semibold">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#2E86AB] text-sm uppercase tracking-widest mb-3">სერვისები</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              რას <span className="text-[#F5A623]">გთავაზობთ</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ყველაფერი საჭირო თქვენი კომფორტული დასვენებისთვის
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📶', title: 'უფასო WiFi', desc: 'სწრაფი ინტერნეტი ყველა ოთახში' },
              { icon: '🚗', title: 'უფასო პარკინგი', desc: 'დიდი პარკინგი სტუმრებისთვის' },
              { icon: '❄️', title: 'კონდიციონერი', desc: 'გაგრილება ცხელ ზაფხულში' },
              { icon: '📺', title: 'TV', desc: 'თანამედროვე ტელევიზორები' },
              { icon: '🧊', title: 'მაცივარი', desc: 'მინი მაცივარი ყველა ოთახში' },
              { icon: '🌊', title: 'ზღვასთან ახლოს', desc: 'ზღვამდე მხოლოდ 5 წუთი სავალზე' },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-[#2E86AB]/10 rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:bg-[#2E86AB] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#2E86AB] text-sm uppercase tracking-widest mb-3">მდებარეობა</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                სად <span className="text-[#F5A623]">გვიპოვოთ</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                სასტუმრო ლილიანა მდებარეობს ქობულეთის ცენტრში, თამარ მეფის ქუჩაზე. 
                ზღვამდე მხოლოდ 5 წუთი სავალზე. ახლოს არის მაღაზიები, კაფეები და რესტორნები.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: '📍', label: 'მისამართი', value: 'თამარ მეფის ქ. 54, ქობულეთი' },
                  { icon: '📞', label: 'ტელეფონი', value: '(+995) 568 80 80 93' },
                  { icon: '🌊', label: 'ზღვამდე', value: '5 წუთი სავალზე' },
                  { icon: '🏪', label: 'მაღაზია', value: '2 წუთში' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#2E86AB]/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      <div className="font-semibold text-gray-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2980.0!2d41.7755!3d41.8103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ4JzM3LjEiTiA0McKwNDYnMzEuOCJF!5e0!3m2!1ska!2sge!4v1"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="სასტუმრო ლილიანა — მდებარეობა"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-[#2E86AB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white/80 text-sm uppercase tracking-widest mb-3">შეფასებები</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              რას ამბობენ <span className="text-[#F5A623]">სტუმრები</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'ნინო კ.',
                text: 'ძალიან მყუდრო და სუფთა ოთახები. მასპინძლები ძალიან სტუმართმოყვარეები არიან. ზღვასთან ახლოსაა, ყველაფერი საჭირო ახლოს.',
                rating: 5,
              },
              {
                name: 'გიორგი მ.',
                text: 'ოჯახით მოვედით და ძალიან კმაყოფილები დავრჩით. პარკინგი დიდია, WiFi სწრაფია, კონდიციონერი მუშაობს იდეალურად.',
                rating: 5,
              },
              {
                name: 'თამარ ლ.',
                text: 'ქობულეთში საუკეთესო ადგილია დასვენებისთვის. ფასი და ხარისხი შესანიშნავია. აუცილებლად დავბრუნდებით!',
                rating: 5,
              },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-[#F5A623] text-xl">★</span>
                  ))}
                </div>
                <p className="text-white/90 italic mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                <div className="font-semibold text-white">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={IMAGES.beach} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            დაჯავშნე თქვენი ოთახი <span className="text-[#F5A623]">ახლავე!</span>
          </h2>
          <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
            სეზონი მალე დაიწყება — არ გააცდინე შესაძლებლობა! დაგვიკავშირდი WhatsApp-ით ან ტელეფონით.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+995568808093"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F5A623] text-gray-900 font-bold rounded-full hover:bg-[#e09513] transition-all hover:scale-105 hover:shadow-xl"
            >
              📞 დარეკე: (+995) 568 80 80 93
            </a>
            <a
              href="https://wa.me/995568808093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/20 transition-all border border-white/30"
            >
              💬 WhatsApp-ში მოგვწერე
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2E86AB] text-sm uppercase tracking-widest mb-3">კონტაქტი</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              დაგვიკავშირდი
            </h2>
            <p className="text-gray-600">
              დაგვიკავშირდი ნებისმიერ დროს — ჩვენ მზად ვართ დაგეხმაროთ!
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2E86AB]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  📞
                </div>
                <div className="text-sm text-gray-500 mb-1">ტელეფონი</div>
                <a href="tel:+995568808093" className="font-semibold text-[#2E86AB] hover:underline text-lg">
                  (+995) 568 80 80 93
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2E86AB]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  📍
                </div>
                <div className="text-sm text-gray-500 mb-1">მისამართი</div>
                <div className="font-semibold text-gray-900">
                  თამარ მეფის ქ. 54<br />ქობულეთი, აჭარა
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#27AE60]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  💬
                </div>
                <div className="text-sm text-gray-500 mb-1">WhatsApp</div>
                <a
                  href="https://wa.me/995568808093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#27AE60] hover:underline text-lg"
                >
                  (+995) 568 80 80 93
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🌊</span>
                <span className="text-2xl font-bold">სასტუმრო ლილიანა</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                საოჯახო სასტუმრო ქობულეთში. თქვენი სახლი ზღვასთან — კომფორტი, 
                სიმშვიდე და სტუმართმოყვარეობა. 14 ოთახი, 60 საწოლი, უფასო WiFi და პარკინგი.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">სწრაფი ბმულები</h4>
              <div className="space-y-3">
                <a href="#rooms" className="block text-gray-400 hover:text-white transition-colors">ოთახები</a>
                <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors">გალერეა</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">სერვისები</a>
                <a href="#location" className="block text-gray-400 hover:text-white transition-colors">მდებარეობა</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">კონტაქტი</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">დაგვიკავშირდი</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>(+995) 568 80 80 93</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>თამარ მეფის ქ. 54, ქობულეთი</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} სასტუმრო ლილიანა. ყველა უფლება დაცულია.
            </p>
            <p className="text-gray-500 text-sm">
              შექმნილია <span className="text-[#F5A623]">SiTech</span>-ის მიერ ❤️
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
