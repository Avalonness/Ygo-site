import '../../Other/styles/font.css'
import styled from 'styled-components'
import colors from '../../Other/styles/colors'

// CSS Header

const HeaderContainer = styled.div `
background: ${colors.primary};
& .header__main__content {
    width: 80%;
    margin: auto;
    padding: 15px;
    display: flex;
    justify-content: space-between;

    & .header__title {
        width: 20%;
        & h1 {
            text-align: center;
            color: ${colors.secondary};
            font-size: 28px;
            font-family: 'Lobster', cursive;
        }
        & p {
            text-align: center;
            color: ${colors.secondary};
            font-size: 18px;
            text-decoration: underline;
            font-family: 'Oswald', sans-serif;
            font-style: italic;
        }
    }

    & .header__menu__nav {
        padding: 0px 25px;
        width: 100%;
        font-family: 'Oswald', sans-serif;

        & li {
        color: red;
        & a {
            color: ${colors.secondary};
        }
        &:hover a {
            color: white;
            }
        }

        & a {
            list-style-type: none;
            text-decoration: none;
            color: black;
        }

        & .option_deroulant {
            display: none;
            box-shadow: 0px 1px 2px black;
            position: absolute;
            z-index: 1000;
            background-color: white;
        }
            & ul {
                list-style-type: none;
                display: flex;
                width: 110%;
                padding: 10px 15px;
                margin-right: 60px;

                & li {
                    width: 100%;
                    text-align: center;
                    position: relative;
                    padding: 5px 0px;
                    color: ${colors.secondary};

                    &:hover .option_deroulant {
                        display: block;
                    }
                }
            }
        
    }
}

`

function Header() {
    return (
        <HeaderContainer>
            <div className='header__main__content'>
                <div className='header__title'>
                    <h1>Ygo - Book</h1>
                    <p>Carnet d'un duelliste</p>
                </div>
{/* Menu de nvavigation */}
                <nav>
                    <div className='header__menu__nav'>
                        <ul className='menu__nav__deroulant'>
                            <li className='menu_deroulant'><a href='#'>► Test Menu</a>
                                <ul className='option_deroulant'>
                                    <li>Test 1</li>
                                    <li>Test 2</li>
                                    <li>Test 3</li>
                                </ul>
                            </li>

                            <li className='menu_deroulant'><a href='#'>► Test Menu 2</a>
                                <ul className='option_deroulant'>
                                    <li>Test 1</li>
                                    <li>Test 2</li>
                                    <li>Test 3</li>
                                </ul>
                            </li>

                            <li><a href='#'>Lien Normal</a></li>
                            <li><a href='#'>Lien Normal</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </HeaderContainer>
    );
  }
  export default Header;