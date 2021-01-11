import React from 'react';
import {ImgWrapper,Img,Heading,InfoSec,InfoRow,InfoColumn,TextWrapper,TopLine,SubTitle} from './InfoSection.elements';
import {Container,Button} from '../../GlobalStyle';
import {Link} from 'react-router-dom';

const InfoSection = ({img,alt,start,primary,topLine,headline,lightBg,imgStart,lightTopLine,lightText,lightTextDesc,buttonLabel,description}) => {
    return ( 
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
     );
}
 
export default InfoSection;