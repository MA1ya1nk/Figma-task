import React, { useRef } from "react";

export default function StoriesSection() {
  const scrollRef = useRef(null);

  const stories = [
    {
      title: "Celsius will compensate consumers with a new token",
      desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
      img: "/assets/story/first.png",
      tag: "Product Update"
    },
    {
      title: "Celsius will compensate consumers with a new token",
      desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
      img: "/assets/story/second.png",
      tag: "Security"
    },
    {
      title: "Celsius will compensate consumers with a new token",
      desc: "Celsius, a defunct crypto lending company, will likely release a new token aimed at reimbursing creditors...",
      img: "/assets/story/third.png",
      tag: "Education"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-black overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* Header Section: Centered on mobile, Left-aligned on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl flex flex-col items-center md:items-start">
            <h2 
              className="our-stories-heading text-white mb-4 tracking-[0px]"
              style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
            >
              Our Stories
            </h2>
            <p 
              className="our-stories-subheading text-white/60 tracking-[0px]"
              style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
            >
              The new culture of money is making headlines. Check out our latest blog posts to find out more.
            </p>
          </div>
          
          <button className="hidden md:block text-white text-lg border border-white/20 px-8 py-3 rounded-2xl hover:bg-white/5 transition">
            More stories
          </button>
        </div>

        {/* Stories Grid */}
        <div 
          ref={scrollRef}
          className="flex flex-row md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-6 md:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="flex-none w-[85%] md:w-full snap-center group cursor-pointer"
            >
              <div className="relative aspect-[1.2/1] rounded-[30px] overflow-hidden mb-6 border border-white/5 bg-[#121214]">
                <img 
                  src={story.img} 
                  alt={story.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=Story"; }}
                />
              </div>

              <div className="text-left">
                <h3 
                  className="text-white text-[26px] font-medium leading-[1.2] tracking-[0px] mb-3 group-hover:text-white/80 transition-colors"
                  style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
                >
                  {story.title}
                </h3>
                
                <p 
                  className="text-white/40 text-[20px] font-normal leading-[1.2] tracking-[0px]"
                  style={{ fontFamily: "'Clash Grotesk Display', sans-serif" }}
                >
                  {story.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <button className="text-white font-semibold bg-white/5 border border-white/10 px-8 py-3 rounded-xl w-full">
            More stories
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        /* Mobile Typography (matching Figma) */
        @media (max-width: 767px) {
          .our-stories-heading {
            font-weight: 600;
            font-size: 32px;
            line-height: 120%;
            text-align: center;
          }
          .our-stories-subheading {
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            text-align: center;
          }
        }

        /* Desktop Typography (Keeping your original) */
        @media (min-width: 768px) {
          .our-stories-heading {
            font-weight: 600;
            font-size: 48px;
            line-height: 1.2;
          }
          .our-stories-subheading {
            font-size: 28px;
            line-height: 1.4;
          }
        }
      `}</style>
    </section>
  );
}