import React from 'react'
import { connect } from 'react-redux'

const SongDetails = ({ song }) => {
    if (!song) {
        return <div>Please Select a Song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
            {song.title}
            {song.duration}
            </p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}


export default connect(mapStateToProps)(SongDetails)