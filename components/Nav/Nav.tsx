import { NavStyle, NavInfo } from './style';
import Image from "next/image";

const Nav = () => {
    return (
        <NavStyle>
            <NavInfo>
                <div className='logo'>
                    <Image
                        src="/logoAga.svg"
                        width={150}
                        height={150}
                        alt="Logo da AGÁ Empreendimentos"
                    />
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">portfólio</a>
                        </li>
                        <li>
                            <a href="#">quem somos</a>
                        </li>
                        <li>
                            <a href="#">contato</a>
                        </li>
                    </ul>
                </div>
            </NavInfo>
        </NavStyle>
    )
}

export default Nav