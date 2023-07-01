const  $=document.querySelector.bind(document)
const  $$=document.querySelector.bind(document)
const playlist=document.querySelector('.text-center')
const  playBtn=document.getElementById("playBtn")
const  heading=document.getElementById("Title")
const singer=document.getElementById("Artist")
const audio=document.getElementById("audio")
const thumb=$('.playImg')
const listBtn=$('.list-inline1')
const pausedBtn=document.getElementById('pauseBtn')
const progress=$('.col-progress')
const playingTime=$('.col-time')
const nextBtn=document.getElementById('forwardBtn')
const backBtn=document.getElementById('backBtn')
const replayBtn=document.getElementById('replayBtn')
const randomBtn=document.getElementById('randomBtn')
const musicCard=$('.text-center')
let app={
    currentIndex:0,
    songs:[
        {
            id: 0,
            name:"Lost",
            singer:"Obito",
            path:"Asset/audio/LOST  Obito OFFICIAL MV.mp3",
            image:"Asset/image/lost.png"

        },
        {
            id: 1,
            name:"Lần Cuối",
            singer:"Ngọt",
            path:"Asset/audio/LẦN CUỐI đi bên em xót xa người ơi.mp3",
            image:"Asset/image/LanCuoi.png"

        },
        {
            id: 2,
            name:"Suit & Tie",
            singer:"MCK ft Hoàng Tôn",
            path:"Asset/audio/03 Suit  Tie  RPT MCK  ft Hoàng Tôn.mp3",
            image:"Asset/image/Mck.png"
        },
        {
            id: 3,
            name:"Xanh",
            singer:"Ngọt",
            path:"Asset/audio/Ngot  Xanh.mp3",
            image:"Asset/image/LanCuoi.png"
        },
        {
            id: 4,
            name:"Green Love",
            singer:" Qnt ft Chill&Free",
            path:"Asset/audio/Chillnfree  GREEN LOVE  CASHMEL ft QNT Prod by RASTZ.mp3",
            image:"Asset/image/GreenLove.png"
        },
        {
            id: 5,
            name:"Soju love",
            singer:"Obito",
            path:"Asset/audio/SOJU LOVE  Obito  Official Music Video.mp3",
            image:"Asset/image/SojuLove.png"
        },
        {
            id: 6,
            name:"Tiền là chi",
            singer:"Obito ft OceanMob",
            path:"Asset/audio/TIỀN LÀ CHI  MCREDIT X OCEAN MOB OBITO GILL XOLITXO WAVY WILLISTIC  OFFICIAL MUSIC VIDEO.mp3",
            image:"Asset/image/lost.png"
        },
        {
            id: 7,
            name:"Anh đã ổn hơn",
            singer:"MCK",
            path:"Asset/audio/14 Anh Đã Ổn Hơn  RPT MCK  99 the album.mp3",
            image:"Asset/image/Mck.png"
        },
        {
            id: 8,
            name:"Tối nay ta đi đâu nhờ",
            singer:"MCK",
            path:"Asset/audio/05 Tối Nay Ta Đi Đâu Nhờ  RPT MCK Remix.mp3",
            image:"Asset/image/Mck.png"
        },
        {
            id: 9,
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
            <a href="#"><img  src="${song.image}" alt="" class="img"></a>
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
        let mouseclick=false
        playBtn.onclick=function(){
            audio.play()
            listBtn.classList.add('playing')
        }
        pausedBtn.onclick=function () {
            audio.pause()
            listBtn.classList.remove('playing')
            console.log(listBtn)
        }
        audio.ontimeupdate=function (){
            if(audio.duration){
                let timePlaying=Math.floor(audio.currentTime)
                let currentProgress=Math.floor((audio.currentTime/audio.duration)*100)
                progress.value=currentProgress
                if((timePlaying<60)) {
                    playingTime.innerText = `00:${Math.floor(audio.currentTime)}`
                }else playingTime.innerText = `0${Math.floor(audio.currentTime/60)}:${Math.floor(audio.currentTime)%60}`
            }
        }
        progress.onchange= () => {
                const pct = audio.duration/100* progress.value
                audio.currentTime = pct
                console.log(audio.currentTime)
        };
        nextBtn.onclick=function (){
            app.nextSong()
            app.audioPlay()
        }
        backBtn.onclick=function () {
            app.previousSong()
            app.audioPlay()
        }
        replayBtn.onclick=function (){
            app.replay()
            app.audioPlay()
        }
        randomBtn.onclick=function (){
            app.shuffle()
            app.audioPlay()
        }
        musicCard.onclick=function (e){
            let musicPath=e.target.src.slice(33)
            let idSong
            console.log(musicPath)
            for (let i = 0; i < app.songs.length; i++) {
                if(musicPath===app.songs[i].image){
                    idSong= app.songs[i].id
                }
            }
            app.currentIndex=idSong
            app.loadCurrentSong()
            app.audioPlay()

        }
    },
    nextSong: function () {
        this.currentIndex++
        if(this.currentIndex>=this.songs.length){
            this.currentIndex=0
        }
        this.loadCurrentSong()
    },
    previousSong:function (){
        this.currentIndex--;
        if(this.currentIndex<0){
            this.currentIndex=9
        }
        this.loadCurrentSong()
    },
    audioPlay:function (){
        audio.play()
        listBtn.classList.add('playing')

    },
    replay:function (){
        audio.currentTime=0
        this.loadCurrentSong()
    },
    shuffle:function () {
        this.currentIndex=Math.floor(Math.random() * 10)
        this.loadCurrentSong()
    },
    newSong:function (){
        let songId=this.songs.map(function (song){
          return song.path
        })
        console.log(songId)
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
