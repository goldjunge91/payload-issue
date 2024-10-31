/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line no-use-before-define
import React from 'react'
import ElementButton from '@payloadcms/richtext-slate/dist/field/elements/Button'

// import Icon from '../Icon'

const Icon = () => (
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.08884 15.2753L8.79758 17.7598H10.916L7.28663 6.41986H5.46413L1.75684 17.7598H3.88308L4.59962 15.2753H8.08884ZM5.10586 13.5385L6.36759 9.20812L7.59816 13.5385H5.10586Z"
      fill="currentColor"
    />
    <path
      d="M21.1778 15.2753L21.8865 17.7598H24.005L20.3756 6.41986H18.5531L14.8458 17.7598H16.972L17.6886 15.2753H21.1778ZM18.1948 13.5385L19.4565 9.20812L20.6871 13.5385H18.1948Z"
      fill="currentColor"
    />
  </svg>
)

const baseClass = 'rich-text-label-button'

const ToolbarButton: React.FC<{ path: string }> = () => (
  <ElementButton className={baseClass} format="label">
    <Icon />
  </ElementButton>
)

export default ToolbarButton
