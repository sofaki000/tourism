<template>
        <q-btn style="background: transparent; color: white;" :to="routerLink"><slot></slot></q-btn>
</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default{
        props:['routerLink']
}
</script>
