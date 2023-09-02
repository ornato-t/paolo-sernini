<script lang="ts">
  const points = [
    {
      bold: 'Problemi di stress',
      normal: '',
    }, {
      bold: 'Cattivo stile di vita',
      normal: '',
    }, {
      bold: 'Dolori e fastidi cronicizzati',
      normal: 'nell\'ambito dell\'apparato muscolo-scheletrico',
    }, {
      bold: 'Problemi persistenti',
      normal: 'non adeguatamente superati attraverso la medicina convenzionale',
    }, {        
      bold: 'Aiuto nel superamento di infiammazioni',
      normal: 'muscolari cronicizzate, cervicalgie, lombosciatalgie',
    }
  ] satisfies point[];

  interface point {
    bold: string,
    normal: string,
  }
</script>

<span id="utilita"/>

<div class="hero min-h-screen bg-gradient-to-b from-indigo-300 to-sky-300">
    <div class="hero-content text-start text-base-content">
      <div class="max-w-full lg:max-w-7xl">
        <h1 class="mb-2 lg:mb-4 lg:mt-6 px-4 lg:px-0 text-3xl lg:text-5xl font-bold text-center"> 
          In cosa può esserti utile un 
          <span class="text-yellow-200">facilitatore terapeutico</span>
          ?
        </h1>

        <ul class="join-vertical lg:my-8 my-4 lg:px-16 px-3 text-lg">
          {#each points as point}
            <li class="list-disc pt-0.5 md:text-lg">
              <span class="font-bold">
                {point.bold}
              </span>
                {point.normal}
            </li>
          {/each}
        </ul>

        <div class="mb-5 mt-12 text-justify lg:px-10">
          <h2 class="font-semibold text-lg md:text-xl underline">
            Collocazione deontologica
          </h2>
          <p class="mt-0.5 text-xs md:text-base">
            La professione del Facilitatore Terapeutico si rifà a quella del <span class="font-bold">Professionista in Tecniche Olistiche</span> e in quanto tale è esercitata ai sensi della legge <span class="italic">14 gennaio 2013 n°4 (G.U.N.22 del 26-01-2013)</span>.
          </p>
          <p class="mt-1.5 text-xs md:text-base">
            Le indicazioni in tema di salute sono sempre da porre al vaglio del proprio medico e le eventuali diagnosi enunciate non hanno valore clinico, finché non validate da Specialisti in ambito sanitario. I consigli di supporto e i trattamenti sono sempre da inserire all’interno di un più ampio percorso delineato dai propri medici curanti.
          </p>
        </div>
      </div>
    </div>
</div>
