<script lang="ts">
    export let posts: postEntry[];

    posts = posts.sort((a, b) => {
        if(a.date < b.date) return 1;
        if(a.date > b.date) return -1;
        return 0;
    });

    interface postEntry {
        title: string,
        date: string
    }
</script>

<div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-8 p-8">
    {#if posts.length === 0}
        <h1 class="text-3xl">
            Nessun risultato
        </h1>
        <p class="text-justify">
            Al momento non ci sono opere o pubblicazioni da visualizzare.
        </p>
        <p class="text-justify">
            Riprova tra qualche giorno. Non dimenticare di seguire i social di <span class="font-semibold">Paolo Sernini</span> per rimanere aggiornato su nuove pubblicazioni.
        </p>
    {/if}

    {#each posts as post}
        <div class="card max-w-96 bg-primary text-primary-content shadow-xl">
            <div class="card-body">
            <h2 class="card-title">{post.title}</h2>
            <p>Ultima modifica: {new Date(post.date).toLocaleString('it-IT')}</p>
            <div class="card-actions justify-end">
                <a class="btn btn-secondary btn-wide lg:w-fit mx-auto lg:mx-0 mt-6" href="/scrittura/post/{post.title}">Leggi</a>
            </div>
            </div>
        </div>
    {/each}
</div>
