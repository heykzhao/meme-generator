import "../style/Footer.css";
import githubLogo from "../images/github-logo.png";

function Footer() {
  return (
    <div className='nameplate noselect'>
      <span className='copyright'>Made by <a href='https://github.com/heykzhao' target='_blank' rel='noreferrer'>heykzhao</a></span>
      <span>
          <a href='https://github.com/heykzhao' target='_blank' rel='noreferrer'>
            <img 
              src={githubLogo}
              className='github-logo'
              alt="Github logo"
            />
          </a>
      </span>
    </div>
  )
}

export default Footer;