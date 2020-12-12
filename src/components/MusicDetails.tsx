import React from 'react';

function MusicDetails(props: any): JSX.Element {
  const details = props;

  return (
    <div>
      <p>{details}</p>
    </div>
  );
}

export default MusicDetails;
