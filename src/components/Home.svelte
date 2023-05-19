<script lang="ts">
    const name = 'Paolo Sernini';
    const quote = '"La risoluzione di un problema parte sempre dalla sua comprensione"';
    const description = "Un professionista che, attraverso competenze trasversali alla medicina tradizionale, si colloca nei percorsi terapeutici con il compito di delucidare e potenziare l'efficacia psifofisica del percorso stesso.";
</script>

<span id="home"/>

<div class="hero bg-base-200">
    <div class="hero-content flex-col lg:flex-row">
      <img src="/logo.webp" class="max-w-sm rounded-lg shadow-2xl" alt="logo"/>
      <div class="max-w-4xl">
        <h1 class="text-5xl font-bold">{name}</h1>
        <p class="py-6">{description}</p>
        <ul class="list-disc pl-4 text-lg">
          <li>Dottore in Scienze e Tecniche Psicologiche</li>
          <li>Traditional Chinese Medicine Pratictioner</li>
          <li>Qualificato in Sofrologia e Naturopatia</li>
        </ul>
        <div class="flex">
          <!-- TODO: scroll -->
          <button class="btn btn-primary btn-lg btn-wide mt-12 mx-auto">Scopri</button> 
        </div>
      </div>
    </div>
</div>
