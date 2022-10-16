import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md";


const NewsLetter = styled.div`

  margin-top: 3rem;
  margin-bottom: 5rem;

  border: 2px solid rgba(63,63,70,.4);
  border-radius: 1rem;
  padding: 1.6em;

  display: flex;
  flex-direction: column;

  .nw-tagline {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    opacity: 40%;
    margin:0;

    h2 {
      font-size: 1rem;
      margin:0;
    }
  }

  p {
    margin:0;
    margin-top: 0.6rem;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem;
    color: ${(props) => props.theme.colors.primary};
    opacity:40%;
  }

  .form-s{
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .custom-field {
    margin:0;
    position: relative;
    font-size: 14px;
    padding-top: 20px;
    margin-bottom: 5px;

    input {
      border: none;
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;
      background: #1d1d21;
      padding: 12px;
      border-radius: 6px;
      width: 200px;
      outline:none;
      color: #f4f3f3;
    }

    .placeholder {
      position: absolute;
      left: 12px;
      top: calc(50% + 10px);
      transform: translateY(-50%);
      color: #7a7878;
      transition: 
        top 0.3s ease,
        font-size 0.3s ease,
        color 0.3s ease;
    }

    input:valid + .placeholder ,
    input:focus + .placeholder {
      top: 10px;
      font-size: 10px;
    }
  }

  .custom-field.one input {
    background: none;
    border: 2px solid #747474;
    transition: border-color 0.3s ease;
  }

  .custom-field.one input + .placeholder {
    padding: 0 5px;
    left: 8px;
  }

  .custom-field.one input:valid,
  .custom-field.one input:focus {
    border-color: #363636;
    transition-delay: 0.1s;
  }

  .custom-field.one input:valid + .placeholder,
  .custom-field.one input:focus + .placeholder{
    top: 20px;
    background: #18181b;

  }

  button {
    display: inline;
    padding: 8px 16px;
    width: 62px;
    height: 42px;
    border: none;
    border-radius: 8px;
    color: #ffffff;
    background: #494e55;

    &:hover {
      background: #686f79;
      cursor: pointer;
    }
  }

`;


const Newsletter = () => {

  return (
    <NewsLetter>
      <div className="nw-tagline">
        <MdOutlineMail size="20px"/>
        <h2>Stay up to date</h2>
      </div>
      <p>Get notified when I publish something new, and unsubscribe at any time.</p>

      <div className="form-s">
        <label className="custom-field one">
          <input type="email" required />
          <span className="placeholder">Enter Email</span>
        </label>
        <button>Join</button>
      </div>
    </NewsLetter>
  )
}
export default Newsletter;