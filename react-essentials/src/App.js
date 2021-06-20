import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
    <header>Awesome header yo {props.className}🔥</header>
  )
}
function Section(props) {
  return (
    <section>This in my Awesome main Area is for doing {props.content} 🥸
      <p>
        <ul>
          {props.dishes.map((dish) => <li>{dish}</li>)}
        </ul>
      </p>
    </section>
  )
}
function Footer(){
  return(
    <footer>Footer stuff 🥸🤣</footer>
  )
}
const dishes=["Atta Maggi", "Green Maggie", "Gazab Noodles"]
function App() {
  return (
    <div className="App">
      <Header className="Nikhil"/>
      <Section content="Some bla bla bla" dishes={dishes}/>
      <Footer />
    </div>
  );
}

export default App;
