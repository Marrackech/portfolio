import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../SASS/Projects.css'; // Assurez-vous d'importer le bon fichier CSS ici

const Projects = () => {
  // Exemple de données pour les cards
  const projects = [
    {
      id: 1,
      title: 'Faites une analyse de ventes pour un e-commerce',
      description: 'Analyse des performances produits, segmentation clients et optimisation du panier moyen Technologies : Excel',
      imageUrl: '/images/projects/1.png',
      categories: ['Excel'],
      githubLink: 'https://github.com/Marrackech/Analyse-de-vente-pour-un-site-e-commerce'
    },
    {
      id: 2,
      title: ' Requêtez une base de données avec SQL',
      description: 'Extraction d’insights via jointures, agrégations, contraintes, vues (MySQL Workbench – SQL complexe).',
      imageUrl: '/images/projects/2.jpeg',
      categories: ['MySQL Workbench', 'SQL complexe'],
      githubLink: 'https://github.com/Marrackech/Requetez-une-base-de-donnees-avec-SQL'
    },
    {
      id: 3,
      title: 'Réalisez une étude de santé publique avec Python',
      description: 'Analyse statistique d’indicateurs sanitaires et modélisation de facteurs explicatifs (Python – tests statistiques, ACP, visualisations).',
      imageUrl: '/images/projects/3.png',
      categories: ['Python', 'tests statistiques', 'ACP', 'visualisations', 'pandas', 'numpy', 'matplotlib'],
      githubLink: 'https://github.com/Marrackech/R-alisez-une-tude-de-sant-publique-avec-Python'
    },
    {
      id: 4,
      title: 'Créez et utilisez une base de données immobilière avec SQL',
      description: 'Création d’un schéma SQL complet + intégration de données DVF, recensement, géodata (MySQL, modélisation 3NF, Python ETL).',
      imageUrl: '/images/projects/4.png',
      categories: ['MySQL', 'modélisation 3NF', 'Python', 'ETL', 'pandas', 'numpy', 'matplotlib'],
      githubLink: 'https://github.com/Marrackech/cr-er-et-utiliser-une-base-de-donn-es-immobili-re-avec-SQL'
    },
    {
      id: 5,
      title: "Optimisez la gestion des données d'une boutique avec R ou Python",
      description: 'Nettoyage, normalisation et analyse des ventes e-commerce (Python – ETL, audit data quality, clustering).',
      imageUrl: '/images/projects/5.png',
      categories: ['Python', 'ETL', 'audit data quality', 'clustering', 'pandas', 'numpy', 'matplotlib'],
      githubLink: 'https://github.com/Marrackech/optimisez-la-gestion-de-donn-es-d-une-boutique-avec-Python-'
    },
    {
      id: 6,
      title: "Tableau de bord dynamique Power BI pour visualiser l'avancement de projet",
      description: 'Création d’un reporting dynamique avec métriques, jalons et alertes (Power BI – KPI, DAX, visualisation).',
      imageUrl: '/images/projects/6.png',
      categories: ['Power BI', 'KPI', 'DAX', 'visualisation'],
      githubLink: 'https://github.com/Marrackech/tableau-de-bord-dynamique-avec-Power-BI-pour-visualiser-l-avancement-de-projets'
    },
    {
      id: 7,
      title: "Analysez des indicateurs de l'égalité femmes/hommes en respect du RGPD",
      description: 'Calcul officiel de l’Index Égalité + anonymisation SIRH (KNIME, Python, workflow RGPD).',
      imageUrl: '/images/projects/7.png',
      categories: ['KNIME', 'Python', 'workflow RGPD', 'pandas', 'numpy', 'matplotlib'],
      githubLink: 'https://github.com/Marrackech/Analysez-des-indicateurs-de-l-galit-femmes-hommes-en-respect-du-RGPD'
    },
    {
      id: 8,
      title: "Analysez les ventes d'une librairie avec R ou Python",
      description: 'Étude de marge, rotation de stock, détection d’anomalies (Python – statistiques, régressions, corrélations).',
      imageUrl: '/images/projects/8.jpeg',
      categories: ['Python', 'pandas', 'numpy', 'matplotlib', 'statistiques', 'régressions', 'corrélations'],
      githubLink: 'https://github.com/Marrackech/Analysez-les-ventes-d-une-librairie-avec-Python'
    },
    {
      id: 9,
      title:  "Faites une étude sur l'eau potable",
      description: 'Étude mondiale avec visualisations multi-niveaux (monde/continent/pays) (Power BI, Python, data géographique, indicateurs composites)',
      imageUrl: '/images/projects/9.png',
      categories: ['Tableau', 'Python', 'data géographique' , 'indicateurs composites'],
      githubLink: 'https://github.com/Marrackech/Faites-une-tude-sur-l-eau-potable'
    },
    {
      id: 10,
      title: 'Produisez une étude de marché avec R ou Python',
      description: 'Analyse exploratoire et segmentation clients pour identifier les opportunités commerciales (Python – pandas, ACP, clustering, visualisation)',
      imageUrl: '/images/projects/10.png',
      categories: [ 'Python', 'pandas', 'numpy', 'matplotlib', 'ACP', 'clustering', 'visualisation'],
      githubLink: 'https://github.com/Marrackech/Produisez-une-tude-de-march-avec-R-ou-Python'
    }, 
    {
      id: 11,
      title: 'Détectez des faux billets avec R ou Python',
      description: "Modélisation statistique pour classifier les billets vrais/faux (Python – pandas, scikit-learn, matplotlib, tests OLS).",
      imageUrl: '/images/projects/11.jpeg',
      categories: ['Python', 'pandas', 'numpy', 'scikit-learn', 'matplotlib', 'tests OLS'],
      githubLink: 'https://github.com/Marrackech/d-tecter-Faux-billets'
    },
    {
      id: 12,
      title: 'Portofolio',
      description: 'Centralisation de tous les projets et visualisations dans un portfolio interactif pour démontrer les compétences analytiques et techniques.',
      imageUrl: '/images/projects/portofolio.png',
      categories: ['GitHub', 'Responsive Design', 'SEO', 'Responsive Design'],
      githubLink: 'https://github.com/Marrackech/portfolio'
    }
  ];



  const [filter, setFilter] = useState(null); // État pour stocker la catégorie de filtrage sélectionnée

  const handleFilterChange = (category) => {
    setFilter(category === 'Tous' ? null : category); // Mettre à jour l'état de filtrage en fonction de la catégorie sélectionnée
  };

  // Filtrer les projets en fonction de la catégorie sélectionnée
  const filteredProjects = filter
    ? projects.filter(project => project.categories.includes(filter))
    : projects;

  return (
    <div className="projects-wrapper">
      <h2 className="grid-title">My Projects</h2>
      <div className="filter-container">
        <label className='label'>- Choose categorie -</label>
        <select className="filter" onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="Tous">Tous</option>

<option value="Excel">Excel</option>
<option value="MySQL Workbench">MySQL Workbench</option>
<option value="SQL complexe">SQL complexe</option>
<option value="Python">Python</option>
<option value="tests statistiques">tests statistiques</option>
<option value="ACP">ACP</option>
<option value="visualisations">visualisations</option>
<option value="MySQL">MySQL</option>
<option value="modélisation 3NF">modélisation 3NF</option>
<option value="ETL">ETL</option>
<option value="audit data quality">audit data quality</option>
<option value="clustering">clustering</option>
<option value="Power BI">Power BI</option>
<option value="Tableau">Tableau</option>
<option value="KPI">KPI</option>
<option value="DAX">DAX</option>
<option value="KNIME">KNIME</option>
<option value="workflow RGPD">workflow RGPD</option>
<option value="statistiques">statistiques</option>
<option value="régressions">régressions</option>
<option value="corrélations">corrélations</option>
<option value="data géographique">data géographique</option>
<option value="indicateurs composites">indicateurs composites</option>
<option value="pandas">pandas</option>
<option value="scikit-learn">scikit-learn</option>
<option value="matplotlib">matplotlib</option>
<option value="numpy">numpy</option>
<option value="tests OLS">tests OLS</option>
<option value="GitHub">GitHub</option>
<option value="Responsive Design">Responsive Design</option>
<option value="SEO">SEO</option>


          {/* Ajoutez d'autres options de catégorie ici selon vos besoins */}
        </select>
      </div>
      <div className="projects-container">
        {filteredProjects.map(project => (
          <Link
            to={project.githubLink}
            key={project.id}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
