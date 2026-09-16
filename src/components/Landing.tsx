import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">

          {/* Floating code background effect */}
          <div className="floating-code-container">
            <div className="code-snippet code-1">{"const init = async () => {\n  await system.boot();\n  return true;\n};"}</div>
            <div className="code-snippet code-2">{"function optimize(data) {\n  return data.map(d => \n    transform(d));\n}"}</div>
            <div className="code-snippet code-3">{"<Model\n  loading={progress}\n  intensity={1.5}\n/>"}</div>
            <div className="code-snippet code-4">{"model.compile({\n  optimizer: 'adam',\n  loss: 'mse'\n});"}</div>
            <div className="code-snippet code-5">{"SELECT * FROM users\nWHERE active = true\nORDER BY created DESC;"}</div>
          </div>

          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>An</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{config.developer.title}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{config.developer.title}</div>
            </h2>
          </div>
          {/* Mobile fallback — show stylized initials avatar */}
          <div className="mobile-photo">
            <div className="mobile-avatar">{(firstName[0] || '') + (lastName[0] || '')}</div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
