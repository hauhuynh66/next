"use client"

import { ActionIcon, Container, Flex, Transition, createStyles, rem } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { IconArrowLeft, IconArrowRight, IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import classNames from "classnames";
import Image from 'next/image';
import { useState } from "react";

const useStyles = createStyles((theme)=>({
    translate : {
        transform: 'translateX(-50%)'
    },
    animate : {
        transitionProperty: 'left, opacity, height',
        transitionDuration: "500ms",
    },
    ic: {
        display: 'flex',
        flexDirection: 'row'
    },
    
    indicator: {
        aspectRatio: "1/1",
        borderRadius: "50%"
    },
}))

const CarouselHolder = ({children, n} : {children : React.ReactNode[], n : number}) => {
    const count = children.length;
    const [active, setActive] = useState(0);
    const list = Array.from(Array(count).keys());
    const [autoPlay, toggleAutoPlay] = useToggle([true,false]);
    let playIcon;

    if(autoPlay) {
        playIcon = <IconPlayerPause/>    
    } else {
        playIcon = <IconPlayerPlay/>
    }

    const { classes } = useStyles()
    
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         if(active < count - 1) {
    //             setActive(active + 1)
    //         } else {
    //             setActive(0);
    //         }
    //     }, 2500);
    //     return ()=>clearInterval(interval);
    // }, [active, setActive, count]);

    function getPos(i : number) {
        let x = 0;

        if(count > n) {
            x = (i - active) * (100/n); 
        } else {
            x = i * (100/n);
        }

        if(x < 0 && Math.abs(x) >= 100) {
            x += count * 100/n;
        }

        if(x > 0 && x >= 100) {
            x -= count * 100/n;
        }

        return {
            left : x + "%",
            width : 100/n + "%",
        };
    }

    function isActive(index : number) {
        return index === active;
    }

    return ( 
        <Container pos='relative' fluid={true}>
            <Container pos='relative'>
                <Flex left='50%' 
                    mih={300} 
                    pos='relative' align='center' justify='center'
                    direction='row'>
                    {children.map((child : React.ReactNode, index) => {
                        return (
                            <Container
                                pos='absolute' 
                                h={isActive(index)?"100%":"95%"}
                                opacity={isActive(index) ? '1' : '0.5'}
                                p={0}
                                className={classNames(classes.translate, classes.animate)}
                                style={getPos(index)} key={index} onClick={()=>setActive(index)}>
                                    {child}
                            </Container>
                        );
                    })}
                </Flex>
                <Flex 
                    pos='absolute' 
                    w='25%' 
                    top={rem(10)} left="50%"
                    direction='row'
                    justify='space-around'
                    align='center'
                    className={classes.translate}>
                    <ActionIcon bg="gray" radius="50%">
                        <IconArrowLeft/>
                    </ActionIcon>
                    <ActionIcon bg="gray" radius="50%" onClick={()=>toggleAutoPlay()}>
                        { playIcon }
                    </ActionIcon>
                    <ActionIcon bg="gray" radius="50%">
                        <IconArrowRight/>
                    </ActionIcon>
                </Flex>
                <Flex 
                    pos='absolute' 
                    w='20%' 
                    h={rem(12)} bottom={rem(10)} left="50%"
                    direction='row'
                    justify='space-around'
                    className={classes.translate}>
                    {
                        list.map((key, index)=> {
                            return (
                                <Container onClick={()=>setActive(key)} 
                                    fluid={true}
                                    p={0}
                                    mx={rem(2)}
                                    bg={isActive(key)?"yellow":"white"} 
                                    key={index} 
                                    className={classes.indicator}/>
                            )
                        })
                    }
                </Flex>
            </Container>
        </Container>
     );
}


const carouselItems = [
    {
        title : "",
        src : "https://picsum.photos/id/0/200/300"
    },
    {
        title : "",
        src : "https://picsum.photos/id/1/200/300"
    },
    {
        title : "",
        src : "https://picsum.photos/id/2/200/300"
    },
    {
        title : "",
        src : "https://picsum.photos/id/3/200/300"
    },
    {
        title : "",
        src : "https://picsum.photos/id/4/200/300"
    },
    {
        title : "",
        src : "https://picsum.photos/id/5/200/300"
    },
    {
        title : "",
        src : "https://picsum.photos/id/6/200/300"
    }
]

export const Carousel = () => {
    return(
        <div>
            <CarouselHolder n={4}>
                {
                    carouselItems.map((item, index)=> {
                        return <CarouselItem {...item} key={index}></CarouselItem>
                    })
                }
            </CarouselHolder>
        </div>
    )
}

const CarouselItem = ({title, src} : {title? : string, src? : string}) => {
    const i = Math.floor(Math.random()*100) + 1;
    title ||= "Test"
    src ||= "https://picsum.photos/id/"+ Math.floor(Math.random()*100) +"/200/300";
    const link = src

    return ( 
        <Image 
            loader={()=> link} 
            src={src} alt="" 
            fill 
            unoptimized/>
     );
}