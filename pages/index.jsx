import { urlFor, fetchChallenge } from "../helpers";
import { useState } from "react";
import ApplyButton from "../components/ApplyButton";

export default function Unicef({ challenge }) {
  return (
    <>
      <header>
        <div className="yellow rounded-2xl my-8 flex flex-col min-h-[600px] mx-2 sm:mx-5 justify-center items-center gap-8">
          <div className="flex flex-col justify-center items-center text-center gap-3 max-w-2xl p-10">
            <h1 className="mb-4 text-white">Climate innovation youth challenge</h1>
            <h5 className="mb-4">Application Deadline: 3 August 2022</h5>
            <ApplyButton />
          </div>
        </div>
      </header>
      <div className="items-center partners-div">
      <h5 className="mt-10">Implementing partners</h5>
      <div className="mb-12 mt-6">
        <img className="h-7 sm:h-12 logos" src={urlFor(challenge?.partners[0])} alt="Partners" />
          {/* {challenge?.partners &&
            challenge?.partners.map((partner, _id) => (
              <div key={_id}>
                <img src={urlFor(partner)} alt={partner} />
              </div>
            ))} */}
      </div>
      </div>
      <div className="bg-blue-700 py-3 text-white">
        <section className="flex flex-col justify-center gap-0 max-w-2xl">
          <p>
            The Eco Org and UNICEF have partnered to launch an initiative for
            young people that encourages climate innovation – the initiative
            will include a set of protocols for engaging young people,
            technologists, private sector, and civil society in problem-solving.
          </p>
          <div className="mt-5">
            <p>
              The journey from Innovation to entrepreneurship requires support
              from various industry experts and other stakeholders. It needs to
              create a culture that embraces experimentation, and constantly
              evaluates and recognizes problems as opportunities for designing a
              novel solution.
            </p>
            <div className="bg-white px-5 py-3 md:px-7 text-gray-900 mt-10 p-10 rounded-lg">
              <h6 className="uppercase blue-t font-semibold text-sm mb-6 mt-6 ml-2">
                Our program gives you access to:
              </h6>
              <ul className="liststyled pl-5 pb-5">
                <li>
                  Mentorship from industry veterans and experts across creative
                  and technical fields.
                </li>
                <li>
                  Curated programming on topics ranging from business strategy,
                  growth and management to fundraising.
                </li>
                <li>
                  Networking events and opportunities to learn from a curated
                  cohort of entrepreneurs from around the world.
                </li>
                <li>Potential for commercial support and partnerships.</li>
                <li>Prototyping tools and resources.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="sticky-header">
          <h2>Program mentors</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 content gap-x-4 gap-y-6">
          {challenge?.mentors &&
            challenge?.mentors.map((mentor, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-20 h-20 rounded-full blue-bg mb-2 overflow-hidden">
                  <img src={urlFor(mentor?.thumbnail)} alt="" />
                </div>
                <h3>{mentor?.name}</h3>
                <p>{mentor?.about}</p>
              </div>
            ))}
        </div>
      </section>
      <section id="challenges">
        <div className="sticky-header">
          <h2>Challenges</h2>
          <p>
            Submit your innovative climate solution to one of the following 8
            challenges
          </p>
        </div>
        <ul className="content grid md:grid-cols-2">
          {challenge?.challenges &&
            challenge?.challenges.map((challenge, i) => (
              <li key={i} className="bg-white rounded- px-4 py-3 rounded-lg">
                {challenge}
              </li>
            ))}
        </ul>
      </section>
      <section>
        <div className="sticky-header">
          <h2>Tools and resources</h2>
          <p>
            Submit your innovative climate solution to one of the following 8
            challenges
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 content">
          {challenge?.tools_resources &&
            challenge?.tools_resources.map((tool, i) => (
              <div key={i}>
                <div className="w-full rounded-lg bg-blue-700 overflow-hidden">
                  <img src={urlFor(tool?.image)} alt={tool?.name} />
                </div>
                <h3 className="md:text-xl">{tool?.name}</h3>
              </div>
            ))}
        </div>
      </section>
      <section id="application">
        <div className="sticky-header">
          <h2>Application</h2>
          <p className="mb-3">
            Submit your innovative climate solution to one of the following 8
            challenges
          </p>
          <ApplyButton />
        </div>
        <ul className="content bg-blue-700 px-9 py-5 rounded-xl font-medium text-white">
          {challenge?.application &&
            challenge?.application.map((application, i) => (
              <li key={i}>{application}</li>
            ))}
        </ul>
      </section>
      <section>
        <div className="sticky-header">
          <h2>FAQ</h2>
        </div>
        <div className="content flex flex-col gap-4">
          {challenge?.faqs &&
            challenge?.faqs.map((faq, i) => (
              <Accordion
                key={i}
                question={faq?.question}
                answer={faq?.answer}
              />
            ))}
        </div>
      </section>
    </>
  );
}

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <h5
        onClick={() => setIsOpen((state) => !state)}
        className="text-xl cursor-pointer"
      >
        {question}
      </h5>
      <hr className="bg-gray-500 mt-2 mb-4" />
      {isOpen && <p>{answer}</p>}
    </div>
  );
};



export async function getStaticProps() {
  const challenge = await fetchChallenge();

  return {
    props: { challenge },
  };
}
