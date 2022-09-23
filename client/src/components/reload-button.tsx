import React from 'react';

export interface ReloadButtonProps {
  onClick?: () => void;
}

const ReloadButton = ({ onClick }: ReloadButtonProps) => {

  const handleOnclick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
  }

  return (
    <div>
      <button onClick={handleOnclick}>Reload</button>
    </div>
  )
}

export default ReloadButton