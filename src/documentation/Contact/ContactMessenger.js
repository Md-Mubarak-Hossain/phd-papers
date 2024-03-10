import React from 'react';

const ContactMessenger = () => {
    return (
        <div>
            <div class="grid md:block ">
                <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-72 flex justify-center w-full">
                    <div class="mt-10 text-white text-4xl font-bold">GET IN TOUCH</div>
                </div>
                <div class="bg-white h-auto flex justify-center">
                    <div class="bg-white shadow-lg -mt-40 md:w-1/2 grid lg:flex justify-center">
                        <div class="w-3/4 lg:w-2/3 ">
                            <div class="text-lg font-medium text-blue-600 m-6 ">Drop a Message</div>
                            <div class=" flex lg:flex-row flex-col">
                                <div class="m-6">
                                    <p class="text-sm text-stone-400">Full Name</p> <input
                                        class="border-b-2 border-stone-400 text-stone-400 w-36" />
                                    <p class="text-sm text-stone-400 mt-6">E-mail</p> <input
                                        class="border-b-2 border-stone-400 text-stone-400 w-36" />
                                </div>
                                <div class="m-6 ">
                                    <p class="text-sm text-stone-400">Phone</p> <input
                                        class="border-b-2 border-stone-400 text-stone-400 w-36" />
                                    <p class="text-sm text-stone-400 mt-6">Subject</p> <input
                                        class="border-b-2 border-stone-400 text-stone-400 w-36" />
                                </div>
                            </div>
                            <div class="m-6 ">
                                <p class="text-sm text-stone-400 mt-6 ">Message</p> <input
                                    class="border-b-2 border-stone-400 text-stone-400 w-36" />
                                <div
                                    class="m-4 mt-6 pl-4 pt-1 pb-1 pr-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl text-white font-medium w-36 ">
                                    Send Message</div>
                            </div>
                        </div>
                        <div class="lg:w-1/3 bg-green-500 ">
                            <div class="text-white m-6 font-medium"> Contact Information </div>
                            <div class="text-white m-6 text-sm flex">
                                <ion-icon name="location-sharp" class="m-2"></ion-icon>
                                <div> 4329 Travis Street, Red Fort L.A., 34950 </div>
                            </div>
                            <div class="text-white m-6 text-sm flex">
                                <ion-icon name="call-outline" class="m-2"></ion-icon>
                                <div> +1 987-6543-210 </div>
                            </div>
                            <div class="text-white m-6 text-sm flex">
                                <ion-icon name="mail-outline" class="m-2"></ion-icon>
                                <div> admin@tailwind.org </div>
                            </div>
                            <div class="text-white m-6 text-sm flex">
                                <ion-icon name="globe-outline" class="m-2"></ion-icon>
                                <div> www.tailwind.org </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.tailwindcss.com"></script>
            <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default ContactMessenger;