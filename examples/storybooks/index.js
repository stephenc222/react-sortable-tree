/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import BarebonesExample from './barebones';
import AddRemoveExample from './add-remove';
import ExternalNodeExample from './external-node';
import MultipleTreesExample from './multiple-trees';
import TouchSupportExample from './touch-support';

const wrapWithSource = (node, src) =>
  <div>
    {node}

    <br />
    <a
      href={`https://github.com/fritz-c/react-sortable-tree/tree/master/examples/storybooks/${src}`}
      target="_top"
      rel="noopener noreferrer"
    >
      View source
    </a>
  </div>;

storiesOf('Basics', module)
  .add('Minimal implementation', () =>
    wrapWithSource(<BarebonesExample />, 'barebones.js')
  )
  .add('Add and remove nodes programmatically', () =>
    wrapWithSource(<AddRemoveExample />, 'add-remove.js')
  );

storiesOf('Advanced', module)
  .add('Drag from external source', () =>
    wrapWithSource(<ExternalNodeExample />, 'external-node.js')
  )
    .add('Drag between multiple trees', () =>
    wrapWithSource(<MultipleTreesExample />, 'multiple-trees.js')
  )
  .add('Touch support (Experimental)', () =>
    wrapWithSource(<TouchSupportExample />, 'touch-support.js')
  );
