import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    { "id": 0, "name": "All News" },
    { "id": 1, "name": "Breaking News" },
    { "id": 2, "name": "Business" },
    { "id": 3, "name": "Technology" },
    { "id": 4, "name": "Health" },
    { "id": 5, "name": "Sports" },
    { "id": 6, "name": "Entertainment" },
    { "id": 7, "name": "Science" },
    { "id": 8, "name": "Politics" },
    { "id": 9, "name": "Education" },
    { "id": 10, "name": "Lifestyle" }
];

const BreakingNews = () => {
    return (
        <div className='max-w-7xl mx-auto flex items-center bg-[#f3f3f3] p-4 gap-5 rounded-sm'>
            {/* Latest Button */}
            <button className='bg-[#D72050] text-white px-6 py-2 font-semibold text-lg hover:bg-[#b51b43] transition-colors'>
                Latest
            </button>

            {/* Marquee Content */}
            <div className='flex-1 overflow-hidden'>
                <Marquee speed={70} gradient={false} pauseOnHover={true}>
                    {news.map((n) => (
                        <span key={n.id} className='text-[#403F3F] font-semibold text-lg mx-6'>
                            {n.name} <span className="ml-4">!</span> 
                        </span>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;