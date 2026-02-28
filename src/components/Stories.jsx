
// Import your images here
// import blog1 from '../assets/blog1.png';
// import blog2 from '../assets/blog2.png';
// import blog3 from '../assets/blog3.png';

// export default function StoriesSection() {
//   const posts = [
//     { 
//       title: "Celsius will compensate consumers with a new token", 
//       desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", 
//       img: "/assets/story/first.png" // Replace with actual images from Figma
//     },
//     { 
//       title: "Celsius will compensate consumers with a new token", 
//       desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", 
//       img: "/assets/story/second.png" 
//     },
//     { 
//       title: "Celsius will compensate consumers with a new token", 
//       desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...", 
//       img: "/assets/story/third.png" 
//     },
//   ];

//   return (
//     <section className="py-24 bg-black">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
//           <div className="max-w-3xl">
//             <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
//               Our Stories
//             </h2>
//             <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-medium">
//               The new culture of money is making headlines. Check out our latest blog posts to find out more.
//             </p>
//           </div>
//           <button className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-white/10 text-white hover:bg-white/5 transition-all text-sm font-semibold whitespace-nowrap">
//             More stories 
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="5" y1="12" x2="19" y2="12"></line>
//               <polyline points="12 5 19 12 12 19"></polyline>
//             </svg>
//           </button>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((p, i) => (
//             <div 
//               key={i} 
//               className="flex flex-col group cursor-pointer"
//             >
//               {/* Image Container with Exact Figma Rounding */}
//               <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 border border-white/5 bg-[#0F0F11]">
//                 <img 
//                   src={p.img} 
//                   alt={p.title}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               {/* Content */}
//               <div className="px-2">
//                 <h4 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-4 group-hover:text-purple-400 transition-colors max-w-[580px]">
//   {p.title}
// </h4>
//                 <p className="text-white/50 text-lg leading-relaxed line-clamp-3">
//                   {p.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }




import React, { useRef } from "react";

export default function StoriesSection() {
  const scrollRef = useRef(null);

  const stories = [
    {
      title: "Plena 2.0: The Future of Account Abstraction",
      date: "Feb 24, 2024",
      img: "/assets/story/first.png",
      tag: "Product Update"
    },
    {
      title: "How to Secure Your Crypto Assets in 2024",
      date: "Feb 20, 2024",
      img: "/assets/story/second.png",
      tag: "Security"
    },
    {
      title: "The Rise of Smart Wallet Technology",
      date: "Feb 15, 2024",
      img: "/assets/story/third.png",
      tag: "Education"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex justify-between items-end mb-10 md:mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Latest Stories</h2>
            <p className="text-white/60 text-lg md:text-xl">
              Stay updated with the latest news, product updates, and educational content from the Plena team.
            </p>
          </div>
          {/* Hidden on mobile, visible on desktop */}
          <button className="hidden md:block text-purple-400 font-semibold border border-purple-400/30 px-6 py-2 rounded-full hover:bg-purple-400/10 transition">
            View All
          </button>
        </div>

        {/* MOBILE: Horizontal Scroll with snap alignment
          DESKTOP: Standard 3-column grid
        */}
        <div 
          ref={scrollRef}
          className="flex flex-row md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-6 md:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="flex-none w-[85%] md:w-full snap-center group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] md:aspect-video rounded-[30px] overflow-hidden mb-6 border border-white/5 bg-[#121214]">
                <img 
                  src={story.img} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=Story+Image"; }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/50 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10">
                    {story.tag}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-left">
                <p className="text-white/40 text-sm mb-2">{story.date}</p>
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight group-hover:text-purple-400 transition-colors">
                  {story.title}
                </h3>
                
                {/* Mobile-only "Read More" link to match Figma feel */}
                <div className="mt-4 flex items-center gap-2 text-purple-400 font-medium md:hidden">
                  <span>Read Story</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-only View All Button (Centered) */}
        <div className="mt-8 flex justify-center md:hidden">
          <button className="text-white font-semibold bg-white/5 border border-white/10 px-8 py-3 rounded-full w-full">
            View All Stories
          </button>
        </div>

      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}