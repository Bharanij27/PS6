import './App.css'
import { PS6 } from './constants/common.constants'
import PS6Button from './components/button/button.component';
import Controller from './components/controller/controller.component';
import Features from './components/features/features.component';
import About from './components/about/about.component';
import Games from './components/games/games.component';

import payBlack from './assets/button/pay-black.png';
import payWhite from './assets/button/pay-white.png';
import glassesBlack from './assets/button/glasses-black.png';
import glassesWhite from './assets/button/glasses-white.png';
import { v4 as uuid } from 'uuid';

function App() {

  const headings = ["Playstation 6", "features", "games", "accessories", "contact"];

  return (
    <>
      <div className="ps6">
        <div className="main-section">

          <div className="ps6-header">
            <div className="ps6-logo">
              <a href="https://www.fontspace.com/category/playstation">
                <img src="https://see.fontimg.com/api/rf5/M3zx/NTIwYWY0MzA3ZTEwNGJkZjkzZTVmNmQ3ZTI1NzIxNGMub3Rm/UFM2/phatboyslim.png?r=fs&h=118&w=2000&fg=FFFFFF&bg=151515&tb=1&s=59" alt="Playstation logo" />
              </a>
            </div>
            <div className="ps6-headings">
              {
                headings.map((title) => {
                  return (
                    <div className="heading-text" key={uuid()}>
                      {title}
                    </div>
                  )
                })
              }
            </div>
            <PS6Button 
              buttonTitle="Pre Book"
              buttonIcon={payWhite}
              buttonHoverIcon={payBlack}
            />
          </div>

          <div className="divider-warpper">
            <div className="ps6-header-divider"></div>

          </div>

          <div className="ps6-main-body">

            <div className="ps6-main-details">
              <div className="main-warpper">
                <div className="title">
                  <span>
                    {PS6.title}
                  </span>
                  <div className="title-divider"></div>
                </div>
                <div className="main-title">
                  {PS6.main_title}
                </div>
                <div className="description">
                  {PS6.description}
                </div>
                <div className="demoAndSale">
                  <PS6Button buttonTitle="Pre Book" buttonIcon={payWhite} buttonHoverIcon={payBlack} />
                  <PS6Button buttonTitle="Watch the Reveal" buttonIcon={glassesWhite} buttonHoverIcon={glassesBlack} />
                </div>
              </div>
            </div>

            <div className="ps-main-logo">
              <img src="src/assets/ps6.png" alt="ps6" />
            </div>

          </div>

          <div className="product"></div>
        </div>

        <div className="ps6-addon">          
          <Controller/>
          <Features/>
          <Games/>
          <About/>
        </div>

      </div>
    </>
  )
}

export default App
