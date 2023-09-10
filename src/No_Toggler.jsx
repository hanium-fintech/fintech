import { useState } from "react"
import Add from "./Add"
import Subtract from "./Subtract"

const first_data = [
    {
        id: 1,
        num: 0.01,
        upperbound: 5000000
    },
    {
        id: 2,
        num: 0.02,
        upperbound: 5000000
    },
    {
        id: 3,
        num: 0.01,
        upperbound: 5000000
    },
    {
        id: 4,
        num: 0.02,
        upperbound: 5000000
    },
    {
        id: 5,
        num: 0.01,
        upperbound: 5000000
    },
    {
        id: 6,
        num: 0.02,
        upperbound: 5000000
    }
];




const data = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
]

//최대한도
const inputt = 12000000



export default function Toggler({ name }) {
    const [Toggle, setToggle] = useState(true);
    const toggleState = () => setToggle(!Toggle);
    return (
        <>  <button onClick={toggleState}>{name}</button>
            <span>
                {Toggle ?
                    <Add firstData={first_data} newData={data} input={inputt} />
                    :
                    <Subtract firstData={first_data} newData={data} input={inputt} />}
            </span>
        </>
    )
}