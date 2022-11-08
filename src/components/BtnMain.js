import React from 'react'

export const BtnMain = ({url, targ, btnTxt}) => {
  return (   /* every time it clicks, get that coint into a cart */
    <a href={url} target={targ} className="btn btn-primary">{btnTxt}</a>
    
    
    )
}
