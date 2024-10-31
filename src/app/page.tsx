'use client';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { Image } from '@nextui-org/image';
import React from 'react';
import { userLogin } from './actions';
import { TOKEN_KEY } from '@/constants/constants';
import { useRouter } from 'next/navigation';
import { useDisclosure } from '@nextui-org/react';
import AlertError from '@/components/modal/AlertError';

export default function Home() {
  const date = new Date();
  const year = date.getFullYear();
  const router = useRouter();
  const [isLoginLoading, setIsLoginLoading] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [toastMessage, setToastMessage] = React.useState<string>('');

  const {
    isOpen: isErrorOpen,
    onOpen: onErrorOpen,
    onClose: onErrorClose,
    onOpenChange: onErrorOpenChange,
  } = useDisclosure();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleLogin = async () => {
    setIsLoginLoading(true);
    if (!email || !password) {
      setToastMessage('Please enter email and password');
      onErrorOpen();
      setIsLoginLoading(false);
      return;
    }
    await userLogin(email, password)
      .then((data) => {
        console.log('Token Response', data);
        localStorage.setItem(TOKEN_KEY, data.data.access_token);
        router.push('/home');
      })
      .catch((e) => {
        setToastMessage(e.message);
        onErrorOpen();
      });
    setIsLoginLoading(false);
  };

  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-primary'>
      <div className='w-full h-screen hidden lg:block'>
        <AlertError isOpen={isErrorOpen} onOpenChange={onErrorOpenChange} message={toastMessage} />

        <Image
          src='/images/login-page-image.png'
          classNames={{
            img: 'w-full h-full rounded-none object-cover',
          }}
          removeWrapper={true}
        />
      </div>
      <div className='h-full w-full flex items-center justify-center py-[56px] px-6 sm:px-10'>
        <div className='max-w-[566px] w-full h-full flex flex-col justify-between'>
          <div className='flex flex-col gap-6 h-full justify-center'>
            <div>
              <Image
                src='/images/AhsanLogoPNGLogo.png'
                classNames={{
                  img: 'rounded-none',
                }}
                removeWrapper={true}
              />
            </div>
            <h1 className='text-white font-semibold text-[24px] sm:text-[32px]'>Sign in with credentials</h1>
            <p className='text-textColor text-[13px] sm:text-[16px] font-normal'>TODO: Chat Application</p>
            <div className='flex flex-col gap-6 mt-4'>
              <Input label='Username' name='email' placeholder='Email' type='email' onChange={handleChange} />
              <Input label='Password' name='password' placeholder='Password' type='password' onChange={handleChange} />
              <Button isLoading={isLoginLoading} className='w-[139px] h-[48px]' onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
          <p className='text-[14px] font-light text-textColor'>© {year} Go Chat. All rights reserved By Ahsan.</p>
        </div>
      </div>
    </main>
  );
}
