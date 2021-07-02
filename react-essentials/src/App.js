import logo from "./logo.svg";
import "./App.css";

//Our Header component
function Header(props) {
  return <header>Awesome header yo {props.className}🔥</header>;
}
//Our Section component
function Section(props) {
  return (
    <section>
      <p>This in my Awesome main Area is for doing {props.content} 🥸</p>
      <img src="https://github.com/icarus9bly.png" height={400}></img>
      <ul style={{ textAlign: "left" }}>
        {/* This is how to you do comments in JSX
        Mapping over dishes prop and returning <li>
        */}
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}
//Our Footer component
function Footer() {
  return <footer>Footer stuff 🥸🤣</footer>;
}
// Some dishes array
const dishes = ["Atta Maggi", "Green Maggie", "Gazab Noodles"];
// mapping dishes array to hold id in json object(aka Python dict😁) to avoid react key warning
const dishObject = dishes.map((dish, i) => {
  return { id: i, title: dish };
});
console.log(dishObject);
function App() {
  return (
    <div className="App">
      <Header className="Nikhil" />
      <Section content="Some bla bla bla" dishes={dishObject} />
      <Footer />
    </div>
  );
}

export default App;
