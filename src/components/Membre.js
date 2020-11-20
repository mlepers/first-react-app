import React from 'react' 
// si je mets rien devant, ca veut dire que j'importe depuis le fichier nodemodules.

// ceci est un component statelss.
// const Membre = () => (
//     <h2>Membres de ma famille</h2>
//     )


const Membre = ({name}) => {
    return (
    <h2>Membre de ma famille : {name.toUpperCase()}</h2>
    )

}
    
export default Membre