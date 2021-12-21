import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'


function Season() {
    return (
    <> 
        <Header>
            <div>
                <HeaderImg src="./assets/poster.jpg" alt="poster" />
            </div>
            <Info>
                <Name>
                    <h2>Рик и Морти 5 сезон смотреть онлайн</h2>
                    <small class="date">2021-06-20</small>
                </Name>
                <Autors>
                    <p><span>Авторы:</span> Ройланд Джастин, Хармон Дэн</p>
                    <p><span>Режисеры:</span> Джефф Майерс, Брайан Ньютон, Джон Райс, Джастин Ройланд, Стивен Сандовал</p>
                    <p><span>Перевод на русский:</span> Сыендук</p>
                </Autors>
            </Info>
        </Header>

        <Episodes>
            <h3>Все серии 5 сезона</h3>
            <Ul>
                <Li>
                    <article>
                        <ContainerPicture>
                            <PictureImg src="./assets/Rick-and-Morty-5-sezon-specvipusk-300x170.webp" alt="picture" />
                            <PictureName>
                                <p>5 сезон спецвыпуск</p>
                            </PictureName>
                        </ContainerPicture>
                        <Info>
                            <p>Спецвыпуск</p>
                            <small>2021-08-05</small>
                        </Info>
                    </article>
                </Li>
                <li>
                    <article>
                        <ContainerPicture>
                            <PictureImg src="./assets/Rick-and-Morty-5-sezon-specvipusk-300x170.webp" alt="picture" />
                            <PictureName>
                                <p>5 сезон спецвыпуск</p>
                            </PictureName>
                        </ContainerPicture>
                        <Info>
                            <p>Спецвыпуск</p>
                            <small>2021-08-05</small>
                        </Info>
                    </article>
                </li>
                <li>
                    <article>
                        <ContainerPicture>
                            <PictureImg src="./assets/Rick-and-Morty-5-sezon-specvipusk-300x170.webp" alt="picture" />
                            <PictureName>
                                <p>5 сезон спецвыпуск</p>
                            </PictureName>
                        </ContainerPicture>
                        <Info>
                            <p>Спецвыпуск</p>
                            <small>2021-08-05</small>
                        </Info>
                    </article>
                </li>
                <li>
                    <article>
                        <ContainerPicture>
                            <PictureImg src="./assets/Rick-and-Morty-5-sezon-specvipusk-300x170.webp" alt="picture" />
                            <PictureName>
                                <p>5 сезон спецвыпуск</p>
                            </PictureName>
                        </ContainerPicture>
                        <Info>
                            <p>Спецвыпуск</p>
                            <small>2021-08-05</small>
                        </Info>
                    </article>
                </li>
            </Ul>
        </Episodes>
        <Video>
            <p>Рик и Морти возвращаются в 5-й сезон в воскресенье, 20 июня, в 11 вечера в США, в России первые переводы будут в понедельник, Сыендук во вторник-среду.</p>
            <ContainerVideo>
                <iframe src="https://www.youtube.com/embed/sPAw95c_AOE"></iframe> 
            </ContainerVideo>
        </Video>
    </>
    )
}

const Header = styled.header`
    display: flex;
    padding: 20px 10px;
    border-bottom: 1px solid black;
`

const HeaderImg = styled(Image)`
    width: 140px;
    height: 210px;
`
const Info = styled.div`
    margin: 0 20px;
`

const Name = styled.div`
    border-bottom: 1px solid black;
    padding-bottom: 15px;
    & h2 {
        line-height: 1;
        margin: 0; 
    }
`

const Autors = styled.div`
    & p {
        margin: 10px 0;
    }
    & span {
        color: blue;
    }
`

const Episodes = styled.div`
    padding: 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
`

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    width: 100%;
    column-gap: 5%;
    row-gap: 20px;
    padding: 0;
    @media screen and (min-width: 600px) {
        column-gap: 2%;
        row-gap: 20px;
    }
`

const Li = styled.li`
    width: 45%;
    @media screen and (min-width: 600px) {
        width: 31.9%;
    }
`

const ContainerPicture = styled.div`
    display: inline-flex;
    position: relative;
    box-shadow: 0 1px 8px rgba(0,0,0,.7),0 0 0 1px rgba(0,0,0,.4) inset;
    &:hover {
        filter: blur(1px) brightness(.5);
        background: rgba(0,0,0,.4) !important;
    }
`

const PictureImg = styled(Image)`
    width: 100%;
    height: auto;
    border-radius: 3px;
`

const PictureName = styled.div`
    position: absolute;
    bottom: 0;
    background-color: blue;
    padding: 0 10px;
    color: white;
    & p {
        margin: 5px 0;
    }
`

const Info = styled.div`
    & p {
        margin: 5px 0 1px;
        line-height: 1;    
    }
    & small {
        color: gray;
    }
`

const Video = styled.div`
    max-width: 450px;
    margin: 0 auto;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
`

const ContainerVideo = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding-top: 56.25%;
    overflow: hidden;
    & iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
`

export default Season
