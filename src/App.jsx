            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Products</h2>
            <p className="text-slate-400 text-lg">Premium outputs from circular economy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600 rounded-xl p-8 hover:border-emerald-500/50 transition">
              <div className="text-5xl mb-4">ðŸ›¢ï¸</div>
              <h3 className="text-xl font-bold mb-3">Biodiesel Feedstock</h3>
              <p className="text-slate-400">High-quality recycled oil for biodiesel production</p>
            </div>
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600 rounded-xl p-8 hover:border-emerald-500/50 transition">
              <div className="text-5xl mb-4">ðŸ§¼</div>
              <h3 className="text-xl font-bold mb-3">Soap Production</h3>
              <p className="text-slate-400">Premium oils for specialty soap manufacturing</p>
            </div>
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600 rounded-xl p-8 hover:border-emerald-500/50 transition">
              <div className="text-5xl mb-4">âš™ï¸</div>
              <h3 className="text-xl font-bold mb-3">Industrial Lubricants</h3>
              <p className="text-slate-400">Eco-friendly alternatives to virgin oil lubricants</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-emerald-600/20 to-blue-600/20 border border-emerald-500/50 rounded-2xl p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Partner?</h2>
              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Join the REVOLIX Network and transform waste into valuable resources.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition transform hover:scale-105">
                  Get Started Today
                  <ArrowRight className="inline ml-2" size={20} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-600">
                <div>
                  <div className="text-emerald-400 font-bold text-lg">ðŸ“± +005 365 3000</div>
                  <div className="text-slate-400 text-sm mt-1">Phone</div>
                </div>
                <div>
                  <div className="text-blue-400 font-bold text-lg">ðŸ’¬ WhatsApp</div>
                  <div className="text-slate-400 text-sm mt-1">@whatsapp</div>
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-lg">ðŸ“§ Email</div>
                  <div className="text-slate-400 text-sm mt-1">contact@revolix.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="mb-4">Â© 2026 REVOLIX Energy. Transforming Waste Into Value.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-emerald-400 transition">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition">Terms</a>
            <a href="#" className="hover:text-emerald-400 transition">Sustainability</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
