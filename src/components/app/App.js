import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {

  const data = [
    {name: 'Masha', salary: 600, increase: true},
    {name: 'Katya', salary: 400, increase: false},
    {name: 'Kristina', salary: 500, increase: true}
  ]

  return (
    <div className="app">
      <AppInfo/>
      <div className='search-panel'>
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployersList data={data}/>
      <EmployersAddForm/>
    </div>
  );
}

export default App;