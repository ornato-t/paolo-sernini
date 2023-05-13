<script lang="ts">
    const name = 'Paolo Sernini';
    const quote = '"La risoluzione di un problema parte sempre dalla sua comprensione"';
    const description = "Un professionista che, attraverso competenze trasversali alla medicina tradizionale, si colloca nei percorsi terapeutici con il compito di delucidare e potenziare l'efficacia psifofisica del percorso stesso.";
</script>

<div class="hero">
    <!-- <div class="place-self-start">Hamburger menu:
        <ul class="pl-3">
            <li>Home</li>
            <li>Facilitatore terapeutico</li>
            <li>Pubblicazioni</li>
            <li>Contatti</li>
        </ul>
    </div> -->

    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{name}</h1>
        <p class="mb-5">{description}</p>
        <button class="btn btn-primary">Scopri</button>
      </div>
    </div>

    <!-- <div class="place-self-end my-6 mr-4">
        Partita IVA: Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div> -->
</div>

<div class="hero">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{name}</h1>
        <p class="mb-5">{quote}</p>
        <button class="btn btn-primary">Scopri</button>
      </div>
    </div>
</div>

<div class="hero" style="background-image: url(/logo.webp);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{name}</h1>
        <p class="mb-5">{description}</p>
        <button class="btn btn-primary">Scopri</button>
      </div>
    </div>
</div>

<div class="hero" style="background-image: url(/logo.webp);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">{name}</h1>
        <p class="mb-5">{quote}</p>
        <button class="btn btn-primary">Scopri</button>
      </div>
    </div>
</div>

<div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="/logo.webp" class="max-w-sm rounded-lg shadow-2xl" alt="logo"/>
      <div>
        <h1 class="text-5xl font-bold">{name}</h1>
        <p class="py-6">{description}</p>
        <button class="btn btn-primary">Scopri</button>
      </div>
    </div>
</div>

<div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="/logo.webp" class="max-w-sm rounded-lg shadow-2xl" alt="logo"/>
      <div>
        <h1 class="text-5xl font-bold">{name}</h1>
        <p class="py-6">{quote}</p>
        <button class="btn btn-primary">Scopri</button>
      </div>
    </div>
</div>