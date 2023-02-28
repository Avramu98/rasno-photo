import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const WhatsAppBubble = () => {
  return (
        <FloatingWhatsApp
            notification={true}
            avatar='/static/whatsAppAvatar.webp'
            chatMessage={'Salut! 🤝 \nCu ce te pot ajuta?'}
            className='z-40'
            chatboxStyle={{ color: 'black' }}
            phoneNumber='+400722602500' accountName='Râșno'/>
  );
};

export default WhatsAppBubble;