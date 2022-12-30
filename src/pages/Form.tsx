import { useState } from "react";
import ReactDOM from "react-dom/client";
import '../Form.css';

export default function Form() {
  const [inputs, setInputs] = useState({});

  const Change = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const Submit = (event: any) => {
    event.preventDefault();
    alert('hello');
  }

  return (
    <form onSubmit={Submit}>
      <div className="bgrn">
      <label className="title10">Enter your name
      <div className="form">
        <input 
          type="text"
          name="username"
          onChange={Change}
        />
        <button type="submit">submit</button>
        </div>
      </label>
      </div>
    </form>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Form />);