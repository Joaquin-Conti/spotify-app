import React from 'react'


const withErrorHandler = (Component: React.FC) => {
  return (props: any) => {
    return (<Component />)
  }
}