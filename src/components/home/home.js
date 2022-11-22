import './home.css';
import hero from '../../assets/img/image.jpeg'

export default function home() {
    return (
    <div>
        <div class="hero" id="home">
          <div class="container-fluid">
              <div class="row align-items-center">
                  <div class="col-sm-12 col-md-6">
                      <div class="hero-content">
                          <div class="hero-text">
                              <p>I'm</p>
                              <h1>Zanele Chauke</h1>
                              <h2></h2>
                              <div class="typed-text">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
                          </div>
                          <div class="hero-btn">
                              <a class="btn" href="">Hire Me</a>
                              <a class="btn" href="">Contact Me</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-sm-12 col-md-6 d-none d-md-block">
                      <div class="hero-image">
                          <img src={hero} alt="Hero Image"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>)
}