<script lang="ts">
    const heading = 'Pubblicazioni';
    const books = [
        {
            title: "Rursus",
            description: "Approccio teorico alla \"Teoria del Loop\"",
            link: "https://amzn.eu/d/1iJt553",
        }, {
            title: "L'anti-natura",
            description: "",
            link: "https://www.gruppoalbatros.com/prodotti/lanti-natura-paolo-sernini/",
        }, {
            title: "Iâlölâl",
            description: "Magistrali allegorie e viziose approssimazioni di una coscienza alla ricerca della Luce",
            link: "https://amzn.eu/d/emITAgD",
        },
    ] satisfies book[];

    const subtitle1 = 'Prima di essere stampate, molte opere vengono pubblicate nella sezione ';
    const subtitleLink = 'scrittura';
    const subtitle2 = " di questo sito, dove è possibile leggere liberamente gli scritti e le riflessioni più recenti dell\'autore.";

    interface book {
        title: string;
        description: string;
        link: string;
    }
</script>

<span id="pubblicazioni"/>

<div class="hero min-h-screen bg-[url(/library.webp)]">
    <div class="hero-overlay bg-opacity-80"></div>
    <div class="hero-content text-start text-neutral-content">
      <div class="max-w-xl">
        <h1 class="mb-5 text-5xl font-bold text-center">{heading}</h1>
        <ul class="mb-5 ml-12 list-disc text-lg">
            {#each books.reverse() as book}
            <li>
                {#if book.link !== ""}
                    <a href={book.link} class="link text-xl font-bold">
                        {book.title}
                    </a>
                    {#if book.description !== ""}
                        <br>
                        <div class="text-sm pl-4">
                                {book.description}
                        </div>
                    {/if}
                {:else}
                    <div class="text-xl font-bold">
                        {book.title}
                    </div>
                    {#if book.description !== ""}
                        <br>
                        <span class="text-sm pl-4">
                            {book.description}
                    </span>
                    {/if}
                {/if}
            </li>
            {/each}
        </ul>
        <p class="mb-5 mt-6">{subtitle1}<a class="link link-primary" href="/scrittura">{subtitleLink}</a>{subtitle2}</p>
      </div>
    </div>
</div>
