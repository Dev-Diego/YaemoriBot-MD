import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, ' *¿Qué Pokémon quieres buscar?*', m, rcanal);

  await m.react(rwait);
  conn.reply(m.chat, ` *Buscando ${text}*`, m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        title: packname,
        body: dev,
        previewType: 0,
        thumbnail: icons,
        sourceUrl: channel
      }
    }
  });

  const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;
  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    await m.react(error);
    return conn.reply(m.chat, ' *¡Oops! Parece que hubo un error al buscar el Pokémon. Por favor, inténtalo de nuevo más tarde.*', m, rcanal);
  }

  const aipokedex = `
*Pokedex - Información de ${json.name}*

*Nombre:* ${json.name}
*ID:* ${json.id}
*Tipo:* ${json.type.join(', ')}
*Habilidades:* ${json.abilities.join(', ')}
*Tamaño:* ${json.height} m
*Peso:* ${json.weight} kg
*Evoluciones:* ${json.evolutions.join(' → ')}
*Generación:* ${json.generation}
*Estadísticas Base:*
- HP: ${json.stats.hp}
- Ataque: ${json.stats.attack}
- Defensa: ${json.stats.defense}
- Ataque Especial: ${json.stats.special_attack}
- Defensa Especial: ${json.stats.special_defense}
- Velocidad: ${json.stats.speed}

*Descripción:*
${json.description}

¡Encuentra más detalles sobre este Pokémon en la Pokedex!

https://www.pokemon.com/es/pokedex/${json.name.toLowerCase()}

*Powered By DevDiego*
  `;

  conn.reply(m.chat, aipokedex, m, rcanal);
  await m.react(done);
}

handler.help = ['pokedex *<pokemon>*'];
handler.tags = ['fun'];
handler.command = ['pokedex'];

export default handler;