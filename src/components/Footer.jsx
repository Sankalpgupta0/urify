import * as React from "react";

const Footer = () => {
    return (
        <div className=" flex justify-center items-center">
            <div className="w-[80%] flex flex-col text-base font-medium leading-7">
                <div className="flex gap-5 justify-between items-start px-5 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col ">
                    <div className='h-[35px] flex items-center'>
                        <img src="/Frame.png" className='h-[35px] mx-5' />
                        <p className='head1 text-3xl'>Urify</p>
                    </div>
                    <div className='h-[35px] mt-10 flex items-center'>
                        <img src="/Frame copy.png" className='h-[35px]  mx-5' />
                        <p className=''>help@frybix.com</p>
                    </div>
                    <div className='h-[35px] mt-10 flex items-center'>
                        <img src="/Frame copy 2.png" className='h-[35px] mx-5' />
                        <p className=''>+1 234 456 678 89</p>
                    </div>
                    </div>
                    <div className="flex flex-col mt-2.5 capitalize">
                        <div className="text-3xl leading-10 text-center">links</div>
                        <div className="mt-9">home</div>
                        <div className="mt-8">about us</div>
                        <div className="mt-8">bookings</div>
                        <div className="mt-7">blog</div>
                    </div>
                    <div className="flex flex-col mt-2.5 capitalize">
                        <div className="text-3xl leading-10">legal</div>
                        <div className="mt-7">terms of use</div>
                        <div className="mt-8">privacy policy</div>
                        <div className="mt-7">cookie policy</div>
                    </div>
                    <div className="flex flex-col mt-2.5  capitalize">
                        <div className="text-3xl leading-10">product</div>
                        <div className="mt-9">take tour</div>
                        <div className="mt-8">live chat</div>
                        <div className="mt-8">reveiws</div>
                    </div>
                    <div className="flex flex-col mt-2.5">
                        <div className="text-3xl leading-10 capitalize">
                            Newsletter
                        </div>
                        <div className="mt-9  capitalize">Stay up to date</div>
                        <div className="flex gap-5 justify-between mt-8 max-md:pr-5">
                            <div className="my-auto text-zinc-500">Your email </div>
                            <div className="justify-center px-10 py-6 text-white capitalize whitespace-nowrap bg-black rounded max-md:px-5">
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center text-center items-center px-16 py-11 mt-24 w-full text-black capitalize border-t border-solid border-t-neutral-900 border-t-opacity-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    Copyright 2022 uifry.com all rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer