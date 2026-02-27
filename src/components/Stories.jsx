import React from 'react';
// Import your images here
// import blog1 from '../assets/blog1.png';
// import blog2 from '../assets/blog2.png';
// import blog3 from '../assets/blog3.png';

export default function StoriesSection() {
  const posts = [
    { 
      title: "Celsius will compensate consumers with a new token", 
      desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", 
      img: "src/assets/story/first.png" // Replace with actual images from Figma
    },
    { 
      title: "Celsius will compensate consumers with a new token", 
      desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", 
      img: "src/assets/story/second.png" 
    },
    { 
      title: "Celsius will compensate consumers with a new token", 
      desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", 
      img: "src/assets/story/third.png" 
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Our Stories
            </h2>
            <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-medium">
              The new culture of money is making headlines. Check out our latest blog posts to find out more.
            </p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 text-white hover:bg-white/5 transition-all text-sm font-semibold whitespace-nowrap">
            More stories 
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <div 
              key={i} 
              className="flex flex-col group cursor-pointer"
            >
              {/* Image Container with Exact Figma Rounding */}
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 border border-white/5 bg-[#0F0F11]">
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-2">
                <h4 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-4 group-hover:text-purple-400 transition-colors max-w-[580px]">
  {p.title}
</h4>
                <p className="text-white/50 text-lg leading-relaxed line-clamp-3">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}