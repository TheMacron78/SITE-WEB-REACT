// On importe le composant qu'on veut utiliser
import { SplitText } from 'react-bits';

// On importe les styles de la bibliothèque avec le bon nom de fichier
import 'react-bits/dist/react-bits.css';

// On importe notre propre CSS
import './App.css';

function App() {
  return (
    // On centre le tout pour bien voir l'effet
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#111', color: 'white' }}>
      
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
