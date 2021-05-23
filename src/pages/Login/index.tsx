
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Button } from '../../components/Buttom';

import { Container} from "./styles";
import { Content } from "./styles";
import { Background, FormContainer, InputContainer } from "./styles";

export function Login(){
    return (
        <Container>

            <Content>

                <FormContainer>
                    <h2>Faça o seu Login:</h2>
                    <form action="">

                        <InputContainer>
                            <FiMail size={40}/>
                            <input 
                                type="email"
                                placeholder="E-mail"
                            />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}/>
                            <input 
                                type="password"
                                placeholder="Senha"
                            />
                        </InputContainer>
                        <Button type="submit">Entrar</Button>

                    </form>
                    <Link to="/register">
                        <FiLogIn size={40}/>
                        Cadastre o seu acesso
                    </Link>
                </FormContainer>

            </Content>

            <Background />
            
        </Container>
    )
}