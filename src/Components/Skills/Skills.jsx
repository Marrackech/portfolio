
import React, { useState } from 'react';
import '../../SASS/Skills.css';

function Skills() {
  const handleMouseMove = (e) => {
    const skillImage = e.currentTarget.querySelector('.skill-image');
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * 20;
    const rotateY = (deltaX / centerX) * -20;

    skillImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (e) => {
    const skillImage = e.currentTarget.querySelector('.skill-image');
    skillImage.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const skills = [
    {
      id: 1,
      title: 'Python (Pandas, NumPy)',
      description: 'Manipulation, nettoyage et transformation de données',
      imageUrl: '/images/skills/python.png',
      categories: 'Languages',
    },
    {
      id: 2,
      title: 'Visualisation (Matplotlib, Seaborn)',
      description: 'Graphiques analytiques et statistiques.',
      imageUrl: '/images/skills/seaborn.jpeg',
      categories: 'Languages',
    },
    {
      id: 3,
      title: 'Modélisation statistique (Statsmodels, Scikit-learn)',
      description: 'Régressions, modèles prédictifs..',
      imageUrl: '/images/skills/model.jpeg',
      categories: 'Languages',
    },
    {
      id: 4,
      title: 'Tests statistiques avancés',
      description: 'JB, Omnibus, Breusch-Pagan, White, Durbin-Watson.',
      imageUrl: '/images/skills/test.jpeg',
      categories: 'Languages',
    },
    {
      id: 5,
      title: 'Analyse multivariée',
      description: 'ACP, CAH, K-means, corrélations avancées.',
      imageUrl: '/images/skills/analyse.png',
      categories: 'LOGICIELS',
    },
    {
      id: 6,
      title: 'Détection d’anomalies',
      description: 'Outliers, incohérences, erreurs de mesure.',
      imageUrl: '/images/skills/detect.png',
      categories: 'LOGICIELS',
    },
    {
      id: 7,
      title: 'SQL (MySQL Workbench)',
      description: 'Requêtes complexes, jointures, optimisation.',
      imageUrl: '/images/skills/sql.png',
      categories: 'Languages',
    },
    {
      id: 8,
      title: 'Modélisation de bases de données',
      description: 'Schéma relationnel, 3NF, PK/FK.',
      imageUrl: '/images/skills/bd.png',
      categories: 'Languages',
    },
    {
      id: 9,
      title: 'ETL & Data Engineering (KNIME, Python)',
      description: 'Pipelines d’ingestion, nettoyage et transformation.',
      imageUrl: '/images/skills/knime.jpeg',
      categories: 'LOGICIELS',
    },
    {
      id: 10,
      title: 'Intégration de données hétérogènes',
      description: 'ERP, APIs, géodonnées, datasets publics.',
      imageUrl: '/images/skills/int.jpeg',
      categories: 'Languages',
    },
    {
      id: 11,
      title: 'Qualité des données',
      description: 'Contrôles, rules-checking, gestion des valeurs manquantes.',
      imageUrl: '/images/skills/ql.png',
      categories: 'Languages',
    },
    {
      id: 12,
      title: 'Anonymisation & RGPD',
      description: 'Pseudonymisation, hashing, préparation SIRH.',
      imageUrl: '/images/skills/rgpd.jpeg',
      categories: 'Languages',
    },
    {
      id: 13,
      title: 'Business Intelligence',
      description: 'Tableaux de bord Power BI & Tableau.',
      imageUrl: '/images/skills/bi.png',
      categories: 'LOGICIELS',
    },
    {
      id: 14,
      title: 'Cartographie & données géographiques',
      description: 'KPI géospatiaux, cartes interactives.',
      imageUrl: '/images/skills/geo.jpeg',
      categories: 'LOGICIELS',
    },
    {
      id: 15,
      title: 'Machine learning de base',
      description: 'Classification, régression, validation croisée.',
      imageUrl: '/images/skills/ml.jpeg',
      categories: 'LOGICIELS',
    },
    {
      id: 16,
      title: 'Analyse de séries temporelles simples',
      description: 'GPS telemetry, événements, logs.',
      imageUrl: '/images/skills/astp.png',
      categories: 'LOGICIELS',
    },
    {
      id: 17,
      title: 'Git & GitHub',
      description: 'Versioning, workflows collaboratifs.',
      imageUrl: '/images/skills/GITHUB.png',
      categories: 'LOGICIELS',
    },
    {
      id: 18,
      title: 'Développement web',
      description: 'HTML, CSS, JavaScript, React, Redux, Yaml, MongoDB',
      imageUrl: '/images/skills/dw.webp',
      categories: 'LOGICIELS',
    }
  ];

  return (
    <div className="skills-container">
      <div className='Robot'>
      <div class="cloud-bubble">
    <div class="cloud-top"></div>
    <div class="cloud-bottom"></div>
    <div class="cloud-content">
        <h2 class="skills-title">KNOWLEDGE FROM PRACTICE </h2>
    </div>
</div>
      <h2 className='skills-title'>My Skills</h2>
      <div 
        className="skills-content" 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <img src="../../images/RobotB.png" alt="Logo" className="skill-image" />
        
    </div>
    </div>
      <div className="reflection-container">
        {skills.map(skill => (
          <div key={skill.id} className="reflection-grid-cell">
            <div className="reflection-content">
              <div className="skill-card">
                <img src={skill.imageUrl} alt={skill.title} className="skill-image" />
                <h3 className="skills-tittle">{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Skills;
