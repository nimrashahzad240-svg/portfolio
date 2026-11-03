import React from 'react';

export default function Frosty({className=''}){
  return <span className={`frosty ${className}`} aria-hidden="true"><span className="frosty__cat"/></span>;
}
