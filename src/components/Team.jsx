import { useState } from "react";

export default function TeamSection() {
  const team = [
    {
      name: "Jared E. Wallace",
      role: "CEO & Co-Founder",
      img: "src/assets/team-img-1.png",
    },
    {
      name: "Jessica Johnson",
      role: "Co-Founder",
      img: "src/assets/team-img-2.png",
    },
    {
      name: "Trevor Noah",
      role: "Tech Lead",
      img: "src/assets/team-img-3.png",
    },
    {
      name: "Kate Winslet",
      role: "Marketing Lead",
      img: "src/assets/team-img-4.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % team.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? team.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
          The Team
        </h2>

        <p className="text-white/60 text-lg mb-16 max-w-xl mx-auto">
          Protected by a multi-level security architecture and is regularly audited to ensure all users are safe.
        </p>

        {/* Slider */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 text-white text-4xl hover:text-purple-500 transition"
          >
            ◀
          </button>

          {/* Card */}
          <div className="w-[300px]">
            <div className="rounded-3xl overflow-hidden border border-white/10">
              <img
                src={team[current].img}
                alt={team[current].name}
                className="w-full h-[400px] object-cover"
              />
            </div>

            <h4 className="text-white font-bold text-lg mt-6">
              {team[current].name}
            </h4>

            <p className="text-white/50 text-sm mb-3">
              {team[current].role}
            </p>

            <div className="flex justify-center gap-2 text-sm">
              <a href="#" className="text-purple-500">LinkedIn</a>
              <span className="text-white/30">|</span>
              <a href="#" className="text-orange-400">Twitter</a>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 text-white text-4xl hover:text-purple-500 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}