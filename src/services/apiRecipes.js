export async function getRecipes() {
	let { data: recipes, error } = await supabase.from("recipes").select("*");
	if (error) {
		console.log(error);
	}

	return recipes;
}
