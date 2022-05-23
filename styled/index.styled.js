import styled from "styled-components";

export const Container = styled.div`
    height: fit-content;
    width: 100vw;
    overflow: auto;

    .navbar {
        height: 5rem;
        width: 100%;
        background-color: rgba(0,0,0,0.6);
        margin: auto;
        padding: 0 5rem;
        
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-content: center;
        align-items: center;
        
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;

        @media (max-width: 800px) {
            padding: 0 2rem;
        }

        a {
            margin: auto;
            text-decoration: none;
            
            h3 {
                color: white;
                font-size: 1.2rem;
                font-weight: 500;
            }
        }
    }

    .home-container {
        height: 100vh;
        width: 100vw;
        background: linear-gradient(white 56%, #F1D9A7 56%);
        padding-top: 4rem;
        
        display: flex;
        
        @media (max-width: 800px) {
            height: 90vh;
            flex-direction: column;
            padding-top: 0rem;
        }
        
        .img-container {
            height: 100%;
            width: 50%;
            margin-bottom: 2rem;
            
            display: flex;
            justify-content: center;
            align-items: center;
            
            position: relative;

            @media (max-width: 800px) {
                width: 100%;
                margin-bottom: 0;
            }

            img {
                height: 25rem;
                width: 25rem;
                border: 10px solid white;
                border-radius: 100%;
                object-fit: cover;
                filter: grayscale();

                @media (max-width: 800px) {
                    height: 30rem;
                    width: 100%;
                    border: none;
                    padding: 0 0.5rem;
                    border-radius: 0;
                }
            }
        }

        .right-side {
            height: 100%;
            width: 50%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            @media (max-width: 800px) {
                width: 100%;
                padding: 0 1rem;

                align-items: center;
            }

            h1 {
                color: #6F7C12;
                font-size: 2.5rem;
                font-family: 'Roboto Condensed', sans-serif;

                @media (max-width: 800px) {
                    font-size: 1.5rem;
                }
            }
            
            p {
                color: #28190E;
                margin-top: 0.5rem;
                font-size: 1.8rem;
                font-family: 'Bangers', cursive;

                @media (max-width: 800px) {
                    margin-top: 0;
                }
            }
        }
    }
    
    .about-container {
        color: white;
        width: 100%;
        background-color: #6F7C12;
        padding: 2rem;

        h1 {
            color: white;
            margin: 1rem 0;
            font-family: 'Bangers', cursive;
        } 
        
        h2 {
            color: black;
            margin-bottom: 0.5rem;
            padding: 1rem 0;
            font-family: 'Bangers', cursive;
            font-size: 2rem;
        }
        
        p {
            width: 50%;
            font-size: 1.2rem;

            @media (max-width: 800px) {
                width: 100%;
            }

            span {
                color: black;
                background-color: green;
                padding: 0.3rem 0.6rem;
                font-weight: 500;
            }
        }

        ul {
            width: 50%;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-content: center;
            gap: 1rem;

            @media (max-width: 800px) {
                width: 100%;
            }
            
            li {
                height: 6rem;
                width: 6rem;
                color: white;
                border: 5px solid white;
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    .projects-container {
        height: 100vh;
        width: 100%;
        background-color: #859415;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 800px) {
            height: 85vh;
        }

        h1 {
            color: black;
            margin: 1rem 0;
            font-family: 'Bangers', cursive;
        } 

        ul {
            height: 100%;
            width: 50%;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            @media (max-width: 800px) {
                width: 100%;
                padding: 0;
            }

            li {
                width: 100%;
                color: white;
                padding: 0.5rem;
                border: 5px solid white;
                font-size: 1.3rem;
                word-wrap: break-word;
                list-style: none;

                @media (max-width: 800px) {
                    font-size: 1rem;
                    padding: 1rem 0.5rem;
                }
            }
        }
    }
    
    .contact-container {
        height: 80vh;
        width: 100%;
        background-color: white;
        padding: 2rem;

        @media (max-width: 800px) {
            height: 50vh;
        }
        
        h1 {
            color: #28190E;
            margin: 1rem 0;
            font-family: 'Bangers', cursive;
        }
        
        .contact-details-container{
            word-wrap: break-word;

            display: flex;
            flex-direction: column;
            justify-content: space-evenly;

            
            h2 {
                color: #28190E;
                width: 50%;
                margin: 1rem 0;
                padding: 0.5rem;
                border: 5px solid #28190E;
                font-size: 1.3rem;

                @media (max-width: 800px) {
                    font-size: 1rem;
                    width: 100%;
                }
            }
        }
    }
`