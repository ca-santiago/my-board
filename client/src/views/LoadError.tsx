import React from 'react';

const LoadErrorView = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <div>Error while loading your info</div>
      {children}
    </div>
  )
}

export default LoadErrorView;
