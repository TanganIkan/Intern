import foto from './photo/foto.jpg'
import './App.css';
import phone from './photo/phone.svg'
import mail from './photo/mail.svg'
import location from './photo/location.svg'
import git from './photo/github.svg'


function App() {
  return (
    
    <div className='backround'>
       
      <div>
        <div className="profile">
          <div id="pict">
            <img src={foto} className="profile" alt="foto" ></img>
          </div>
        </div>
        <div className="name">
          <h1><span>I Putu Permana </span> Adi Putra</h1>
          <h2>Software Engineering Major</h2>
          <div id="line"></div>
          <div id="line2"></div>
          <div id="line3"></div>
          <div className="desc">
            <div className="profil">
              <div className="bg">
                <h1>Profile</h1>
              </div>
            </div>
            <div id="line4"></div>
            <div className="ketprofile">
              <p>I study at SMK Negeri 1 Denpasar, majoring in software engineering, currently I am doing field work practice at PT Taksu Teknologi Indonesia</p>
            </div>
            <div className="edukasi">
              <div className="bg2">
                <h1>Education</h1>
              </div>
            </div>
            <div className="ketedukasi">
              <h3>SMK NEGERI 1 DENPASAR</h3>
              <p>eleventh grade second semester, Software Engineering Major (2021-2024) </p>
            </div>
            <div className="pengalaman">
              <div className="bg3">
                <h1>Experience</h1>
              </div>
            </div>
            <div className="ketpengalaman">
              <ul><li>Ever made a food product design for entrepreneurship</li></ul>
            </div>
            <div className="ketpengalaman2">
              <ul><li>Participated in groups, making kebab from start to finish (designing  product design to product sales)</li></ul>
            </div>
            <div className="title1">
              <h1>Telephone</h1>
            </div>
            <div className="phonecall">
              <a href="https://wa.me/6289602695075"><img src={phone} className="phonecall" alt="phone"></img></a>
            </div>
            <div className="number">
              <p>+62 896-0269-5075</p>
            </div>
            <div className="title2">
              <h1>Email</h1>
            </div>

            <div className="email">
              <a href="mailto:iputupermanaadiputra@gmail.com"><img src={mail} className="email" alt="mail"></img></a>
            </div>
            
            <div className="teksmail">
              <p>iputupermanaadiputra@gmail.com</p>
            </div>
            <div className="title3">
              <h1>Address</h1>
            </div>
            <div className="addres">
              <a href="https://goo.gl/maps/vcEnZoPNH4sX1M5a8"><img src={location} className="addres" alt="location"></img></a>
            </div>
            <div className="textaddres">
              <p>Jl.Patih Nambi Utara 4 No 15</p>
            </div>
            <div className="title5">
              <h1>Github</h1>
            </div>
            <div className="github">
              <a href="https://github.com/TanganIkan"> <img src={git} className="github" alt="git"></img></a>
            </div>
            <div className="githubtext">
              <p>TanganIkan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;