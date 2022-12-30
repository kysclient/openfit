import ChatRoomDto from "./ChatRoomDto";

export default class ChatDto {
    constructor({
                    nickname = null,
                    id = null,
                    room = new ChatRoomDto(),
                } = {}) {
        this.nickname = nickname;
        this.id = id;
        this.room = room;
    }
}


