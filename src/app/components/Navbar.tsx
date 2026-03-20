import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';

interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  showTabs?: boolean;
}

export function Navbar({ activeTab = 'Dashboard', onTabChange, showTabs = true }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isSheet = location.pathname === '/sheet';

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-sm transition-all">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center gap-4 sm:gap-8 lg:gap-16">
              <h1
                onClick={() => navigate('/')}
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent tracking-tighter hover:scale-105 transition-transform duration-300 cursor-pointer z-50"
              >
                Luminous.
              </h1>

              {showTabs && !isSheet && (
                <div className="hidden md:flex gap-2">
                  {['Dashboard', 'Teams', 'Projects', 'Analytics'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => onTabChange?.(tab)}
                      className={`px-4 lg:px-5 py-2 lg:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === tab
                          ? 'bg-white shadow-md text-purple-700 scale-105 border border-white/60'
                          : 'text-gray-500 hover:text-gray-900 hover:bg-white/50'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-5">
              {/* Desktop Search */}
              <div className="hidden lg:block relative group">
                <input
                  type="text"
                  placeholder="Search tasks, files, members..."
                  className="pl-5 pr-10 py-2.5 bg-white/50 backdrop-blur-md rounded-full text-sm w-80 outline-none focus:bg-white transition-all duration-300 border border-white/60 focus:border-purple-300 focus:shadow-lg focus:shadow-purple-500/10 placeholder-gray-400 group-hover:bg-white/80"
                />
              </div>

              <div className="hidden sm:flex items-center gap-2">
                <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-lg sm:text-xl">🔔</span>
                </button>
                <button className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <span className="text-lg sm:text-xl">⚙️</span>
                </button>
              </div>

              <div className="hidden sm:block w-9 h-9 sm:w-10 sm:h-10 rounded-full cursor-pointer ring-2 ring-white shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-purple-500 to-teal-400 p-0.5">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800">
                  KW
                </div>
              </div>

              <button
                className="md:hidden p-2 rounded-full text-gray-600 hover:bg-white/50 transition-colors z-50 relative"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div className={`md:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-2xl transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-4 py-6 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-5 py-3 bg-gray-100/50 rounded-2xl text-sm outline-none focus:bg-gray-100 transition-colors border border-transparent focus:border-purple-200"
            />
            {showTabs && !isSheet && (
              <div className="grid grid-cols-2 gap-2">
                {['Dashboard', 'Teams', 'Projects', 'Analytics'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { onTabChange?.(tab); setMobileMenuOpen(false); }}
                    className={`px-4 py-3 rounded-2xl text-sm font-medium text-left transition-colors ${
                      activeTab === tab ? 'bg-purple-100/50 text-purple-700' : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <button className="flex-1 py-3 rounded-2xl bg-gray-50 text-gray-600 text-sm font-medium flex items-center justify-center gap-2">
                <span>🔔</span> Notifications
              </button>
              <button className="flex-1 py-3 rounded-2xl bg-gray-50 text-gray-600 text-sm font-medium flex items-center justify-center gap-2">
                <span>⚙️</span> Settings
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`h-screen w-full bg-black/20 fixed inset-0 z-40 transition-opacity duration-300 md:hidden pointer-events-none ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} />
    </>
  );
}
