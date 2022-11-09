import { SectionStyle, FlexStyleOne, FlexStyleTwo, FlexStyleThree } from './style'
import Image from 'next/image'

const QuemSomos = () => {
    return (
        <SectionStyle>
            <FlexStyleOne>
                <h1>quem somos</h1>
                <p>Somos a Agá Empreendimentos, referencial para quem busca refinamento e requinte arquitetônico. Estamos localizados em Icaraí, uma das áreas mais importantes da cidade de Niterói. Atuamos com Projetos, Reformas, Construção e Incorporação Imobiliária, tendo amplo destaque no cenário Fluminense.</p>

                <p className='hidden'>Nosso trabalho é baseado pela transparência, sendo pautado pela qualidade de vida. Buscamos sempre imprimir em nossos projetos o padrão Agá Empreendimentos, que é norteado pela sofisticação, elegância e aprumo técnico. A Agá Empreendimentos carrega o DNA da inovação e a busca pelo cuidado social e ambiental.</p>
            </FlexStyleOne>
            <FlexStyleTwo>
                <Image
                    src="/queSomos.png"
                    width={100}
                    height={500}
                    layout="responsive"
                    alt="Imagem Ilustrativa"
                />
            </FlexStyleTwo>
            <FlexStyleThree>
                <p>Nosso trabalho é baseado pela transparência, sendo pautado pela qualidade de vida. Buscamos sempre imprimir em nossos projetos o padrão Agá Empreendimentos, que é norteado pela sofisticação, elegância e aprumo técnico. A Agá Empreendimentos carrega o DNA da inovação e a busca pelo cuidado social e ambiental.</p>
            </FlexStyleThree>
        </SectionStyle>
    )
}

export default QuemSomos