// components/OurStory.js
import React from 'react';
import deborahImg from '../assets/DeborahNonso2025!.jpg';
import nonsoImg from '../assets/DeborahNonso2025!6.jpg';

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="w-full md:w-1/2">
            <div className="bg-amber-50 h-[35rem] rounded-lg flex items-center justify-center border border-amber-100 overflow-hidden">
              <img src={deborahImg} alt="Deborah" className="object-cover object-center w-full h-full" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-serif text-amber-600 mb-6">Deborah's Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We met in 2021 at Westfield. We just started off as normal colleagues in the same department with our boss and just casually gists once in a while. We started getting close and gisting more as our friendship grew stronger.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              I resigned and left the company and relocated back to Abuja while Nonso stayed back in the company. We still maintained contact and spoke once in a while and with time we started talking more and spending more hours on calls and enjoying our time together and I enjoyed talking to him.
            </p>
            <p className="text-gray-700 leading-relaxed">
              On my birthday in 2022, he made his feelings known to me which came as a surprise as we were just friends then and the distance was also a huge barrier but as fate will have it, we found our way to each other and spoke more and we decided to give it a try in 2023 and in 2024 he proposed and I said YES and here we are getting married.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed italic">
              It's been a roller coaster and I cannot wait to see what the future holds.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="bg-amber-50 h-[35rem] rounded-lg flex items-center justify-center border border-amber-100 overflow-hidden">
              <img src={nonsoImg} alt="Nonso" className="object-cover object-center w-full h-full" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-serif text-amber-600 mb-6">Nonso's Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We met in 2021 in Westfield Lagos Nigeria. Of course I was attracted at first sight but started liking Debby when we started talking as fate placed us in the same department. At first it was works discussions and progressed to other conversations we used to have once in a while and our friendship continue to blossomed.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              She resigned and relocated back to Abuja dec 2021 but we still talked once in a while. First quarter of 2022 had us talking more and with this my feelings for her got deeper and I finally made this feelings known to her on her birthday.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Lolz, of course she wasn't expecting that cause of the distance and what have you. We kept on talking till 2023 when we decided to give this a chance.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed italic">
              It's been a roller coaster but through all that I knew I wanted to marry her and spend forever with her, which all culminated with me proposing to her December of 2024 and here we are now, getting married and starting forever together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
