import io from 'socket.io-client'
const url = 'http://192.168.18.128:4500'
export const socket = io(url)