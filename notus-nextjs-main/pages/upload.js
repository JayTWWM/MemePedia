import React, { useState, useContext, useEffect } from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import Navbar from "components/Navbars/AuthNavbar.js";
import Modal from "components/Modal/Modal";
import Web3Context from "context/Web3Context";
import { create } from "ipfs-http-client";
import axios from "axios";
import IpfsHash from "ipfs-only-hash";

let items = ["Item 1", "Item 1", "Item 1"];
const ipfs = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
});

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

const cosinesim = (A, B) => {
    var dotproduct = 0;
    var mA = 0;
    var mB = 0;
    var i;
    for (i = 0; i < A.length; i++) {
        // here you missed the i++
        dotproduct += A[i] * B[i];
        mA += A[i] * A[i];
        mB += B[i] * B[i];
    }
    mA = Math.sqrt(mA);
    mB = Math.sqrt(mB);
    var similarity = dotproduct / (mA * mB); // here you needed extra brackets
    return similarity;
};

const NFTS = ({
    targetEmbeddings,
    imageFile,
    allowed,
    setAllowed,
    networkId,
}) => {
    const [nfts, setNfts] = useState([]);
    const [similar, setSimilar] = useState([]);

    //=======================Loading Context========================
    const { web3, accounts, contract } = useContext(Web3Context);
    //==============================================================

    const getNftMeta = async (address, tokenId) => {
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
            console.log("Retry");
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

    // console.log({ web3, accounts, contract });
    useEffect(() => {
        // load nft counts
        const init = async () => {
            setSimilar([]);
            setAllowed(true);
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
                if (data != null) nfts.push(data);
            }

            console.log(imageFile);
            const reader = new window.FileReader();
            reader.readAsArrayBuffer(imageFile);
            reader.onloadend = async () => {
                console.log("Image Loaded to BUffer");
                console.log({ nfts });
                const targetIpfsHash = await IpfsHash.of(Buffer(reader.result));
                console.log({ targetIpfsHash });
                for (let i = 0; i < nfts.length; i++) {
                    const nft = nfts[i];
                    const parts = nft.ipfsUrl
                        .split("/")
                        .filter((elm) => elm !== "");
                    console.log(parts);
                    const _match = targetIpfsHash == parts[parts.length - 1];
                    if (_match) {
                        alert("Same Image Already Exisits");
                        console.log("Same Image Uploaded");
                        console.log({ nft });
                        setAllowed(false);
                        return;
                    }
                }

                setSimilar([
                    ...nfts.filter((nft) => {
                        // find cosine sim with target
                        const sim = cosinesim(targetEmbeddings, nft.embeddings);
                        console.log({
                            sim,
                            title: nft.title,
                            link: nft.ipfsUrl,
                        });
                        console.log(sim);
                        if (sim >= 0.99) setAllowed(false);
                        return sim >= 0.3;
                    }),
                ]);
                console.log({ similar });
            };
        };

        if (contract) init();
    }, [web3, accounts, contract, imageFile]);

    return (
        <>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    {similar.map((nft, index) => (
                        <div className="w-full px-4 flex-1">
                            <NFTCard
                                title={
                                    nft.title +
                                    " " +
                                    cosinesim(targetEmbeddings, nft.embeddings)
                                }
                                imageUrl={nft.ipfsUrl}
                                description={nft.description}
                                openseaUrl={nft.openseaUrl}
                                tokenId={nft.tokenId}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const getImageReport = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const response = await axios.post(
        "http://127.0.0.1:5000/embeddings",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return {
        embeddings: response.data.embeddings,
        adult: response.data.adult,
        violence: response.data.violence,
        racy: response.data.racy,
    };
};

export default function Upload() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modelContent, setModalContent] = useState({});
    const [image, setImage] = useState();
    const [targetEmbedding, setTargetEmbedding] = useState([]);
    const { web3, accounts, contract } = useContext(Web3Context);
    const [allowed, setAllowed] = useState(true);
    const [netId, setNetId] = useState();

    useEffect(() => {
        if (image)
            getImageReport(image).then(
                ({ embeddings, adult, violence, racy }) => {
                    setModalContent({ adult, violence, racy });
                    if (
                        adult === "VERY_LIKELY" ||
                        violence === "VERY_LIKELY" ||
                        racy === "VERY_LIKELY"
                    ) {
                        setAllowed(false);
                    }
                    setShowModal(true);
                    console.log("Here");
                    console.log({ embeddings });
                    setTargetEmbedding([...embeddings]);
                }
            );
    }, [image]);

    useEffect(() => {
        const init = async () => {
            const id = await web3.eth.net.getId();
            setNetId(id);
        };

        if (web3) init();
    }, [web3, accounts, contract]);

    const mintNft = () => {
        console.log("Started");
        if (!title || !desc || !image || targetEmbedding.length == 0) {
            console.log("Data Not sufficient");
            return;
        }
        console.log("Started 2");
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(image);
        reader.onloadend = async () => {
            console.log("Started 3");
            const res = await ipfs.add(Buffer(reader.result));
            console.log({ res });

            // minting
            let uriMetadata = `{"name":"${title}","description":"${desc}","image":"https://ipfs.io/ipfs/${res.path}/","encodings":"[${targetEmbedding}]"}`;
            const buff = Buffer.from(uriMetadata);
            const result = await ipfs.add(buff);
            console.log({ result });
            console.log(`ipfs://${result.path}/`);
            contract.methods
                .mintNFT(accounts[0], `ipfs://${result.path}/`)
                .send({ from: accounts[0] })
                .then((_res) => {
                    alert("Success In Minting!");
                });
        };
    };
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">
                    <CardSettings
                        title={title}
                        setTitle={setTitle}
                        desc={desc}
                        setDesc={setDesc}
                        image={image}
                        setImage={setImage}
                        mintNft={mintNft}
                        allowed={allowed}
                        setAllowed={setAllowed}
                    />
                </div>
                <div className="w-full lg:w-4/12 px-4 mt-16">
                    <CardProfile address={accounts[0]} networkId={netId} />
                </div>
            </div>
            {targetEmbedding.length > 0 && (
                <NFTS
                    targetEmbeddings={targetEmbedding}
                    imageFile={image}
                    allowed={allowed}
                    setAllowed={setAllowed}
                    networkId={netId}
                />
            )}
            {showModal && (
                <Modal setIsOpen={setShowModal} data={modelContent} />
            )}
        </>
    );
}

// Settings.layout = Admin;
