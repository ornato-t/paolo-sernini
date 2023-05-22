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

<div class="grid grid-flow-col gap-6 p-8">
    {#each posts as post}
        <div class="card w-96 bg-primary text-primary-content shadow-xl">
            <div class="card-body">
            <h2 class="card-title">{post.title}</h2>
            <p>Ultima modifica: {new Date(post.date).toLocaleString('it-IT')}</p>
            <div class="card-actions justify-end">
                <a class="btn btn-secondary" href="/scrittura/post/{post.title}">Leggi</a>
            </div>
            </div>
        </div>
    {/each}
</div>
