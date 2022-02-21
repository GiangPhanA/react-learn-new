import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import './grid.css'

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div>
      <div className="album album--active album--special">
            <div className="album__thumbnail album__thumbnail--active">
                <img className="album__image" src={album.thumbnailUrl} alt={album.name} />

                {/* Other controls */}
            </div>
            <p className="album__name">{album.name}</p>
       </div>
    </div>


  );
}

export default Album;

