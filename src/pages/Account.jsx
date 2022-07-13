import React, { Fragment } from 'react';
import SavedShows from '../components/SavedShows';
import SavedBG from '../assets/saved-shows-bg.jpg'

const Account = () => {
  return (
    <Fragment>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src={SavedBG}
          alt='/'
        />
        <div className='bg-black/30 fixed top-0 left-0 w-full h-[550px]'></div>
      </div>
      <SavedShows />
    </Fragment>
  );
};

export default Account;