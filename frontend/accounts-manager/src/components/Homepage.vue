<template>
  <div>
    <h2>Accounts Manager</h2>

    <Button text="Add Ledger" @click="$router.push('/ledger')" />
    <Button text="Add Purchase" />
    <Button text="Add Receipt" />
    <Button text="Add Contra" />
  </div>
</template>

<script>
import Button from "./common/Button.vue";
export default {
    components: {
        Button
    }
}
</script>

<style scoped>

</style>
