'use client';
import DashboardCard from '@/components/Card';
import PageHeading from '@/components/PageHeading';
import { GroupCardResponse } from '@/constants/types';
import React, { useEffect } from 'react';
import { getAllGroupsCards } from './actions';
import { TOKEN_KEY } from '@/constants/constants';
import Input from '@/components/Input';
import { useDebounce } from '@/utils/hooks';
// import { DashboardCards } from '@/constants/types';
// import { getDashboardCards } from './actions';

const Home = () => {
  // const data: GroupCardResponse = await getAllGroupsCards();
  const [searchKey, setSearchKey] = React.useState('');
  const debouncedSearchKey = useDebounce(searchKey, 500);
  const [data, setData] = React.useState<Array<GroupCardResponse>>([]);
  useEffect(() => {
    const loadData = async () => {
      const token = localStorage.getItem(TOKEN_KEY);
      const response = await getAllGroupsCards(token);
      console.log('Response : ', response);
      setData(Array.isArray(response) ? response : []);
    };

    if (searchKey === '') {
      console.log('Load data');
      loadData();
    } else if (searchKey !== '') {
      console.log('Search data');
    }
    console.log('data : ', data);
  }, [debouncedSearchKey]);

  const handleSearchChange = (key: string) => {
    console.log('first : ', key);
    setSearchKey(key);
  };
  return (
    <div className='max-w-[100%] 2xl:max-w-[90%]'>
      <PageHeading heading='Home Go Chat' className='mb-4' />
      <div className='w-full mt-4'>
        <Input
          name='email'
          placeholder='Explore new Groups'
          type='text'
          onChange={(e: any) => {
            handleSearchChange(e.target.value);
          }}
        />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6'>
        {data.map((item) => (
          <DashboardCard key={item.group_id} primaryText={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
