export function Footer() {
  return (
    <footer className="bg-sprite-dark pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-display text-sprite-green italic mb-6">
              SPRITE
            </h2>
            <p className="text-white/60 font-medium max-w-sm mb-8">
              Obey Your Thirst. The world's leading lemon-lime flavored soft
              drink.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholders */}
              {["Instagram", "TikTok", "Twitter", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-sprite-gray flex items-center justify-center text-white hover:bg-sprite-green hover:text-sprite-dark transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div
                    className="w-5 h-5 bg-current"
                    style={{
                      maskImage:
                        "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjwvc3ZnPg==)",
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6">
              Explore
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#products"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#campaigns"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Drops & Campaigns
                </a>
              </li>
              <li>
                <a
                  href="#culture"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#buy"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Where to Buy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-widest mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-sprite-green font-medium transition-colors"
                >
                  Do Not Sell My Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-medium">
            &copy; {new Date().getFullYear()} The Coca-Cola Company. All rights
            reserved.
          </p>
          <div className="text-white/40 text-sm font-medium">
            Designed for conversion.
          </div>
        </div>
      </div>
    </footer>
  );
}
