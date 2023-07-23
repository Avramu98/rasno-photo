import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppBubble = () => {
  return (
        <FloatingWhatsApp
            notification={true}
            avatar='/static/whatsAppAvatar.webp'
            chatMessage={'Hello! 🤝 \nHow can I help you?'}
            className='z-40'
            chatboxStyle={{ color: 'black' }}
            phoneNumber='+400734583628' accountName='Râșno'/>
  );
};

export default WhatsAppBubble;