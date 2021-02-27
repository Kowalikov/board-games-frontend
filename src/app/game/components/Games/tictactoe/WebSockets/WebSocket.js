// import React, { createContext } from 'react'
// import {w3cwebsocket as W3CWebSocket} from "websocket";
// import { WS_BASE } from './config';
// import { useDispatch, useSelector} from 'react-redux';
// import actions from '../../../../duck/actions';

// const WebSocketContext = createContext(null)

// export { WebSocketContext }

// export default  ({ children }) => {
//     let socket;
//     let ws;

//     const dispatch = useDispatch();

//     //const userId = useSelector(state => state.userSession.userData.userID)
//     const sendMessage = (message) => {
//         const {websocket} = this.props // websocket instance passed as props to the child component.
//         const payload = {
//             state: message.state["boardState"]
//             //ID: userID.toString() 
//             //dodać pole z id playera
//         }
//         //socket.emit("event://send-message", JSON.stringify(payload));
//         console.log("User state change:", payload)

//         try {
//             websocket.send(JSON.stringify(message.state)) //send data to the server
//         } catch (error) {
//             console.log(error) // catch error
//         }
//     }
    
//     const isMatchJoined = useSelector(state => state.gameSession.sessionMetadata.isMatchJoined)
//     //console.log("Is Match Joined?: ", isMatchJoined)
//     if (!socket && isMatchJoined) {
//         const matchId = useSelector(state => state.gameSession.roomData.joinedRoom)
//         //console.log("Socket:", WS_BASE+matchId.toString())
//         socket = new W3CWebSocket(WS_BASE+matchId.toString());
//         var firstMessage = true;
        
//         socket.onmessage = function (msg) {
//             const payload = JSON.parse(msg.data);
//             if (firstMessage===true) {
//                 console.log('Initial data from server',payload.data)
//                 firstMessage = false;
//             }
//             else {
//                 console.log("Server data update",payload)
//             }
//             dispatch(actions.updateBoardState(payload.data.state)); //jeżeli payload raz ma dane na wierzchu, raz w .data to zmienić na dwa przypadki
//             dispatch(actions.nextPlayer(payload.data.nextPlayer));
//             let status_finished="FINISHED";
//             if (payload.data.status===status_finished) {
//                 dispatch(actions.finishGame());
//             };

//         }

//         ws = {
//             socket: socket,
//             sendMessage
//         }
//     }

//     return (
//         <WebSocketContext.Provider value={ws}>
//             {children}
//         </WebSocketContext.Provider>
//     )
// }

