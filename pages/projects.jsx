import Link from 'next/link'

export default function Projects(){
    return <>
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
      #nav a {
        color: black;
        text-decoration: none;
        font-size: 20px;
        margin-right: 24px;
      }
      .highlight h5 {
        margin-top: 24px;
      }
      h3 {
        margin-bottom: 42px;
      }
      .project-item {
        text-decoration: none;
        color: black;
        line-height: 10px;
      }
      .project-item:hover {
        color: black;
      }
      .project-item h2 {
        font-size: 24px;
        margin-top: 24px;
      }
      .project-item h4 {
        font-size: 18px;
      }
      .project-item p {
        line-height: 24px;
      }
        `}</style>
        <div className="row main-header">
        <div className="col-md-6 col-12">
          <h1 id="typeface">The <br /> Island <br /> Lab</h1>
          <h3>Projects</h3>
        </div>
        <div className="col-md-6 col-12">
          <Link className="project-item" href="/eatolls">
            <img className="img-fluid" src="img/eatolls.png" />
            <h2>EATOLLS</h2>
            <h4>A future food system for the Maldives</h4>
            <p>By students of MA Biodesign from Central Saint Martins | University of the Arts London</p>
          </Link>
        </div>
      </div>
      <div className="row section">
        <div className="col-4">MA Biodesign</div>
        <div className="col-4">Roboy</div>
        <div className="col-4">Island Sessions Online</div>
      </div>
    </>
}