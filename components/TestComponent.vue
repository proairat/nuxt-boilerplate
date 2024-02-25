<template>
  <div>Something text for check component</div>
</template>

<script lang="ts" setup>
let person = {
	"name": "Yoda",
	"designation": "Jedi Master"
};

function trainJedi (jediWarrion: {
	"name": string;
	"designation": string;
}) {
	if (jediWarrion.name === "Yoda") {
		console.log("No need! Already trained");
	}


	console.log(`Training ${jediWarrion.name} complete`);
}

trainJedi(person);
trainJedi({
	"name": "Adeel",
	"designation": "padawan"
});

</script>

<style lang="scss">
div {
	color: red
}
</style>
