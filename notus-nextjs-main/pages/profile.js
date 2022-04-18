import React, { useEffect, useState, useContext } from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from "axios";
import Web3Context from "context/Web3Context";

const getNftMeta = async (address, tokenId) => {
    // const config = {
    //     method: "get",
    //     url: `https://deep-index.moralis.io/api/v2/nft/${address}/${tokenId}?chain=mumbai&format=decimal`,
    //     headers: {
    //         Accept: "application/json",
    //         "x-api-key": `${process.env.REACT_APP_MORALIS_NFT_API}`,
    //     },
    // };

    // const response = await axios(config);
    // console.log({ res: response.data });
    // let metadata = JSON.parse(response.data.metadata);
    // if (!metadata) {
    //     const _res = await axios.get(response.data.token_uri);
    //     console.log({ res: _res.data });
    //     metadata = _res.data;
    // }

    const config = {
        method: "get",
        timeout: 1000 * 3,
        url: `https://deep-index.moralis.io/api/v2/nft/${address}/${tokenId}?chain=mumbai&format=decimal`,
        headers: {
            Accept: "application/json",
            "x-api-key": `${process.env.REACT_APP_MORALIS_NFT_API}`,
        },
    };
    let response;
    try {
        response = await axios(config);
        console.log({ res: response.data });
    } catch (err) {
        console.log(err);
        console.log("Data not yet Available! " + tokenId);
        return null;
    }
    let metadata = JSON.parse(response.data.metadata);
    if (!metadata) {
        let _res;
        try {
            _res = await axios.get(response.data.token_uri, {
                timeout: 1000 * 3,
            });
            console.log({ res: _res.data });
            metadata = _res.data;
        } catch (err) {
            console.log("Failed to fetch " + tokenId);
            return null;
        }
    }

    return NFTObject(
        tokenId,
        metadata.name,
        metadata.description,
        metadata.image,
        `https://testnets.opensea.io/assets/mumbai/${address}/${tokenId}`,
        JSON.parse(metadata.encodings)
    );
};

const getNftMetaCelo = async (address, tokenId) => {
    const config = {
        method: "get",
        url: `https://api-eu1.tatum.io/v3/nft/metadata/CELO/${address}/${tokenId}?x-api-key=1ed956b0-b9d6-4da5-8649-982cc7e284bd`,
        headers: {
            "x-api-key": "1ed956b0-b9d6-4da5-8649-982cc7e284bd",
            "Content-Type": "application/json",
        },
    };
    let response;
    try {
        response = await axios(config);
        console.log({ res: response.data });
        const ipfsHash = response.data.data
            .split("/")
            .filter((elm) => elm != "");
        const _config = {
            method: "get",
            url: `https://ipfs.io/ipfs/${ipfsHash[ipfsHash.length - 1]}`,
        };
        console.log({ _config });

        response = await axios(_config);
        console.log({ res_data: response.data });
    } catch (err) {
        console.log(err);
        console.log("Retry");
        return null;
    }
    let metadata = response.data;
    if (!metadata) {
        console.log("Failed to fetch " + tokenId);
        return null;
        // let _res;
        // try {
        //     _res = await axios.get(response.data.token_uri, {
        //         timeout: 1000 * 3,
        //     });
        //     console.log({ res: _res.data });
        //     metadata = _res.data;
        // } catch (err) {
        //     console.log("Failed to fetch " + tokenId);
        //     return null;
        // }
    }

    return NFTObject(
        tokenId,
        metadata.name,
        metadata.description,
        metadata.image,
        `https://alfajores-blockscout.celo-testnet.org/token/${address}/instance/${tokenId}/token-transfers`,
        JSON.parse(metadata.encodings)
    );
};

const NFTObject = (
    tokenId,
    title,
    description,
    ipfsUrl,
    openseaUrl,
    embeddings
) => {
    return {
        tokenId,
        title,
        description,
        ipfsUrl,
        openseaUrl,
        embeddings,
    };
};

let items = ["Item 1", "Item 1", "Item 1", "Item 1"];
const NFTCard = ({ imageUrl, title, description, openseaUrl, tokenId }) => {
    return (
        <a href={openseaUrl} target="_blank">
            <div style={{ maxWidth: "400px" }} className="w-full mt-10 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                    <img
                        alt="..."
                        src={imageUrl}
                        className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block h-95-px -top-94-px"
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-blueGray-700 fill-current"
                            ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                            {title} ({tokenId})
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            {description}
                        </p>
                    </blockquote>
                </div>
            </div>
        </a>
    );
};

export default function Profile() {
    const [nfts, setNfts] = useState([]);
    const [netId, setNetId] = useState();
    //=======================Loading Context========================
    const { web3, accounts, contract } = useContext(Web3Context);
    //=============================================================
    useEffect(() => {
        const init = async () => {
            // get NFT count
            const count = await contract.methods._tokenIds().call();
            console.log({ count });
            const nfts = [];

            // loop through all NFTS

            const id = await web3.eth.net.getId();

            for (let i = 1; i <= count; i++) {
                let data = null;

                if (id == "80001") {
                    data = await getNftMeta(contract._address, i);
                } else {
                    data = await getNftMetaCelo(contract._address, i);
                }
                if (data != null) setNfts((prev) => [...prev, data]);
            }
        };

        const getId = async () => {
            setNfts([]);
            const id = await web3.eth.net.getId();
            setNetId(id);
        };

        if (web3 != null && contract != null) getId().then(init());
    }, [web3, accounts, contract]);
    return (
        <>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-blueGray-200">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src="/img/team-2-800x800.jpg"
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="bg-blueGray-700 active:bg-blueGray-600 uppercase text-white font-bold hover:shadow-md shadow text-xl px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                {nfts.length} Memes
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="text-center mt-12">
                                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                                    Vaidehi Vatsaraj
                                                </h3>
                                            </div>
                                            {/* <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    {nfts.map((nft, index) =>
                                        index > 3 ? null : (
                                            <div className="w-full px-4 flex-1">
                                                <NFTCard
                                                    title={nft.title}
                                                    imageUrl={nft.ipfsUrl}
                                                    description={
                                                        nft.description
                                                    }
                                                    openseaUrl={nft.openseaUrl}
                                                    tokenId={nft.tokenId}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="flex flex-wrap">
                                    {nfts.map((nft, index) =>
                                        index > 3 && index <= 6 ? (
                                            <div className="w-full px-4 flex-1">
                                                <NFTCard
                                                    title={nft.title}
                                                    imageUrl={nft.ipfsUrl}
                                                    description={
                                                        nft.description
                                                    }
                                                    openseaUrl={nft.openseaUrl}
                                                    tokenId={nft.tokenId}
                                                />
                                            </div>
                                        ) : null
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
