import React from 'react';
import { FaFacebookSquare, FaEnvelope, FaGithubAlt } from 'react-icons/fa';
import styled from 'styled-components';

const StyledLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${ props => props.color };

    a {
        color: ${ props => props.color };
    }
`;

export function SocialLink({ icon, color, text, link }){
    const chooseIcon = () => {
        switch(icon){
            case 'email':
                return <FaEnvelope size={ 30 } style={{ margin: "0 5px 0 0" }} />;
            case 'facebook':
                return <FaFacebookSquare size={ 30 } style={{ margin: "0 5px 0 0" }} />;
            case 'github':
                return <FaGithubAlt size={ 30 } style={{ margin: "0 5px 0 0" }} />;
            default:
                return;
        }
    }
    
    return(
        <StyledLink color={ color }>
            { chooseIcon() }

            <a href={ link }> { text } </a>
        </StyledLink>
    );
}