"use client";

import React from 'react';
//import { Link } from 'react-router-dom';

import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div>
        {/* <h1>Home</h1>
        <Link to='/about'>About</Link> */}
        <Image src="/ham_cover.png" alt="image" layout='fill' />
      </div>
    </>
  );
}

export default Home;

