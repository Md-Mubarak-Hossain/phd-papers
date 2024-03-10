import React from 'react';

const Features = () => {
    return (
        <>
            <div class="flex justify-center ">
                <nav class="self-center w-full max-w-7xl  ">
                    <div class="flex flex-col lg:flex-row justify-around items-center border-b-2">
                        <h1 class="uppercase pl-5 py-4 text-xl font-sans font-bold">fashionhub</h1>
                        <ul class="hidden lg:flex items-center text-[18px] font-semibold pl-32">
                            <li class="hover:underline  underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5">
                                <a href="#">Home</a>
                            </li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                href="#">Contact</a></li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                href="#">Services</a></li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                href="#">About</a></li>
                            <li class="hover:underline underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5"><a
                                href="#">Pricing</a></li>
                        </ul>
                        <div class=" text-center text-base pr-5  inline-flex"> <a href="#"
                            class="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i
                                class="fa fa-twitter"></i></a> <a href="#"
                                    class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                        class="fa fa-instagram"></i></a> <a href="#"
                                            class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                class="fa fa-facebook"></i></a> <a href="#"
                                                    class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                        class="fa fa-google"></i></a> <a href="#"
                                                            class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                class="fa fa-linkedin"></i></a> </div>
                    </div>
                </nav>
            </div>
            <div class="flex justify-center  ">
                <div class="flex flex-col items-center justify-center">

                    <div class="flex flex-col  max-w-7xl justify-center items-center space-y-3 w-full ">
                        <div class="flex flex-col   md:items-start items-center justify-center  space-y-3 px-8 text-center ">
                            <div class="text-3xl md:text-7xl font-bold ">
                                Make Your Fashion Look More Charming</div>
                        </div>
                        <div
                            class="flex flex-col lg:flex-row space-x-2 space-y-3 md:space-x-6   w-full items-center justify-center ">

                            <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" class="" />
                            </div>
                            <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center">
                                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                            </div>
                            <div class="lg:w-60 w-64 h-96  overflow-hidden rounded-xl ">
                                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" class="" />
                            </div>
                            <div class="flex flex-row lg:flex-col space-x-3 space-y-6 items-center justify-center ">
                                <div class="w-32 lg:w-40 h-48  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                                <div class="w-32 lg:w-40 h-32  overflow-hidden rounded-xl ">
                                    <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                                " alt="" class="" />
                                </div>
                            </div>
                            <div class="lg:w-40 w-64 h-40  overflow-hidden rounded-xl ">
                                <img src="https://source.unsplash.com/random/300x500/?man
                                    
                                                            " alt="" class="" />
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
        </>
    );
};

export default Features;