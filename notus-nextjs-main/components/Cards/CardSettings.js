import React from "react";

// components

export default function CardSettings({
    title,
    setTitle,
    desc,
    setDesc,
    image,
    setImage,
    mintNft,
    allowed,
    setAllowed,
}) {
    const handleImageChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            console.log("image set");
            console.log({ file });
        }
    };
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words w-full mt-10 mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center justify-between">
                        <h6 className="text-blueGray-700 text-5xl font-bold">
                            Create NFT
                        </h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                            Meme Information
                        </h6>
                        <div className="flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Best Meme"
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                        value={title}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        defaultValue="Best Meme"
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                        value={desc}
                                    />
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Meme Content
                                    </label>
                                    <input
                                        type="file"
                                        onChange={handleImageChange}
                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="rounded-t mb-0 px-3 pu-3">
                            <div className="text-center justify-between">
                                <button
                                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                                    type="button"
                                    style={{ display: allowed ? "" : "none" }}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        mintNft();
                                    }}
                                >
                                    Upload
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
