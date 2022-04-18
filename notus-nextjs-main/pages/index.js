/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
    return (
        <>
            <IndexNavbar fixed />
            <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
                <div className="container mx-auto items-center flex flex-wrap">
                    <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                        <div className="pt-32 sm:pt-0">
                            <h2 className="font-semibold text-4xl text-blueGray-600">
                                MemePedia - A Meme NFT Platform
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                MemePedia - A Meme NFT Platform
                            </p>
                            <div className="mt-12">
                                <a
                                    href="/upload"
                                    // target="_blank"
                                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Get started
                                </a>
                                {/* <a
                                    href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                                    target="_blank"
                                >
                                    Github Star
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-6/12 max-h-860-px"
                    src="https://i.pinimg.com/originals/fc/64/65/fc6465b730eab5f372737a1a34cf6895.gif"
                    alt="..."
                />
            </section>

            <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
                            className="text-blueGray-100 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center">
                        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                                <img
                                    alt="..."
                                    src="https://i.pinimg.com/originals/22/5c/e8/225ce856248b6f8128371094e6ac32f2.gif"
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
                                        Put your humorous mind to work!
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        Putting together a meme is never an easy
                                        task. Moreover, getting recognized for
                                        your work and preventing it from being
                                        stolen adds to the stress
                                    </p>
                                </blockquote>
                            </div>
                        </div>

                        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                            <div className="justify-center flex flex-wrap relative">
                                <div className="my-4 w-full lg:w-6/12 px-4">
                                    <a href="/upload" target="_blank">
                                        <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                All Memes at your fingertips!
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                                        target="_blank"
                                    >
                                        <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Don't worry, noone will steal
                                                what is yours!
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                                        target="_blank"
                                    >
                                        <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Afraid your child can't enjoy
                                                this? Fear not!
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                    <a
                                        href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                                        target="_blank"
                                    >
                                        <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Tired of same memes every year?
                                                Well, not here!
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                                        target="_blank"
                                    >
                                        <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Want to earn money? Market your
                                                NFT ASAP!
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                                        target="_blank"
                                    >
                                        <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                            <img
                                                alt="..."
                                                className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                                            />
                                            <p className="text-lg text-white mt-4 font-semibold">
                                                Brands interested in your
                                                content? Do reach out!
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full md:w-6/12 px-4">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-sitemap"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Decentralized Platform
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                The platorm is fully decemtralized, 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-drafting-compass"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                JavaScript Components
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                We also feature many dynamic
                                                components for React, NextJS,
                                                Vue and Angular.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-6/12 px-4">
                                    <div className="relative flex flex-col min-w-0 mt-4">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-newspaper"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Pages
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                This extension also comes with 3
                                                sample pages. They are fully
                                                coded so you can start working
                                                instantly.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex flex-col min-w-0">
                                        <div className="px-4 py-5 flex-auto">
                                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                                <i className="fas fa-file-alt"></i>
                                            </div>
                                            <h6 className="text-xl mb-1 font-semibold">
                                                Documentation
                                            </h6>
                                            <p className="mb-4 text-blueGray-500">
                                                Built by developers for
                                                developers. You will love how
                                                easy is to to work with Notus
                                                NextJS.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* <div className="container mx-auto overflow-hidden pb-20">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-sitemap text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                CSS Components
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                Every element that you need in a product comes
                                built in as a component. All components fit
                                perfectly with each other and can have different
                                colours.
                            </p>
                            <div className="block pb-6">
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Buttons
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Inputs
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Labels
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Menus
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Navbars
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Pagination
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Progressbars
                                </span>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                                    Typography
                                </span>
                            </div>
                            <a
                                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=nnjs-index"
                                target="_blank"
                                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                            >
                                View All{" "}
                                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                            </a>
                        </div>

                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
                            <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                                <img
                                    alt="..."
                                    src="/img/component-btn.png"
                                    className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                                />
                                <img
                                    alt="..."
                                    src="/img/component-profile-card.png"
                                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                                />
                                <img
                                    alt="..."
                                    src="/img/component-info-card.png"
                                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                                />
                                <img
                                    alt="..."
                                    src="/img/component-info-2.png"
                                    className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                                />
                                <img
                                    alt="..."
                                    src="/img/component-menu.png"
                                    className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                                />
                                <img
                                    alt="..."
                                    src="/img/component-btn-pink.png"
                                    className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                                />
                            </div>
                        </div>
                    </div> */}

                {/* <div className="flex flex-wrap items-center pt-32">
                    <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
                        <div className="justify-center flex flex-wrap relative">
                            <div className="my-4 w-full lg:w-6/12 px-4">
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                                        <img
                                            alt="..."
                                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                                        />
                                        <p className="text-lg text-white mt-4 font-semibold">
                                            Svelte
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                        <img
                                            alt="..."
                                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                                        />
                                        <p className="text-lg text-white mt-4 font-semibold">
                                            ReactJS
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                        <img
                                            alt="..."
                                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                                        />
                                        <p className="text-lg text-white mt-4 font-semibold">
                                            NextJS
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                                        <img
                                            alt="..."
                                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                                        />
                                        <p className="text-lg text-white mt-4 font-semibold">
                                            JavaScript
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                                        <img
                                            alt="..."
                                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                                        />
                                        <p className="text-lg text-white mt-4 font-semibold">
                                            Angular
                                        </p>
                                    </div>
                                </a>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                                    target="_blank"
                                >
                                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                                        <img
                                            alt="..."
                                            className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                                        />
                                        <p className="text-lg text-white mt-4 font-semibold">
                                            Vue.js
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            {/* <section className="block relative z-1 bg-blueGray-600">
                <div className="container mx-auto">
                    <div className="justify-center flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4  -mt-24">
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Login Page
                                    </h5>
                                    <Link href="/auth/login">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/login.jpg"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Profile Page
                                    </h5>
                                    <Link href="/profile">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/profile.jpg"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                <div className="w-full lg:w-4/12 px-4">
                                    <h5 className="text-xl font-semibold pb-4 text-center">
                                        Landing Page
                                    </h5>
                                    <Link href="/landing">
                                        <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                            <img
                                                alt="..."
                                                className="align-middle border-none max-w-full h-auto rounded-lg"
                                                src="/img/landing.jpg"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className="py-20 bg-blueGray-600 overflow-hidden">
                <div className="container mx-auto pb-64">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
                            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                <i className="fas fa-code-branch text-xl"></i>
                            </div>
                            <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                                Open Source
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                                Since{" "}
                                <a
                                    href="https://tailwindcss.com/?ref=creative"
                                    className="text-blueGray-300"
                                    target="_blank"
                                >
                                    Tailwind CSS
                                </a>{" "}
                                is an open source project we wanted to continue
                                this movement too. You can give this version a
                                try to feel the design and also test the quality
                                of the code!
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                                Get it free on Github and please help us spread
                                the news with a Star!
                            </p>
                            <a
                                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                                target="_blank"
                                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                            >
                                Github Star
                            </a>
                        </div>

                        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
                            <i className="fab fa-github text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="pb-16 bg-blueGray-200 relative pt-32">
                <div
                    className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
                        <div className="w-full text-center lg:w-8/12">
                            <p className="text-4xl text-center">
                                <span role="img" aria-label="love">
                                    😍
                                </span>
                            </p>
                            <h3 className="font-semibold text-3xl">
                                Do you love memes?
                            </h3>
                            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                                Cause if you do, it can be yours now. Hit the
                                buttons above to navigate to make your own meme
                                NFT today. Buy other memes and sell yours!
                            </p>
                            <div className="sm:block flex flex-col mt-10">
                                <a
                                    href="/upload"
                                    // target="_blank"
                                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                                >
                                    Get started
                                </a>
                                {/* <a
                                    href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                                    target="_blank"
                                    className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                                >
                                    <i className="fab fa-github text-lg mr-1"></i>
                                    <span>Help With a Star</span>
                                </a> */}
                            </div>
                            <div className="text-center mt-16"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
