const P = ({ children }) => (
  <p>
    {children}
    <style>{`
      p {
        color: rgba(0, 0, 0, 0.87);
        font-weight: 400;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        line-height: 1.6;
        font-size: 16px;
      }
    `}</style>
  </p>
);

const H1 = ({ children }) => (
  <h1>
    {children}
    <style>
      {`
        h1 {
          color: rgba(0, 0, 0, 0.54);
          margin: 32px 0 24px;
          font-size: 2.125rem;
          font-weight: 400;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.20588em;
        }
      `}
    </style>
  </h1>
);

const H2 = ({ children }) => (
  <h2>
    {children}
    <style>
      {`
        h2 {
          color: rgba(0, 0, 0, 0.54);
          margin: 32px 0 24px;
          font-size: 2.125rem;
          font-weight: 400;
          font-family: Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.20588em;
        }
      `}
    </style>
  </h2>
);

const UL = ({ children }) => (
  <ul>
    {children}
    <style>
      {`
        ul {
          line-height: 1.6;
        }
      `}
    </style>
  </ul>
);

const LI = ({ children }) => (
  <li>
    {children}
    <style>
      {`
        li {
          display: list-item;
          font-size: 16px;
          font-family: Roboto, Helvetica, Arial, sans-serif;
        }
      `}
    </style>
  </li>
);

const components = {
  h1: H1,
  h2: H2,
  li: LI,
  p: P,
  ul: UL
};

export default components;
