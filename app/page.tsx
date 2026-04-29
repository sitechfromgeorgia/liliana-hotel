export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#A8D8EA]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-xl font-bold text-[#2E86AB]">
              ლილიანა
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#rooms" className="text-sm text-[#2D3436] hover:text-[#2E86AB] transition-colors">
                ოთახები
              </a>
              <a href="#services" className="text-sm text-[#2D3436] hover:text-[#2E86AB] transition-colors">
                სერვისები
              </a>
              <a href="#location" className="text-sm text-[#2D3436] hover:text-[#2E86AB] transition-colors">
                მდებარეობა
              </a>
              <a href="#contact" className="text-sm text-[#2D3436] hover:text-[#2E86AB] transition-colors">
                კონტაქტი
              </a>
            </div>
            <a
              href="tel:+995568808093"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#2E86AB] text-white text-sm font-semibold rounded-lg hover:bg-[#1B4965] transition-colors"
            >
              დაჯავშნე
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4965] via-[#2E86AB] to-[#A8D8EA]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in-up stagger-1 leading-tight">
            სასტუმრო ლილიანა
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 fade-in-up stagger-2">
            თქვენი სახლი ზღვასთან — ქობულეთი
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
            <a
              href="tel:+995568808093"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F5A623] text-[#2D3436] font-bold rounded-xl hover:bg-[#e09513] transition-all hover:scale-105"
            >
              დარეკე ახლავე
            </a>
            <a
              href="https://wa.me/995568808093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all border border-white/30"
            >
              <span className="mr-2">💬</span> WhatsApp
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
            {[
              { icon: '📶', label: 'WiFi' },
              { icon: '🚗', label: 'პარკინგი' },
              { icon: '❄️', label: 'კონდიციონერი' },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-white py-8 border-b border-[#A8D8EA]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: '14', label: 'ოთახი' },
              { num: '60', label: 'საწოლი' },
              { num: '5წთ', label: 'ზღვამდე' },
              { num: '₾50-150', label: 'ღამე' },
            ].map((stat, i) => (
              <div key={i} className="scroll-reveal">
                <div className="text-2xl sm:text-3xl font-bold text-[#2E86AB]">{stat.num}</div>
                <div className="text-sm text-[#2D3436]/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
              ჩვენი სერვისები
            </h2>
            <p className="text-[#2D3436]/70 max-w-2xl mx-auto">
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
                className="bg-white rounded-2xl p-6 md:p-8 card-shadow hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 scroll-reveal"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-[#2D3436] mb-2">{service.title}</h3>
                <p className="text-sm text-[#2D3436]/70">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
              ოთახები
            </h2>
            <p className="text-[#2D3436]/70 max-w-2xl mx-auto">
              კომფორტული და მყუდრო ოთახები თქვენი დასვენებისთვის
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'სტანდარტული ოთახი',
                desc: 'ერთი ორსაწოლიანი საწოლი ან ორი ცალსაწოლიანი, სველი წერტილი, TV, კონდიციონერი',
                price: '₾50-80',
                features: ['1-2 სტუმარი', 'WiFi', 'TV', 'AC'],
              },
              {
                name: 'ნახევრად ლუქსი',
                desc: 'გაზირებული სივრცე, ბალკონი, მინი მაცივარი, უფასო პარკინგი',
                price: '₾80-120',
                features: ['2-3 სტუმარი', 'ბალკონი', 'მინი მაცივარი', 'WiFi'],
              },
              {
                name: 'ოჯახური ნომერი',
                desc: 'სამი საწოლი, საბავშვო სივრცე, დიდი აბაზანა, პარკინგი',
                price: '₾100-150',
                features: ['3-4 სტუმარი', 'ოჯახური', 'დიდი აბაზანა', 'WiFi'],
              },
              {
                name: 'ლუქსი',
                desc: 'პანორამული ხედი, ჯაკუზი, მინი ბარი, VIP მომსახურება',
                price: '₾120-150',
                features: ['2 სტუმარი', 'ჯაკუზი', 'VIP', 'WiFi'],
              },
            ].map((room, i) => (
              <div
                key={i}
                className="bg-[#FDF6EC] rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 scroll-reveal"
              >
                <div className="h-48 bg-gradient-to-br from-[#A8D8EA] to-[#2E86AB] flex items-center justify-center">
                  <span className="text-6xl">🏨</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-[#2D3436]">{room.name}</h3>
                    <span className="text-xl font-bold text-[#F5A623]">{room.price}</span>
                  </div>
                  <p className="text-sm text-[#2D3436]/70 mb-4">{room.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-[#2E86AB]/10 text-[#2E86AB] text-xs rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <a
                    href="tel:+995568808093"
                    className="block w-full text-center py-3 bg-[#2E86AB] text-white font-semibold rounded-xl hover:bg-[#1B4965] transition-colors"
                  >
                    დაჯავშნე
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-reveal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3436] mb-6">
                მდებარეობა
              </h2>
              <p className="text-[#2D3436]/70 mb-6">
                სასტუმრო ლილიანა მდებარეობს ქობულეთის ცენტრში, თამარ მეფის ქუჩაზე. 
                ზღვამდე მხოლოდ 5 წუთი სავალზე. ახლოს არის მაღაზიები, კაფეები და რესტორნები.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '📍', label: 'მისამართი', value: 'თამარ მეფის ქ. 54, ქობულეთი' },
                  { icon: '📞', label: 'ტელეფონი', value: '(+995) 568 80 80 93' },
                  { icon: '🌊', label: 'ზღვამდე', value: '5 წუთი სავალზე' },
                  { icon: '🏪', label: 'მაღაზია', value: '2 წუთში' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="text-sm text-[#2D3436]/60">{item.label}</div>
                      <div className="font-semibold text-[#2D3436]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-[#A8D8EA] scroll-reveal">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.0!2d41.82!3d41.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQ5JzEyLjAiTiA0McKwNDknMTIuMCJF!5e0!3m2!1ska!2sge!4v1"
                width="100%"
                height="400"
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
              სტუმრების შეფასებები
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="bg-[#FDF6EC] rounded-2xl p-6 border-l-4 border-[#F5A623] scroll-reveal"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-[#FFD93D] text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#2D3436]/80 italic mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="font-semibold text-[#2D3436]">— {review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#2E86AB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            დაჯავშნე თქვენი ოთახი ახლავე!
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            სეზონი მალე დაიწყება — არ გააცდინე შესაძლებლობა! დაგვიკავშირდი WhatsApp-ით ან ტელეფონით.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+995568808093"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F5A623] text-[#2D3436] font-bold rounded-xl hover:bg-[#e09513] transition-all hover:scale-105"
            >
              📞 დარეკე: (+995) 568 80 80 93
            </a>
            <a
              href="https://wa.me/995568808093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white font-semibold rounded-xl hover:bg-white/30 transition-all border border-white/30 pulse-animation"
            >
              💬 WhatsApp-ში მოგვწერე
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#FDF6EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
              კონტაქტი
            </h2>
            <p className="text-[#2D3436]/70">
              დაგვიკავშირდი ნებისმიერ დროს — ჩვენ მზად ვართ დაგეხმაროთ!
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 card-shadow max-w-xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2E86AB]/10 rounded-full flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <div className="text-sm text-[#2D3436]/60">ტელეფონი</div>
                  <a href="tel:+995568808093" className="font-semibold text-[#2E86AB] hover:underline">
                    (+995) 568 80 80 93
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2E86AB]/10 rounded-full flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <div className="text-sm text-[#2D3436]/60">მისამართი</div>
                  <div className="font-semibold text-[#2D3436]">თამარ მეფის ქ. 54, ქობულეთი</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2E86AB]/10 rounded-full flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <div className="text-sm text-[#2D3436]/60">WhatsApp</div>
                  <a
                    href="https://wa.me/995568808093"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#27AE60] hover:underline"
                  >
                    (+995) 568 80 80 93
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4965] text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">სასტუმრო ლილიანა</h3>
              <p className="text-white/70 text-sm">
                საოჯახო სასტუმრო ქობულეთში. თქვენი სახლი ზღვასთან — კომფორტი, სიმშვიდე და სტუმართმოყვარეობა.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">სწრაფი ბმულები</h4>
              <div className="space-y-2 text-sm">
                <a href="#rooms" className="block text-white/70 hover:text-white transition-colors">ოთახები</a>
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">სერვისები</a>
                <a href="#location" className="block text-white/70 hover:text-white transition-colors">მდებარეობა</a>
                <a href="#contact" className="block text-white/70 hover:text-white transition-colors">კონტაქტი</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">დაგვიკავშირდი</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>📞 (+995) 568 80 80 93</div>
                <div>📍 თამარ მეფის ქ. 54, ქობულეთი</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2025 სასტუმრო ლილიანა | შექმნილია SiTech-ის მიერ</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
