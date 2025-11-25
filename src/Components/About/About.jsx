import React, { useState } from 'react';
import '../../SASS/About.css';

const About = () => {
  const [language, setLanguage] = useState('fr'); // Default language is French

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
   
    <div className='sea'>
      <div className='About-Content'>
        <div className='About-Card'>
          <h1 className='About-Title'>-About-</h1>
          <button className='About-button'>HEY !✋ENGLISH OR SPANISH ⬇️</button>
          <div className='language-options'>
            <button onClick={() => handleLanguageChange('fr')}>Français /</button>
            <button onClick={() => handleLanguageChange('en')}>English /</button>
            <button onClick={() => handleLanguageChange('es')}>Español</button>
          </div>
          {language === 'fr' && (
            <p className='About-P'>"Je suis Haroun, Data Analyst formé chez OpenClassrooms, passionné par la compréhension et l’exploitation des données. Motivé par l’apprentissage continu et les défis analytiques, je m’efforce de produire des analyses fiables, claires et utiles à la prise de décision. Mon parcours m’a doté de compétences en manipulation de données, statistiques, visualisation et automatisation. Je peux contribuer à des projets innovants tout en développant mon expertise dans le domaine de la data"</p>
          )}
          {language === 'en' && (
            <p className='About-P'>"I’m Haroun, a Data Analyst trained at OpenClassrooms, passionate about understanding and leveraging data. Driven by continuous learning and analytical challenges, I focus on producing clear, reliable insights that support decision-making. My background has equipped me with strong skills in data manipulation, statistics, visualization, and automation. I’m determined to contribute to innovative projects while further developing my expertise in the data field."</p>
          )}
          {language === 'es' && (
            <p className='About-P'>"Soy Haroun, Data Analyst formado en OpenClassrooms, apasionado por comprender y aprovechar los datos. Impulsado por el aprendizaje continuo y los desafíos analíticos, me enfoco en producir análisis claros y fiables que apoyen la toma de decisiones. Mi trayectoria me ha proporcionado sólidas habilidades en manipulación de datos, estadística, visualización y automatización. Estoy decidido a contribuir a proyectos innovadores mientras desarrollo aún más mi experiencia en el ámbito de los datos"</p>
          )}
        </div>
        <div className='circle-wrapper'>
          <div className='bubble'></div>
          <div className='submarine-wrapper'>
            <div className='submarine-body'>
              <div className='window'></div>
              <div className='engine'></div>
              <div className='light'></div>
            </div>
            <div className='helix'></div>
            <div className='hat'>
              <div className='leds-wrapper'>
                <div className='periscope'></div>
                <div className='leds'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='About-cards'>
        <div className='About-card-certification'>
          <h3>Certification</h3>
          <h5>Data-Analyst</h5>
          <p>Level 6</p>
          <a href='#'>click to download certification</a>
        </div>
        <div className='About-card-source'>
          <h3>Sources</h3>
          <a href='https://github.com/Marrackech/'><img src='/images/gitt.png' alt='GitHub'></img></a>
          <a href='##'><img src='/images/linkdin.jpeg' alt='LinkedIn'></img></a>
          <a href='mailto:harountanane@gmail.com'><img src='/images/gmail.png' alt='Gmail'></img></a>
        </div>
      </div>
      


    </div>
    
  );
};

export default About;
