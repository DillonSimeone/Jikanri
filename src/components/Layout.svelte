<style>
    main.layout-wrapper {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .grid-wrapper {
        display: grid;
        max-width: 90%;
        grid-template-columns: repeat(6, 1fr);
    }
</style>

<main class="layout-wrapper">
    <div class="grid-wrapper">
        <slot>this page is currently empty.</slot>
    </div>
</main>