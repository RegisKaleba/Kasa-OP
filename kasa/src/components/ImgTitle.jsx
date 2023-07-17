import React from 'react';


function ImgTitle({ background, textH1 }) {
  const style = {
    backgroundImage: `url(${background})`,
  };

  return (
    <div className="img-title" style={style}>
      <h1>{textH1}</h1>
    </div>
  );
}

export default ImgTitle;