import {Arrow, Container, Wrapper,Slide,
        ImgContainer,InfoContainer,Image, Title,
        Description,Button } from './style_slide'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import {sliderItem} from '../../data'
import { useState, useEffect } from 'react';

const BigSlider = () => {

    const [sliderIndex, setSliderIndex] = useState(0);
    const [sliderState, setSliderState] = useState(true);


    const handleClick = (direction) => {
        if(direction === "left"){
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : sliderItem.length-1);
        }else{
            setSliderIndex(sliderIndex < sliderItem.length-1 ? sliderIndex + 1 : 0);
        }
    }

    const autoChange = () => {
        if(sliderState){
            if(sliderIndex < sliderItem.length-1){
                setSliderIndex(sliderIndex + 1 );
            }
            if(sliderIndex === sliderItem.length-1){
                setSliderIndex(sliderItem.length-1);
                setSliderState(false);
            }  
        }else{
             if(!sliderState){
                setSliderIndex(sliderIndex - 1);
            }
            if(sliderIndex === 0){
                setSliderIndex(0);
                setSliderState(true)
            }  
        }
    }

    useEffect(() => {
        let sliderForward =  setInterval(() => {
                autoChange();
            },6000);
        return() => clearInterval(sliderForward);
    });

   

    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper position={sliderIndex}>
                {sliderItem.map((arrival) => {
                    const { bg, img, title, desc, id } = arrival;
                    return (
                        <Slide bg={bg} key={id}>
                            <ImgContainer>
                                <Image  src={img} alt={title}/>
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{title}</Title>
                                <Description>{desc}</Description>
                                <Button>SHOP NOW</Button>
                            </InfoContainer>
                        </Slide>
                    )
                })
                   
                }
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default BigSlider;