// Dados estáticos e filtros para seções de música

const musics = [
     { title: "Break up", author: "Digimon", section: "breakup", ref: "break-up" },
     { title: "LIVE for LIFE", author: "Ben-to", section: "breakup", ref: "live-for-life" },
     { title: "Taiyo Iwaku Moeyo Chaos", author: "Haiyore! Nyaruko-san", section: "breakup", ref: "taiyo-iwaku-moeyo-chaos" },
     { title: "Hyadain no Kakakata Kataomoi-C", author: "Nichijou", section: "breakup", ref: "hyadain-no-kakakata-kataomoi-c" },
     { title: "Ill be there for you", author: "Ichiko", section: "illbethere", ref: "ill-be-there-for-you" },
     { title: "Golden Time", author: "Yui Hiore", section: "illbethere", ref: "golden-time" },
     { title: "Kuchizuke Diamond", author: "Weaver", section: "illbethere", ref: "kuchizuke-diamond" },
     { title: "Your Reality", author: "Dan Salvato", section: "illbethere", ref: "your-reality" },
     { title: "Resonance", author: "Soul Eater", section: "none", ref: "resonance" },
     { title: "Believer", author: "Ikuo", section: "recommended", ref: "believer" },
     { title: "Gladion Theme", author: "Gamefreak", section: "recommended", ref: "gladion-theme" },
     { title: "Sakura Skip", author: "Forfolium", section: "recommended", ref: "sakura-skip" },
     { title: "Bon Appetit", author: "Blend A", section: "recommended", ref: "bon-appetit" }
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
     },

     getByRef: ref => musics.find(music => music.ref === ref) 
}