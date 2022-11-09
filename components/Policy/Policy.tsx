
import { PolicyStyle, FlexPolicy, Button } from './style';
import { useEffect } from "react";

const Policy = () => {

    useEffect(() => {
        const valor = localStorage.getItem('politica')
        if (valor) adicionarStorange()
    }, [])

    const adicionarStorange = () => {
        document.querySelector(".concordo")?.classList.add('hidden')
        localStorage.setItem('politica', 'ok')
    }

    return (
        <PolicyStyle>
            <div className="concordo">
                <FlexPolicy width="79%">
                    <p>Nós da AGÁ Empreendimentos, para trazer uma melhor experiência em nossos meios de comunicação, utilizamos
                        <i> cookies, localStorange</i> e outras tecnologias semelhantes para personalizar melhor os nosso
                        conteúdos de acordo com o nosso <a href="./politica" className="font-bold hover:border-b-2 border-primary-10" target="bland">Termo de Privacidade.</a> Clique em continuar para concordar com estas condições.
                    </p>
                </FlexPolicy>
                <FlexPolicy width="20%">
                    <Button onClick={adicionarStorange}>concordo</Button>
                </FlexPolicy>
            </div>
        </PolicyStyle>
    )
}

export default Policy