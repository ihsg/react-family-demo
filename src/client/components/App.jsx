import React, { Component } from 'react'
import './app.scss'

export default class App extends Component {
  render() {
    const { onClick, loading, bannerList } = this.props
    return (
      <div>
        <h1 className="test">Hello, welcome to the React Family Demo!</h1>
        <button className="btnTest" onClick={onClick}>Test Action</button>
        {loading ? (<div className="loading" />) : null}
        {bannerList.map((b, index) => {
          return (
            <div style={{ textAlign: 'center' }}>
              <img src={b.imageUrl} />
            </div>
          )
        })}
      </div>
    )
  }
}