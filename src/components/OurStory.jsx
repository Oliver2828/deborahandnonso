// components/OurStory.js
import React from 'react';
import deborahImg from '../assets/Deborah1.jpg';
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
            <h3 className="text-2xl font-serif text-amber-600 mb-6">Debby's Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We met in 2021 at a company called Westfield in Lagos. We were colleagues in the same department and spoke occasionally. As time went by, we began to have interesting conversation and became work buddies.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nonso was a competent team mate and he assisted me when I needed any help with work. At the end of 2021, I resigned and moved to Abuja, while Nonso was still at Westfield. Despite being in Abuja, Nonso frequently called to ask about my welfare and he would subtly tell me how much he missed me.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We spoke regularly and our friendship blossom. On my birthday in 2022, Nonso expressed his admiration towards me and he stated his intentions of getting married to me. I didn't see the possibility of a relationship as distance was a major obstacle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nevertheless, Nonso was very optimistic and consistent about his intention and he wasn't going to despair. However, as destiny prevailed, our connection deepened and the possibility of a relationship became clearer.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed italic">
              In 2023, I decided to give the relationship a trial and then I realized it had the potential of developing into a lasting and fulfilling union. At the end of 2024, Nonso proposed and now we are getting married. It has been a beautiful experience and I'm eager to see the next phase of our lives.
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
              She resigned and relocated back to Abuja december 2021 but we still talked once in a while. First quarter of 2022 had us talking more and with this my feelings for her got deeper and I finally made this feelings known to her on her birthday.
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