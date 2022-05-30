import styled from 'styled-components'
import colors from '../../Other/styles/colors'
import '../../Other/styles/font.css'
import HomeLeft from './composant/gauche'


const HomePage = styled.div`
  font-size: 14px;
  width: 80%;
  margin: auto;
  background: white;
  display: flex;
  height: 90%;

  & h1 {
    font-size: 30px;
    color: ${colors.text};
    font-family: 'Oswald', sans-serif;
    text-decoration: underline;
    text-align: center;
  }

${'' /* Partie gauche de la page d'acceuil */}
  & .home_left__section {
    width: 70%;
    padding: 25px;
  }

${'' /* Partie droite de la page d'acceuil */}
  & .home_right__section {
    border: purple 2px solid; 
    width: 30%;
}  
  `

function Home() {
  return (
    <HomePage>
      <div className='home_left__section'>
        <HomeLeft />
      </div>

      <div className='home_right__section'>

      </div>
    </HomePage>
  );
}
export default Home;
