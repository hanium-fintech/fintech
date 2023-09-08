import { useState } from "react";
import Show from './Show';
import './Clicker.css'

export default function Clicker({ input, value }) {
    const [showClick, setShowClick] = useState(false); // 항상 결과 보이도록 설정
    const [amount, setAmount] = useState(null);
    const [deadlines, setDeadlines] = useState(null);


    const handleButtonClick = () => {
        setShowClick(true)
        setAmount(input);

        setDeadlines(value)
    };

    return (
        <div>
            <button class = "clicker" onClick={handleButtonClick}>
                <p class = "text">금융상품 검색-&gt;</p>
                </button>
            {showClick && (
                <Show input={amount} deadline={deadlines} />
            )}
            <p>{deadlines}</p>
        </div>
    );
}