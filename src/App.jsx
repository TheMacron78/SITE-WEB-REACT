// On importe le composant qu'on veut utiliser
import { SplitText } from 'react-bits';

// On importe aussi les styles de la bibliothèque (TRÈS IMPORTANT)
import 'react-bits/dist/index.css';

// On nettoie le CSS par défaut
import './App.css';

function App() {
  return (
    // On centre le tout pour bien voir l'effet
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#111', color: 'white' }}>
      
      {/* Voici ton composant ! Modifie le texte ici. */}
      <h1 style={{ fontSize: '4rem' }}>
        <SplitText
          text="Bienvenue sur votre nouvelle plateforme"
          splitType="chars" // On anime caractère par caractère
          duration={0.8} // Vitesse de l'animation
          delay={50} // Délai entre chaque lettre
        />
      </h1>

    </div>
  )
}

export default App;
