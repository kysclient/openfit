import ChatDto from "../dto/ChatDto";
import {io} from "socket.io-client";
import ChatMsg from "../components/chat/ChatMsg";
import {Helmet} from "react-helmet-async";
import {Container, Stack, Typography} from "@mui/material";
import Grid from "@material-ui/core/Grid";

function PromotionPage() {

    let myInfo = new ChatDto()

    const socket = io('http://localhost:4000/chat');


    socket.on('connect', function () {
        console.log('Connected');
        //연결 완료 후 로컬스토리지를 확인하여 닉네임 세팅
        const nickname = localStorage.getItem('nickname');
        socket.emit('setInit', {nickname}, response => {
                console.log('emit response : ', response)
                myInfo.nickname = response.nickname;
                myInfo.id = socket.id
                myInfo.room = response.room;
            }
        );
        socket.emit('getChatRoomList', null);
    });
    socket.on('getMessage', function ({id, nickname, message}) {
        let html = '';
        if (myInfo.id === id) {
            console.log('data : ', id, nickname, message)
        } else {
            console.log('data : ', id, nickname, message)
        }
    });
    socket.on('getChatRoomList', function (response) {
        for (const {roomId, roomName} of Object.values(response)) {
            console.log('resonse : ', roomId, roomName)
        }
    });
    socket.on('disconnect', function () {
        console.log('Disconnected');
    });
    //채팅방 생성
    // $('.createChatRoom').on('click', function(){
    //     const roomName = prompt('채팅방 이름을 입력해주세요.');
    //     if(!roomName){
    //         return false;
    //     }
    //     $('.chat').html('');
    //     socket.emit('createChatRoom', roomName,  (res) => {
    //         if(!res) return;
    //         myInfo.room = res;
    //         $('.roomName').text(myInfo.room.roomName);
    //         $('.chat').html('');
    //     });
    //     socket.emit('getChatRoomList', null);
    // })

    //채팅방 입장
    // $(document).on('click', '.enterChatRoom', function(){
    //     const thisRoomId = $(this).attr('data-roomId');
    //     socket.emit('enterChatRoom', thisRoomId, (res) => {
    //         if(!res) return;
    //         myInfo.room = res;
    //         $('.roomName').text(myInfo.room.roomName);
    //         $('.chat').html('');
    //     });
    //     socket.emit('getChatRoomList', null);
    // })

    //메시지 전송
    // $('.sendMessage').on('click', function(){
    //     socket.emit('sendMessage', $('.write_msg').val());
    //     $('.write_msg').val('');
    // })

    //닉네임 설정
    // $('.setNickname').on('click', function(){
    //     const nickname = prompt('변경할 닉네임을 입력해주세요.');
    //     if(!nickname){
    //         return false;
    //     }
    //     socket.emit('setNickname', nickname);
    //     localStorage.setItem('nickname', nickname);
    // })
    return (
        <>


            <Helmet>
                <title> 오픈톡 공유 플랫폼 | 오픈핏 </title>
            </Helmet>

            <Container>
                <Grid container spacing={3}>
                    <ChatMsg
                        avatar={''}
                        messages={[
                            'Hi Jenny, How r u today?',
                            'Did you train yesterday',
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
                        ]}
                    />
                    <ChatMsg
                        side={'right'}
                        messages={[
                            "Great! What's about you?",
                            'Of course I did. Speaking of which check this out',
                        ]}
                    />
                    <ChatMsg avatar={''} messages={['Im good.', 'See u later.']} />
                </Grid>

            </Container>
        </>
    )
}

export default PromotionPage