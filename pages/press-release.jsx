import Link from 'next/link'

export default function PressRelease() {
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
        h5 {
          margin-top: 42px;
        }
        .date {
          margin: 24px 0;
          font-size: 18px;
        }
        .heading {
          line-height: 42px;
        }
        .program-btn {
          background: black;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 400;
          padding: 16px 42px;
          margin-top: 32px;
          display: inline-block;
          color: white;
          text-decoration: none;
        }
        .program-btn:hover {
          color: white;
        }
      `}</style>
      <div id="ocean"></div>
      <div className="section">
        <h1 className="heading">
          The Eco Org and UNICEF launch an initiative for young people to help
          address climate change through innovation
        </h1>
        <p className="date">29 May 2022</p>
        <p>
          The Eco Org, in partnership with UNICEF, launched an initiative for
          young people that encourages climate innovation in Maldives. Maldives
          urgently requires climate solutions, as the current rates of global
          warming could make 80% of Maldives uninhabitable in the near future.
        </p>
        <p>
          Through this program, Young people will be given opportunity to
          develop innovative ideas on Climate change through various hackathons
          and workshops. To further nurture these ideas, a ‘Climate Innovation
          Lab’ is also being developed in partnership with other agencies, where
          young people will be given tools, equipment and mentorship support. In
          this facility, it is anticipated that the young people will be able to
          develop, test and innovate climate solutions for the country.
        </p>
        <p>
          The curriculum for the program will be developed using the experience
          of Eco Org’s Island Lab, together with its network of international
          experts. Discussions with department of Climate Change, Education and
          National Skills Development Authority will be initiated to bring
          synergy between similar initiatives.
        </p>
        <p>
          The Island Lab started off as an initiative by The Eco Org in 2021,
          designed to raise awareness for new technologies, and provide support
          for innovators working on solutions for climate change. The Eco Org
          previously partnered with UAL: Central Saint Martins and Ooredoo
          Maldives to launch programs under The Island Lab.
        </p>
        <p>
          Contact: <br /> +960 9697879 <br /> i@theislandlab.com
        </p>
        <p>
          <Link className="program-btn" href="/unicef">
            Learn more
          </Link>
        </p>
      </div>
    </>
  );
}
