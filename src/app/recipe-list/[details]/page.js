import Recipedetails from "@/components/recipe-details";
async function getrecipedetail(recipeid){
    try {
        const response=await fetch(`https://dummyjson.com/recipes/${recipeid}`)
        const data=await response.json();
        return data;
    } catch (error) {
        throw new Error(error);
    }
}
export default async function recipedetails({params}){
    console.log(params);
    const getrecipedetails=await getrecipedetail(params?.details);
    return (
        <div>
            <Recipedetails getrecipedetails={getrecipedetails}/>
        </div>
    )
}