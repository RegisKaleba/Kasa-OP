import React from 'react';

function HostInfo({ host }) {
  return (
    <div>
      <h3>Host Information</h3>
      <div>
        <img src={host.picture} alt={host.name} />
        <p>{host.name}</p>
      </div>
    </div>
  );
}

export default HostInfo;