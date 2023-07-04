
import './App.css';

function App() {

  fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr',{

    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a36c4463camsh5d952167e71549ep171413jsn476d49e3f670',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  })
  
  .then(response =>{
    console.log(response.json());
  })
  .catch(err => {
    console.error(err);
  });

  


// try {
//   const response = await fetch(url, options);
//   if (response.ok) {
//     const result = await response.json();
//     console.log(result);
//   } else {
//     throw new Error('Request failed with status ' + response.status);
//   }
// } catch (error) {
//   console.error(error);
// }




  

  return (
    <div className="App">
      rapid api movie schengenn,fd 
    </div>
  );
}

export default App;
