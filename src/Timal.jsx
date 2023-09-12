// 사용자가 입력한 금액과 상품의 최대한도,금리를 고려하여 최적의 상품을 나열

export default function Optimal({ data, input }) {
    return (
        <div>
            <h2>현재 최선의 선택은?</h2>
            <ul>
                {data.map((item) => {
                    if (input > 0) {
                        input -= item.upperbound;
                        if (input > 0) {
                            return (
                                <li key={item.id}>
                                    id: {item.id}, 기본금리:{item.num.toFixed(3)}, 우대금리: {item.Calculation.toFixed(3)}, 넣어야되는 금액: {item.upperbound}
                                </li>
                            );
                        } else {
                            return (
                                <li key={item.id}>
                                    id: {item.id}, 기본금리:{item.num.toFixed(3)}, 우대금리: {item.Calculation.toFixed(3)}, 넣어야되는 금액: {input + item.upperbound}
                                </li>
                            )

                        }


                    } else {
                        return null;
                    }

                })}
                <span></span>
            </ul>
        </div>
    )
}