import Link from "next/link";
import CustomImage from "../components/CustomImage";
import { fetchTeams } from "../helpers/fetcher";
import { urlFor } from "../helpers/sanityClient";

const Styles = `
#logo {
  margin-top: 80px;
  height: 90px;
}
#typeface {
  margin-top: 60px;
  font-weight: 900;
  line-height: 0.9;
  font-size: 102px;
}
.main-header {
  margin-top: 40px;
}
.container {
  max-width: 1200px;
}
.head {
  margin-bottom: 42px;
  margin-top: 62px;
}
.date {
  margin-top: 24px;
}
.press-release {
  margin-top: 42px;
  margin-bottom: 62px;
}
.section {
  margin-top: 120px;
}
.sub-section {
  margin-top: 80px;
}
.icon {
  height: 60px;
  margin-bottom: 24px;
}
.focus-box {
  text-align: center;
}
.team-member {
  margin-bottom: 60px;
}
.team-name {
  font-size: 18px;
}
.team-experience {
  font-size: 12px;
}
.space h5 {
  margin-top: 24px;
}
.cright {
  font-size: 18px;
  margin-bottom: 60px;;
  margin-top: 24px;
}
.btn-bck {
  background-color: black;
  color: white;
  padding: 24px;
}
.btns {
  text-decoration: none;
}
.brands {
  margin-top: 60px;
}
.brands-m {
  max-width: 390px;
  max-height: 246px;
  margin-top: 60px;
}
.events {
  margin-top: 24px;
  font-size: 18px;
}
.team-heading {
  font-size: 22px;
}
#nav {
  margin-top: 60px;
}

.highlight h5 {
  margin-top: 24px;
  line-height: 32px;
}
.climate-heading {
  margin-top: 20px;
  margin-bottom: 0px;
  line-height: 30px;
}
.pressrelease {
  color: black;
  font-size: 14px;
}
.pressrelease:hover {
  color: black;
}
.project-highlight {
  text-decoration: none;
  color: black;
}
.project-highlight:hover {
  color: black;
}
`;

export default function Home({ teams }) {
  return (
    <>
      <style jsx>{Styles}</style>
      <div className="row main-header">
        <div className="col-md-6 col-12">
          <h1 id="typeface">
            The <br /> Island <br /> Lab
          </h1>
        </div>
        <div className="col-md-6 col-12">
          <Link href="/unicef">
            <a className="project-highlight">
              <img className="img-fluid" src="img/banner.png" />
              <h5 className="climate-heading">
                Climate Innovation Program by The Eco Org and UNICEF
              </h5>
            </a>
          </Link>
          <Link href="/press-release">
            <a className="pressrelease">Press release</a>
          </Link>
        </div>
      </div>
      <div className="row section">
        <div className="col-md-6 col-sm-12">
          <h1>We help build ideas that help save our planet</h1>
        </div>
        <div className="col-md-6 col-sm-12">
          <p>
            We are entrepreneurs, researchers, scientists, designers, engineers,
            product managers, and investors, working towards a common goal.
          </p>
        </div>
      </div>
      <div className="row section">
        <div className="col-md-6 col-sm-12">
          <Link className="btns" href="/unicef">
            <a>
              <h4 className="btn-bck">Have an idea you want to build?</h4>
            </a>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12">
          <Link href="/projects">
            <a className="btns">
              <h4 className="btn-bck">Projects we have supported</h4>
            </a>
          </Link>
        </div>
      </div>
      <div className="section">
        <h1>The future is circular</h1>
        <div className="row sub-section">
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/product.png" />
            <p className="focus">Sustainable Product Design</p>
          </div>
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/energy.png" />
            <p className="focus">Renewable Energy</p>
          </div>
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/mobility.png" />
            <p className="focusm">Zero Emission Mobility</p>
          </div>
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/ai.png" />
            <p className="focusm">Automation and AI</p>
          </div>
        </div>
        <div className="row sub-section">
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/conservation.png" />
            <p className="focus">Ecological Conservation</p>
          </div>
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/tourism.png" />
            <p className="focus">Eco Tourism</p>
          </div>
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/food.png" />
            <p className="focus">Sustainable Food Production</p>
          </div>
          <div className="col-md-3 col-6 focus-box">
            <img className="icon" src="img/circular.png" />
            <p className="focus">Circular Economy</p>
          </div>
        </div>
      </div>
      <div className="section" id="projects">
        <h1>Upcoming events</h1>
        <p className="events">No upcoming events</p>
      </div>
      <div className="section row">
        <div className="col-md-10 col-12">
          <h1>
            We have been contributing to sustainable innovation since we
            launched
          </h1>
        </div>
      </div>
      <div className="row sub-section">
        <div className="col-md-4 col-12 highlight">
          <Link href="/eatolls">
            <a className="project-highlight">
              <img className="img-fluid" src="img/eatolls.png" />
              <h5>
                MA Biodesign at Central Saint Martins, University of the Arts
                London
              </h5>
            </a>
          </Link>
        </div>
        <div className="col-md-4 col-12 highlight">
          <img className="img-fluid" src="img/roboy.jpg" />
          <h5>Roboy Telepresence with Ooredoo Maldives</h5>
        </div>
        <div className="col-md-4 col-12 highlight">
          <img className="img-fluid" src="img/islandsessions.jpg" />
          <h5>Island Sessions Online</h5>
        </div>
      </div>
      <div className="section row" id="team">
        <h1>Our teams</h1>
      </div>
      <div className="row">
        {teams.map((team, i) => (
          <div key={i} className="sub-section row">
            <div className="col-md-4 col-12">
              <h3 className="team-heading">{team.name}</h3>
            </div>
            <div className="col-md-8 col-12">
              <div className="row">
                {team.members &&
                  team.members.map((member, j) => (
                    <div key={j} className="col-md-6 col-12 team-member">
                      <div className="row">
                        <div className="col-4">
                          <img
                            className="img-fluid"
                            src={urlFor(member.thumbnail)}
                          />
                        </div>
                        <div className="col">
                          <h4 className="team-name">{member.name}</h4>
                          <p className="team-experience">{member.about}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="row sub-section" id="spaces">
        <h1>Spaces we work with</h1>
      </div>
      <div className="row sub-section">
        <div className="col-md-6 col-12 space">
          <img className="img-fluid" src="img/themakerspace.jpg" />
          <h5>The Makerspace</h5>
        </div>
        <div classNameName="col-md-6 col-12 space">
          <img className="img-fluid" src="img/banyan.jpg" />
          <h5>Banyan Tree Marine Labs</h5>
        </div>
      </div> */}
      <div className="row section">
        <h1>Brands we have worked with</h1>
        <img
          className="brands img-fluid d-none d-md-block"
          src="img/brands.png"
        />
        <img className="brands-m d-md-none" src="img/brands-m.png" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const teams = await fetchTeams();

  return {
    props: { teams },
  };
}
