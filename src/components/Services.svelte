<script lang="ts">
  const points = [
    {
      question: "La poca efficacia delle cure intraprese spesso non è da attribuirsi agli specialisti, ma all'osservare il sintomo troppo da vicino.",
      answer: "Per questo la durata delle sedute non è stimata in base al tempo, ma soggiace alla corretta ricostruzione dell'anamnesi e alle necessità del paziente.",
      detail: "Nota: la prima seduta dura in media due ore",
      image: "/interview.jpg",
    },
    {
      question: "A volte l'eccessiva settorializzazione della visione limita la possibilità di valutare la problematica nell'interezza della sua manifestazione.",
      answer: "Per questo avere una conoscenza sia della psicologia umana che delle pratiche terapeutiche occidentali e orientali, può aprire alla vera radice del problema.",
      image: "/navigation.jpg",
    },
    {
      question: "La sempre maggiore distanza in termini sia fisici che umani tra paziente e curante può essere fortemente d'ostacolo alla guarigione.",
      answer: "Per questo si effettuano visite a domicilio. Previa valutazione, si offrono trasferte su tutto il territorio nazionale.",
      image: "/home.jpg",
    },
  ] satisfies point[];

  interface point {
    question: string;
    answer: string;
    image: string;
    detail?: string;
  }
</script>

<span id="servizi" />

<div class="hero min-h-screen bg-gradient-to-b from-cyan-200 to-cyan-200">
  <div class="hero-content text-start">
    <div class="max-w-full lg:max-w-6xl">
      <h1 class="mb-2 lg:mb-4 mt-6 px-4 lg:px-0 text-2xl lg:text-5xl font-bold text-center bg-cyan-400 p-4 rounded-lg">
        La cura si nasconde sempre dietro alla domanda
        <span class="text-rose-500 uppercase">giusta</span>
        al momento
        <span class="text-rose-500 uppercase">giusto</span>
      </h1>

      <!-- Mobile (borders) -->
      <!-- <div class="border-rose-400 border-2 join join-vertical rounded-xl mt-2 mb-4 md:hidden">
        {#each points as point, i}
          <div class="collapse collapse-arrow join-item border-rose-400 border-b">
            <input type="radio" name="accordion" aria-label="menu espandibile {i}" />
            <div class="collapse-title lg:text-xl font-semibold py-2">
              {point.bold}
            </div>
            <div class="collapse-content text-sm lg:text-base">
              <p>{point.normal}</p>
            </div>
          </div>
        {/each}
      </div> -->

      <!-- Desktop -->
      <ul class="mt-2 mb-8 pl-8 hidden md:flex md:flex-col">
        {#each points as point, i}
          <!-- <div class={i % 2 ? "block" : "hidden"} /> -->

          <div class="flex gap-4 {i % 2 ? 'flex-row-reverse justify-self-end' : 'flex-row justify-self-start'}">
            <img src={point.image} alt={point.question} class="w-48" />

            <div class="flex flex-col">
              <span class="text-sm lg:text-base">
                <p class="my-1.5">{point.question}</p>
                <p class="my-1.5">{point.answer}</p>
              </span>
              {#if point.detail}
                <p class="italic text-sm">
                  {point.detail}
                </p>
              {/if}
            </div>
          </div>

          <!-- <div class={i % 2 ? "hidden" : "block"} /> -->
        {/each}
      </ul>

      <!-- <p class="mb-5 text-justify">
        Il Facilitatore Terapeutico, quindi, va ad assolvere al ruolo del
        <span class="italic">"maestro"</span>, istruendo, correggendo e accompagnando la persona nel suo personale percorso di
        <span class="font-bold">guarigione</span>, congiuntamente, o meno, al lavoro di altri specialisti del settore sanitario che assolvono al compito della
        <span class="font-bold">cura</span>.
      </p> -->
    </div>
  </div>
</div>
