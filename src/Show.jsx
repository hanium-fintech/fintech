//show.jsx

import { useState } from "react";
import Optimal from "./Timal";
import './Box.css'
import './input.css'

import Add from "./Add"
import Subtract from "./Subtract"
import "./input.css"
import "./show.css"




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




const temp_data1 = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
];

const temp_data2 = [
    {
        id: 1,
        num2: 0.03
    },
    {
        id: 2,
        num2: 0.03
    }
];

const temp_data3 = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
];

const temp_data4 = [
    {
        id: 1,
        num2: 0.001
    },
    {
        id: 2,
        num2: 0.002
    }
];





// 우대조건 키워드 버튼을 토글형식 Add,Subtract연산을 해주고 최적을 제시 최적이외에도 나머지 순위도 제시

export default function Show({ input, deadline }) {
    const a = first_data.map(data => ({ ...data, Calculation: data.num }))
    const nowdata = a.sort((a, b) => b.Calculation - a.Calculation);
    const [item, setItem] = useState(nowdata);
    const [selectedConditions, setSelectedConditions] = useState([]); // Selected conditions state
    const handleAddCondition = (newData) => {
        const updatedData = Add({ firstData: item, newData });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation); // Sort the data
        setItem(sortedData);
        setSelectedConditions([...selectedConditions, newData]);
    };

    const handleRemoveCondition = (conditionToRemove) => {
        const updatedData = Subtract({ firstData: item, newData: conditionToRemove });
        const sortedData = updatedData.sort((a, b) => b.Calculation - a.Calculation);
        setItem(sortedData);
        setSelectedConditions(selectedConditions.filter(condition => condition !== conditionToRemove));
    };

    const boxClassName = (conditionData) => {
        return selectedConditions.includes(conditionData) ? "box selected" : "box";
    };

    return (
        <div>
        <div id ="mainbox">
            
            
            <h2>우대조건</h2>
            <div>
                <span className={boxClassName(temp_data1)} onClick={() => selectedConditions.includes(temp_data1) ? handleRemoveCondition(temp_data1) : handleAddCondition(temp_data1)}>
                    비대면가입
                </span>
                <span className={boxClassName(temp_data2)} onClick={() => selectedConditions.includes(temp_data2) ? handleRemoveCondition(temp_data2) : handleAddCondition(temp_data2)}>
                    카드
                </span>
                <span className={boxClassName(temp_data3)} onClick={() => selectedConditions.includes(temp_data3) ? handleRemoveCondition(temp_data3) : handleAddCondition(temp_data3)}>
                    이체
                </span>
                <span className={boxClassName(temp_data4)} onClick={() => selectedConditions.includes(temp_data4) ? handleRemoveCondition(temp_data4) : handleAddCondition(temp_data4)}>
                    오픈뱅킹
                </span>
                </div>
</div>
                <div id ="mainbox">
                
            
            <div>
            <h2>현재 최선의 선택은?</h2>
                    <div class ="optimalbox">
                    <Optimal data={item} input={input} />
                    </div>
                <hr />
                </div>
              
                {/* 테이블 헤더 */}
                <div class ="tablebox">
<table>
    <thead>
        <tr>
            <th className="table-header">은행</th>
            <th className="table-header">상품명</th>
            <th className="table-header">기본금리</th>
            <th className="table-header">우대적용금리</th>
        </tr>
    </thead>
    <tbody>
        {item.map((i) => (
            <tr key={i.id}>
                <td></td>
                <td>{i.id}</td>
                <td>{i.num.toFixed(3)}</td>
                <td>{i.Calculation.toFixed(3)}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>


            </div>
        </div >
    );
}