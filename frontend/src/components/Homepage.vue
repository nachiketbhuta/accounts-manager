<template>
  <div>
    <h2>Accounts Manager</h2>

    <Button text="Add Ledger" @click="$router.push(pages.ledgers)" />
    <Button text="Add Purchase" />
    <Button text="Add Receipt" />
    <Button text="Add Contra" />
  </div>
</template>

<script>
import Button from "./common/Button.vue";
import { pages } from "../pages";
export default {
    components: {
        Button
    }
}
</script>

<style scoped>

</style>
