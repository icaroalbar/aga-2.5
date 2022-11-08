import { NavStyle, NavInfo, Toogle } from './style';
import Image from "next/image";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';


const Nav = () => {

    const [open, setOpen] = useState(true)

    return (
        <NavStyle>
            <NavInfo>
                <Image
                    src="/logoAga.svg"
                    width={150}
                    height={150}
                    alt="Logo da AGÁ Empreendimentos"
                    className='logo'
                />
                <Toogle onClick={() => setOpen(!open)}>
                    {open ? <GiHamburgerMenu /> : <AiOutlineClose />}
                </Toogle>
                <ul className={(open ? "hidden" : "")}>
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
            </NavInfo>
        </NavStyle>
    )
}

export default Nav