import React from 'react';

export const Page = ({data}) => {

  const expertisePage = {...data.data.expertisePage};
  const expertiseTypes = expertisePage  ;
  console.log('expertisePage', expertisePage);
  const title = expertisePage.title;

  return (
    <div className='page'>
      <h1>{title}</h1>

    </div>
  )
};
