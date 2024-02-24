import React from 'react';

const DataCard = ({ internshipType, programmingLanguage, date, jobTitle, company, jobCategory, logoUrl, jobUrl }) => {
    return (
        <div className="animate-pulse w-full flex flex-col justify-center items-start h-auto gap-3 p-6 border-gray-500 rounded-xl bg-gray-50 hover:cursor-pointer hover:bg-gray-100 hover:border-gray-600 hover:shadow-lg transition-all duration-500 capitalize">
            <a href={jobUrl}>
                <div className="flex gap-3 self-stretch items-center justify-between flex-wrap">
                    <div className="flex gap-2 items-center flex-wrap">
                        <p className="text-sm text-gray-600 capitalize">{internshipType}</p>
                        <div className="w-[1px] h-3 bg-gray-400"></div>
                        <p className="text-sm text-gray-600">{programmingLanguage}</p>
                        <div className="w-[1px] h-3 bg-gray-400"></div>
                        <p className="text-sm text-gray-600">{date}</p>
                    </div>
                </div>
                <div className="flex py-2 gap-3 self-stretch items-start">
                    <span className="relative flex shrink-0 overflow-hidden w-12 h-12 rounded-full">
                        <img className="aspect-square h-full w-full object-cover" alt={jobTitle} width="48" height="48" src={logoUrl} />
                    </span>
                    <div className="w-full flex flex-col items-start gap-1 flex-wrap">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-lg line-clamp-1">{jobTitle}</p>
                        </div>
                        <div className="w-full flex gap-3 justify-between items-stretch flex-wrap">
                            <div className="flex gap-2 items-center">
                                <p className="text-sm text-gray-600">{company}</p>
                                <div className="w-[1px] h-3 bg-gray-400"></div>
                                <p className="text-sm text-gray-600 line-clamp-1">{jobCategory}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default DataCard;
