import React from 'react';

class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catToggled: false,
      selectedCat: '',
    };
    this.catShowSelect = this.catShowSelect.bind(this);
    this.catDrop = this.catDrop.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, id) {
    const { patch } = this.props;
    this.setState({selectedCat: event.target.value});
    // console.log("This is the event target value: ", event.target.value);
    // console.log('This is the ID of the item clicked', id);
    const obj = {
      catName: event.target.value,
      itemID: id,
    };
    patch(obj);
  }

  catShowSelect(id) {
    const { category_id } = this.props.transaction;
    // If Null Show default text and allow for dropdown
    if (category_id === null) {
      return this.catDrop(id);
    }
    // if Defined display the Category name
    return <div className="txn-data">{category_id}</div>;
  }

  catDrop(id) {
    const { category_id, availCats } = this.props.transaction;
    const { catToggled, selectedCat } = this.state;
    // Show Dropdown on state true
    if (catToggled) {
      // Map Over the available Catergories and return a drop down option for each
      const mappedCategories = this.props.availCats.map((cat) => (
        <option value={cat.category} key={cat.category}>{cat.category}</option>
      ));
      return (
        <div className="txn-data">
          <select value={this.state.selectedCat} onChange={() => {this.handleChange(event, id); }}>
            <option value="Select from dropdown">Categorize this</option>
            {mappedCategories}
          </select>
        </div>
      );
    } // Show option to add dropdown
    return <div className="txn-data" onClick={ () => { this.setState({ catToggled: !catToggled })}}>Add a Category</div>;
  }

  render() {
    const { date, description, amount, id } = this.props.transaction;
    return (
      <div className="txn-row">
        <div className="txn-data">{date.slice(0, 10)}</div>
        <div className="txn-data">{description}</div>
        <div className="txn-data">{amount}</div>
        {this.catShowSelect(id)}
      </div>
    );
  }
};

export default Transaction;
