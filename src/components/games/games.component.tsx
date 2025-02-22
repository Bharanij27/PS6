import './games.css';
import { PS6 } from '../../constants/common.constants';
import { useState } from 'react';
import PS6Button from '../button/button.component';
import controllerBlack from '../../assets/button/controller-black.png';
import controllerWhite from '../../assets/button/controller-white.png';
import { v4 as uuid } from 'uuid';


type Game = {
    title: string,
    mainBanner: string,
    leftImage: string
    rightImage: string
}

const Games = () => {

    const defaultSelectedGame = PS6.game.gamesList[0];
    const [selectedGame, setSelectedGame] = useState<Game>(defaultSelectedGame);
    const handlerMouseOver = (game: Game) => setSelectedGame(game);

    return (
        <div className="games-section-wrapper page-black-box-shadow">

            <div className="game-image first-image">
                <img src={selectedGame?.leftImage} alt="game left banner" />
            </div>

            <div className="content-wrapper">
                <div className="content">
                    <div className="game-body-wrapper">
                        <div className="game-body-title">
                            {PS6.game.title}
                        </div>

                        <div className="game-description">
                            {PS6.game.description}
                        </div>

                        <div className="games-list-wrapper">
                            {PS6.game.gamesList.map((game) => {
                                return (
                                    <div className="game" key={uuid()}>
                                        <img 
                                            onMouseOver={() => handlerMouseOver(game)} 
                                            src={game.mainBanner} 
                                            alt="game"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="game-purchase-button">
                            <PS6Button 
                                buttonTitle='Get Game now'
                                buttonIcon={controllerWhite} 
                                buttonHoverIcon={controllerBlack}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="game-image last-image">
                <img src={selectedGame?.rightImage} alt="game right banner" />
            </div>

            <div className="game-title-wrapper">
                {selectedGame?.title}
            </div>

        </div>
    )
}

export default Games;