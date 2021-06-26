import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Info from './Info';

function MyApp(){
    return(
        <div>
            <Header />   
            <Footer />
            <Info coursename ="Javascript and React Js" discr ="Here we bring our another free 7 days live BOOTCAMP with a hands-on project at the end - The Foundation of Javascript and React Js "/>
            <Info coursename ="Node Js and React Js" discr ="Here we bring our another free 7 days live BOOTCAMP with a hands-on project at the end - The Foundation of Node Js and React Js "/>
            <Info coursename ="Python and Data visualization" discr ="Here we bring our another free 7 days live BOOTCAMP with a hands-on project at the end - The Foundation of Python and Visualization "/>
            <Info coursename ="Data analysis using Excel" discr ="Here we bring our another free 7 days live BOOTCAMP with a hands-on project at the end - The Foundation of Excel "/>
            <Info coursename ="Tableau Fundanmentals" discr ="Here we bring our another free 7 days live BOOTCAMP with a hands-on project at the end - The Foundation of Tableau "/>
            
        </div>
    )

}

export default MyApp;