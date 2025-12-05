<template>
    <div class="wrapper">
        <div class="header">Aktuelles Sortiment</div>
        <hr />
        <div class="content">
            <div class="row">
                <div class="column">
                    <h3>Aktuelles Bier</h3>
                    <span>{{ beer }}</span>
                </div>
            </div>
            
            <div class="row">
                <div class="column">
                    <h3>Aktuelle Getränke</h3>  
                    <span v-for="drink in drinks" :key="drink">{{ drink }}</span>
                </div>
                <div class="column">
                    <h3>Aktuelle Snacks</h3>
                    <span v-for="snack in snacks" :key="snack">{{ snack }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAssortment } from '@/composables/getAssortment';

const { beer, drinks, snacks } = await getAssortment();
</script>

<style scoped lang="css">
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
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

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 8rem;
    width: 100%;
    margin-bottom: 2rem;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}
</style>