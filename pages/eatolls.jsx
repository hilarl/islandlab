export default function Eatolls() {
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
        .eatolls h1 {
          margin-bottom: 24px;
        }
        .eatolls h6 {
          margin-bottom: 24px;
          line-height: 24px;
        }
        .eatoll-img {
          margin-top: 24px;
        }
      `}</style>
      <div className="row main-header">
        <div className="col-md-6 col-12">
          <h1 id="typeface">EATOLLS</h1>
        </div>
        <div className="col-md-6 col-12"></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 eatolls">
          <h1>A Future Food System for the Maldives</h1>
          <h6>
            MALU LÜCKING, LUCREZIA ALESSANDRONI, FILIPPO CAPRIOLI, AIMÉE LAM,
            CÉLINA CAMBONI, ANSHUMAN GUPTA, ETHAN BENNAROCH, QI LIU, MENGDI ZHAO
          </h6>
          <p>
            Eatolls aims to improve the infertile soil ecology of the Maldives
            through the use of custom designed bioreactors. The devices balance
            alkalinity in the soil while growing nutritious microorganisms. When
            dried and ground into a powder, these microorganisms can be used in
            traditional Maldivian cooking.
          </p>
        </div>
        <div className="col-12 col-md-4">
          <img className="img-fluid" src="img/eatolls.png" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-3">
          <img className="img-fluid eatoll-img" src="img/eatolls2.png" />
        </div>
        <div className="col-12 col-md-3">
          <img className="img-fluid eatoll-img" src="img/eatolls3.png" />
        </div>
        <div className="col-12 col-md-3">
          <img className="img-fluid eatoll-img" src="img/eatolls4.png" />
        </div>
        <div className="col-12 col-md-3">
          <img className="img-fluid eatoll-img" src="img/eatolls5.png" />
        </div>
      </div>

      <div className="row sub-section">
        <p className="cright">© 2022 The Eco Organization</p>
      </div>
    </>
  );
}
