// import React, { useEffect, useState } from 'react';

// const AddNewuser = (userName, email) => {

// }

// const Auth = () => {
//    const [isSignInForm, setSignInForm,] = useState(true);

//    if (isSignInForm) {
//       return (
//          <div>
//             <form
//                onSubmit={async e => {
//                   e.preventDefault();
//                   const userName = inputName.value
//                   const email = inputMail.value
//                   try {
//                      await AddNewuser({ variables: { content: userName, email } })
//                   } catch (error) {
//                      return error
//                   }
//                }}
//             >
//                <input
//                   ref={userName => { inputName = userName }}
//                />
//                <input
//                   ref={email => { inputMail = email }}
//                />
//             </form>
//          </div>
//       )
//    } else {
//       setSignInForm(false)
//    }

// }
// export default Auth;