const Recipe = require ('../Models/Recipe');


const Recipe = async (req, res) => {
    try {
        const Recipe = await Recipe.find();
      
        res.status(200).json(recipes);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to recieve recipes', error: error.message });
    }
}
const postrecipe = async (req, res) => {
    const { recipeName, ingredients, cookingTime, difficulty, cuisine, description, photoLink, averageRating } = req.body;
    const newRecipe = new Recipe({
        recipeName,
        ingredients,
        cookingTime,
        difficulty,
        cuisine,
        description,
        photoLink,
        averageRating
    });

    try {
        const savedData  = await newRecipe.save();
        res.status(201).json(savedData)
    }
    catch (error){
        res.status(400).json({ message: 'Request Unsuccessfull', error: error.message });
    }
}


module.exports = {Recipes, postrecipe};