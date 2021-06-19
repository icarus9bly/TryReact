import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <header>Awesome header yo 🔥</header>
  )
}
function Section(){
  return(
    <section>This in my Awesome main Area 🥸</section>
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
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
