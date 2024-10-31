import React from 'react';

const DashboardCard = ({
  primaryText,

  showSlash,
  className,
}: {
  primaryText: string;

  showSlash?: boolean;
  className?: string;
}) => {
  return (
    <div className={`p-6 bg-primaryLight rounded-2xl ${className}`}>
      <h2 className='text-white font-semibold text-[18px]'>{primaryText ? primaryText : '-'}</h2>
      <p>Group</p>
      <div className='flex gap-2 items-center mt-2'>
        {showSlash && <span className='text-textColor font-medium text-[16px]'>/</span>}
      </div>
    </div>
  );
};

export default DashboardCard;
