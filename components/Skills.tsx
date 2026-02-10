import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Skills: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check initial dark mode and listen for changes
        const checkDarkMode = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkDarkMode();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    checkDarkMode();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true
        });

        return () => observer.disconnect();
    }, []);

    const chartData = {
        labels: [
            'Problem Solving',
            'User Centered Design',
            'Adaptability',
            'Communication',
            'Critical Thinking',
            'Data Analysis',
            'Data Cleaning',
            'Data Collection',
            'Data Storytelling',
            'Data Development'
        ],
        datasets: [{
            label: 'Proficiency',
            data: [9, 8, 8, 7, 8, 9, 8, 7, 9, 8],
            backgroundColor: [
                'rgba(84, 101, 192, 0.7)',
                'rgba(84, 101, 192, 0.65)',
                'rgba(84, 101, 192, 0.6)',
                'rgba(84, 101, 192, 0.55)',
                'rgba(84, 101, 192, 0.7)',
                'rgba(84, 101, 192, 0.65)',
                'rgba(84, 101, 192, 0.6)',
                'rgba(84, 101, 192, 0.55)',
                'rgba(84, 101, 192, 0.7)',
                'rgba(84, 101, 192, 0.65)',
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            hoverBackgroundColor: '#3B82F6',
            hoverBorderColor: '#fff'
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(200, 200, 200, 0.3)'
                },
                grid: {
                    color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(200, 200, 200, 0.3)',
                    circular: true
                },
                ticks: {
                    display: false, // hide the numbers
                    stepSize: 2
                },
                pointLabels: {
                    display: true,
                    font: {
                        size: 10,
                        family: 'Inter'
                    },
                    color: isDark ? '#cbd5e1' : '#475569'
                },
                suggestedMin: 0,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: 12,
                cornerRadius: 8,
                titleFont: {
                    family: 'Inter',
                    size: 13
                },
                bodyFont: {
                    family: 'Inter',
                    size: 12
                }
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };

    const tools = [
        { name: 'Arc GIS', category: 'Geospatial', iconClass: 'fa-solid fa-earth-americas', colorClass: 'text-slate-600 dark:text-slate-300 group-hover:text-blue-600' },
        { name: 'D3.js', category: 'Visualization', customIcon: 'D3', colorClass: 'text-orange-500 group-hover:text-orange-600' },
        { name: 'Figma', category: 'Design', iconClass: 'fa-brands fa-figma', colorClass: 'text-slate-600 dark:text-slate-300 group-hover:text-purple-500' },
        { name: 'InDesign', category: 'Publishing', customIcon: 'Id', colorClass: 'text-pink-600 group-hover:text-pink-700' },
        { name: 'Power BI', category: 'Analytics', iconClass: 'fa-solid fa-chart-simple', colorClass: 'text-yellow-500 group-hover:text-yellow-600' },
        { name: 'Python', category: 'Development', iconClass: 'fa-brands fa-python', colorClass: 'text-slate-600 dark:text-slate-300 group-hover:text-blue-500' },
        { name: 'QGIS', category: 'Mapping', iconClass: 'fa-solid fa-leaf', colorClass: 'text-green-600 group-hover:text-green-700' },
        { name: 'R Studio', category: 'Statistics', customIcon: 'R', colorClass: 'text-blue-700 group-hover:text-blue-800' },
        { name: 'SQL', category: 'Database', iconClass: 'fa-solid fa-database', colorClass: 'text-slate-600 dark:text-slate-300 group-hover:text-cyan-500' },
        { name: 'Tableau', category: 'Dashboards', iconClass: 'material-icons-round', iconContent: 'hub', colorClass: 'text-indigo-500 group-hover:text-indigo-600' },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto px-6 py-20 relative">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl opacity-60 animate-float pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl opacity-60 animate-float-reverse pointer-events-none translate-x-1/2 translate-y-1/2"></div>

            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Expertise & Stack</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                    A visual breakdown of my technical proficiency in Data Science, Visualization, and Design.
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                {/* Left Column: Skills Polar Chart */}
                <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="flex items-center space-x-3 mb-8 self-start lg:self-center">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <span className="material-icons-round text-2xl">verified</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-widest uppercase text-slate-700 dark:text-slate-200">Skills</h2>
                    </div>

                    <div className="relative w-full max-w-md aspect-square bg-white dark:bg-card-dark rounded-full shadow-glow flex items-center justify-center p-4 lg:p-8 glass-card border border-white/50 dark:border-white/10 backdrop-blur-xl">
                        <PolarArea data={chartData} options={chartOptions as any} />
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-md text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                            <span>Core Competencies</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></span>
                            <span>Secondary Skills</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Tools Grid */}
                <div className="lg:col-span-7">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <span className="material-icons-round text-2xl">construction</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-widest uppercase text-slate-700 dark:text-slate-200">Tools</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {tools.map((tool, index) => (
                            <div
                                key={index}
                                className={`group glass-panel p-4 rounded-xl flex items-center space-x-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default bg-white dark:bg-card-dark border border-white/50 dark:border-white/10 backdrop-blur-md ${tool.name === 'Tableau' ? 'col-span-2 md:col-span-1 md:col-start-2' : ''}`}
                            >
                                <div className={`text-3xl transition-colors ${tool.colorClass} ${tool.customIcon ? 'font-bold flex items-center justify-center w-8 h-8' : ''}`}>
                                    {tool.iconContent ? (
                                        <span className={tool.iconClass}>{tool.iconContent}</span>
                                    ) : tool.customIcon ? (
                                        tool.customIcon === 'D3' ? (
                                            <span className="text-sm bg-orange-100 rounded w-full h-full flex items-center justify-center">D3</span>
                                        ) : (
                                            <span className="font-serif border border-pink-600 px-1 rounded text-lg font-bold">Id</span>
                                        )
                                    ) : tool.name === 'R Studio' ? (
                                        <span className="font-serif font-bold">R</span>
                                    ) : (
                                        <i className={tool.iconClass}></i>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-800 dark:text-white">{tool.name}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{tool.category}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
