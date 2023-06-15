export interface Database {
  [key: string]: {
    warBases?: Base[];
    farmingBases?: Base[];
    attacks?: Attack[];
    guides?: Guide[];
  };
}

export interface Base {
  id: number;
  url: string;
  image:string;
}

export interface Attack {
  id: number;
  url: string;
  image?: string;
}

export interface Guide {
  id: number;
  url: string;
  image?: string;
}


const dataBase = {
  th10: {
    warBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAAHgAAAAHNvh1mlo6mnoOA6cuZtJOT",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026298677754593320/unknown.png"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAAHgAAAAHNvii6S6KyRGCX59jD1jUn",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026298763725250650/unknown.png"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAAHgAAAAHNvi5_flqsApp57FGlC6-p",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026298862249455616/unknown.png"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAALwAAAAGrNmJhYM8ffxnh0YKfTIDj",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026298940569698364/unknown.png"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAALwAAAAGrNmhg8DqfoK_DsDL1Xm80",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026299025349152829/unknown.png"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAALwAAAAGrNm10NgNxc7h6o8-Fa5XB",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026299104449548358/unknown.png"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAAMgAAAAGrB4tnpu6_fN-PTmcL-VM9",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026299206396280832/unknown.png"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAAMgAAAAGrB5I4maaZjM0Yni4qn8QV",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026299310490521621/unknown.png"
      },
      {
        id: 9,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AWB%3AAAAAMgAAAAGrB5dnUViz6MXj3D9WRvmg",
        image: "https://cdn.discordapp.com/attachments/1026251049197129768/1026299403801198662/unknown.png"
      }
    ],
    farmingBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AHV%3AAAAASwAAAAE2vZiX0DOL3HJZiUAfoxbP",
        image: "https://cdn.discordapp.com/attachments/1026251269700067409/1026299968476172288/unknown.png"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AHV%3AAAAASwAAAAE2vZuZP3pLLLxHgq96mUzb",
        image: "https://media.discordapp.net/attachments/1026251269700067409/1026300071765094540/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AHV%3AAAAASwAAAAE2vZ6HO2OOvn9ppbzCnH_c",
        image: "https://media.discordapp.net/attachments/1026251269700067409/1026300205227847772/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AHV%3AAAAASwAAAAFDTKSNRqHJzxRoNi_C1FM5",
        image: "https://media.discordapp.net/attachments/1026251269700067409/1026300435088285696/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AHV%3AAAAASwAAAAFDTKhzZ9Tla1sSrgRMb7em",
        image: "https://media.discordapp.net/attachments/1026251269700067409/1026300572149764127/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH10%3AHV%3AAAAASwAAAAFDTKslDz6ACE-tabJNq8os",
        image: "https://media.discordapp.net/attachments/1026251269700067409/1026300666437697556/unknown.png?width=767&height=479"
      }
    ],
    attacks: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=p83IMcWMgEY"
      }
    ],
    guides: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=LoK2Ce-BWPU"
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=5zMI7sWJA3g"
      }
    ]
  },
  th11: {
    warBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAAJgAAAAHVSA-6o_IelRdaojFQeM9c",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026339646533271673/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAAJgAAAAHVSKBFrvLZumpPY8VdQ65_",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026339739562938398/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAAJgAAAAHVSKOUxNY6p85PAr06u706",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026339826523459655/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAAVAAAAAE7tLZyxQSh1BixiKLzuXXK",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026340028160430100/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAAVAAAAAE7tN8ehRmqe0RsBMaxMFDI",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026340130404966500/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAAVAAAAAE7tPn7hYAfOm_qNTUGu0MV",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026340225913454692/unknown.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAASwAAAAFE368Ew2C6oZHi7BkV2DMV",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026340361251070033/unknown.png?width=767&height=479"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAASwAAAAFE38Wd_oAYkW3ypF7RYZ3D",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026340458462462062/unknown.png?width=767&height=479"
      },
      {
        id: 9,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH11%3AWB%3AAAAASwAAAAFE4QF8J0RwlCNigVL3dEv4",
        image: "https://media.discordapp.net/attachments/1026251037125914664/1026340581795967086/unknown.png?width=767&height=479"
      }
    ],
    farmingBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzXLq64tjc0D-NR_mWP50f",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026340991881457745/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzXMdFaI3MSSlVCoCQIE6O",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026341087834558535/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzYGyR2Zd39y7Fg49CURM6",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026341191677124678/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzYHdtCyvV6YLfI6vQS750",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026341285851840623/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzYIpm5VIghGocpzXJchcJ",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026341490210918501/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzXF25yjw5FcljvuuQM9_o",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026341677272666153/unknown.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11%3AHV%3AAAAASgAAAAFzXGBRIIzW4ZX_e0Ym9Ix5",
        image: "https://media.discordapp.net/attachments/1026251256861311056/1026341799473709068/unknown.png?width=767&height=479"
      }
    ],
    attacks: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=WxAFtnAevs0"
      }
    ],
    guides: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=ZrGYan1qLIs"
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=qYh1JY0VsAg"
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=5zMI7sWJA3g"
      }
    ]
  },
  th12: {
    warBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAAVAAAAAFXhndy1ccSn-7wxNPzNjeP",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342142089637911/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAAVAAAAAFXhpvnLf4C83-psjlGlqBz",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342252072665128/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAAVAAAAAFXhqVFeEYc1FOV5DUXCoIC",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342342556393502/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAASwAAAAFg3sKsmF2iOV6kuqfnlxBY",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342423204474900/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAASwAAAAFg3s0yMN5LHCPO7kCWQZyS",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342530301837362/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAASwAAAAFg3tb3hcIrzp1u7Ojjd8mF",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342690201272320/unknown.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAADwAAAAIYrAxJlPG7ihmyqg75EfdD",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342810540060682/unknown.png?width=767&height=479"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AWB%3AAAAADwAAAAIYrBuom_rkVGCS5m4_5STi",
        image: "https://media.discordapp.net/attachments/1026250994213990461/1026342908045037638/unknown.png?width=767&height=479"
      }
    ],
    farmingBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AHV%3AAAAACAAAAAH6hXR_Z6mL_dRCNMPr7n-d",
        image: "https://media.discordapp.net/attachments/1026251245985484830/1026343284731293696/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AHV%3AAAAACAAAAAH6hXmT5VYRF42mBNwEGwLY",
        image: "https://media.discordapp.net/attachments/1026251245985484830/1026343385340072016/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH12%3AHV%3AAAAACAAAAAH6hX8IBlufyibzucmlx1J4",
        image: "https://media.discordapp.net/attachments/1026251245985484830/1026343497931960432/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAPgAAAAGgRfjdjDReX5QBfyh9Pj_Q",
        image: "https://media.discordapp.net/attachments/1026251245985484830/1026343701208911954/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAPgAAAAGgRgVc5bccgLLEJ6cHMrH4",
        image: "https://media.discordapp.net/attachments/1026251245985484830/1026343801788321832/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12%3AHV%3AAAAAPgAAAAGgRgsDZNPSVZKhVtXm7TUt",
        image: "https://media.discordapp.net/attachments/1026251245985484830/1026343913063198720/unknown.png?width=767&height=479"
      }
    ],
    attacks: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=sXxl4qGUBE0"
      }
    ],
    guides: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=8MglJMad_NI"
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=cVlKci1FV7g"
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=qYh1JY0VsAg"
      },
      {
        id: 4,
        url: "https://www.youtube.com/watch?v=5zMI7sWJA3g"
      }
    ]
  },
  th13: {
    warBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAAVAAAAAFjcWAKCHX4UFQWFXp5qh3_",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344140335743069/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAAVAAAAAFjcXOi2PE3WqkrcQzIrcYZ",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344228592291840/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAASwAAAAFsxp5lahCMfQStnfSO0Hsh",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344310339280907/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAASwAAAAFsxrH_AfSQ8os-H6gTxgNx",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344409350029332/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAASwAAAAFsxsmuz9MlANAprx5S3KGd",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344506309742602/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAADwAAAAImxqPyjaP5G7uYSvF4k_Kt",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344582239244368/unknown.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAADwAAAAImxsOJfetLVzs9IElz8m-S",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344812233900143/unknown.png?width=767&height=479"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/es?action=OpenLayout&id=TH13%3AWB%3AAAAADwAAAAImxtd46OMCEHg-S6XSyEPU",
        image: "https://media.discordapp.net/attachments/1026250952623276082/1026344898745606225/unknown.png?width=767&height=479"
      }
    ],
    farmingBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI7IIenR2yZ59W10CbdR2",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026346348850729031/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI7cEhtbL9AHTu8dxcM2I",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026346467625013269/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI7oIH5xAqcNaqsMGzXG8",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026346608213901392/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI8EYJZhaWw-DQj8vyiRY",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026346747519311922/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI8gv0CcoIoGzorLG03_h",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026346847448617100/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI80hne5TfCe_6e-z9Fmp",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026346951974858863/unknown.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI9H2cOC60ZNC1nHSrRDR",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026347042177556491/unknown.png?width=767&height=479"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13%3AHV%3AAAAAWwAAAAFPI9XY2cC789z-BhJv-x_T",
        image: "https://media.discordapp.net/attachments/1026251234144948285/1026347167641772042/unknown.png?width=767&height=479"
      }
    ],
    attacks: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=6-3TrcoqWMA"
      }
    ],
    guides: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=3cRxR3RCnEo"
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=qYh1JY0VsAg"
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=5zMI7sWJA3g"
      }
    ]
  },
  th14: {
    warBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAGgAAAAINrI-MR7lhIzGPhZgDnP-j",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1026347692533755934/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAGgAAAAINrZ2H5iu1Im68cKimAnbd",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1026347843872637038/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAGgAAAAINNgtt7CtL7H5N95_FcWcf",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1026347941906096208/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAGgAAAAILfW1R1--KKhV7umfX_Dit",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1026348056968450118/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAGgAAAAIK8xij01s8KXiB3KEtbOO-",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1026348150442692618/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAWwAAAAF-yJqC4yfIaEg2l4rqx8U2",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1119022718008959098/image.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAWwAAAAF-yB1dbr8Toh5yhPEq-Sm3",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1119023309313552384/image.png?width=767&height=479"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AWB%3AAAAAWwAAAAF-yJqC4yfIaEg2l4rqx8U2",
        image: "https://media.discordapp.net/attachments/1026250977570992128/1119023807609454632/image.png?width=767&height=479"
      }
    ],
    farmingBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAVgAAAAFTcQwfh_OP28wzFoJ5Ec1E",
        image: "https://media.discordapp.net/attachments/1026251197788717136/1026348370081615922/unknown.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAVgAAAAFTcRDGH418qdz4V7qQOG7m",
        image: "https://media.discordapp.net/attachments/1026251197788717136/1026348456723353661/unknown.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAVgAAAAFTcRorG2lUjYeTAXngbbbr",
        image: "https://media.discordapp.net/attachments/1026251197788717136/1026348550998741022/unknown.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAVgAAAAFTcR6XtJMsP0IWKkWCfEAL",
        image: "https://media.discordapp.net/attachments/1026251197788717136/1026348637825015808/unknown.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAVgAAAAFTcSqfjltPtzw8ihBtDCr4",
        image: "https://media.discordapp.net/attachments/1026251197788717136/1026348756028895293/unknown.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14%3AHV%3AAAAAVgAAAAFTcTiMKELfsBkGLi9S4q3K",
        image: "https://media.discordapp.net/attachments/1026251197788717136/1026348963776974889/unknown.png?width=767&height=479"
      }
    ],
    attacks: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=jgykLIRKpyw"
      }
    ],
    guides: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=rECDPvonjew"
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=qYh1JY0VsAg"
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=5zMI7sWJA3g"
      }
    ]
  },
  th15: {
    warBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCtVghK11WuBSzaPZpjVM",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119031740149809224/image.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCton-jUxA4fVGqVNcPqR",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119031989773803612/image.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCtxK4tV_S1jiv7qd_Z8-",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119032173094240266/image.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCvBxm08uklDt7abWo7ow",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119032315557990440/image.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCvgIfthBpjpw-qx673-k",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119032453013717073/image.png?width=767&height=479"
      },
      {
        id: 6,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCwGkmyeMCin_NgHnolb7",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119032689098510366/image.png?width=767&height=479"
      },
      {
        id: 7,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCwS-UOiYsbwEpNpU-bWK",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119032845386666004/image.png?width=767&height=479"
      },
      {
        id: 8,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AWB%3AAAAAQAAAAAHeCxr9zelEOIUzB5a4Opof",
        image: "https://media.discordapp.net/attachments/1119029711377539133/1119033025569759284/image.png?width=767&height=479"
      }
    ],
    farmingBases: [
      {
        id: 1,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AHV%3AAAAAQAAAAAHeRvuWTxM3nLOjKuoY4OET",
        image: "https://media.discordapp.net/attachments/1119030261070450718/1119033269959282829/image.png?width=767&height=479"
      },
      {
        id: 2,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AHV%3AAAAAQAAAAAHeRwuQG-KaOu6oW_21vAaq",
        image: "https://media.discordapp.net/attachments/1119030261070450718/1119033454357651476/image.png?width=767&height=479"
      },
      {
        id: 3,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AHV%3AAAAAQAAAAAHeRyzArlyhHRqCHSzxQJTH",
        image: "https://media.discordapp.net/attachments/1119030261070450718/1119033795845312655/image.png?width=767&height=479"
      },
      {
        id: 4,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AHV%3AAAAAQAAAAAHeZvGVhc6wLHs06A_AmFkZ",
        image: "https://media.discordapp.net/attachments/1119030261070450718/1119034308888367214/image.png?width=767&height=479"
      },
      {
        id: 5,
        url: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15%3AHV%3AAAAAQAAAAAHeRxiiKtbDCEhSrsTLJCx2",
        image: "https://media.discordapp.net/attachments/1119030261070450718/1119040122567008306/image.png?width=767&height=479"
      }
    ],
    attacks: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=rndKtYXCJ1M"
      }
    ],
    guides: [
      {
        id: 1,
        url: "https://www.youtube.com/watch?v=cdOhcFaRiPY"
      },
      {
        id: 2,
        url: "https://www.youtube.com/watch?v=qYh1JY0VsAg"
      },
      {
        id: 3,
        url: "https://www.youtube.com/watch?v=5zMI7sWJA3g"
      }
    ]
  },
}

export default dataBase;