<style>
  .page-wrapper {
    display: flex;
    justify-content: center;
    width: 100vw;
    min-height: 100vh;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    max-width: 1600px;
    width: 90%;
  }
</style>

<div class="page-wrapper">
  <div class="grid">
    <slot>this page is currently empty</slot>
  </div>
</div>
