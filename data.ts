import { Project } from './types';
import ishkodeImg from './Images/Forest_Region_overay.png';
import ferImg from './Images/Face_stucture.png';
import ferHistImg from './Images/Face_histogram.png';

import gameConsoleImg from './Images/Game_console.png';
import ridgePlotGif from './Images/Ridge_plot.gif';
import forestFireGif from './Images/Forest_fires.gif';

// Supply Risk Monitor Images
import annualCollision from './Images/Supply_risk_monitor/Annual Collision Trend.png';
import weeklyCollision from './Images/Supply_risk_monitor/Weekly Collision Pattern.png';
import demoHist from './Images/Supply_risk_monitor/demographic_histogram.png';
import heatmap from './Images/Supply_risk_monitor/heatmap.png';
import seasonalChart from './Images/Supply_risk_monitor/seasonal_chart.png';
import severityStacked from './Images/Supply_risk_monitor/severity_stacked_bar.png';
import tSeasonalChart from './Images/Supply_risk_monitor/t_seasonal_chart.png';
import torontoAnnual from './Images/Supply_risk_monitor/toronto_annual_trend.png';
import torontoHex from './Images/Supply_risk_monitor/toronto_hexbin_density.png';
import torontoHourly from './Images/Supply_risk_monitor/toronto_hourly_dual_axis.png';
import torontoSeverity from './Images/Supply_risk_monitor/toronto_severity_pie.png';
import torontoVuln from './Images/Supply_risk_monitor/toronto_vulnerability_index.png';
import torontoWeekly from './Images/Supply_risk_monitor/toronto_weekly_pattern.png';
import trendChart from './Images/Supply_risk_monitor/trend_chart.png';
import violinPlot from './Images/Supply_risk_monitor/violin_plot.png';
import dashboardImg from './Images/Supply_risk_monitor/Dashboard.png';

// Colour Separation Images
import csImg1 from './Images/Colour Separation Using Evolutionary Algorithms For Forensic Images/image_2.png';
import csImg2 from './Images/Colour Separation Using Evolutionary Algorithms For Forensic Images/image_3.png';
import csImg3 from './Images/Colour Separation Using Evolutionary Algorithms For Forensic Images/Image_4.png';
import csImg4 from './Images/Colour Separation Using Evolutionary Algorithms For Forensic Images/image.png';

// Superstore Analytics Images
import ssImg1 from './Images/Superstore/First_dashboard.png';
import ssImg2 from './Images/Superstore/Second_dashboard.png';
import ssImg3 from './Images/Superstore/third_dashboard.png';
// Helper for icons (using devicon.dev for consistent high-quality icons)
const icons = {
  d3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  r: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
  tensorflow: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  mapbox: 'https://img.icons8.com/ios-filled/50/ffffff/map-marker.png', // Fallback/Generic
  node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  pandas: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
};

export const PROJECTS: Project[] = [
  // -------------------------------------------------------------
  // MACHINE LEARNING Projects
  // -------------------------------------------------------------
  {
    id: '1',
    title: 'Ishkode - Evolutionary Wildfire Prediction',
    category: 'PYTHON / GENETIC ALGORITHMS',
    filterCategory: 'MACHINE LEARNING',
    image: ishkodeImg,
    overview: 'Optimizing feature selection for detecting "Mega-Fire" events.',
    detailedDescription: 'A research initiative proposing a novel Genetic Algorithm (GA) to optimize feature selection for detecting "Mega-Fire" events in the Cariboo region. It implements KDTree spatial indexing to merge satellite fire perimeters with ERA5 weather data and moves beyond standard classification to handle high-imbalance datasets.',
    gallery: [ishkodeImg, forestFireGif],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'Scikit-Learn', icon: icons.python },
      { name: 'Genetic Algos', icon: 'https://img.icons8.com/ios-filled/50/ffffff/dna-helix.png' }
    ],
    repoUrl: 'https://github.com/hit-rajput/forest-fire-prediction'
  },
  {
    id: '2',
    title: 'Hybrid Facial Emotion Recognition (FER)',
    category: 'TENSORFLOW / OPENCV',
    filterCategory: 'MACHINE LEARNING',
    image: ferImg,
    overview: 'Classifying 7 distinct human emotions with superior robustness.',
    detailedDescription: 'A hybrid computer vision system classifying 7 distinct human emotions with superior robustness to lighting changes. Integrated CNNs with manual feature descriptors (HOG + SIFT) to stabilize learning curves, outperforming standard CNN baselines on the CK+ dataset.',
    gallery: [ferImg, ferHistImg],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'TensorFlow', icon: icons.tensorflow },
      { name: 'OpenCV', icon: 'https://img.icons8.com/color/48/opencv.png' },
      { name: 'MATLAB', icon: 'https://img.icons8.com/fluency/48/matlab.png' }
    ],
    repoUrl: 'https://github.com/hit-rajput/sentiment_analysis'
  },
  {
    id: '9',
    title: 'Colour Separation Using Evolutionary Algorithms',
    category: 'MACHINE LEARNING / AI',
    filterCategory: 'MACHINE LEARNING',
    image: csImg4,
    overview: 'Innovative forensic image analysis using evolutionary algorithms for color separation.',
    detailedDescription: 'This project presents an innovative approach to forensic image analysis, focusing on color separation in complex images. By integrating Interactive Differential Evolution (IDE) with the color separation process, it allows human operators to guide optimization based on visual judgment. This enhances the clarity of visual information crucial in legal proceedings.',
    gallery: [csImg4, csImg1, csImg2, csImg3],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'Genetic Algos', icon: 'https://img.icons8.com/ios-filled/50/ffffff/dna-helix.png' }
    ],
    repoUrl: 'https://github.com/Hit-rajput/Project-Atisan'
  },

  // -------------------------------------------------------------
  // DATA VISUALIZATION Projects
  // User Requested Order: 
  // 1. Canadian Forest Fire Analytics
  // 2. Global Gaming Market Analysis (1980-2016)
  // 3. Superstore Sales & Operational Analytics
  // 4. Supply Risk Monitor: Predictive Blood Demand & Supply Forecasting
  // 5. Global Console Game Sales Intelligence
  // -------------------------------------------------------------
  {
    id: '3',
    title: 'Canadian Forest Fire Analytics',
    category: 'TABLEAU / GEO-ANALYSIS',
    filterCategory: 'DATA VISUALIZATION',
    image: forestFireGif,
    overview: 'Comprehensive data story identifying trends from 10+ years of data.',
    detailedDescription: 'Engineered an animation-based geospatial map that visualizes the velocity and density of fire spread throughout the year. Correlated lightning-caused fires with higher intensity/area burned compared to human-caused fires, influencing resource allocation strategies.',
    gallery: [forestFireGif],
    techStack: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
      { name: 'Data Cleaning', icon: icons.pandas }
    ],
    liveUrl: 'https://public.tableau.com/views/CanadianForestFIres/FInalStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
  },
  {
    id: '8', // New Project ID
    title: 'Global Gaming Market Analysis (1980-2016)',
    category: 'TABLEAU / MARKET ANALYSIS',
    filterCategory: 'DATA VISUALIZATION',
    image: ridgePlotGif,
    overview: 'This dashboard explores the dominance of key industry players through a custom-built Ridgeline Plot and Packed Bubble Chart.',
    detailedDescription: 'Key Functionality: Contextual Filtering. The dashboard features a hover action on the ridgeline distribution that automatically filters the bottom Area Chart. This allows the user to instantly compare a specific publisher\'s individual trajectory (e.g., Nintendo\'s Wii era spike) against the backdrop of total global sales.',
    gallery: [ridgePlotGif],
    techStack: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' }
    ],
    liveUrl: 'https://public.tableau.com/views/global_sales_distribution_Rideline/GLobalSalesDistribution?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    id: '10',
    title: 'Superstore Sales & Operational Analytics',
    category: 'POWER BI / BUSINESS INTELLIGENCE',
    filterCategory: 'DATA VISUALIZATION',
    image: ssImg1,
    overview: 'End-to-end business intelligence solution for analyzing sales performance and supply chain.',
    detailedDescription: 'Comprehensive dashboard designed to analyze sales performance, supply chain efficiency, and regional growth. It features a custom-built navigation experience with an app-like feel that guides users from high-level executive KPIs to granular operational details, allowing stakeholders to identify profitable products and simulate pending orders.',
    gallery: [ssImg1, ssImg2, ssImg3],
    techStack: [
      { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi-1.svg' },
      { name: 'DAX', icon: 'https://img.icons8.com/ios-filled/50/ffffff/function.png' },
      { name: 'Data Modeling', icon: 'https://img.icons8.com/ios-filled/50/ffffff/database.png' }
    ],
    repoUrl: 'https://github.com/Hit-rajput/Superstore-Dashboard-power-bi'
  },
  {
    id: '5',
    title: 'Supply Risk Monitor: Predictive Blood Demand & Supply Forecasting',
    category: 'POWER BI / PREDICTIVE MODELING',
    filterCategory: 'DATA VISUALIZATION',
    image: dashboardImg, // Set dashboard as the first/main image
    overview: 'Trauma-driven demand forecasting and supply risk early warning for Canada.',
    detailedDescription: 'Blood products are highly perishable, making effective stockpile management critical. This project aims to build a "Control Tower" to forecast trauma-driven demand and identify potential supply risks.\n\nProblem Statement: Operational teams need earlier signals for blood shortage risks. The Supply Risk Monitor leverages national collision data and external factors to predict demand spikes caused by trauma events.\n\nCurrent Status: The project has moved into the Pipeline Implementation phase.\n\nImplemented Features:\n• Data Ingestion: Automated download and standardization of National Collision Database (NCDB) data from the Open Canada API.\n• Forecasting Model: Finalized Baseline Facebook Prophet model. The model has been trained and validated to capture trends and seasonality in collision data.\n\nWork in Progress: Automated Retraining Pipeline (implementing a quarterly workflow to fetch fresh Toronto collision data, retrain the Prophet model, and generate demand forecasts for the next 3-month window).\n\nFuture Objectives: Model Optimization (explore efficiency improvements and alternative algorithms to enhance the current Prophet model).',
    gallery: [
      dashboardImg, torontoHex, annualCollision, weeklyCollision, demoHist, heatmap,
      seasonalChart, severityStacked, tSeasonalChart, torontoAnnual, torontoHourly,
      torontoSeverity, torontoVuln, torontoWeekly, trendChart, violinPlot
    ],
    techStack: [
      { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi-1.svg' },
      { name: 'Python', icon: icons.python },
      { name: 'Pandas', icon: icons.pandas },
      { name: 'Prophet', icon: 'https://img.icons8.com/ios-filled/50/ffffff/line-chart.png' }
    ],
    repoUrl: 'https://github.com/Hit-rajput/blood-supply-risk-monitor'
  },
  {
    id: '4',
    title: 'Global Console Game Sales Intelligence',
    category: 'TABLEAU / MARKET ANALYSIS',
    filterCategory: 'DATA VISUALIZATION',
    image: gameConsoleImg, // Placeholder gaming
    overview: 'Strategic dashboard exploring market dynamics across genres and platforms.',
    detailedDescription: 'Mapped the rise and fall of genre popularity over 35 years. Evaluated lifecycle success of top 3 platforms and discovered a strong linear correlation between NA and EU sales markets.',
    gallery: [gameConsoleImg],
    techStack: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' }
    ],
    liveUrl: 'https://public.tableau.com/views/Game_console/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
  },

  // -------------------------------------------------------------
  // CLOUD & ENGINEERING Projects
  // -------------------------------------------------------------
  {
    id: '6',
    title: 'Evolutionary Algorithm Backend on GCP',
    category: 'GCP / BACKEND ENGINEERING',
    filterCategory: 'CLOUD & ENGINEERING',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80', // Cloud/Tech
    overview: 'Orchestration of API calls for complex forensic evolutionary algorithms.',
    detailedDescription: 'Engineered the orchestration of API calls between a frontend interface and a GCP-hosted MATLAB microservice. Managed scalable deployment and seamless user experience for a top-performing research team.',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
    ],
    techStack: [
      { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'MATLAB', icon: 'https://img.icons8.com/fluency/48/matlab.png' }
    ]
  },
  {
    id: '7',
    title: 'Production Data Engineering',
    category: 'SQL / FIREBASE',
    filterCategory: 'CLOUD & ENGINEERING',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80', // Code/DB
    overview: 'Managing production-level data systems at Advance Infotech.',
    detailedDescription: 'Leveraged SQL alongside Google Firebase to manage complex datasets for mobile applications. Built robust back-end integrations ensuring data integrity and secure retrieval.',
    gallery: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'
    ],
    techStack: [
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }, // Generic SQL icon
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
    ]
  }
];