import React from 'react';

import { MailToI } from '../../types/misc';

const Mailto = ({ email, subject, body, children }: MailToI) => {
  return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
  );
};

export default Mailto;