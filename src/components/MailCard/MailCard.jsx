import React from 'react';
import { MailCardContainer, MailCardBody, MailCardHeader, MailCardTitle, MailCardContent, MailCardIconLink, MailCardIcon, MailCardIconText } from './MailCard.styled';

const MailCard = () => {
  return (
    <MailCardContainer>
        <MailCardBody>
            <MailCardHeader>
                <MailCardTitle>Mail</MailCardTitle>
            <MailCardIconLink href="https://mail.google.com/">
                <MailCardIcon icon="logos:google-gmail" />
                <MailCardIconText>Open Gmail</MailCardIconText>
            </MailCardIconLink>
            </MailCardHeader>
            <MailCardContent>
                <ul>
                    <li>message 1</li>
                    <li>message 2</li>
                    <li>message 3</li>
                </ul>
            </MailCardContent>
        </MailCardBody>
    </MailCardContainer>
  )
}

export default MailCard
