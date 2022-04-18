import React from "react";

// components

export default function CardProfile({ address, networkId }) {
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full pb-3 mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img
                                    alt="..."
                                    src="/img/team-2-800x800.jpg"
                                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 text-center mt-20">
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center font-bold">
                                    {address}
                                </div>
                            </div>
                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center font-bold">
                                    {networkId == "80001" ? "Polygon" : "Celo"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
