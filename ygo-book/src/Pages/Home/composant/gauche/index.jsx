import styled from 'styled-components'
import colors from '../../../../Other/styles/colors'
import '../../../../Other/styles/font.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banniere from '../../../../Assets/bannière/ygo1.png'
import banniere2 from '../../../../Assets/bannière/ygo2.png'
import banniere3 from '../../../../Assets/bannière/ygo3.png'

const NewsContainer = styled.div`
padding-top: 15px;
& .carousel-root {
    width: 50%;
    text-align: center;
    margin: auto;
}

& .carousel .thumbs {
    display: none;
}
`

const DeckSituation = styled.div`
padding: 40px 15px 10px 15px;
border: purple 2px solid;
& h2 {
    font-size: 25px;
    color: ${colors.text};
    font-family: 'Oswald', sans-serif;
    text-decoration: underline;
    text-align: left;
}
& p {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;

    & .deckname {
        font-style: italic;
    }
}
`

function HomeLeft() {
    return (
    <div>
        <h1> Dernières Actualitées: </h1>
        <NewsContainer>
            <Carousel autoPlay="true" interval={2000} infiniteLoop="true">
                    <div>
                        <img src={banniere2} alt='banniere news' />
                    </div>
                    <div>
                    <img src={banniere} alt='banniere news' />
                    </div>
                    <div>
                    <img src={banniere3} alt='banniere news' />
                    </div>
            </Carousel>
        </NewsContainer>

        <DeckSituation>
            <h2>Deck Ajouté Récemment:</h2>
            <br />
            <p>• Base <span className="deckname">Amazement</span><br />
            <br />
            • Deck <span className="deckname">Infernoble</span><br />
            <br />
            • Deck <span className="deckname">Magical Musketeer</span><br />
            <br />
            • Base <span className="deckname">Invoked</span><br />
            <br />
            • Deck <span className="deckname">Dinomorphia</span>
            </p>
        </DeckSituation>
    </div>
    )
}

export default HomeLeft;