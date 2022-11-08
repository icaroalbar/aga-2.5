import { HeaderStyle, FlexStyleOne, FlexStyleTwo } from './style'
import Image from "next/image";

const Header = () => {
    return (
        <HeaderStyle>
            <FlexStyleOne>
                <Image
                    src="/headerDiv.png"
                    width={576}
                    height={505}
                    layout="responsive"
                    alt="Imagem Ilustrativa"
                />
            </FlexStyleOne>
            <FlexStyleTwo>
                requinte e sofisticação em forma de traços
            </FlexStyleTwo>
        </HeaderStyle>
    )
}

export default Header