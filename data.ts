import { Project } from './types';
import ishkodeImg from './Images/Forest_Region_overay.png';
import ferImg from './Images/Face_stucture.png';
import ferHistImg from './Images/Face_histogram.png';

import gameConsoleImg from './Images/Game_console.png';
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
  {
    id: '1',
    title: 'Ishkode - Evolutionary Wildfire Prediction',
    category: 'PYTHON / GENETIC ALGORITHMS',
    filterCategory: 'MACHINE LEARNING',
    image: ishkodeImg, // Main image
    overview: 'Optimizing feature selection for detecting "Mega-Fire" events.',
    detailedDescription: 'A research initiative proposing a novel Genetic Algorithm (GA) to optimize feature selection for detecting "Mega-Fire" events in the Cariboo region. It implements KDTree spatial indexing to merge satellite fire perimeters with ERA5 weather data and moves beyond standard classification to handle high-imbalance datasets.',
    gallery: [
      ishkodeImg,
      forestFireGif
    ],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'Scikit-Learn', icon: icons.python }, // Using Python icon as generic
      { name: 'Genetic Algos', icon: 'https://img.icons8.com/ios-filled/50/ffffff/dna-helix.png' }
    ],
    repoUrl: 'https://github.com/hit-rajput/forest-fire-prediction'
  },
  {
    id: '2',
    title: 'Hybrid Facial Emotion Recognition (FER)',
    category: 'TENSORFLOW / OPENCV',
    filterCategory: 'MACHINE LEARNING',
    image: ferImg, // Placeholder for AI/Face
    overview: 'Classifying 7 distinct human emotions with superior robustness.',
    detailedDescription: 'A hybrid computer vision system classifying 7 distinct human emotions with superior robustness to lighting changes. Integrated CNNs with manual feature descriptors (HOG + SIFT) to stabilize learning curves, outperforming standard CNN baselines on the CK+ dataset.',
    gallery: [
      ferImg,
      ferHistImg
    ],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'TensorFlow', icon: icons.tensorflow },
      { name: 'OpenCV', icon: 'https://img.icons8.com/color/48/opencv.png' },
      { name: 'MATLAB', icon: 'https://img.icons8.com/fluency/48/matlab.png' }
    ],
    repoUrl: 'https://github.com/hit-rajput/sentiment_analysis'
  },
  {
    id: '3',
    title: 'Canadian Forest Fire Analytics',
    category: 'TABLEAU / GEO-ANALYSIS',
    filterCategory: 'DATA VISUALIZATION',
    image: forestFireGif, // Placeholder for forest fire
    overview: 'Comprehensive data story identifying trends from 10+ years of data.',
    detailedDescription: 'Engineered an animation-based geospatial map that visualizes the velocity and density of fire spread throughout the year. Correlated lightning-caused fires with higher intensity/area burned compared to human-caused fires, influencing resource allocation strategies.',
    gallery: [
      forestFireGif
    ],
    techStack: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
      { name: 'Data Cleaning', icon: icons.pandas }
    ],
    liveUrl: 'https://public.tableau.com/views/CanadianForestFIres/FInalStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
  },
  {
    id: '4',
    title: 'Global Console Game Sales Intelligence',
    category: 'TABLEAU / MARKET ANALYSIS',
    filterCategory: 'DATA VISUALIZATION',
    image: gameConsoleImg, // Placeholder gaming
    overview: 'Strategic dashboard exploring market dynamics across genres and platforms.',
    detailedDescription: 'Mapped the rise and fall of genre popularity over 35 years. Evaluated lifecycle success of top 3 platforms and discovered a strong linear correlation between NA and EU sales markets.',
    gallery: [
      gameConsoleImg
    ],
    techStack: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' }
    ],
    liveUrl: 'https://public.tableau.com/views/Game_console/Story1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
  },
  {
    id: '8', // New Project ID
    title: 'Global Gaming Market Analysis (1980-2016)',
    category: 'TABLEAU / MARKET ANALYSIS',
    filterCategory: 'DATA VISUALIZATION',
    image: 'https://public.tableau.com/static/images/gl/global_sales_distribution_Rideline/GLobalSalesDistribution/1.png',
    overview: 'This dashboard explores the dominance of key industry players through a custom-built Ridgeline Plot and Packed Bubble Chart.',
    detailedDescription: 'Key Functionality: Contextual Filtering. The dashboard features a hover action on the ridgeline distribution that automatically filters the bottom Area Chart. This allows the user to instantly compare a specific publisher\'s individual trajectory (e.g., Nintendo\'s Wii era spike) against the backdrop of total global sales.',
    gallery: [
      'https://public.tableau.com/static/images/gl/global_sales_distribution_Rideline/GLobalSalesDistribution/1.png'
    ],
    techStack: [
      { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' }
    ],
    liveUrl: 'https://public.tableau.com/views/global_sales_distribution_Rideline/GLobalSalesDistribution?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
    embedCode: `<div class='tableauPlaceholder' id='viz1770738516816' style='position: relative'><noscript><a href='#'><img alt='GLobal Sales Distribution ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;gl&#47;global_sales_distribution_Rideline&#47;GLobalSalesDistribution&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz'  style='display:none;'><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='' /><param name='name' value='global_sales_distribution_Rideline&#47;GLobalSalesDistribution' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;gl&#47;global_sales_distribution_Rideline&#47;GLobalSalesDistribution&#47;1.png' /> <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='language' value='en-US' /></object></div>`,
  },
  {
    id: '5',
    title: 'Supply Risk Monitor',
    category: 'POWER BI / PREDICTIVE MODELING',
    filterCategory: 'DATA VISUALIZATION',
    image: torontoHex, // Healthcare/Medical
    overview: 'Forecasting trauma-driven blood demand against donor supply capacity.',
    detailedDescription: 'Shifts healthcare logistics from descriptive reporting to prescriptive risk modeling. Visualizes the gap between projected trauma demand and donor availability to trigger proactive alerts.',
    gallery: [
      torontoHex,
      annualCollision,
      weeklyCollision,
      demoHist,
      heatmap,
      seasonalChart,
      severityStacked,
      tSeasonalChart,
      torontoAnnual,
      torontoHourly,
      torontoSeverity,
      torontoVuln,
      torontoWeekly,
      trendChart,
      violinPlot
    ],
    techStack: [
      { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi-1.svg' }
    ],
    repoUrl: 'https://github.com/Hit-rajput/blood-supply-risk-monitor'
  },
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