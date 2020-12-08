function VariabelKonstanta() {
    const nama = "Devano Abe";
    let umur = 18;
    let status_menikah = false;
  
    umur = 17;
   
    console.log(nama); 
    console.log(umur); 
    console.log(status_menikah);
  }
  
  function Objek() {
    let profil = {
      nama: "Abee ",
      kelebihan: false,
    };
  
    //mengganti kelebihan di profil
    profil.kelebihan = "Baik";
  
    console.log(profil.nama);
    if (profil.kelebihan) {
      console.log(profil.kelebihan);
    } else {
      console.log("Gak ada kelebihan");
    }
  }
  
  function Array() {
    let tim = [
      {
        namaTim: "Terrr",
        diBuat: "07/05/2026",
        anggota: 13,
      }
    ];
    console.log(tim);
    console.log(tim[1]);
    console.log(tim[1].anggota);
    console.log(tim.length);
  }
  
  function ArrayEdit() {
    let tim = [
      {
        namaTim: "Terrr",
        diBuat: "07/05/2026",
        anggota: 13,
      }
    
    ];
  
    tim.splice(1, 1);
    console.log(tim);
  
    const timBaru = {
      namaTim: "666",
      diBuat: "6/06/2666",
      anggota: 666,
    };
  
    tim.push(timBaru);
    console.log(tim);
  }