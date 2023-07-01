const  $=document.querySelector.bind(document)
const  $$=document.querySelector.bind(document)
const playlist=document.querySelector('.text-center')
const  playBtn=document.getElementById("playBtn")
const  heading=document.getElementById("Title")
const singer=document.getElementById("Artist")
const audio=document.getElementById("audio")
const thumb=$('.playImg')
let app={
    currentIndex:1,
    songs:[
        {
            name:"Lost",
            singer:"Obito",
            path:"Asset/audio/LOST  Obito OFFICIAL MV.mp3",
            image:"Asset/image/lost.png"

        },
        {
            name:"Lần Cuối",
            singer:"Ngọt",
            path:"Asset/audio/LẦN CUỐI đi bên em xót xa người ơi.mp3",
            image:"Asset/image/LanCuoi.png"

        },
        {
            name:"Suit & Tie",
            singer:"MCK ft Hoàng Tôn",
            path:"Asset/audio/03 Suit  Tie  RPT MCK  ft Hoàng Tôn.mp3",
            image:"Asset/image/Mck.png"
        },
        {
            name:"Xanh",
            singer:"Ngọt",
            path:"Asset/audio/Ngot  Xanh.mp3",
            image:"Asset/image/LanCuoi.png"
        },
        {
            name:"Green Love",
            singer:" Qnt ft Chill&Free",
            path:"Asset/audio/Chillnfree  GREEN LOVE  CASHMEL ft QNT Prod by RASTZ.mp3",
            image:"Asset/image/GreenLove.png"
        },
        {
            name:"Soju love",
            singer:"Obito",
            path:"Asset/audio/SOJU LOVE  Obito  Official Music Video.mp3",
            image:"Asset/image/SojuLove.png"
        },
        {
            name:"Tiền là chi",
            singer:"Obito ft OceanMob",
            path:"Asset/audio/TIỀN LÀ CHI  MCREDIT X OCEAN MOB OBITO GILL XOLITXO WAVY WILLISTIC  OFFICIAL MUSIC VIDEO.mp3",
            image:"Asset/image/lost.png"
        },
        {
            name:"Anh đã ổn hơn",
            singer:"MCK",
            path:"Asset/audio/14 Anh Đã Ổn Hơn  RPT MCK  99 the album.mp3",
            image:"Asset/image/Mck.png"
        },
        {
            name:"Tối nay ta đi đâu nhờ",
            singer:"MCK",
            path:"Asset/audio/05 Tối Nay Ta Đi Đâu Nhờ  RPT MCK Remix.mp3",
            image:"Asset/image/Mck.png"
        },
        {
            name:"Chỉ một đêm nũa thôi",
            singer:"MCK ft Tlinh",
            path:"Asset/audio/06 Chỉ Một Đêm Nữa Thôi  RPT MCK  ft tlinh .mp3",
            image:"Asset/image/Mck.png"
        }
    ],
    render: function () {
        const html=this.songs.map(function (song) {
            return `
         <div class="music-card">
            <a href="#"><img src="${song.image}" alt="" class="img"></a>
            <p class="title">${song.name}</p>
         </div>`
        })
        playlist.innerHTML=html.join("")
    },
    defindedProperties: function () {
        Object.defineProperty(this,'currentSong',{
            get:function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    loadCurrentSong:function () {
        heading.innerText=this.currentSong.name
        singer.innerText=this.currentSong.singer
        thumb.src=this.currentSong.image
        audio.src=this.currentSong.path
        console.log(audio)
    },
    handleEvents:function (){
        playBtn.onclick=function(){
            audio.play()
        }
    },
    start: function (){
        // defind all properties for object
        this.defindedProperties()
        //load current into UI
        this.loadCurrentSong()
        this.handleEvents()
        // render playlist
        this.render()
    }

}
app.start()
console.log(playlist)