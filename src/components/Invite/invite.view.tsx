import {
    Button,
    Card,
    ColorBox,
    ColorPalettes,
    Container,
    ContainerCard,
    ContainerImageCard,
    ContentCard,
    HorizontMarging,
    Image,
    Lottie,
    Search,
    SectionCard,
    VerticalMarging,
    Wrapper, WrapperButton,
    WrapperCard,
    WrapperImage,
    WrapperLottie
} from "./invite.styles.tsx";
import * as React from "react";
import {memo} from "react";
import padrinhos from "../../assets/padrinhos.jpg";
import madrinhas from "../../assets/madrinhas.jpg";
import {AnimatedComponent} from "../Animations";
import jsonLotie from '../../assets/CM.json'
import {CheckBox} from "./check-box.tsx";
import {Controller} from "react-hook-form";
import {useInviteController} from "./invite.controller.tsx";
import {format} from "date-fns";
import { ptBR } from "date-fns/locale";
export const Invite: React.FC = memo(() => {
    const {
        control,
        inviteType,
        responseData,
        requestData,
        confirm,
        loading,
        recuse,
        handleChange,
        handleSearch,
        phone,
        finish,
        invite,
        needConfirmation
    } = useInviteController();
    const renderMessage: (element: React.ReactElement) => React.ReactElement = (element) => {
        switch (inviteType) {
            case 'padrinho':
                return (<ContainerCard>

                        <SectionCard>
                            <p>
                                Querido <strong>{responseData?.title}</strong>,<br/>
                                É com muito carinho que queremos convidá-lo para estar ao nosso lado como nosso Padrinho.

                                Sua amizade, seu apoio e sua presença especial significam muito para nós. Ter você conosco nesse momento único tornará o nosso dia ainda mais inesquecível. 🥂💖
                            </p>
                            {element}
                            <p>

                             Orientação: Terno cinza médio e sem gravata.
                            </p>
                        </SectionCard>
                        <WrapperImage>
                            <strong>Paleta de cores</strong>
                            <ColorPalettes>
                                <ColorBox color={'#edede9'}/>
                                <ColorBox color={'#dee2e6'}/>
                                <ColorBox color={'#ced4da'}/>
                                <ColorBox color={'#d4d4d4'}/>
                                <ColorBox color={'#c6cdd7'}/>
                                <ColorBox color={'#cbcbd7'}/>
                            </ColorPalettes>
                            <Image
                                src={padrinhos}
                                alt="Padrinhos"
                            />
                        </WrapperImage>
                    </ContainerCard>
                );
            case 'madrinha':
                return (<ContainerCard>
                        <SectionCard>
                            <p>
                                Querida <strong>{responseData?.title}</strong>,<br/>
                                É com muito carinho que queremos convidá-la para estar ao nosso lado como nossa Madrinha.

                                Sua amizade, seu carinho e sua presença especial são muito importantes para nós. Ter você conosco nesse momento único tornará o nosso dia ainda mais inesquecível. 💖

                            </p>
                            {element}
                            <p>
                                <strong>Orientação: Cada madrinha terá uma cor única, confira no manual qual é a sua...</strong>
                            </p>
                        </SectionCard>
                        <WrapperImage>
                            <strong>Paleta de cores</strong>
                            <ColorPalettes>
                                <ColorBox color={'#D0592E'}/>
                                <ColorBox color={'#D42D4B'}/>
                                <ColorBox color={'#E1B03A'}/>
                                <ColorBox color={'#3A6753'}/>
                                <ColorBox color={'#DA2E76'}/>
                                <ColorBox color={'#6A1260'}/>
                            </ColorPalettes>
                            <Image
                                src={madrinhas}
                                alt="Madrinhas"
                            />
                        </WrapperImage>
                    </ContainerCard>
                );
            case 'madrinha_e_padrinho':
                return (
                    <ContainerCard both={true}>

                        <SectionCard>
                            <p>
                                ✨ Enfim, o grande dia está chegando! ✨
                                Queridos <strong>{responseData?.title}</strong>,<br/>
                                É com muito carinho que queremos convidá-los para estarem ao nosso lado como nossos padrinhos.
                                A amizade, o carinho e o exemplo de vocês são muito especiais para nós. Ter a presença de vocês nesse momento único tornará nosso dia ainda mais inesquecível. 🥂💖


                            </p>
                            {element}
                            <p>
                                <strong>Orientações:</strong><br/>
                                - Padrinho: Terno cinza médio e sem gravata<br/>
                                - Madrinha: Cada madrinha terá uma cor única, confira no manual entregue qual é a sua...<br/>
                            </p>
                        </SectionCard>
                        <ContainerImageCard>
                            <WrapperImage>
                                <strong>Paleta de cores masculino</strong>
                                <ColorPalettes>
                                    <ColorBox color={'#e9ecef'}/>
                                    <ColorBox color={'#edede9'}/>
                                    <ColorBox color={'#dee2e6'}/>
                                    <ColorBox color={'#ced4da'}/>
                                    <ColorBox color={'#d4d4d4'}/>
                                    <ColorBox color={'#c6cdd7'}/>
                                    <ColorBox color={'#cbcbd7'}/>
                                </ColorPalettes>
                                <Image
                                    src={padrinhos}
                                    alt="Padrinhos"
                                />
                            </WrapperImage>
                            <WrapperImage>
                                <strong>Paleta de cores feminina</strong>
                                <ColorPalettes>
                                    <ColorBox color={'#D0592E'}/>
                                    <ColorBox color={'#D42D4B'}/>
                                    <ColorBox color={'#E1B03A'}/>
                                    <ColorBox color={'#3A6753'}/>
                                    <ColorBox color={'#DA2E76'}/>
                                    <ColorBox color={'#6A1260'}/>
                                </ColorPalettes>
                                <Image
                                    src={madrinhas}
                                    alt="Madrinhas"
                                />
                            </WrapperImage>
                        </ContainerImageCard>

                    </ContainerCard>
                );

            default: // Convidado normal
                return (
                    <SectionCard>
                        <p>

                        “Acima de tudo, porém, revistam-se do amor, que é o elo perfeito.”
                        Colossenses 3:14

                        Yasmin Gonçalves Ferreira & Wláder Henrique de Jesus Nunes da Silva

                        junto de seus pais
                        Luciana Gonçalves Ferreira e Jeber Soares Ferreira
                        Terezinha de Jesus da Silva e José dos Reis Nunes da Silva

                        têm a alegria de convidar  <strong>{responseData?.title}</strong>  para a cerimônia religiosa de seu casamento.
                        </p>
                        {element}
                    </SectionCard>


                );
        }
    };
    return (
        <Wrapper>
            <Container>
                <WrapperCard>
                    <AnimatedComponent animationType={'FadeInRightUp'}>
                        <Card>
                            <HorizontMarging/>
                            <VerticalMarging/>
                            <ContentCard>
                                {!inviteType && !loading && !requestData && !invite && (<>
                                    <h1>Busque o seu convite</h1>
                                    <p>
                                        Digite seu número de telefone logo abaixo para localizar seu convite e confirmar
                                        sua
                                        presença! 😊
                                    </p>
                                    <Search>
                                        <input value={phone} placeholder={'(00) 0 0000-0000'} maxLength={15}
                                               type={'tel'} onChange={handleChange}/>
                                        <button type={"button"} onClick={handleSearch}>Buscar</button>
                                    </Search>
                                </>)}
                                {loading && (
                                    <WrapperLottie>
                                        <strong>Buscando convite </strong><Lottie animationData={jsonLotie}
                                                                                  loop={true}/>
                                    </WrapperLottie>
                                )}
                                {inviteType && !loading && !requestData && (<>
                                    <h1>Enfim, o grande dia!</h1>
                                    {renderMessage(
                                        <>
                                            <p> 📅 Data: 13 de dezembro de 2025 </p>
                                            <p> 📍 Local: Galeria Jardim – Rua Oito, 301, Grajaú, Divinópolis - MG </p>
                                            <p> 🕔 Horário: 17h</p>
                                            <p>Por favor, confirme sua presença até o dia {format(new Date(responseData?.expirationDate||''),"dd 'de' MMMM 'de' yyyy",{locale: ptBR})}!</p>
                                            <p>
                                                Com todo nosso carinho, <strong>Yasmin Gonçalves Ferreira </strong> & <strong> Wláder Henrique de Jesus Nunes da Silva.</strong>
                                            </p>
                                        </>
                                    )}
                                    {needConfirmation && (
                                        <WrapperButton>
                                            <Button type={'button'} onClick={confirm}>Confirmar</Button><Button invert
                                                                                                                type={'button'}
                                                                                                                onClick={recuse}>Não
                                            posso ir</Button>
                                        </WrapperButton>
                                    )}


                                </>)}

                                {requestData && (<>
                                        <h1>Marque quem vai</h1>
                                        <p>Deixamos todos marcados por padrão, mas, ao confirmar, pedimos que desmarque
                                            quem
                                            não poderá comparecer. Fizemos assim porque contamos com a presença de todos
                                            nesse dia tão especial!</p>
                                    </>
                                )}
                                {requestData && responseData?.users.some(user => !!user.honor) && (
                                    <p>Obs: Se você está lendo esta mensagem, é porque com certeza é um padrinho, uma
                                        madrinha, ou ambos! E padrinhos e madrinhas jamais podem sair da lista! 😄💖</p>
                                )}
                                {requestData && (responseData?.users?.map(user => (
                                    <Controller
                                        key={user.id}
                                        name={user.id.toString()}
                                        defaultValue={true}
                                        control={control}
                                        render={({field}) => (
                                            <CheckBox
                                                name={user.name}
                                                id={field.name}
                                                checked={field.value}
                                                onChange={field.onChange}
                                                typeUser={user?.honor?.title}
                                            />
                                        )}
                                    />

                                )))}
                                {requestData && (<Button type={'button'} onClick={finish}>Finalizar</Button>)}
                            </ContentCard>
                        </Card>
                    </AnimatedComponent>

                </WrapperCard>
            </Container>

        </Wrapper>

    )
});
