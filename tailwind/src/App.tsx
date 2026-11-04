import { useState } from 'react';
import cn from './cn';
import Button from './Button';

const App = () => {
    const [active, setActive] = useState(false);

    return (
        <div className='flex flex-col gap-8 p-4'>
            <div className='group rounded-xl border p-4 transition hover:border-blue-500 hover:shadow-md'>
                <h2 className='font-semibold group-hover:text-blue-500'>Book Title</h2>
                <p className='text-sm text-gray-500'>Author Name</p>
            </div>

            <div>
                <input id='email' type='checkbox' className='peer sr-only' />

                <label
                    htmlFor='email'
                    className='cursor-pointer rounded-lg border p-4 
                peer-checked:border-blue-500
                peer-checked:bg-blue-50'
                >
                    이메일 알림 받기
                </label>
            </div>

            <div
                data-active={active}
                className='rounded-lg border p-4
            data-[active=true]:border-blue-500
            data-[active=true]:bg-blue-50'
                onClick={() => setActive((prev) => !prev)}
            >
                Content
            </div>

            <div
                className='
            [&>p]:text-sm
            [&>p]:text-gray-500
            [&>p+p]:mt-2'
            >
                <p>첫 번째 문단</p>
                <p>두 번째 문단</p>
                <p>세 번째 문단</p>
            </div>

            <div
                className='
            grid grid-cols-1 
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4
        '
            >
                responsive
            </div>

            <div className='bg-first rounded-card p-layout'>
                <button className='bg-fourth text-black'>Button</button>
            </div>

            <div className='dark'>
                <div className='bg-first rounded-card p-layout'>
                    <button className='bg-fourth text-white'>Button</button>
                </div>
            </div>

            <div className={cn('p-4 rounded-lg bg-white', active && 'border border-blue-500')}>
                tailwind-merge, clsx
            </div>

            <Button variant='primary' size='sm'>
                hello
            </Button>

            <div className='overflow-y scrollbar-hidden'>Content</div>

            <button
                className='
            rounded-lg px-4 py-2
            bg-blue-600 text-white
            transition-colors
            hover:bg-blue-700
            active:scale-[0.98]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-blue-600
            disabled:opacity-50
            disabled:pointer-events-none
            '
            >
                Save
            </button>
        </div>
    );
};

export default App;
