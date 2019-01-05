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
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   console.log(e.target)
  // }

  // url - http://ec2-18-216-54-110.us-east-2.compute.amazonaws.com
  componentDidMount() {
    fetch(`http://${window.location.hostname}:3000/related`)
      .then(data => data.json())
      .then(json => {
        let newState = {};
        newState.items = json;
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
          if (i < 5) {
            return (
              <div
                key={i}
                // id={this.state.items[i].id}
                className='item'
                onClick={(event) => this.props.onClick(event, this.state.items[i].id)}
              >
                <div className='image'>
                  <img
                    src={item.thumbnail}
                  // width='150px'
                  // align='top'
                  />
                  <span className='name'>{item.name}</span>
                  {/* <br /> */}
                  <span className='blurb'>{item.blurb}</span>
                  {/* <br /> */}
                </div>
              </div>

            )
          }
        })}
      </div>
    )
  }
}

export default Related;