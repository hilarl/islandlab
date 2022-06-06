import { client, urlFor } from "../helpers/sanityClient";

export default function Unicef({ mentors }) {
  return (
    <>
      <style jsx>{`
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
          margin-bottom: 60px;
          margin-top: 24px;
        }
        .btn-bck {
          background-color: black;
          color: white;
          padding: 24px;
        }
        .brands {
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
        #nav a {
          color: black;
          text-decoration: none;
          font-size: 20px;
          margin-right: 24px;
        }
        a {
          color: black;
        }
        a:hover {
          color: black;
        }
        .imagec {
          font-size: 12px;
          color: #ccc;
        }
      `}</style>
      <div id="ocean"></div>
      <div className="section">
        <h1>Climate Innovation Program</h1>
        <p>
          The Eco Org and UNICEF have partnered to launch an initiative for
          young people that encourages climate innovation – the initiative will
          include a set of protocols for engaging young people, technologists,
          private sector, and civil society in problem-solving.
        </p>
        <a href="press-release.html">Press release</a>
      </div>
      <div className="section">
        <h1>Open for applications from 7 June 2022</h1>
      </div>
      <div className="section">
        <h1>Challenges</h1>
        <div className="row sub-section challenges">
          <p className="col-12 col-md-6">
            <span className="challenge-number">1.</span> Develop design
            materials and products from plastic waste.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">2.</span> Develop zero emission
            water transportation systems.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">3.</span> Develop concepts that
            can contribute to a circular economy.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">4.</span> Develop concepts for
            eco tourism.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">5.</span> Develop systems to
            generate renewable energy.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">6.</span> Develop smart
            technologies to make energy use more efficient.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">7.</span> Develop systems that
            can conserve marine ecosystems.
          </p>
          <p className="col-12 col-md-6">
            <span className="challenge-number">8.</span> Develop systems for
            sustainable food production.
          </p>
        </div>
      </div>
      <div className="section">
        <p className="journey">
          The journey from Innovation to entrepreneurship requires support from
          various industry experts and other stakeholders. It needs to create a
          culture that embraces experimentation, and constantly evaluates and
          recognizes problems as opportunities for designing a novel solution.
          Our program gives you access to:
        </p>
      </div>
      <div className="row section">
        <div className="row business-support">
          <div className="business-support-item col-12 col-md-6">
            - Mentorship from industry veterans and experts across creative and
            technical fields.
          </div>
          <div className="business-support-item col-12 col-md-6">
            - Curated programming on topics ranging from business strategy,
            growth and management to fundraising.
          </div>
          <div className="business-support-item col-12 col-md-6">
            - Networking events and opportunities to learn from a curated cohort
            of entrepreneurs from around the world.
          </div>
          <div className="business-support-item col-12 col-md-6">
            - Potential for commercial support and partnerships.
          </div>
        </div>
      </div>
      <div className="row section">
        <h1>Tools</h1>
      </div>
      <div className="row sub-section">
        <div className="col-12 col-md-4 resource">
          <img className="img-fluid" src="img/preciousplastic.jpg" />
          <h5>Precious Plastic Machines</h5>
        </div>
        <div className="col-12 col-md-4 resource">
          <img className="img-fluid" src="img/3dprinter.jpg" />
          <h5>3D Printers</h5>
        </div>
        <div className="col-12 col-md-4 resource">
          <img className="img-fluid" src="img/foam.jpg" />
          <h5>Vacuum Formers</h5>
        </div>
        <div className="col-12 col-md-4 resource">
          <img className="img-fluid" src="img/torqeedo.jpg" />
          <h5>Electric Boat Motors *</h5>
        </div>
        <div className="col-12 col-md-4 resource">
          <img className="img-fluid" src="img/oculus.jpg" />
          <h5>Extended Reality</h5>
        </div>
        <div className="col-12 col-md-4 resource">
          <img className="img-fluid" src="img/blockchain.jpg" />
          <h5>Blockchain</h5>
        </div>
      </div>
      <div className="row imagec">
        <p>* Not available on site</p>
        <p>Images Copyright:</p>
        <p>
          1. Precious Plastic <br />
          2. Creality
          <br />
          3. Mayku
          <br />
          4. Torqeedo
          <br />
          5. Oculus
        </p>
      </div>
      <div className="row section" id="spaces">
        <h1>Labs</h1>
      </div>
      {/* <div className="row sub-section">
         <div className="col-md-6 col-12 space">
           <img className="img-fluid" src="img/themakerspace.jpg" />
           <h5>The Makerspace</h5>
         </div>
         <div className="col-md-6 col-12 space">
           <img className="img-fluid" src="img/banyan.jpg" />
           <h5>Banyan Tree Marine Labs</h5>
         </div>
       </div>  */}
      <div className="section" id="projects">
        <h1>Events</h1>
        <p className="events">No upcoming events</p>
      </div>
      <div className="section row" id="team">
        <h1>Mentors</h1>
      </div>
      <div className="row">
        <div className="sub-section row">
          <div className="col-md-12 col-12">
            <div className="row">
              {mentors.members &&
                mentors.members.map((member, i) => (
                  <div key={i} className="col-md-4 col-12 team-member">
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
      </div>
    </>
  );
}

export async function getStaticProps() {
  const query = `
  *[_type in['team'] && name == "Mentors"][0] {
      members[]->
  }
`;
  const mentors = await client.fetch(query);

  return {
    props: { mentors },
  };
}
