import { Project } from './types';

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
    title: 'Education Flows',
    category: 'D3.JS / VISUALIZATION',
    filterCategory: 'DATA VISUALIZATION',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0v2LElhvUoolvkg6KKqQcUl4uslkY59Uot82Cv0oMFqA1LlXlQA-n_xjR-UrOSkZFXO6r9YSfoOFOXwYHt5bQIBOWB6YABvSxYN4j4RvTUcsEDL0NFELZ09MqHuL813gPF7ATMBEaN3UWreuj2kuyfoP-DRt56WNjTwjxIxsNPwlw28M1xBJQWw2Da289xLMKnsWzMyQV5FYY_DutF0bkHlHmU2m_4nkOGE9TQ0w7AeoDBtfEk1zyOlrJ3PG857G9eEzXBri8Fs8',
    overview: 'Exploring the movement of students between different fields of study over the last decade.',
    detailedDescription: 'This interactive visualization maps the complex flow of students across various educational disciplines. Using Sankey diagrams and chord charts, it highlights how interdisciplinary studies have evolved. The main challenge was optimizing the layout algorithm to prevent edge crossings while maintaining readable labels for over 50 distinct fields.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0v2LElhvUoolvkg6KKqQcUl4uslkY59Uot82Cv0oMFqA1LlXlQA-n_xjR-UrOSkZFXO6r9YSfoOFOXwYHt5bQIBOWB6YABvSxYN4j4RvTUcsEDL0NFELZ09MqHuL813gPF7ATMBEaN3UWreuj2kuyfoP-DRt56WNjTwjxIxsNPwlw28M1xBJQWw2Da289xLMKnsWzMyQV5FYY_DutF0bkHlHmU2m_4nkOGE9TQ0w7AeoDBtfEk1zyOlrJ3PG857G9eEzXBri8Fs8',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
    ],
    techStack: [
      { name: 'D3.js', icon: icons.d3 },
      { name: 'React', icon: icons.react },
      { name: 'Node.js', icon: icons.node }
    ],
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    id: '2',
    title: 'Sentiment Clouds',
    category: 'NLP / TEXT MINING',
    filterCategory: 'DATA SCIENCE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs-GFhi2ebMq_uFJYUlhX5tvH7u4oUxayqccoJCxkvAcC4YYSUYYowuUjyTo8AbJPmpYdO7inyjM5ft8lecP8X1qS93LC1Ris8hkEAqATc1yWYGKp1dC5HNfqe65NOqpW__7JyTQsjJAlC08-WN1EQVqgMRvbvXO7DuZ56np0s6we-VMR6We2FDwfJiP6KE6qi_0G8bu-oNZHD-egXEbDRkdC_7bdrJY5Xf9pXlEqaf1Ln2xmCNs3GDMo1VDyboZVutyP972j1XQuF',
    overview: 'Analyzing emotional tone in classic literature through generative word clouds.',
    detailedDescription: 'By applying Natural Language Processing (NLP) techniques to the Project Gutenberg corpus, this project visualizes the emotional arcs of famous novels. Each cloud represents a chapter, with colors indicating sentiment polarity and density representing emotional intensity.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAs-GFhi2ebMq_uFJYUlhX5tvH7u4oUxayqccoJCxkvAcC4YYSUYYowuUjyTo8AbJPmpYdO7inyjM5ft8lecP8X1qS93LC1Ris8hkEAqATc1yWYGKp1dC5HNfqe65NOqpW__7JyTQsjJAlC08-WN1EQVqgMRvbvXO7DuZ56np0s6we-VMR6We2FDwfJiP6KE6qi_0G8bu-oNZHD-egXEbDRkdC_7bdrJY5Xf9pXlEqaf1Ln2xmCNs3GDMo1VDyboZVutyP972j1XQuF',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
    ],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'Pandas', icon: icons.pandas },
      { name: 'D3.js', icon: icons.d3 }
    ],
    repoUrl: '#'
  },
  {
    id: '3',
    title: 'Music Trends 2023',
    category: 'STREAMGRAPH / R',
    filterCategory: 'DATA VISUALIZATION',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWBhkCdVYMZo53h2VJNpC9s_uokKDjXnGEepFujew8a90ohWHgyu5nKrnEoES2W0LvTwL2vyKCSipxU5_z_l3x_9X5u7WrwtWnkHCTigBR2mTM5H0lpKZ5gdS5w05A362RHE_pOdn_9RHtANzx-6CWPCBeY4s0_t1axHR7sHg2FwB3WUC0nc10XlOycTgl9ECcq9mTkqCl0zWtsVrhhWekM2MilYrcA01ZXxEHIud5gmgcqJzmnPPRCwDjG4RQI2Op-X1m6HxqyqCU',
    customStyles: 'hue-rotate-90',
    overview: 'Visualizing the rise and fall of music genres on streaming platforms.',
    detailedDescription: 'Using R and the Spotify API, this streamgraph illustrates how genre popularity shifts over the course of a year. The "liquid" aesthetic was achieved using custom R shaders to give the graph a smooth, organic feel.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBWBhkCdVYMZo53h2VJNpC9s_uokKDjXnGEepFujew8a90ohWHgyu5nKrnEoES2W0LvTwL2vyKCSipxU5_z_l3x_9X5u7WrwtWnkHCTigBR2mTM5H0lpKZ5gdS5w05A362RHE_pOdn_9RHtANzx-6CWPCBeY4s0_t1axHR7sHg2FwB3WUC0nc10XlOycTgl9ECcq9mTkqCl0zWtsVrhhWekM2MilYrcA01ZXxEHIud5gmgcqJzmnPPRCwDjG4RQI2Op-X1m6HxqyqCU',
      'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80'
    ],
    techStack: [
      { name: 'R', icon: icons.r },
      { name: 'Python', icon: icons.python }
    ],
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Taxonomy of Life',
    category: 'R / CIRCULAR LAYOUT',
    filterCategory: 'CREATIVE CODING',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3jutFUcwBhAaEYWDMpZgi5tSFO7qJJsj5AJlqZTA-adGI1pOr9j0NfLmW4QJt4LHC5pi2X6rGZOGVWsZuqO08YCoJ6vM8Vb6j-U6dwsHvttiacLPU6BIuUst9lMpE1Gi6WRMrcsFTsKkVL2VRvKGJ93SPDKnUAXgfvVDTUmqWsl5lNAJZfKv1cTkpcq8EPJYWPLIPpR0BxdHv8TMJeCnEwMmHH682HkQqSWjWBr7wSRNeyrTdqUVm0ElLYqHl1QvuDcNKyes0dszE',
    customStyles: 'grayscale group-hover:grayscale-0',
    overview: 'A generative art piece exploring the phylogenetic tree of life.',
    detailedDescription: 'This project is a visual experiment using circular dendrograms to represent biological classification. It allows users to zoom into specific branches of the tree of life, revealing the connections between millions of species.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3jutFUcwBhAaEYWDMpZgi5tSFO7qJJsj5AJlqZTA-adGI1pOr9j0NfLmW4QJt4LHC5pi2X6rGZOGVWsZuqO08YCoJ6vM8Vb6j-U6dwsHvttiacLPU6BIuUst9lMpE1Gi6WRMrcsFTsKkVL2VRvKGJ93SPDKnUAXgfvVDTUmqWsl5lNAJZfKv1cTkpcq8EPJYWPLIPpR0BxdHv8TMJeCnEwMmHH682HkQqSWjWBr7wSRNeyrTdqUVm0ElLYqHl1QvuDcNKyes0dszE'
    ],
    techStack: [
      { name: 'R', icon: icons.r },
      { name: 'D3.js', icon: icons.d3 }
    ],
    repoUrl: '#'
  },
  {
    id: '5',
    title: 'Pattern Recognition',
    category: 'MACHINE LEARNING / VIZ',
    filterCategory: 'DATA SCIENCE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDromx0RS7LQTab3dhZUwZ7e2blNtcWvprUzVot3YjIIcjyfSGxw0UelrwHjlBCSVYtmeUWgMcDcRtDXSd2BEsipVPZt3YwvaLtbMfvd05SeKisVdQM6mTW2I8o5SUr45oSlo7XAlanio1Gep-jlGWwkVNCTCD9X7vrjVapqwNqh49Qai14HpcKXu7hQslqd-6NydliLasbbVXBdysx96VzsnZYLwJn0c5pJtT7MvJn7uQw4utX5CVupBIBPrn627lOc5GFpKEpWrOJ',
    overview: 'Visualizing neural network activation layers.',
    detailedDescription: 'An attempt to open the "black box" of deep learning. This tool visualizes how a Convolutional Neural Network (CNN) "sees" an image as it passes through various layers, highlighting feature extraction in real-time.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDromx0RS7LQTab3dhZUwZ7e2blNtcWvprUzVot3YjIIcjyfSGxw0UelrwHjlBCSVYtmeUWgMcDcRtDXSd2BEsipVPZt3YwvaLtbMfvd05SeKisVdQM6mTW2I8o5SUr45oSlo7XAlanio1Gep-jlGWwkVNCTCD9X7vrjVapqwNqh49Qai14HpcKXu7hQslqd-6NydliLasbbVXBdysx96VzsnZYLwJn0c5pJtT7MvJn7uQw4utX5CVupBIBPrn627lOc5GFpKEpWrOJ'
    ],
    techStack: [
      { name: 'TensorFlow', icon: icons.tensorflow },
      { name: 'Python', icon: icons.python },
      { name: 'React', icon: icons.react }
    ],
    repoUrl: '#'
  },
  {
    id: '6',
    title: 'Migration Patterns',
    category: 'GIS / MAPPING',
    filterCategory: 'DATA VISUALIZATION',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwML8iRxdD80nfVrWb6VxUVWlAImwJKrQrHEB_Y1CcFZrEOumHyG2cYWQfsVCbyqUEA7V0t8AuWXISGRApT2dfmEv8xXu7b_Ety0ph4LllIoYotCBdeoUpfaxJwmlenwllWhGQ0CgrxcH3gJEChFUXABqSp4bsOmAKWXNfor-g2BRbOxFUq1jmlx573RzI5XCj0JG73diEp_VWszxpMM3vBzbQYOp3ZpLLQUetk8f3BMTNU2CFOmBg-RPRsHJya7JVnQoiBICQkW0I',
    overview: 'Mapping global migration flows over the last 50 years.',
    detailedDescription: 'A geospatial analysis project that tracks human migration. It uses flow maps to show the volume and direction of movement between countries, providing insights into geopolitical shifts and economic trends.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwML8iRxdD80nfVrWb6VxUVWlAImwJKrQrHEB_Y1CcFZrEOumHyG2cYWQfsVCbyqUEA7V0t8AuWXISGRApT2dfmEv8xXu7b_Ety0ph4LllIoYotCBdeoUpfaxJwmlenwllWhGQ0CgrxcH3gJEChFUXABqSp4bsOmAKWXNfor-g2BRbOxFUq1jmlx573RzI5XCj0JG73diEp_VWszxpMM3vBzbQYOp3ZpLLQUetk8f3BMTNU2CFOmBg-RPRsHJya7JVnQoiBICQkW0I'
    ],
    techStack: [
      { name: 'Mapbox', icon: icons.mapbox },
      { name: 'React', icon: icons.react },
      { name: 'D3.js', icon: icons.d3 }
    ],
    liveUrl: '#'
  },
  {
    id: '7',
    title: 'Global Connectivity',
    category: 'GEOSPATIAL / PYTHON',
    filterCategory: 'DATA SCIENCE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-dEocIx70-pUZxh3dzq6u9T91aUoCIoGZSfSFINe4YhQ33tdYBiePi1YLmBjU2FNrJrjT2Fmv540QxoRm_CLkefdMd5hgHnaUb_mLnkjfvQ49kbGeb8W8IteFhzhNOv6rVi0An8UPhAmqzXIJk03eZL4rlSXAN-VF-Lu5Yp9DhFWdHaiITPu7S2k_8CMD3finHoqwAdA_C--6BdqVQf2-7nIwSb88H1lHGkfkSSuozyOzM7DHcw6tN2_J_HLzVh0vZbx5US6A1kmh',
    overview: 'Analyzing internet connectivity and submarine cable networks.',
    detailedDescription: 'This project visualizes the physical infrastructure of the internet. By mapping submarine cables and landing points, it shows how the world is physically connected and identifies potential points of failure in the global network.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-dEocIx70-pUZxh3dzq6u9T91aUoCIoGZSfSFINe4YhQ33tdYBiePi1YLmBjU2FNrJrjT2Fmv540QxoRm_CLkefdMd5hgHnaUb_mLnkjfvQ49kbGeb8W8IteFhzhNOv6rVi0An8UPhAmqzXIJk03eZL4rlSXAN-VF-Lu5Yp9DhFWdHaiITPu7S2k_8CMD3finHoqwAdA_C--6BdqVQf2-7nIwSb88H1lHGkfkSSuozyOzM7DHcw6tN2_J_HLzVh0vZbx5US6A1kmh'
    ],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'Pandas', icon: icons.pandas }
    ],
    repoUrl: '#'
  },
  {
    id: '8',
    title: 'Social Circles',
    category: 'NETWORK ANALYSIS',
    filterCategory: 'DATA SCIENCE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsJLos7bKfT-tjZCd97K-OdcJqiTwFsoSbLrT3J-OfmIXaJcwIcL7yDv-k9UBAbw4JBZkxuNfpKfyozGO4lVIyPU0tJzYK88MyJNScHTpOcF9zMj7UOJq1CYjcwqa6Ne0RnToixHsbMjFyMIBNm29SeKibVlRQzfmrI-RwyNZ1dgs96rJWl2YVI9QEDQePQlEft2395e64lWmi3YiQqtX5u6NWoyO6huWlqgfIhzJooqckKMyUUBbiBs_HJHWIE2cdPI9vIRZnrgcA',
    overview: 'Network graph of social media interactions.',
    detailedDescription: 'A force-directed graph visualization of social clusters. This tool identifies key influencers and community bridges within a dataset of Twitter interactions, making complex social structures visible and understandable.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsJLos7bKfT-tjZCd97K-OdcJqiTwFsoSbLrT3J-OfmIXaJcwIcL7yDv-k9UBAbw4JBZkxuNfpKfyozGO4lVIyPU0tJzYK88MyJNScHTpOcF9zMj7UOJq1CYjcwqa6Ne0RnToixHsbMjFyMIBNm29SeKibVlRQzfmrI-RwyNZ1dgs96rJWl2YVI9QEDQePQlEft2395e64lWmi3YiQqtX5u6NWoyO6huWlqgfIhzJooqckKMyUUBbiBs_HJHWIE2cdPI9vIRZnrgcA'
    ],
    techStack: [
      { name: 'D3.js', icon: icons.d3 },
      { name: 'React', icon: icons.react }
    ],
    repoUrl: '#'
  },
  {
    id: '9',
    title: 'Correlation Matrix',
    category: 'STATISTICS / PYTHON',
    filterCategory: 'DATA SCIENCE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU8Yx1I0h6zDzj8Z-I-CYLdUnBtxVethIdChhqdqvIqPtzB-OPNTl9_LAkBvMt9H3wacahtIapG0vlio4nV8R9xEXkIExaT3nLPF9sdzb5U-UAd301Njrc5EM68tiL1LI5ZMok-ekh1LVdURHoa51SHZnVuObjwHJb4hTLB4s3wi8Xb6pv05KhcBf8ccctRw1SIw5EcJIb-lRlPApJ1-9_QuoYz8IjkeC1q5gaQdnRal2R2DFHC-OAQ1MAWql_4sjDrczOzEjeXylB',
    customStyles: 'invert',
    overview: 'Interactive heatmap for exploring dataset correlations.',
    detailedDescription: 'A utility tool for data scientists to quickly identify relationships between variables in large datasets. It features dynamic filtering, reordering, and cluster detection to simplify exploratory data analysis.',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCU8Yx1I0h6zDzj8Z-I-CYLdUnBtxVethIdChhqdqvIqPtzB-OPNTl9_LAkBvMt9H3wacahtIapG0vlio4nV8R9xEXkIExaT3nLPF9sdzb5U-UAd301Njrc5EM68tiL1LI5ZMok-ekh1LVdURHoa51SHZnVuObjwHJb4hTLB4s3wi8Xb6pv05KhcBf8ccctRw1SIw5EcJIb-lRlPApJ1-9_QuoYz8IjkeC1q5gaQdnRal2R2DFHC-OAQ1MAWql_4sjDrczOzEjeXylB'
    ],
    techStack: [
      { name: 'Python', icon: icons.python },
      { name: 'React', icon: icons.react }
    ],
    liveUrl: '#'
  }
];