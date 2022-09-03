import React, { useState } from 'react';
import TestimonialModal from './TestimonialModal';
import morrette from './assets/morrette.jpeg';
import nick from './assets/nick.jpg';
import frei from './assets/frei.jpeg';
import cam from './assets/cam.jpeg';
import tanner from './assets/tanner.JPG';
import jess from './assets/jess.jpeg';
import ben from './assets/ben.jpeg';
import jake from './assets/jake.JPG';

const testimonials = [
    {
      id: 1,
      name: 'Matt Morrette',
      college: 'Centre',
      sport: 'Basketball',
      imageSrc: morrette,
      content: <p>In 8th grade, Mark completely transformed my jump shot to get backspin and I still credit him for that to this day. 
                  Probably couldn't have become good enough to play in college without that brutal summer of changing muscle memory. <br /> 
                  <br />
                  Looking back, it's not every day you find a coach that cares about Matt Morette the person more than Matt Morette the basketball player. 
                  At the time, all I cared about was basketball so this was somewhat frustrating. 
                  It wasn't until college where I learned just how important the qualities Mark teaches are. 
                  Mark helped me grow as a leader. He taught me how to communicate effectively, treat everybody with kindness/respect and that results require work. <br />
                  <br />
                  Regardless of what an athlete's goals are (playing in college, getting better for high school, etc.), 
                  there are skills and lessons to be learned from working with Mark. He made me a better person and I'm grateful for that. 
                  Mark is super talented and can help kids in a multitude of ways; it’s never a one size fits all approach with Mark. 
                  I always like that Mark could work me out in the weight room but also get on the court as well given his basketball past and knowledge. <br />
                  <br /> 
                  Mark also helped me with everything recovery (stretching, foam rolling, icing, etc.) which probably added a few extra years to my career. 
                  Still do all of those things to this day. Mark is the best when it comes to injury prevention!</p>
    },
    {
      id: 2,
      name: 'Tanner Chassman',
      college: 'IMG',
      sport: 'Soccer',
      imageSrc: tanner,
       content: <p>I started working with Mark going into my sophomore year of high school. I had just torn my ACL for the first time, so I wasn't able to play at the time. 
                  I was looking for someone who could train me to help make me physically stronger as an athlete, but also someone who had a deeper purpose and valued the psychological aspect of being an athlete.<br />
                  <br />
                  Mark is different from any other trainer or coach because he cares about his clients way more as people than as athletes. 
                  He is someone who asks questions and seeks to understand, rather than tell you how you should be or what you should do. 
                  He creates a safe yet challenging environment where you can be vulnerable, share your true self, and also grow & become better. 
                  He understands that in order to help his clients become great at what they do, he has to uncover the person inside, challenge the way you think, and guide you in the pursuit of your goals. 
                  When you spend time with Mark, it's easy to remove any walls or barriers because he is so genuine in the way he wants to help. 
                  He becomes way more than a trainer. At least for me, he has become a great mentor & dear friend that I will have for life.<br />
                  <br />
                  As a person, he has honestly helped me beyond words. I think Mark's greatest gift is his genuine curiosity. 
                  When we have conversations, he asks insightful questions that tend to always uncover thoughts and feelings I never could express by myself. 
                  He's helped me in understanding where my value lies as a person, what my strengths are, and how I can continue to live as my authentic self. 
                  He does it so effortlessly. He's been on the journey with me ever since we met. Through the ups and downs, he's always been there for me.<br />
                  <br />
                  If you are looking for someone who is far more than a trainer & looking to gain more than just muscle mass or faster run times, then Mark is the coach for you. 
                  He will be there for you along the journey, and help you way more than any other coach could. He truly understands the full scope of athlete development. Mind, Body, Soul.
                  </p>
    },
    {
      id: 3,
      name: 'Camille Scheyer',
      college: 'Yale',
      sport: 'Field Hockey',
      imageSrc: cam,
      content: <p>I started working with Mark in personal training once I decided I wanted to be recruited for college field hockey. 
                  We did just about everything, from weight training, endurance training, footwork, agility, cardio, and of course incorporating stick work where we could! And lots of sports psychology.<br />
                  <br />
                  Mark not only developed a comprehensive and effective physical training program for me, we had ongoing conversations during and after sessions about goals and any obstacles I was facing in my training, psychologically. 
                  He was always engaged and took careful note of what motivated and enabled me as an athlete. For example, I had anxiety around sprint work, so we sometimes incorporated stick & ball to make it less daunting, in addition to using other mental tools that we developed together to overcome my anxiety. 
                  He also took time to understand my sport (which I think at the time we started training, he did not know much about) in order to adapt our sessions accordingly. He always played my favorite music, too! 
                  Mark had a strong ability to make anything that I perceived as scary, less intimidating. I took all of what he instilled in me to my D1 athletic program where his assets were definitely missing. 
                  Mark is certainly the most thoughtful and personalized coach I have ever had. He really took time to understand me and what I needed to succeed.<br />
                  <br />
                  Athletically, Mark was the most effective in helping me overcome mental hurdles I faced in sports and my training. He did not allow me to just accept things as they were (which I would have likely done were it not for him), and instead helped me find alternate pathways to handle any adversity (anxiety, lack of confidence, etc.) 
                  I would face in sports. This really helped me have success and feel empowered to enjoy it along the way. Regarding personal growth, Mark always provoked interesting conversations about life goals, interests, values, and morals. 
                  He valued my insights and thoughts even at just 16 years old. I was not only able to use my sessions with Mark to improve as an athlete but also think about what I wanted for myself outside of sports, whether in interacting with others or pursuing outside hobbies/interests. 
                  Being able to focus on other things during training definitely helped translate into athletic success as I could go into our sessions feeling at ease as it eliminated excess pressure on the physical aspect of training. 
                  He was able to initiate these conversations in a very natural and unintimidating way that made my sessions so worthwhile, in addition to the athletic growth.<br />
                  <br />
                  Mark provides for each athlete what they uniquely require. He motivates, encourages, pushes, and inspires his athletes exactly as they need. 
                  The way Mark pushed me to be my best may not have been what someone else needed, and he will be incredibly in tune to that. 
                  As I mentioned, the tools Mark equipped me with in high school carried me through my collegiate athletic career. 
                  I will be forever grateful for the patience and interest Mark had in helping me grow, as well as the friendship and bond we formed through our sessions and conversations, as they have helped my development in all facets of my life. 
                  I look back on my time with Mark so fondly. I am extremely lucky to have had the opportunity to work with Mark for so many years and to have been able to stay in touch eight or so years later. 
                  I would recommend him to anyone looking to improve athletically, physically, mentally and emotionally!
              </p>

    },
    {
      id: 4,
      name: 'Ben Potter',
      college: 'Middlebury',
      sport: 'Soccer',
      imageSrc: ben,
      content: <p>Mark takes a holistic approach to athletic development - focusing on the mind, body, and spirit of each athlete to help them achieve their potential. 
                  By extending the focus beyond just the body, Mark is able to help his athletes achieve high performance in a way that is authentic to them.<br />
                  <br />
                  Mark was one of the first people in my life to ask the 'big' questions: Who am I? What are my uncompromising principles/values? 
                  Who do I want to be? He challenged me to think deeply and honestly about who I was and what was important to me, and our conversations have helped me to live with a level of intentionality and authenticity that I didn't have before.<br />
                  <br />
                  Mark has been an important role model for me; I admire the way he treats others and constantly strives to be a better version of himself. 
                  He has also been an impactful mentor - always listening intently, asking thoughtful questions, and inspiring me to live with gratitude and purpose. 
                  I cannot think of a better person to help guide young athletes as they strive to be their best.
              </p>
    },
    {
      id: 5,
      name: 'Nick Potter',
      college: 'Dickinson',
      sport: 'Soccer',
      imageSrc: nick,
      content: <p>I started working with Mark not only because I wanted to become stronger and more athletic, but I wanted to train my mind to become the best athlete I could be. 
                  Mark works to build a personal relationship with everyone he trains and pushes them to pursue greatness.<br />
                  <br />
                  Mark has helped me on the mental side of being an athlete by introducing new ideas to maximize my potential, such as meditation, the importance of sleep, and self talk. 
                  He has greatly influenced my development as an athlete and as a person and for that, I could not be more grateful.<br />
                  <br />
                  I would recommend Mark as an athlete development coach because he genuinely cares for the success of whoever he works with.
              </p>

    },
    {
      id: 6,
      name: 'Jessica Hourihane',
      college: 'Ohio State',
      sport: 'Field Hockey',
      imageSrc: jess,
      content: <p>I started training with Mark to improve my physical and mental ability on and off the field. 
                  He helped me in the weight room but also helped me to find mental balance for my sport and training.<br />
                  <br />
                  Mark focuses a lot on the mental side of sports, which I think is so important at a young age.
                  He helped me dig deeper into my mental game which allowed me to push myself much harder and farther in physical training. 
                  He also helped me differentiate my mindset in training and my mindset outside of training.<br />
                  <br />
                  He helps you figure out what works for you individually. Then he works with you to grow as a person and an athlete in your own way.
              </p>

    },

    {
      id: 7,
      name: 'Alex Freiburger',
      college: 'NSCD',
      sport: 'Basketball',
      imageSrc: frei,
      content: <p>I started working with Mark during the summer before my junior year of high school. 
                  I wanted to seriously upgrade my training regiment so that I could be ready for my first season of varsity basketball. 
                  We started with just specifically basketball centered workouts, but through our work together, we also have done strength and speed and agility training as well so I could be an overall better athlete on the court.<br />
                  <br />
                  Mark is the most positive person you will ever meet. 
                  Not only will you be pushed to be the best version of yourself, but he will be there motivating you as you go through it. 
                  When you are extremely tired and feel like you can not do one more rep or run one more set of sprints, Mark will continue to be positive and convince you that you are going to be able to do it. 
                  Mark also focuses so much on training your mind. 
                  It is impossible to be the best version of yourself if you do not train your mind, and Mark will always find a way to make sure training your mind is built into every one of your workouts.<br />
                  <br />
                  I would not be the athlete, or nearly the person I am today, without Mark. 
                  Mark has made a bigger impact on my life than any other coach or trainer I have ever had. 
                  He has played so many different roles for me, from JV basketball coach to Pursuing Gr8ness, to trainer, coach, and overall mentor, Mark has made a lasting impact on my life. 
                  Not only did I see incredible growth in my overall basketball ability and strength, but I noticed more that I was becoming the person I truly desired to be. 
                  Mark helped me work towards my goals as an athlete and a person and even when they changed over the course of a few years, he helped me recenter myself and find new goals to be made of new, more challenging circumstances. 
                  If you desire to be a leader on your team, an all-conference athlete, or just an overall more well-rounded person, working with Mark will be one of the best decisions you will ever make.<br />
                  <br />
                  If you desire a coach that will bring new and reinforced energy to every single workout, you need to work with Mark. 
                  Mark has trained athletes in countless different sports, and while I worked with him specifically for basketball, his constant energy and upbeat personality will be brought to whatever sport you may train with him for. 
                  Every workout will present you with new challenges and involve something a bit different than the last. 
                  He will push you outside your comfort zone as a person and athlete, but you will see the results pay massive dividends in the long run. 
                  Even if you do not see results immediately, when I reflect on my 3 plus years working with Mark, I saw strides in my athletic ability that I never even believed were possible before starting my work with him.
                  </p>
    },

    {
      id: 8,
      name: 'Jake Gordon',
      college: 'Lawrence',
      sport: 'Baseball',
      imageSrc: jake,
      content: <p>I worked with Mark to increase my speed and strength. He takes the time to tailor workouts and strength training for the individual and what they need to get out of training.<br />
                  <br />
                  Mark has helped me not only develop athletically but to develop as a person and in life.  
                  He genuinely cares about the people/athletes that he trains both athletically and personally.
              </p>

    },
  ]
  
  export default function Testimonials() {
    const [open, setOpen] = useState(false);
    const [curTestimonial, setCurTestimonial] = useState(testimonials[0]);

    return (
      <div id='testimonials' className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Testimonials</h2>
          <p className="my-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-600 sm:text-4xl">
            Testimonials
          </p>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} onClick={() => { setOpen(true); setCurTestimonial(testimonial)} } className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 hover:cursor-pointer">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.imageAlt}
                    aria-label={testimonial.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{testimonial.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{testimonial.sport}</p>
              </div>
            ))}
          </div>
        </div>


        <TestimonialModal className='justify-evenly' open={open} setOpen={setOpen} testimonial={curTestimonial}/>
      </div>
    )
  }
  