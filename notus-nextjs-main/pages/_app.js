import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import Web3Context from "context/Web3Context";
import Web3 from "web3";
import MemePedia from "../src/abis/MemePedia.json";

import PageChange from "components/PageChange/PageChange.js";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";

Router.events.on("routeChangeStart", (url) => {
    console.log(`Loading: ${url}`);
    document.body.classList.add("body-page-transition");
    ReactDOM.render(
        <PageChange path={url} />,
        document.getElementById("page-transition")
    );
});
Router.events.on("routeChangeComplete", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
    document.body.classList.remove("body-page-transition");
});

const getWeb3 = async () => {
    let tempWeb3 = undefined;
    if (window.ethereum) {
        tempWeb3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            console.log(tempWeb3);
            //console.log(web3.eth.getAccounts());
            // Acccounts now exposed
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (tempWeb3) {
        tempWeb3 = new Web3(tempWeb3.currentProvider);
        console.log(tempWeb3);
        // Acccounts always exposed
    }
    // Non-dapp browsers...
    else {
        console.log(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
        );
    }

    return tempWeb3;
};

export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;

        const Layout = Component.layout || (({ children }) => <>{children}</>);

        return (
            <AppWrapper>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>MemePedia</title>
                    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppWrapper>
        );
    }
}

const AppWrapper = ({ children }) => {
    const [web3, setWeb3] = useState(undefined);
    const [accounts, setAccounts] = useState([]);
    const [contract, setContract] = useState();

    useEffect(() => {
        const init = async () => {
            // load web3
            const tempWeb3 = await getWeb3();
            // loadBlockchainData
            const tempAccounts = await tempWeb3.eth.getAccounts();
            const networkId = await tempWeb3.eth.net.getId();
            let memePediaContract;

            const listener = (accs) => {
                setAccounts(accs);
            };

            window.ethereum.on("accountsChanged", listener);
            window.ethereum.on("chainChanged", (_chainId) =>
                window.location.reload()
            );
            // window.ethereum.on(
            //     "accountsChanged",
            //     function (accounts) {
            //         // Time to reload your interface with accounts[0]!
            //         this.setState({ account: accounts[0] });
            //     }.bind(this)
            // );

            // console.log(tempWeb3);
            // console.log(tempAccounts);
            // //
            // console.log(networkId);
            // console.log(freelance);

            const networkdata = MemePedia.networks[networkId];
            console.log(networkdata);
            if (networkdata) {
                const abi = MemePedia.abi;
                //console.log(freelance.abi);
                memePediaContract = new tempWeb3.eth.Contract(
                    abi,
                    networkdata.address
                );

                // console.log(memePediaContract);
            }

            // console.log({ memePediaContract, tempAccounts, networkId });
            // saving this to states
            setWeb3(tempWeb3);
            setAccounts(tempAccounts);
            setContract(memePediaContract);
            // console.log(tempWeb3, tempAccounts, memePediaContract);
        };

        init();
    }, []);

    return (
        <div>
            <Web3Context.Provider value={{ web3, accounts, contract }}>
                <React.Fragment>{children}</React.Fragment>
            </Web3Context.Provider>
        </div>
    );
};
