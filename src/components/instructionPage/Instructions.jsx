import { CircleAlert, CircleCheck, Clock3, GraduationCap, MonitorCheck, TriangleAlert, Trophy } from 'lucide-react';
import React from 'react';

function Instructions() {
    return (
        <div className="bg-[#0D1439] text-white min-h-screen w-full">
            <div className="px-10 md:px-[10%]">
                {/* HERO */}
                <header className="text-center pt-5">
                    <p className="text-4xl font-semibold">Advanced Algorithm Contest</p>
                    <div className="flex flex-wrap gap-4 text-base justify-center mt-3">
                        <p className="flex items-center gap-2"><Clock3 size={18} color="#2563EB" /> <span>Duration: 3 hours</span></p>
                        <p className="flex items-center gap-2"><Trophy size={18} color="#2563EB" /> <span>Difficulty: Advanced</span></p>
                        <p className="flex items-center gap-2"><GraduationCap size={18} color="#2563EB" /> <span>Points: 1500</span></p>
                    </div>
                </header>

                {/* ALERT-RED */}
                <aside className="w-full border border-red-500 rounded-lg mt-5 bg-red-600 bg-opacity-25 p-6">
                    <div className="flex items-center gap-3">
                        <TriangleAlert size={30} color="#c81414" />
                        <p className="text-xl font-semibold text-red-500">Important Contest Rules</p>
                    </div>
                    <ul className="list-disc list-inside  mt-3 space-y-2 pl-6">
                        <li>Ensure a stable internet connection throughout the contest.</li>
                        <li>Using additional browser tabs or windows is prohibited.</li>
                        <li>Any form of collaboration or cheating will result in disqualification.</li>
                        <li>Your submissions will be monitored for plagiarism.</li>
                    </ul>
                </aside>

                {/* Contest Format & Technical Requirements */}
                <div className="flex flex-col md:flex-row gap-5 mt-5">
                    <section className="w-full border border-black rounded-lg bg-[#121B38] p-6">
                        <p className="text-xl font-semibold mb-3">Contest Format</p>
                        <div className=" space-y-2">
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> 6 algorithmic problems of varying difficulty.</p>
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Problems are worth different points based on difficulty.</p>
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Partial points for partially correct solutions.</p>
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Time and space complexity will be considered.</p>
                        </div>
                    </section>

                    <section className="w-full border border-black  rounded-lg bg-[#121B38] p-6">
                        <p className="text-xl font-semibold mb-3 flex items-center gap-2"><MonitorCheck size={28} color="#2563EB" />Technical Requirement</p>
                        <div className=" space-y-2">
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} />Modern browser (Chrome 90+, Firefox 88+, Edge 90+).</p>
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Stable internet connection (minimum 1 Mbps).</p>
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Screen resolution: 1280×720 or higher.</p>
                            <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> JavaScript enabled in browser settings.</p>
                        </div>
                    </section>
                </div>
                <div className=" mt-5 flex">
                    <section className="w-full border border-black  rounded-lg bg-[#121B38] p-6 flex gap-[26%]">
                        <div className="">
                            <p className="text-xl font-semibold  flex gap-2 items-center"><CircleAlert size={25} color="#2563EB" />Rules and Guidelines</p>
                            <p className='mb-3 text-lg mt-2 font-normal'>Allowed</p>
                            <div className="  space-y-2">
                                <p className="flex items-center gap-2"><CircleCheck size={20} color="#23e754" strokeWidth={1.75} />Standard language documentation.</p>
                                <p className="flex items-center gap-2"><CircleCheck size={20} color="#23e754" strokeWidth={1.75} />Blank paper for rough work.</p>
                                <p className="flex items-center gap-2"><CircleCheck size={20} color="#23e754" strokeWidth={1.75} /> Code Re-submission Allowed.</p>
                            </div>
                        </div>

                        <div className="">
                            <p className='mb-3 text-lg font-normal mt-9'>Not Allowed</p>
                            <div className="  space-y-2">
                                <p className="flex items-center gap-2"><TriangleAlert size={20} color="#c81414" />Standard language documentation.</p>
                                <p className="flex items-center gap-2"><TriangleAlert size={20} color="#c81414" />Blank paper for rough work.</p>
                                <p className="flex items-center gap-2"><TriangleAlert size={20} color="#c81414" /> Code Re-submission Allowed.</p>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="w-full border mt-5 border-black  rounded-lg bg-[#121B38] p-6">
                    <p className="text-xl font-semibold mb-3 flex items-center gap-2"><MonitorCheck size={28} color="#2563EB" />Technical Requirement</p>
                    <div className=" space-y-2">
                        <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} />Modern browser (Chrome 90+, Firefox 88+, Edge 90+).</p>
                        <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Stable internet connection (minimum 1 Mbps).</p>
                        <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> Screen resolution: 1280×720 or higher.</p>
                        <p className="flex items-center gap-2"><CircleCheck size={20} color="#2563EB" strokeWidth={1.75} /> JavaScript enabled in browser settings.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Instructions;
