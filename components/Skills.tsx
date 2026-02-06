import React from 'react';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            category: 'Machine Learning',
            skills: 'Scikit-learn, TensorFlow, CNNs, Genetic Algorithms, OpenCV',
            icon: 'brain' // material symbol
        },
        {
            category: 'Data Viz & BI',
            skills: 'Tableau, Power BI, DAX, Storytelling, Matplotlib, Seaborn',
            icon: 'monitoring'
        },
        {
            category: 'Languages',
            skills: 'Python, SQL, R, MATLAB, C++',
            icon: 'code'
        },
        {
            category: 'Data Engineering',
            skills: 'Pandas, NumPy, Data Cleaning, Spatial Indexing (KDTree)',
            icon: 'database'
        },
        {
            category: 'Cloud & Tools',
            skills: 'Google Cloud Platform (GCP), Firebase, Git, Jupyter',
            icon: 'cloud'
        }
    ];

    return (
        <section className="w-full max-w-[1200px] mx-auto px-4 py-20">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                    Technical Toolkit
                </h2>
                <div className="h-1 w-24 bg-accent-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((item, index) => (
                    <div
                        key={index}
                        className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-accent-primary/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="material-symbols-outlined text-3xl text-accent-primary group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </span>
                            <h3 className="text-xl font-bold text-white tracking-wide">
                                {item.category}
                            </h3>
                        </div>
                        <p className="text-text-muted leading-relaxed font-light">
                            {item.skills.split(', ').map((skill, i) => (
                                <span key={i} className="inline-block mr-2 mb-2 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-sm border border-white/5 transition-colors cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
