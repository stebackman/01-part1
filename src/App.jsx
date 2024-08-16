const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, tämä on hellokomponentti</p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);
  console.log("Tämä on tilanne komponentissa nyt:");

  return (
    <div>
      <Hello name="Stefan" />
      <Hello name="Vadim" />
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

export default App;
