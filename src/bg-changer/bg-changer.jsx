import { useState } from "react";

function BgMain(){
    const [color, setColor] = useState("black");
    return (
        <div className="w-full h-screen duration-500" style={{backgroundColor: color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 custom">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'red'}}> Red</button>
                    <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'blue'}}> Blue</button>
                    <button onClick={() => setColor('olive')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'olive'}}> Olive</button>
                    <button onClick={() => setColor('purple')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'purple'}}> Purple</button>
                    <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'green'}}> Green</button>
                    <button onClick={() => setColor('brown')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'brown'}}> Brown</button>
                    <button onClick={() => setColor('white')} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: 'white'}}> White</button>
                    <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: 'black'}}> Black</button>
                </div>
            </div>
        </div>
    );
}

export default BgMain;