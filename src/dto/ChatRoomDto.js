
export default class ChatRoomDto {
    constructor({
                    roomId = null,
                    roomName = null,
                } = {}) {
        this.roomId = roomId;
        this.roomName = roomName;
    }
}


