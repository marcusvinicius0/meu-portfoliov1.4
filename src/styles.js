import styled from 'styled-components';

export const Navegation = styled.nav`    
    margin-left: 60vw;
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

`

export const Introduction = styled.div`
    background-color: #1A1A29;
    height: 70vh;
    width: 100%;
    margin-top: -4vw;
    border-radius: 10vw;

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
        } 

        p{
            font-size: 25px;
            z-index: 99;
        }

        a{
            margin-top: 1em;
            background-color: #1A1A29;
            color: #FFF;
            width: 165px;
            height: 48px;
            border-radius: 12px;
            border: 1px solid #5E50B2;
            padding-top: 1.1vw;
            padding-left: 1.3vw;
        }
        
        a:hover{
            background-color: #7562E0;
            transition: 1s;
        }

        .resume{
            margin-left: 15vw;
            margin-top: -3.4vw;
            z-index: 99;
            
            .download-resume{
                font-size: 14px;
                padding-left: 0.2vw;
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
            from {
                transform: translateY(10px)
            }
            to {
                transform: translateY(-10px)
            }
         }
        }  

`

export const AboutMe = styled.div`
    background-color: #1A1A29;
    height: 70vh;
    border-radius: 7vw;
    
    h2{
        margin-top: 84px;
        margin-left: 137px;
        color: #7562E0;
        font-size: 32px;
        padding-top: 55px;
    }

    p{
        padding: 2vw;
        margin-left: 8vw;
        font-size: 18px;
    }

    h3{
        color: #7562E0;
        width: 127px;
        height: 144px;
        font-size: 96px;
        margin-left: 129px;
        margin-top: 3vw;
        animation: move 2.2s infinite alternate;
            @keyframes move {
            from {
                transform: translateY(10px)
            }
            to {
                transform: translateY(-10px)
            }
        }  
    }

    .time-experience{
        margin-left: 21vw;
        margin-top: -9vw;
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