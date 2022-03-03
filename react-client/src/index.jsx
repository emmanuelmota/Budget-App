import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CategoryList from './components/CategoryList.jsx'
// import data from './dummy_data';
import TransactionList from './components/TransactionList.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      categories: [],
      categoryToAdd: '',
      budgetToAdd: '',
    };
    this.getTransactionData = this.getTransactionData.bind(this);
    this.getCategoryData = this.getCategoryData.bind(this);
    this.getAllData = this.getAllData.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.submitNewCat = this.submitNewCat.bind(this);
    this.patchCatAndCount = this.patchCatAndCount.bind(this);
  }

  componentDidMount() {
    this.getAllData();
  }

  getAllData() {
    this.getTransactionData();
    this.getCategoryData();
  }

  getTransactionData() {
    axios.get('/api/transactions')
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCategoryData() {
    axios.get('/api/category')
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleCatChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  patchCatAndCount(info) {
    // console.log('info in index', info);
    axios.patch('/api/category', info)
      .then((response) => {
        // invoke get all data and get category data
        // console.log('Success!')
        this.getAllData();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  submitNewCat() {
    const { categoryToAdd, budgetToAdd } = this.state;
    if (categoryToAdd === '') {
      alert('You must enter values to create a category');
    } else {
      axios.post('/api/category', {
        category: categoryToAdd,
        targetbudget: budgetToAdd,
      })
        .then(() => {
          this.getCategoryData();
          this.setState({
            categoryToAdd: '',
            budgetToAdd: '',
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { data, categories, categoryToAdd } = this.state;
    return (
      <div>
        <h1>mInteger</h1>
        <div className="app">
          <TransactionList data={data} cats={categories} patch={this.patchCatAndCount} />
          <div className="category">
            <h3>Budget Categories</h3>
            <CategoryList cats={categories} />
            <form className="category-form" onSubmit={this.submitNewCat}>
              <div className="category-input">
                <input
                  type="text"
                  name="categoryToAdd"
                  placeholder="Budget Category"
                  defaultValue={categoryToAdd.name}
                  onChange={this.handleCatChange}
                />
                <input
                  type="number"
                  name="budgetToAdd"
                  placeholder="Target Budget"
                  defaultValue={categoryToAdd.budget}
                  onChange={this.handleCatChange}
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
