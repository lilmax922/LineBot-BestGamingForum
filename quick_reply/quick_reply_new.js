export default {
  type: 'text',
  text: '選擇想看的最新看板吧!',
  quickReply: {
    items: [
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/new-tag.png',
        action: {
          type: 'message',
          label: '最新',
          text: '最新'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/gossip.png',
        action: {
          type: 'message',
          label: '八卦新聞',
          text: '!最新 八卦'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/funny.png',
        action: {
          type: 'message',
          label: '休閒娛樂',
          text: '!最新 娛樂'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/256px-LoL_icon.png',
        action: {
          type: 'message',
          label: '英雄聯盟',
          text: '!最新 英雄聯盟'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/hearthstone.png',
        action: {
          type: 'message',
          label: '爐石戰記',
          text: '!最新 爐石戰記'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/psyduck.png',
        action: {
          type: 'message',
          label: '寶可夢',
          text: '!最新 寶可夢'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/apex.png',
        action: {
          type: 'message',
          label: 'Apex英雄',
          text: '!最新 apex英雄'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/NSFW.png',
        action: {
          type: 'message',
          label: '福利',
          text: '!最新 福利'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/pets.png',
        action: {
          type: 'message',
          label: '寵物',
          text: '!最新 寵物'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/animation.png',
        action: {
          type: 'message',
          label: '動漫',
          text: '!最新 動漫'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/movie.png',
        action: {
          type: 'message',
          label: '電影',
          text: '!最新 電影'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/meme.png',
        action: {
          type: 'message',
          label: '迷因',
          text: '!最新 迷因'
        }
      },
      {
        type: 'action',
        imageUrl: 'https://raw.githubusercontent.com/lilmax922/Photos/main/icons/games.png',
        action: {
          type: 'message',
          label: '綜合遊戲討論',
          text: '!最新 遊戲'
        }
      }
    ]
  }
}
