<script lang="ts">
  const points = [
    {
      bold: 'Migliora la comprensione dei percorsi terapeutici intrapresi',
      normal: 'attraverso la cura dell’aspetto psicofisico.',
    }, {
      bold: 'Promuove un corretto stile di vita',
      normal: 'andando a lavorare sulla prevenzione delle principali problematiche matrici di disequilibri patologici.',
    }, {
      bold: 'Istruisce e accompagnare nella scoperta del proprio stato di stress',
      normal: 'cercando di catturare le potenzialità di questo stato ancestrale di adattamento, comprendendolo e non combattendolo strenuamente.',
    }, {
      bold: 'Offre percorsi terapeutici complementari',
      normal: 'considerando la malattia cronica non come un problema chimico, ma come un intreccio di disequilibri psico-fisiologici',
    }, {        
      bold: 'Crea una connessione e una vicinanza con il soggetto',
      normal: 'al fine di poter analizzare in profondità le radici di eventuali cronicizzazioni delle patologie.',
    }
  ] satisfies point[];

  interface point {
    bold: string,
    normal: string,
  }
</script>

<span id="facilitatore"/>

<div class="hero min-h-screen bg-[url(/therapy.webp)]">
<!-- <div class="hero min-h-screen"> -->
    <div class="hero-overlay bg-opacity-70"></div>
    <div class="hero-content text-start text-neutral-content shadow-lg">
      <div class="max-w-full lg:max-w-4xl">
        <h1 class="mb-2 px-4 lg:px-0 text-3xl lg:text-5xl font-bold text-center"> 
          Di che cosa si occupa un 
          <span class="text-secondary">facilitatore terapeutico</span>
          ?
        </h1>
        <ul class="mb-5 ml-6 list-disc text-sm lg:text-base">
            {#each points as point}
                <li>
                    <span class="font-semibold">{point.bold}</span>
                    <span>{point.normal}</span>
                </li>
            {/each}
        </ul>
        <p class="mb-5 text-justify">
            Il Facilitatore Terapeutico, quindi, va ad assolvere al ruolo del 
            <span class="italic">"maestro"</span>, istruendo, correggendo e accompagnando la persona nel suo personale percorso di 
            <span class="font-bold">guarigione</span>, congiuntamente, o meno, al lavoro di altri specialisti del settore sanitario che assolvono al compito della 
            <span class="font-bold">cura</span>.
        </p>
      </div>
    </div>
</div>
