// Dados estáticos e filtros para seções de música

const musics = [
     { title: "Break up", author: "Digimon", section: "breakup" },
     { title: "LIVE for LIFE", author: "Ben-to", section: "breakup" },
     { title: "Taiyo Iwaku Moeyo Chaos", author: "Haiyore! Nyaruko-san", section: "breakup" },
     { title: "Hyadain no Kakakata Kataomoi-C", author: "Nichijou", section: "breakup" },
     { title: "Ill be there for you", author: "Ichiko", section: "illbethere" },
     { title: "Golden Time", author: "Yui Hiore", section: "illbethere" },
     { title: "Kuchizuke Diamond", author: "Weaver", section: "illbethere" },
     { title: "Your Reality", author: "Dan Salvato", section: "illbethere" },
     { title: "Resonance", author: "Soul Eater", section: "none" },
     { title: "Believer", author: "Ikuo", section: "recommended" },
     { title: "Gladion Theme", author: "Gamefreak", section: "recommended" },
     { title: "Sakura Skip", author: "Forfolium", section: "recommended" },
     { title: "Bon Appetit", author: "Blend A", section: "recommended" }
];

module.exports = {
     filterMusic: (section = '') => {
          if(section === ''){
               return musics.map(music => {
                    const { title, author } = music;
                    return { title , author };
               });
          }
          
          return musics.filter(music => music.section === section).map(music => {
               const { title, author } = music;
               return { title , author };
          })
     },

     matchMusic: filter => {
          return musics.filter(music => music.title.match(filter) !== null).map(music => {
               const { title, author } = music;
               return { title , author };
          })
     }
}