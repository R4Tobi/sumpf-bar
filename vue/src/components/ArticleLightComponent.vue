<template>
    <div class="wrapper">
        <div class="header">Aktuelles Sortiment</div>
        <hr />
        <div class="content">
            <p>
                Aktuelles Bier: Beispielbier
            </p>
        </div>
    </div>
</template>

<style scoped lang="css">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: #e2e2e2;
    padding: 4rem;
    box-sizing: border-box;
}

.header {
    font-size: 48pt;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #001600;
}

hr {
    width: 80%;
    border: 1px solid #cccccc;
    margin-bottom: 2rem;
}

.content {
    font-size: 24pt;
    color: #333333;
    text-align: center;
}
</style>