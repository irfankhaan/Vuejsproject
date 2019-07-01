<template>
	<v-alert type="error" dismissible :value="true" @input="onClose"
    >
      {{ text }}
    </v-alert>
</template>

<script>
	export default{
		props: ['text'],
		methods: {
			onClose () {
				this.$emit('dismissed')
			}
		}
	}
		// alert is not working. check console and main.js. video @ 11:00
</script>