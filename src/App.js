import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Model from "./component/Model";

const App = () =>{
    return (
        <div className="bg-[url('https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg')] lg:bg-[url('https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg')] h-screen bg-cover bg-center">

        <Header/>
        <Model/>
      
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);