import React from 'react';

import SectionMessage from '@atlaskit/section-message';

export default () => (
  <SectionMessage
    title="Web panel for TeamLead task"
    actions={[
      {
        key: '1',
        href: '#',
        text: 'section 1',
      },
      {
        key: '2',
        href: '#',
        text: 'section 2',
      },
    ]}
  >

  </SectionMessage>
);
