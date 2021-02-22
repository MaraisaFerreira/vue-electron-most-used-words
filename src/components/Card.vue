<template>
	<div class="card">
		<span class="name">{{ name }}</span>
		<span class="amount">{{ amount }}</span>
	</div>
</template>

<script>
export default {
	props: ['name', 'amount'],
};
</script>

<style scoped>
.card {
	margin: 10px;
	height: 55px;
	min-width: 105px;
	background-color: whitesmoke;
	border: 1px solid black;
	color: black;
	font-size: 1.3rem;
	border-radius: 5px;
	box-shadow: 2px 2px 3px black;

	display: flex;
	align-items: center;
	justify-content: space-between;
}

.card .name {
	margin-left: 15px;
}

.card .amount {
	margin: 10px;
	padding: 5px;

	height: 35px;
	width: 35px;
	border-radius: 3px;
	font-size: 14px;
	background-color: #0dc4fc;
	border: 1px solid #5a5a5a;

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
