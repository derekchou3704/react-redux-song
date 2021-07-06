import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    render() {
        // this.props === {state.songs}

        return (
            <div>SongList</div>
        )
    }
}

// By convention we name it this way
const mapStateToProps = (state) => {
    return {songs: state.songs}
}

export default connect(mapStateToProps)(SongList)