import "./Header.css"

export default function Header() {
    return (
    <header>
        <nav>
            <a href="#">
                <div>
                    <img src="./logo.png" alt="Hanium Logo" />
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">예적금 통합비교</a>
                </li>
                <li>
                    <a href="#">예금비교</a>
                </li>
                <li>
                    <a href="#">적금비교</a>
                </li>
            </ul>
        </nav>
    </header>
    )

};
