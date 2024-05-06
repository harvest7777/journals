import React, { useState, useEffect } from 'react';

function Helloworld() {

  const [hello, setHello] = useState("default");


  const getHelloworld = async () => {
    const response = await fetch("/helloworld");
    const data = await response.json();
    console.log(data);
    setHello(data.hello);
  };

  useEffect(() => {
    getHelloworld();
  }, [])

  return (
    <div>
      {hello}
    </div>
  );
}

export default Helloworld;
