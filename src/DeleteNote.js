// import React from "react";
// import config from "./config";

// function deleteNote(noteId, callback) {
//   fetch(config.API_ENDPOINT} + `/${noteId}`, {
//     method: "DELETE",
//     headers: {
//       authorization: `bearer ${config.API_KEY}`
//     }
//   })
//     .then(res => {
//       if (!res.ok) {
//         // get the error message from the response,
//         return res.json().then(error => {
//           // then throw it
//           throw error;
//         });
//       }
//       return res.json();
//     })
//     .then(data => {
//       // call the callback when the request is successful
//       // this is where the App component can remove it from state
//       callback(noteId);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }
