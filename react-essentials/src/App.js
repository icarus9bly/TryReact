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
        <ul style={{ textAlign: 'left'}}>
          {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
        </ul>
    </section>
  )
}
function Footer(){
  return(
    <footer>Footer stuff 🥸🤣</footer>
  )
}
const dishes=["Atta Maggi", "Green Maggie", "Gazab Noodles"]
const dishObject= dishes.map((dish, i) => {
  return {"id":i, "title":dish}
})
console.log(dishObject)
function App() {
  return (
    <div className="App">
      <Header className="Nikhil"/>
      <Section content="Some bla bla bla" dishes={dishObject}/>
      <Footer />
    </div>
  );
}

export default App;
