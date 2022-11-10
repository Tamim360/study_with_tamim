import React from 'react';

const Faq = () => {
    return (
        <div>
            <p className="w-max mx-auto text-xs rounded-full font-bold bg-violet-500/50 text-violet-800 p-1 px-2 ">FAQ's</p>
            <h2 className="text-2xl font-bold text-center mt-3">Frequently Asked Questions</h2>
            <div className="max-w-2xl mx-auto my-8">
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-slate-900 text-white">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
                What is Study with Tamim ?
            </div>
            <div className="collapse-content"> 
                <p><span className="font-bold">Study with Tamim</span> is a Online Course selling institution for the students of the University and college to learn Quran, Hadith, Fiqh and more with very low cost.</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-slate-900 text-white">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
                Our Speciality
            </div>
            <div className="collapse-content"> 
                <p>We provide this type of online learning that will make you reconsider your attitude towards this type of education.</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-slate-900 text-white">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
                Why Choose us ?
            </div>
            <div className="collapse-content"> 
                <p>We want you to study what you consider to be important. With our flexible course system we can make sure that our courses suit you perfectly. We can easily add or remove information in all our courses.</p>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Faq;