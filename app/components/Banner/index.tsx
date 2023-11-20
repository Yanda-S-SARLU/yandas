import Image from 'next/image';

const Banner = () => {

    return (
        <div id="home-section" style={{backgroundColor: "#86efac"}}>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-evenly'>
                        <div className='flex gap-2 mx-auto lg:mx-0'>
                            <Image src="/assets/banner/check.svg" alt="check-image" width={20} height={20} />
                            <h3 className='text-charcoal text-sm font-semibold text-center lg:text-start'>30% de reduction pour votre première opération !</h3>
                        </div>
                        <h1 className='text-black text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0'>Votre partenaire d'affaire en république démocratique du congo et en france</h1>
                        <h3 className='text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0'>Faites des affaires en toute sécurité depuis la rdc, et recevez vos colis via notre plateforme .</h3>

                        <div className="relative text-white focus-within:text-white flex flex-row-reverse input-shadow rounded-lg pt-5 lg:pt-0">
                            <input type="text" name="q" className="py-6 lg:py-5 text-lg w-full text-black opacity-75 rounded-full pl-8 focus:outline-none focus:text-black" placeholder="Rechercher un produit" autoComplete="off" />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-5 lg:pt-0">
                                <button type="submit" className="p-3 lg:p-3 focus:outline-none focus:shadow-outline bg-kellygreen hover:bg-midnightblue duration-150 ease-in-out rounded-full">
                                    <Image src={'/assets/banner/search.svg'} alt="inputicon" width={30} height={30} />
                                </button>
                            </div>
                        </div>


                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <Image src="/assets/banner/mahila.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
