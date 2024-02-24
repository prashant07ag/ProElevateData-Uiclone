"use client"
import React, { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const leftTitle = document.querySelector('.typing-text');
        if (leftTitle) {
            leftTitle.style.width = leftTitle.scrollWidth + 'px';
        }
    }, []);

    return (
        <div className='mx-auto flex justify-between items-start min-h-[380px] flex-col gap-4 max-w-maxContentTab pt-8 pb-10 lg:max-w-maxScreen'>
            <div className="text-sm text-gray-600 hidden sm:flex justify-start items-center flex-wrap gap-1 z-[1]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-gray-600 stroke-2">
                    <path d="M5 10v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V10M3 12l9-9 9 9"></path>
                </svg>
                <a className="underline cursor-pointer" href="/">Home</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" className="w-5 h-5 stroke-gray-900 stroke-2">
                    <path d="m13.762 10.066.06.057a1.25 1.25 0 0 1 .24 1.364c-.07.158-.171.3-.298.417l-.003.002-5.214 4.883-.009.008a.414.414 0 0 1-.665-.477.4.4 0 0 1 .1-.132l.008-.008 5.16-4.83.39-.366-.39-.365-5.154-4.825a.418.418 0 0 1 .275-.71.41.41 0 0 1 .29.101z"></path>
                </svg>
                <p className="text-gray-900 font-medium">Job Boards</p>
            </div>
            <div className="flex justify-between items-start lg:items-center gap-1 flex-col px-10 lg:flex-row">
                <div className="flex flex-2 flex-col gap-8">
                    <p className="typing-text text-orange-500 font-bold text-3xl sm:text-4xl lg:text-5xl z-10">
                        Level Up Your Career:
                    </p>
                    <p className='typing-text text-[24px] font-bold'>Jobs, Internships &amp; Challenges Await!</p>
                    <p className="text-basefont-normal max-w-[600px]">Don‘t just dream it, achieve it! Join our vibrant community and embark on your career adventure today. Remember, the only limit is your ambition. So, what are you waiting for? Go claim your future!</p>
                </div>
                <div className="flex gap-3 flex-wrap justify-start md:justify-center items-center py-6 w-full lg:w-1/2 relative fade-in">
                    <img alt="Disney" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Disney.svg" style={{ color: 'transparent' }} />
                    <img alt="Notion" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Notion.svg" style={{ color: 'transparent' }} />
                    <img alt="Slack" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Slack.svg" style={{ color: 'transparent' }} />
                    <img alt="Trello" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Trello.svg" style={{ color: 'transparent' }} />
                    <img alt="Editor" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Editor.svg" style={{ color: 'transparent' }} />
                    <img alt="Webflow" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Webflow.svg" style={{ color: 'transparent' }} />
                    <img alt="Squarespace" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Squarespace.svg" style={{ color: 'transparent' }} />
                    <img alt="Asana" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Asana.svg" style={{ color: 'transparent' }} />
                    <img alt="Google" loading="lazy" width="156" height="54" decoding="async" data-nimg="1" className="w-[156px] h-[54px]" src="https://www.proelevate.in/assets/Jobs/BannerLogos/Google.svg" style={{ color: 'transparent' }} />
                </div>
            </div>
        </div>
    );
}

export default Hero;
