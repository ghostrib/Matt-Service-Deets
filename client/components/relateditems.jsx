import React from 'react'
// const itemStyle = {
//   width: '60%',
//   margin: '16px auto',
//   border: '1px solid #eee',
//   boxShadow: '0 2px 3px #ccc',
//   padding: '16px',
//   // textAlign: 'center'
// }

// const nameStyle = {
//   fontFamily: 'arial',
//   fontSize: '16px'
// }

class Related extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] }
    this.getRandomItems = this.getRandomItems.bind(this);
    this.random = this.random.bind(this);
  }

  random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  getRandomItems(array) {
    let result = [];
    while (result.length < 5) {
      let i = this.random(array.length - 1);
      if (!result.includes(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  }



  componentDidMount() {
    fetch(`http://${window.location.hostname}:3000/related`)
      .then(data => data.json())
      .then(json => {
        let array = this.getRandomItems(json);
        let newState = {};
        newState.items = array;
        this.setState(newState)
      })
      .catch(error => {
        console.log('error fetching data', error)
      })
  }

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => {
          return (
            <div
              // style={style}
              key={i}
              // id={this.state.items[i].id}
              className='item'
              onClick={(event) => this.props.onClick(event, this.state.items[i].id)}
            >
              <div className='image'>
                <img
                  src={item.full_img}
                  width='150px'
                  align='top'
                />
                <div className='name'>{item.name}</div>
                <div className='blurb'>{item.blurb}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

}

export default Related;