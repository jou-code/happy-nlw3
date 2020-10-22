const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    // inserir dados na tabela
    

    // consultar dados na tabela
    await saveOrphanage(db, { 
        lat: "-22.8974993",
        lng: "-43.1912764",
        name: "Lar das Meninas",
        about: "Presta assistêcia a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "39849573772",
        images:[
            "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1595803330237-83a3a8698450?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horários de visitas Das 18h até 8h",
        open_on_weekends: "1"
      })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 orphanage pelo id
    const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanages)
});