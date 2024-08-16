const Hello = (props) => {
  return (
    <div>
      <h1>
        Hello {props.nimi}, olen {props.age} vuotta vanha
      </h1>
    </div>
  );
};
const Footer = () => {
  return <div>kokeilu</div>;
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Tämä on tilanne komponentissa nyt:Hello");

  return (
    <div>
      <Hello nimi="Stefan" age={32 + 22} />
      <Hello nimi="Vadim" age={a} />
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Footer />
    </div>
  );
};

export default App;
