import styled from "styled-components";

export const BlogName = styled.p`

font-size: 1.3rem;
font-weight: 400;
grid-column-start: 1;
grid-column-end: 3;
`
export const BlogFrame = styled.div`

height: 24.9rem;
margin-top: 4.4rem;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
justify-content: start;
align-content: center;
column-gap: 5.7rem;
align-items: center;
row-gap: 1rem;
`
export const BlogTitle = styled.h2`

font-size: 1.6rem;
font-weight: 700;
line-height: 100%;
margin: 0;
margin-left: 1.4rem;
margin-top: 1.5rem;

`
export const BlogSubtitle = styled.p`

font-size: 1.1rem;
font-weight: 400;
line-height: 100%;
margin: 0;

`

export const BlogText = styled.p`

font-size: 1rem;
font-weight: 400;
margin: 0;
margin-left: 1.4rem;
margin-top: 1.9rem;


`
export const BlogDiv = styled.div`

background-color: white;
width: 26.1rem;
height: 18.4rem;
border-radius: 0.25rem;
`

export const BlogBackground = styled.div`
background-color: #EDF7FA;
position: absolute;
top: 0;
z-index: -1;
width: calc(100% - 4.5rem);
height: 100%;

`

export const BlogSubtitleSecond = styled.div`

font-size: 1.1rem;
font-weight: 400;
line-height: 100%;
margin: 0;

`

export const SectionSubtitle = styled.div`

display: flex;
margin-left: 1.4rem;
margin-top: 1.9rem;
gap: 4rem;

`