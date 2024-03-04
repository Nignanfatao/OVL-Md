const { bot } = require('../fonctions');
const { getData } = require('../bdd/eastdiv');

let ChatID;

function repondre(chatId, message) {
    bot.sendMessage(chatId, message);
};    


bot.onText(/\/eastwhite👤/, async (msg) => {
        chatId = msg.chat.id; 
       const arg = msg.text.split(' ').slice(1);
       const nomAuteurMessage = msg.from.first_name;
 
  try {
      const data = await getData('1');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/5c45243eab76575302242.jpg' }, caption: mesg }, { quoted: ms });
       } else {
       // if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "White":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 1`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 1
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
      //  } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });


bot.onText(/\/eastkemael👤/, async (msg) => {
        chatId = msg.chat.id; 
       const arg = msg.text.split(' ').slice(1);
       const nomAuteurMessage = msg.from.first_name;
 
    try {
      const data = await getData('2');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/9a7dacbf03cd0bce1eba1.jpg' }, caption: mesg }, { quoted: ms });
       } else {
      //  if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Kemael":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 2`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 2
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
     //   } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

bot.onText(/\/eastaltheos👤/, async (msg) => {
        chatId = msg.chat.id; 
       const arg = msg.text.split(' ').slice(1);
       const nomAuteurMessage = msg.from.first_name;
 
 try {
      const data = await getData('3');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/a20053d0819eebc105e0d.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        //if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Altheos":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 3`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 3
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        //} else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });


bot.onText(/\/eastgoldy👤/, async (msg) => {
        chatId = msg.chat.id; 
       const arg = msg.text.split(' ').slice(1);
       const nomAuteurMessage = msg.from.first_name;
 
try {
      const data = await getData('4');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/006c4bca1e4855a29540b.jpg' }, caption: mesg }, { quoted: ms });
       } else {
       // if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Goldy":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 4`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 4
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
       // } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'eastzephyr👤',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('5');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/390445d01cddc9333d784.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Zephyr":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 5`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 5
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'eastatsushi👤',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('6');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/166b853bf0aa7c18d59a7.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Atsushi":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 6`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 6
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'eastadam👤',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('7');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/c3ce36d0679e42f5470bf.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Adam":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 7`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 7
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });

zokou(
  {
    nomCom: 'eastserena👤',
    categorie: 'NEOverse'
  },
  async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, superUser } = commandeOptions;

    try {
      const data = await getData('8');
      let joueur = arg[1];
      let object = arg[3];
      let signe = arg[4];
      let valeur = arg[5];
      let texte = arg.slice(5).join(' ');

      if (!arg || arg.length === 0) {
        let mesg = `*🔷𝗡Ξ𝗢 𝗔𝗟𝗟 𝗦𝗧𝗔𝗥𝗦🌟*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
◇ *Pseudo👤*: ${data.e1}
◇ *Division🛡️*: ${data.e2}
◇ *Classe🏆*: ${data.e3}
◇ *Rang XP🔰*: ${data.e4}
◇ *Golds🧭*: ${data.e5}🧭
◇ *NΞOcoins🔹*: ${data.e6}🔷
◇ *Gift Box🎁*: ${data.e7}🎁
◇ *Coupons🎟*: ${data.e8}🎟
◇ *NΞO PASS🔸*: ${data.e9}🔸
*❯❯▓▓▓▓▓▓▓▓▓▓▓▓▓▓*
 *🧠Talent RP(𝗤𝗶): ${data.e10}⛦*                       
 *📊Note Saison passée: ${data.e11}⏫*
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*✭Records*: ${data.e12} Victoires✅/ ${data.e13} Défaites❌
*🏆Trophées*: ${data.e14}  *🌟 TOS*: ${data.e15}  *💫Awards*: ${data.e16}
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
*🎴Cards(20 max)*: ${data.e17} 
░░░░░░░░░░░░░░░░░░░
▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
    *🔷𝗡Ξ𝗢 SUPERLEAGUE🏆🔝*`;
zk.sendMessage(dest, { image: { url: 'https://telegra.ph/file/bb62d42a8ef4d79d4fa53.jpg' }, caption: mesg }, { quoted: ms });
       } else {
        if (superUser) { 
        const dbUrl = "postgres://fatao:Kuz6KQRpz3S1swoTQTv1WOG8SPfSCppB@dpg-cmnlnkol5elc738lrj2g-a.oregon-postgres.render.com/cy";
        const proConfig = {
          connectionString: dbUrl,
          ssl: {
            rejectUnauthorized: false,
          },
        };

        const { Pool } = require('pg');
        const pool = new Pool(proConfig);
        const client = await pool.connect();

        if (arg[0] === 'joueur:') {
          let colonnesJoueur;
          
          switch (joueur) {
    case "Serena":
      colonnesJoueur = {
        pseudo: "e1",
        division: "e2",
        classe: "e3",
        rang_exp: "e4",
        golds: "e5",
        neocoins: "e6",
        gift_box: "e7",
        coupons: "e8",
        neopass: "e9",
        talent: "e10",
        note: "e11",
        victoires: "e12",
        defaites: "e13",
        trophees: "e14",
        tos: "e15",
        awards: "e16",
        cards: "e17",
      };
        break;
          default:
      console.log("Nom de joueur non reconnu.");
              repondre(`joueur: ${joueur} non reconnu`);
              return; 
        }
          
        const colonneObjet = colonnesJoueur[object];
        const solde = `${data[colonneObjet]} ${signe} ${valeur}`;

          if (colonneObjet && (signe === '+' || signe === '-')) {
            const query = `UPDATE eastdiv SET ${colonneObjet} = ${data[colonneObjet]} ${signe} ${valeur} WHERE id = 8`;
            await client.query(query);

            console.log(`Données de l'utilisateur ${joueur} mises à jour`);
           await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${signe}${valeur}\n*NOUVEAU SOLDE*: ${solde}`);
          } else if (colonneObjet && signe === '=') {
            const query = `
            UPDATE eastdiv
            SET ${colonneObjet} = $1
            WHERE id = 8
            `;

            await client.query(query, [texte]);

            console.log(`données du joueur: ${joueur} mise à jour`);
            await repondre(`Données du joueur mises à jour\n👤 *JOUEUR*: ${joueur}\n⚙ *OBJECT*: ${object}\n💵 *VALEUR*: ${texte} \n *NOUVELLE DONNÉE*: ${texte}`);
          } else {
            console.log("Nom d'objet non reconnu ou signe invalide.");
            repondre(`Une erreur est survenue. Veuillez entrer correctement les données.`);
          }
        } else {
          console.log("Le message ne correspond pas au format attendu.");
          repondre(`Le format du message est incorrect.`);
        } 
        } else { repondre('Seul les Membres de la NS ont le droit de modifier cette fiche');}
       

        client.release();
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données de l'utilisateur:", error);
    }
  });
