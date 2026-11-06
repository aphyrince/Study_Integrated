import { useState } from 'react';
import cn from './cn';
import Button from './Button';

const App = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='flex flex-col gap-8 p-4 px-2'>
            <div className='p-4 transition border group hover:shadow-md hover:border-blue-500 rounded-xl'>
                <h2 className='font-semibold group-hover:text-blue-500'>Book Title</h2>

                <p className='p-4 text-sm text-gray-500'>Author Name</p>
            </div>

            <div>
                <input id='email' type='checkbox' className='sr-only peer' />

                <label
                    htmlFor='email'
                    className='p-4 border rounded-lg cursor-pointer peer-checked:bg-blue-50 peer-checked:border-blue-500'
                >
                    이메일 알림 받기
                </label>
            </div>

            <div
                data-active={active}
                className='data-[active=true]:bg-blue-50 p-4 border data-[active=true]:border-blue-500 rounded-lg'
                onClick={() => setActive((prev) => !prev)}
            >
                Content
            </div>

            <div className='[&>p+p]:mt-2 [&>p]:text-gray-500 [&>p]:text-sm'>
                <p>첫 번째 문단</p>
                <p>두 번째 문단</p>
                <p>세 번째 문단</p>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                responsive
            </div>

            <div className='bg-first p-layout rounded-card'>
                <button className='text-black bg-fourth'>Button</button>
            </div>

            <div className='dark'>
                <div className='bg-first p-layout rounded-card'>
                    <button className='text-white bg-fourth'>Button</button>
                </div>
            </div>

            <div className={cn('bg-white p-4 rounded-lg', active && 'border border-blue-500')}>
                tailwind-merge, clsx
            </div>

            <Button variant='primary' size='sm'>
                hello
            </Button>

            <div className='scrollbar-hidden overflow-y'>Content</div>

            <button className='bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 py-2 rounded-lg focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 text-white active:scale-[0.98] transition-colors disabled:pointer-events-none'>
                Save
            </button>
        </div>
    );
};

export default App;
