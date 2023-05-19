<script lang="ts">
    const heading1 = 'Di che cosa si occupa un';
    const heading2 = 'facilitatore terapeutico';
    const heading3 = '?';
    const points = ['Ah non lo so io', 'Suppongo faccia qualcosa', 'Spero qualcosa di utile'];  //TODO
    const explanation = 'Il facilitatore terapeutico è una figura pazza che fa cose altrettanto pazze. Ho bisogno di inserire testo a caso. Lorem ipsum dolor sit amet.'
</script>

<!-- TODO: add this to the chosen component -->
<span id="facilitatore"/>

<div class="hero min-h-screen bg-[url(/therapy.webp)]">
    <div class="hero-overlay bg-opacity-70"></div>
    <div class="hero-content text-start text-neutral-content shadow-lg">
      <div class="max-w-xl">
        <h1 class="mb-5 text-5xl font-bold text-center">{heading1} <span class="text-secondary">{heading2}</span>{heading3}</h1>
        <ul class="mb-5 ml-12 list-disc text-lg">
            {#each points as point}
                <li>{point}</li>
            {/each}
        </ul>
        <p class="mb-5">{explanation}</p>
      </div>
    </div>
</div>
