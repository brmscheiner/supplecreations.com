import React from 'react'

import Page from '../../components/Page';
import Markdown from '../../components/Markdown';
import workHistoryContent from './content.md';

function WorkHistory(): JSX.Element {
  return <Page title="Work history">
    <Markdown content={workHistoryContent} />
  </Page>
}

export default WorkHistory;
