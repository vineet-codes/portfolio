import styled from "styled-components";
import Image from "next/image";
import { blob } from "stream/consumers";
import { FaBriefcase } from "react-icons/fa";


// const jobs = [
//   {
//     company: "CitiGroup",
//     logo: "logo",
//     title: "VP",
//     date: "2015-2021"
//   },
//   {
//     company: "Pluto Digital",
//     logo: "logo",
//     title: "Defi Product Manager",
//     date: "Nov 2021 - May 2022"
//   },
//   {
//     company: "VeChain Foundation",
//     logo: "logo",
//     title: "Senior Product Manager",
//     date: "Jun 2022 - present"
//   }
// ];

const Work = styled.div`
  border: 2px solid rgba(63,63,70,.4);
  border-radius: 1rem;
  padding: 1.6em;

  font-size: 10px;

  * {
    margin: 0;
    padding:0;
  }

  .title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.2rem;
    margin-left: 0.4rem;

    opacity: 50%;
  }

  .job {
    display: grid;
    grid-template-columns: 1fr 2fr auto 1fr;
    margin-bottom: 1rem;
    /* border: 1px solid tomato; */

    .job-logo {
      grid-column: 1/ span 1;
      align-self: center;

      img {
        border-radius: 50px;
      }
    }

    .job-pos {
      grid-column: 2/span 3;
      font-size: 12px;
      align-self: center;

      p {
        font-weight: 300;
      }

      .pos-title {
        align-self: flex-start;
        opacity: 80%;
      }

      .job-company {
        align-self: flex-start;
        opacity: 60%;
      }
    }

    .job-dates {
      font-size: 10px;
      opacity: 40%;
      grid-column: -1 / span 1;
      align-self: center;
    }
  }
`;

const Jobs = ({jobs}) => {
  return (
    <Work>
      <div className="title">
        <FaBriefcase size={"15px"} />
        <h2>Work</h2>
      </div>
      {jobs.map(job => (
        <div key={job.id} className="job">
          <div className="job-logo">
            <Image src="/assets/vineet.jpg" width={40} height={40} alt="company logo"/>
          </div>
          <div className="job-pos">
            <p className="pos-title">{job.title}</p>
            <p className="job-company">{job.company}</p>
          </div>
          <p className="job-dates">{job.dates}</p>
        </div>
      ))}
    </Work>
  )
}

export default Jobs;