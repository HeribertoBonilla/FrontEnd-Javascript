var input = document.getElementById("pokeName");

input.addEventListener("keyup", function(event) {
  
  if (event.keyCode === 13) {
 
   event.preventDefault();
  
   document.getElementById("sbutton").click();
  }
});


const fetchPokemon=() => {     
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();        
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;

        
    fetch(url).then((res) => {
        if(res.status !=200){                         
             pokeImage("recursos/pokeball8bit.png")
              console.log("chale")    
              printName("No encontrado")     
              idfunction("???")  
              habilidadfunction("????")
              alturafunction("???")
              pesofunction("???")
              Apodofunction("???")
              Entradafunction("????")
              info("???","????")
        }
        else {
            
            return res.json();
        } 

    }).then((data) => {
        if (data){
            console.log(data);
            let pokeImg=data.sprites.front_default;
            pokeImage(pokeImg)
            
            

            let pokeName1=data.forms;
            let pokeName2=pokeName1[0].name;
            printName(pokeName2);
            
            console.log(pokeName2)
    
            let Types=data.types;
            if (Types.length == 2){

                
                let open1type=Types[0];                 let open2type=Types[1];
                let Firsttype=open1type.type.name;      let Secondtype=open2type.type.name;
    
                info(Firsttype,Secondtype);
            }
            else{
                
                let open1type=Types[0];                 
                let Firsttype=open1type.type.name; 
    
                info(Firsttype,"");
            }

            let pokeid=data.id;        
            idfunction(pokeid);

            let pokeAltura=data.height;
            alturafunction(pokeAltura);

            let pokePeso=data.weight;
            pesofunction(pokePeso);
            
            let resurl=data.species.url;
            console.log("Segunda pag. de datos: "+resurl);
            resource(resurl);  

            let est=data.stats;
            let hp=est[0].base_stat;   
            let attack=est[1].base_stat;   
            let defense=est[2].base_stat;    
            let spattack=est[3].base_stat;  
            let spdefense=est[4].base_stat;    
            let speed=est[5].base_stat;
    
            graphicstats(hp,attack,defense,spattack,spdefense,speed);
           
            let habilidades=data.abilities[0];
            let firstHabilidad=habilidades.ability.name
            habilidadfunction(firstHabilidad)
            
        }
        

       
               

        
    })
}

const resource = (adress)=>{

    fetch(adress).then((res) => {

        if(res.status !=200){
                console.log("No se pudo conectar")

               
                Apodofunction("pokémon no se pudo encontrar");
                Entradafunction("Asegurese de haber escrito bien el nombre del pokémon");

                $habitat("Se desconoce");
                $evolution("none");
        }
        else {
           
            return res.json();
        } cc

    }).then((data) => {

       
        let entrada=data.flavor_text_entries;

        let i=0;
        let openEntrada=0;
        
        
        while(openEntrada != "es"){

            openEntrada=entrada[i].language.name;
            key=i;
            i=i+1;   
        }
        let EntradaPoke=entrada[key].flavor_text;
        
        Entradafunction(EntradaPoke);

        
        let apodo=data.genera;

        let e=0;
        let openGenera=0;
        
        while(openGenera != "es"){

            openGenera=apodo[e].language.name;
            keyG=e;
            e=e+1;
            
        }
        let ApodoPoke=apodo[keyG].genus;

        Apodofunction(ApodoPoke);

        

      
    })
}
const pokeImage=(url)=>{
    const pokePhoto =document.getElementById("pokeImg");
    pokeImg.src=url; 
    console.log(url)
}

const printName=(a)=>{
    
       const elementoPI=document.createElement("span");
       elementoPI.innerText=`${a}`;
       const $contenedorPI = document.getElementById("nomPokemon");
       $contenedorPI.removeChild($contenedorPI.childNodes[0]);
       
       $contenedorPI.prepend(elementoPI);
}

const habilidadfunction=(habi1)=>{
    const elementoPI=document.createElement("span");
    elementoPI.innerText=habi1
    console.log(elementoPI)

    const $contenedorPI = document.getElementById("habilidades");
    $contenedorPI.removeChild($contenedorPI.childNodes[0]);
        $contenedorPI.prepend(elementoPI);
}

const info=(type1,type2)=>{

    
    const elementoPT1=document.createElement("span");
    
    elementoPT1.innerText=type1;
    console.log(elementoPT1);

    const $contenedorPT1 = document.getElementById("tipo");
   
    $contenedorPT1.removeChild($contenedorPT1.childNodes[0]);
   
    $contenedorPT1.prepend(elementoPT1);
    let typeCorrection=0;

   
    if(type2==""){
        typeCorrection="none";
    }else{
        typeCorrection=type2;
    }
   
    const elementoPT2=document.createElement("span");
    elementoPT2.innerText=type2;
    console.log(elementoPT2);
   
    const $contenedorPT2 = document.getElementById("tipo2");
  
    $contenedorPT2.removeChild($contenedorPT2.childNodes[0]);
   
    $contenedorPT2.prepend(elementoPT2);
}

const idfunction=($id)=>{
    
    const elementoPI=document.createElement("span");
    elementoPI.innerText=`ID: ${$id}`;
    console.log(elementoPI);
   
    const $contenedorPI = document.getElementById("id");
    $contenedorPI.removeChild($contenedorPI.childNodes[0]);
        $contenedorPI.prepend(elementoPI);
}

const alturafunction=($Height)=>{
    
    const elementoPI=document.createElement("span");
    elementoPI.innerText=`Altura: ${$Height}`;
    console.log(elementoPI);
   
    const $contenedorPI = document.getElementById("altura");
    $contenedorPI.removeChild($contenedorPI.childNodes[0]);
        $contenedorPI.prepend(elementoPI);
}
const pesofunction=($Weight)=>{
    
    const elementoPI=document.createElement("span");
    elementoPI.innerText=`Peso: ${$Weight}`;
    console.log(elementoPI);
   
    const $contenedorPI = document.getElementById("peso");
    $contenedorPI.removeChild($contenedorPI.childNodes[0]);
        $contenedorPI.prepend(elementoPI);
}

const Entradafunction=($Entrada)=>{

    const elementoPE=document.createElement("p");
    elementoPE.setAttribute("class","PokeEntrada");
    elementoPE.innerText=`${$Entrada} `;
    console.log(elementoPE);
  
    const $contenedorPE = document.getElementById("pokeEntrada");
    

    while($contenedorPE.firstChild){
        $contenedorPE.removeChild($contenedorPE.firstChild);
    }
 
    $contenedorPE.prepend(elementoPE);
}


const Apodofunction=($Apodo)=>{

    
    const elementoPA=document.createElement("p");
    elementoPA.setAttribute("class","PokeApodo");
    elementoPA.innerText=`Entrada Pokedex: El ${$Apodo} `;
    console.log(elementoPA);
    
    const $contenedorPA = document.getElementById("pokeApodo");
    
   
    while($contenedorPA.firstChild){
        $contenedorPA.removeChild($contenedorPA.firstChild);
    }
   
    $contenedorPA.prepend(elementoPA);
}


const graphicstats=(a,b,c,d,e,f)=>{

   
    let $hpF=parseInt((a/255)*100); let $hpE=100-$hpF;
    let $AtF=parseInt((b/255)*100); let $AtE=100-$AtF;
    let $DfF=parseInt((c/255)*100); let $DfE=100-$DfF;
    let $SAtF=parseInt((d/255)*100); let $SAtE=100-$SAtF;
    let $SDfF=parseInt((e/255)*100); let $SDfE=100-$SDfF;
    let $SpF=parseInt((f/255)*100); let $SpE=100-$SpF;

    console.log($hpF,$AtF,$DfF,$SAtF,$SDfF,$SpF)


    
    const graphicHP=document.createElement("div");
    graphicHP.setAttribute("class","b");
    graphicHP.setAttribute("style",`grid-template-rows: ${$hpE}% ${$hpF}%;`);
    graphicHP.innerHTML=`<div>HP</div><div></div>`;
    console.log(graphicHP);

   
    const graphicAT=document.createElement("div");
    graphicAT.setAttribute("class","b");
    graphicAT.setAttribute("style",`grid-template-rows: ${$AtE}% ${$AtF}%;`);
    graphicAT.innerHTML=`<div>At</div><div></div>`;
    console.log(graphicAT);

   
    const graphicDF=document.createElement("div");
    graphicDF.setAttribute("class","b");
    graphicDF.setAttribute("style",`grid-template-rows: ${$DfE}% ${$DfF}%;`);
    graphicDF.innerHTML=`<div>Df</div><div></div>`;
    console.log(graphicDF);
    
    const graphicSAT=document.createElement("div");
    graphicSAT.setAttribute("class","b");
    graphicSAT.setAttribute("style",`grid-template-rows: ${$SAtE}% ${$SAtF}%;`);
    graphicSAT.innerHTML=`<div>SAt</div><div></div>`;
    console.log(graphicSAT);
  
    const graphicSDF=document.createElement("div");
    graphicSDF.setAttribute("class","b");
    graphicSDF.setAttribute("style",`grid-template-rows: ${$SDfE}% ${$SDfF}%;`);
    graphicSDF.innerHTML=`<div>SDf</div><div></div>`;
    console.log(graphicSDF);
    
   
    const graphicSp=document.createElement("div");
    graphicSp.setAttribute("class","b");
    graphicSp.setAttribute("style",`grid-template-rows: ${$SpE}% ${$SpF}%;`);
    graphicSp.innerHTML=`<div>Spd</div><div></div>`;
    console.log(graphicSp);  

   
    const $contenedorGraphic = document.getElementById("stats");

    
    while($contenedorGraphic.firstChild){
        $contenedorGraphic.removeChild($contenedorGraphic.firstChild);
    }
    
    $contenedorGraphic.prepend(graphicSp);
    $contenedorGraphic.prepend(graphicSDF);
    $contenedorGraphic.prepend(graphicSAT);
    $contenedorGraphic.prepend(graphicDF);
    $contenedorGraphic.prepend(graphicAT);
    $contenedorGraphic.prepend(graphicHP);
}