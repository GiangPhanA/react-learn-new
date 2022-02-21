import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';
import './grid.css'

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({ albumList }) {
  return (
    <div className="grid wide">
        <div className="row">
                <div className="col l-12 m-12 c-12">
                    <ul className="album-list">
                        {albumList.map(album => (
                          <li key={album.id}>
                            <Album album={album} />
                          </li>
                        ))}
                    </ul>
                </div>
        </div>
    </div>

  );
}

export default AlbumList;

