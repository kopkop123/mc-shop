import React, {Component} from 'react'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                    <h1>Slider</h1>
                </div>

                <div style={{height: 400, textAlign: 'center', border: '1px solid black'}}>
                    <h1>Main Content</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default Home