<script>
    const description = [
        'Paolo Sernini, classe 1998, è un professionista del settore olistico.', 
        'Laureato in Scienze e Tecniche Psicologiche all’Università degli Studi di Torino con una tesi di analisi psicosociale su come il comportamento verso le persone affette da disabilità non intellettuale possa peggiorare la sintomatologia clinica della disabilità, decide poi di deviare il suo percorso di studi verso una concezione più larga di benessere. Si qualifica in Medicina Tradizionale Cinese preso il MEBO TCM Training Centre di Pachino e, poco dopo, in Sofrologia e Naturopatia, il tutto per poter ottenere una visione quanto più omnicomprensiva e omnisistemica del corpo umano, del suo funzionamento e delle sue ricadute psicopatologiche.',
        // 'Appassionato di scrittura, si diletta fin dalla giovanissima età con diversi generi letterari, prediligendo comunque le tematiche di carattere psicologico e le elucubrazioni intellettuali. '
    ];
</script>

<span id="bio"/>

<div class="hero bg-[url(/bioBg.webp)] ">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-neutral-content flex-col lg:flex-row">
      <img src="/bioDetail.webp" class="mt-10 max-w-[10rem] sm:max-w-xs rounded-lg shadow-2xl" alt="logo"/>
      <div class="max-w-4xl">
        <h1 class="text-3xl lg:text-5xl font-bold pb-2 lg:pb-4">Chi è <span class="text-primary">Paolo Sernini</span> ?</h1>
        <div class="text-md lg:w-5/6 text-justify">
            {#each description as paragraph}
                <p class="mb-3 lg:mb-5">
                    {paragraph}
                </p>
            {/each}    
      </div >
      </div>
    </div>
</div>
