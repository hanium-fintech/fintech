import { useState } from "react";
import './input.css'




// 사용자가 기한과 금액을 입력할 수 있는 형식을 만들고 이를 상위 컴포넌트에 전달하도록 생성

export default function Input({ onNumberChange, onSliderChange }) {
    const [number, setNumber] = useState("");
    const [sliderValue, setSliderValue] = useState(0);

    const handleNumberChange = (event) => {
        const newNumber = parseFloat(event.target.value);
        setNumber(newNumber);
        onNumberChange(newNumber);
    };



    const handleSliderChange = (event) => {
        const newValue = event.target.value;
        setSliderValue(newValue);
        onSliderChange(newValue);
    };



    return (

        
        <body>
        <section id= "main">
            <div>
                <h1>예금비교</h1>
                <div>
                    <h4>예치금액</h4>
                </div>
                <input 
                    class="input_number" 
                    type="number" 
                    value={number} 
                    onChange={handleNumberChange} 
                    placeholder="금액을 입력하세요">
                </input> 원

            </div>

            <div>
                <h4>예치기한(개월)</h4>
                <input
                    class="input_range"
                    type="range"
                    min="0"
                    max="18"
                    step="6"
                    list="markers"
                    value={sliderValue}
                    onChange={handleSliderChange}
                />

                <datalist id="markers">
                    <option value="0">0</option>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="18">18</option>
                </datalist>

                <p>{sliderValue} 개월</p>

            </div>
        </section>
        </body>
    );
}