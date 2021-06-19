import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
    <header>Awesome header yo {props.className}🔥</header>
  )
}
function Section(props){
  return(
    <section>This in my Awesome main Area is for doing {props.content} 🥸</section>
  )
}
function Footer(){
  return(
    <footer>Footer stuff 🥸🤣</footer>
  )
}
function App() {
  return (
    <div className="App">
      <Header className="Adi"/>
      <Section content="Some bla bla"/>
      <Footer />
    </div>
  );
}

export default App;
