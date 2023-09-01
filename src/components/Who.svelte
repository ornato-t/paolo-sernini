<script>
    const description = [
        'Paolo Sernini, classe 1998, è un professionista del settore olistico.', 
        'Laureato in Scienze e Tecniche Psicologiche all’Università degli Studi di Torino con una tesi di analisi psicosociale su come il comportamento verso le persone affette da disabilità non intellettuale possa peggiorare la sintomatologia clinica della disabilità, decide poi di deviare il suo percorso di studi verso una concezione più larga di benessere. Si qualifica in Medicina Tradizionale Cinese preso il MEBO TCM Training Center di Pechino e, poco dopo, in Sofrologia e Naturopatia, il tutto per poter ottenere una visione quanto più omnicomprensiva e omnisistemica del corpo umano, del suo funzionamento e delle sue ricadute psicopatologiche.',
        // 'Appassionato di scrittura, si diletta fin dalla giovanissima età con diversi generi letterari, prediligendo comunque le tematiche di carattere psicologico e le elucubrazioni intellettuali. '
    ];
</script>

<span id="bio"/>
<div class="lg:bg-sky-300 bg-gradient-to-b from-sky-300 to-slate-200">

<div class="hero lg:bg-[url(/bioBg.webp)] mask h-full" style="">
    <div class="lg:hero-overlay lg:bg-opacity-20"></div>
    <div class="hero-content text-slate-700 flex-col lg:flex-row">
      <img src="/bioDetail.webp" class="lg:mt-10 max-w-[10rem] sm:max-w-xs rounded-lg shadow-2xl" alt="ritratto" width="320px" height="320px"/>
      <div class="max-w-4xl">
        <h1 class="text-3xl lg:text-5xl font-bold pb-2 lg:pb-4">Chi è <span class="text-red-500">Paolo Sernini</span> ?</h1>
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
</div>

<style>
    @media (min-width: 1024px){
        .mask{
            mask-image: linear-gradient(to bottom, transparent, black 40%);
        }
    }
</style>