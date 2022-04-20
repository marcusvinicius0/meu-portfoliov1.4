import styled from 'styled-components';

export const Navegation = styled.nav`    
    margin-left: 60vw;
    margin-top: 3px;
    font-size: 17px;
    
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 10vw;
        gap: 1.8vw;
        z-index: 99;
    }

    a{
        color: whitesmoke;
    }

    a:hover{
        transition: color 0.3s;
        color: #5D4FB1;
    }

    @media (min-width: 1040px) and (max-width: 1115px){margin-left: 55vw}
    @media (min-width: 965px) and (max-width: 1039px){margin-left: 53vw}
    @media (min-width: 890px) and (max-width: 964px){margin-left: 51vw}
    @media (max-width: 889px) {display: none}
`



export const Introduction = styled.div`
    background-color: #1A1A29;
    height: 70vh;
    width: 100%;
    margin-top: -4vw;
    border-radius: 10vw;
    @media(min-width: 1040px) and (max-width: 1115px){height: 80vh}
    @media(min-width: 965px) and (max-width: 1039px){height: 80vh}
    @media(min-width: 890px) and (max-width: 964px){height: 105vh}
    @media(min-width: 815px) and (max-width: 889px){height: 105vh}
    @media(min-width: 740px) and (max-width: 814px){height: 105vh}
    @media(min-width: 665px) and (max-width: 739px){height: 105vh}
    @media(min-width: 590px) and (max-width: 664px){height: 105vh}
    @media(min-width: 515px) and (max-width: 589px){height: 105vh}
    @media(min-width: 440px) and (max-width: 514px){height: 105vh}
    @media(min-width: 365px) and (max-width: 439px){height: 105vh}
    @media(max-width: 364px){height: 78vh}

    .apresentation{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        margin-top: 13vw;
        margin-left: 9vw;

        h1{
            font-size: 55px;
            margin-top: 7vw;
            @media(min-width: 515px) and (max-width: 589px){font-size: 45px}
            @media(min-width: 440px) and (max-width: 514px){font-size: 45px}
            @media(min-width: 365px) and (max-width: 439px){font-size: 45px}
            @media(max-width: 364px){font-size: 45px}
        } 

        p{
            font-size: 25px;
            z-index: 99;
            @media(min-width: 515px) and (max-width: 589px){font-size: 20px}
            @media(min-width: 440px) and (max-width: 514px){font-size: 20px}
            @media(min-width: 365px) and (max-width: 439px){font-size: 18px}
            @media(max-width: 364px){font-size: 16px}
        }

        a{
            margin-top: 1em;
            background-color: #1A1A29;
            width: 165px;
            height: 48px;
            border-radius: 12px;
            border: 1px solid #5E50B2;
            padding-top: 1.1vw;
            padding-left: 1.3vw;
            /* @media (min-width: 1040px) and (max-width: 1115px){padding-left: 19px;}          */
        }
        a:hover{
            background-color: #5E50B2;
            transition: 1s;
        }

        .github-link{
        
            .links{
                font-size: 13px;
                color: #FFF;
                padding-left: 0.7vw;
                padding-top: -1vw;
                text-transform: uppercase;
                @media (min-width: 1040px) and (max-width: 1115px){padding-left: 1.1vw; padding-top: 0.2vw}
                @media (min-width: 965px) and (max-width: 1039px){padding-left: 1.6vw; padding-top: 0.5vw}
                @media (min-width: 890px) and (max-width: 964px){padding-left: 1.8vw; padding-top: 0.6vw}
                @media (min-width: 815px) and (max-width: 889px){padding-left: 2.1vw; padding-top: 0.7vw}
                @media (min-width: 740px) and (max-width: 814px){padding-left: 2.6vw; padding-top: 0.9vw}
                @media (min-width: 665px) and (max-width: 739px){padding-left: 3vw; padding-top: 1.2vw}
                @media (min-width: 590px) and (max-width: 664px){padding-left: 3.3vw; padding-top: 1.5vw}
                @media (min-width: 515px) and (max-width: 589px){padding-left: 3.7vw; padding-top: 1.9vw}
                @media (min-width: 440px) and (max-width: 514px){padding-left: 5vw; padding-top: 2.2vw}
                @media (min-width: 365px) and (max-width: 439px){padding-left: 6vw; padding-top: 2.6vw}
                @media (max-width: 364px){padding-left: 6.3vw; padding-top: 3.5vw}
            }
        }

        .resume-link{
            margin-left: 16vw;
            margin-top: -3.4vw;
            z-index: 99;
            @media (min-width: 1040px) and (max-width: 1115px){margin-left: 20vw; margin-top: -4.3vw}
            @media (min-width: 965px) and (max-width: 1039px){margin-left: 23vw; margin-top: -4.8vw}
            @media (min-width: 890px) and (max-width: 964px){margin-left: 25vw; margin-top: -5.1vw}
            @media (min-width: 815px) and (max-width: 889px){margin-left: 27vw; margin-top: -5.6vw}
            @media (min-width: 740px) and (max-width: 814px){margin-left: 29vw; margin-top: -6.5vw}
            @media (min-width: 665px) and (max-width: 739px){margin-left: 31vw; margin-top: -7vw}
            @media (min-width: 590px) and (max-width: 664px){margin-left: 33vw; margin-top: -7.8vw}
            @media (min-width: 515px) and (max-width: 589px){margin-left: 0vw; margin-top: 2vw}
            @media (min-width: 440px) and (max-width: 514px){margin-left: 0vw; margin-top: 2vw}
            @media (min-width: 365px) and (max-width: 439px){margin-left: 0vw; margin-top: 2vw}
            @media (max-width: 364px){margin-left: 0vw; margin-top: 2vw}

            .links{
                font-size: 12px;
                color: #FFF;
                padding-left: 1.5vw;
                padding-top: 0.1vw;
                text-transform: uppercase;
                @media (max-width: 1115px){font-size: 12px}
                @media (min-width: 1040px) and (max-width: 1115px){margin-left: 0.7vw; margin-top: 0.3vw}
                @media (min-width: 965px) and (max-width: 1039px){margin-left: 1.3vw; margin-top: 0.5vw}
                @media (min-width: 890px) and (max-width: 964px){margin-left: 1.6vw; margin-top: 0.7vw}
                @media (min-width: 815px) and (max-width: 889px){margin-left: 2vw; margin-top: 0.9vw}
                @media (min-width: 740px) and (max-width: 814px){margin-left: 2.4vw; margin-top: 1.1vw}
                @media (min-width: 665px) and (max-width: 739px){margin-left: 3vw; margin-top: 1.3vw}
                @media (min-width: 590px) and (max-width: 664px){margin-left: 3.8vw; margin-top: 1.5vw}
                @media (min-width: 515px) and (max-width: 589px){margin-left: 4.8vw; margin-top: 1.9vw}
                @media (min-width: 440px) and (max-width: 514px){margin-left: 6.2vw; margin-top: 2.4vw}
                @media (min-width: 365px) and (max-width: 439px){margin-left: 7.7vw; margin-top: 3.5vw}
                @media (max-width: 364px){margin-left: 8.9vw; margin-top: 4vw}
            }
        }
    }

    .main-img{
        display: flex;
        justify-content: flex-end;
        margin-top: -18vw;
        margin-left: 20vw;
        width: 75vw;
        height: 50vh;
        animation: move 1s infinite alternate;
            @keyframes move {
            from {transform: translateY(10px)}
            to {transform: translateY(-10px)}
        }
         @media (min-width: 1040px) and (max-width: 1115px){margin-top: -22vw}
         @media (min-width: 965px) and (max-width: 1039px){margin-top: -22vw; margin-left: 22vw}
         @media (min-width: 890px) and (max-width: 964px){margin-top: 5vw; margin-left: -19vw}
         @media (min-width: 815px) and (max-width: 889px){margin-top: 5vw; margin-left: -17vw}
         @media (min-width: 740px) and (max-width: 815px){margin-top: 5vw; margin-left: -10vw}
         @media (min-width: 665px) and (max-width: 739px){margin-top: 5vw; margin-left: -2vw}
         @media (min-width: 590px) and (max-width: 664px){margin-top: 5vw; margin-left: 6vw}
         @media (min-width: 515px) and (max-width: 589px){margin-top: 5vw; margin-left: 17vw}
         @media (min-width: 440px) and (max-width: 514px){margin-top: 5vw; margin-left: 25vw; width: 70vw; height: 45vh}
         @media (min-width: 365px) and (max-width: 439px){margin-top: 5vw; margin-left: 90vw; width: 1vw; height: 35vh}
         @media (max-width: 364px){margin-top: 5vw; margin-left: 90vw; width: 1vw; height: 30vh}
    }  

`

export const AboutMe = styled.div`
   
    .background{
        background-color: #1A1A29;
        height: 70vh;
        border-radius: 7vw;
        @media (min-width: 740px) and (max-width: 815px){height: 79vh}
        @media (min-width: 665px) and (max-width: 739px){height: 80vh}
        @media (min-width: 590px) and (max-width: 664px){height: 85vh}
        @media (min-width: 515px) and (max-width: 589px){height: 96vh}
        @media (min-width: 440px) and (max-width: 514px){height: 114vh}
        @media (min-width: 365px) and (max-width: 439px){height: 135vh}
        @media (max-width: 364px){height: 142vh}
    }

    h2{
        margin-top: 84px;
        margin-left: 137px;
        color: #7562E0;
        font-size: 40px;
        padding-top: 55px;
        @media (min-width: 1040px) and (max-width: 1115px){margin-left: 6.6rem}
        @media (min-width: 965px) and (max-width: 1039px){margin-left: 6rem}
        @media (min-width: 890px) and (max-width: 964px){margin-left: 5.5rem}
        @media (min-width: 815px) and (max-width: 889px){margin-left: 5rem}
        @media (min-width: 740px) and (max-width: 814px){margin-left: 4.5rem}
        @media (min-width: 665px) and (max-width: 739px){margin-left: 4rem}
        @media (min-width: 590px) and (max-width: 664px){margin-left: 4rem}
        @media (min-width: 515px) and (max-width: 589px){margin-left: 3rem}
        @media (min-width: 440px) and (max-width: 514px){margin-left: 3rem}
        @media (min-width: 365px) and (max-width: 439px){margin-left: 2.5rem}
        @media (max-width: 364px){margin-left: 2.5rem}
    } 

    p{
        padding: 2vw;
        margin-left: 8vw;
        font-size: 18px;
        line-height: 1.5rem;
        @media (min-width: 1040px) and (max-width: 1115px){padding: 2vw}
        @media (max-width: 364px){margin-left: 1vw; padding: 2vw}
    }

    h3{
        color: #7562E0;
        width: 127px;
        height: 144px;
        font-size: 96px;
        margin-left: 129px;
        margin-top: 1vw;
        animation: move 1.5s infinite alternate;
            @keyframes move {
            from {
                transform: translateY(10px)
            }
            to {
                transform: translateY(-10px)
            }
        }  
        @media (min-width: 1040px) and (max-width: 1115px){margin-left: 8vw}
        @media (min-width: 965px) and (max-width: 1039px){margin-left: 9vw}
        @media (min-width: 890px) and (max-width: 964px){margin-left: 9vw}
        @media (min-width: 815px) and (max-width: 889px){margin-left: 9vw}
        @media (min-width: 740px) and (max-width: 814px){margin-left: 9vw}
        @media (min-width: 665px) and (max-width: 739px){margin-left: 9vw}
        @media (min-width: 590px) and (max-width: 664px){margin-left: 9vw}
        @media (min-width: 515px) and (max-width: 589px){margin-left: 9vw}
        @media (min-width: 415px) and (max-width: 514px){margin-left: 9vw; margin-top: 5vw}
        @media (min-width: 365px) and (max-width: 414px){margin-left: 9vw}
        @media (max-width: 364px){margin-left: 10vw}
    }

    .time-experience{
        margin-left: 21vw;
        margin-top: -9vw;
        @media (min-width: 1040px) and (max-width: 1115px){padding: 2vw; margin-left: 23vw; margin-top: -12vw}
        @media (min-width: 965px) and (max-width: 1039px){padding: 3vw; margin-left: 24vw; margin-top: -13vw}
        @media (min-width: 890px) and (max-width: 964px){padding: 3vw; margin-left: 26vw; margin-top: -14vw}
        @media (min-width: 815px) and (max-width: 889px){padding: 3vw; margin-left: 27vw; margin-top: -15vw}
        @media (min-width: 740px) and (max-width: 814px){padding: 3vw; margin-left: 29vw; margin-top: -19vw}
        @media (min-width: 665px) and (max-width: 739px){padding: 3vw; margin-left: 31vw; margin-top: -22vw}
        @media (min-width: 590px) and (max-width: 664px){padding: 3vw; margin-left: 35vw; margin-top: -25vw}
        @media (min-width: 515px) and (max-width: 589px){padding: 3vw; margin-left: 39vw; margin-top: -29vw}
        @media (min-width: 440px) and (max-width: 514px){padding: 3vw; margin-left: 44vw; margin-top: -35vw}
        @media (min-width: 365px) and (max-width: 439px){margin-left: 10vw; padding: 1vw}
        @media (max-width: 364px){margin-left: 9vw; padding: 3vw}
    }

`

export const Projects = styled.div`
    background-color: #1A1A29;
    height: 125vh;

    h4{
        margin-top: 84px;
        margin-left: 137px;
        color: #7562E0;
        font-size: 40px;
        padding-top: 55px;
    }

    .container2{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2em;
        margin-top: 60px;
    }

    .container-project{
        width: 250px;
        height: 300px;
        background-color: #31313F;
        border-radius: 10px;
    }

    img{
        width: 90%;
        height: 50%;
        margin: 10px auto 0 12px;
        border-radius: 14px;
    }

    .project-name{
        color: #7562E0;
        font-size: 18px;
        text-align: center;
        margin-top: 0.5vw;
    }

    .project-name-soon{
        color: #7d7c7a;
        font-size: 18px;
        text-align: center;
        margin-top: 0.5vw;
        opacity: 0.4;
    }

    .doguinho{
        opacity: 0.4;
    }

    .about-it{
        padding: 1.1em;
        margin-left: 6px;
        margin-top: -0.5vw;
    }

   .repository-link{
        color: #FFF;
        background-color: #7562E0;
        margin: 0 5.5vw 0 5.5vw;
        border: 1px solid #7562E0;
        border-radius: 10px;
        font-size: 13px;
        padding: 5px;
        margin-left: 1vw;
   }

   .repository-link:hover{
        background-color: #9e91e9;
        transition: 0.5s;
   }

   .application-link{
        margin-left: -2.5vw;
        color: #FFF;
        background-color: #7562E0;
        border-radius: 10px;
        font-size: 13px;
        padding: 6px;
   }

   .application-link:hover{
        background-color: #9e91e9;
        transition: 0.5s;
   }

 
`

export const Skills = styled.div`
    background-color: #1A1A29;
    height: 75vh;

    h5{
    margin-top: 84px;
    margin-left: 137px;
    color: #7562E0;
    font-size: 40px;
    padding-top: 55px;
    }

    .container3{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 2em;
        margin-top: 60px;
    }

    .container-skills{
        width: 270px;
        height: 300px;
        background-color: #1A1A29;
        border-radius: 15px;
        border: 1px solid #7562E0;

        img{
            margin: 10px auto 0 106px;
            height: 10vh;
        }

        .stack{
            color: #7562E0;
            font-size: 18.5px;
            text-align: center;
            margin-top: 0.1vw;
        }

        p{
            text-align: center;
            padding: 2vw;
            margin-top: -2vw;
        }
    }
`

export const Contact = styled.div`
    background-color: #1A1A29;
    height: 70vh;

    h6{
    margin-top: 84px;
    margin-left: 137px;
    color: #7562E0;
    font-size: 32px;
    padding-top: 55px;
    }

    .contacts{
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        gap: 5vw;
        margin-top: 2vw;
        margin-left: 140px;
    }

    img{
        height: 35px;
    }

    .formulario label{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        margin-right: 180px;
        margin-bottom: 16px;
    }

    .formulario{
        margin-top: -6.7vw;
    }

    input{
        width: 450px;
        height: 55px;
        background-color: #32323F;
        border-radius: 10px;
        border: none;
        padding-left: 1vw;
        color: #FFF;
    }
    
    textarea{
        resize: none;
        padding-left: 1vw;
        height: 80px;
        width: 38.5%;
        border-radius: 10px;
        background-color: #32323F;
        border: none;
        padding: 1vw;
        font-size: 17px;
        color: #FFF;
    }

    button{
        height: 50px;
        width: 174px;
        background-color: #7562E0;
        color: #FFF;
        border-radius: 10px;
        border: none;
        margin-right: 20vw;
    }
`

export const Footer = styled.div`
    background-color:  #1A1A29; 
    width: 100%;
    height: -6vh;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    flex-direction: row;
    padding: 1.5vw;
`