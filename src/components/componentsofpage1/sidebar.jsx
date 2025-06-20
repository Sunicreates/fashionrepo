import React from 'react';
import { Home, Plus, Heart, Trophy, TrendingUp, X, Sparkles } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

function Sidebar({ mode, setMode, show }) {
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', color: 'from-pink-200 to-pink-300' },
    { id: 'create', icon: Plus, label: 'Create Post', color: 'from-pink-300 to-pink-400' },
    { id: 'feed', icon: Heart, label: 'My Feed', color: 'from-pink-200 to-pink-400' },
    { id: 'rank', icon: Trophy, label: 'Rankings', color: 'from-yellow-200 to-yellow-300' },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {show && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMode('home')}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 z-50
        glass-sidebar
        transform transition-all duration-300 ease-in-out
        ${show ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-gray-600" />
              <h2 className="text-lg font-light text-gray-700 tracking-wide">Navigation</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMode('home')}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className="space-y-4 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = mode === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setMode(item.id)}
                  className={`
                    w-full flex items-center space-x-4 px-6 py-4 rounded-2xl
                    transition-all duration-300 group relative overflow-hidden
                    ${isActive 
                      ? 'glass-bg shadow-lg border border-pink-200/30' 
                      : 'hover:glass-bg-alt hover:shadow-md'
                    }
                  `}
                >
                  <div className={`
                    p-3 rounded-xl transition-all duration-300 shadow-sm
                    ${isActive 
                      ? `bg-gradient-to-r ${item.color} text-gray-600 shadow-md scale-105` 
                      : 'bg-white/50 text-gray-500 group-hover:scale-105 group-hover:bg-white/70'
                    }
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`
                    font-medium transition-colors duration-300 tracking-wide
                    ${isActive 
                      ? 'text-gray-700' 
                      : 'text-gray-600 group-hover:text-gray-700'
                    }
                  `}>
                    {item.label}
                  </span>
                  {isActive && (
                    <div className="ml-auto flex items-center gap-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Trending Section */}
          <Card className="mt-auto p-6 glass-bg">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-600">
                <TrendingUp className="w-4 h-4 text-pink-400" />
                <span>Trending Now</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['#SummerVibes', '#OOTD', '#Vintage', '#Chic'].map((tag) => (
                  <span
                    key={tag}
                    className="tag text-xs px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-xs text-gray-500">
                Join the conversation and discover what's hot in fashion!
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Sidebar;