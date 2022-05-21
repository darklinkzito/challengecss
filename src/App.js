import './App.css';
import Cars from "./components/Cars";


function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Red", km: 0 },
    { id: 2, brand: "KIA", color: "Purple", km: 6564 },
    { id: 3, brand: "Neesan", color: "White", km: 13452343},
  ];
  return (
    <div className="App">
    <h1 className="title">Lista de Carros</h1>
      {cars.map((car) => (
        <Cars key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
    </div>
  );
}

export default App;
