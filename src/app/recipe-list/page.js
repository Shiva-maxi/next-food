import Recipelist from "@/components/recipe-lis"


async function fetchlistofrecipes(){
    

    try {
        const response=await fetch('https://dummyjson.com/recipes');
        const data=await response.json();
        return data?.recipes;
    } catch (error) {
        throw new Error(error);
    }

}
export default async function Recipes(){
    const getrecipes=await fetchlistofrecipes();
    return (
        <div>
             <Recipelist recipeList={getrecipes}/>
        </div>
    )
}