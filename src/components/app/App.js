import { Component } from 'react';
import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     data: [
        {name: 'Masha', salary: 600, increase: true, rise: true, id: 1},
        {name: 'Katya', salary: 400, increase: false, rise: false, id: 2},
        {name: 'Kristina', salary: 500, increase: true, rise: false, id: 3}
      ]
    }
  }

  deleteItem = id => {
    this.setState(({data}) => {
      return {
        data: data.filter(it => it.id !== id)
      }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
        name, 
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
          data: newArr
      }
    });
  } 

  onToggleIncrease = id => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }

        return item;
      })
    }));
  }

  onToggleRise = id => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }

        return item;
      })
    }));
  }

  render () {
    const employees = this.state.data.length
    const increased = this.state.data.filter(item => item.increase).length

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
        <div className='search-panel'>
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployersList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;