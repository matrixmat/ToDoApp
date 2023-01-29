import React from 'react'

export default function Task({ txt, delf, donef }) {
  return (
    <div>
      <input type="text" id='ad' readOnly value={txt} />
      <input type="button" id='sup' onClick={delf} value="Supprimer" />
      <input type="button" id='don' onClick={donef} value="Terminer" />
    </div>
  )
}
