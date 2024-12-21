KUET CSE FEST 2025


```markdown
### API Endpoints and Examples

#### **Add a New Ingredient**
- **URL**: `http://localhost:3000/ingredients`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Sugar",
    "quantity": 500,
    "unit": "grams"
  }
  ```
- **Response**:
  ```json
  {
      "success": true,
      "message": "Ingredient added/updated",
      "data": {
          "_id": "6766e083474dcbfbd46f6316",
          "name": "Sugar",
          "__v": 0,
          "quantity": 500,
          "unit": "grams"
      }
  }
  ```

---

#### **Update an Ingredient**
- **URL**: `http://localhost:3000/ingredients/6766e083474dcbfbd46f6316`
- **Method**: `PUT`
- **Request Body**:
  ```json
  {
    "quantity": 600,
    "unit": "grams"
  }
  ```
- **Response**:
  ```json
  {
      "success": true,
      "message": "Ingredient updated successfully",
      "ingredient": {
          "_id": "6766e083474dcbfbd46f6316",
          "name": "Sugar",
          "__v": 0,
          "quantity": 600,
          "unit": "grams"
      }
  }
  ```

---

#### **Add a Recipe**
- **URL**: `http://localhost:3000/recipes`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "recipeText": "Spaghetti Carbonara\nIngredients:\n- 200g spaghetti\n- 100g pancetta\n- 2 large eggs\n- 50g grated Parmesan cheese\n- 2 cloves garlic, minced\n- Salt and pepper to taste\n- 1 tbsp olive oil\n\nInstructions:\n1. Cook the spaghetti according to the package instructions. Reserve some pasta water.\n2. Heat olive oil in a pan over medium heat. Add pancetta and cook until crispy.\n3. Add garlic to the pan and sauté for 1-2 minutes.\n4. In a bowl, whisk together eggs and Parmesan cheese.\n5. Combine cooked spaghetti with pancetta and garlic. Remove from heat.\n6. Quickly mix the egg and cheese mixture with the pasta, adding a little reserved pasta water to create a creamy sauce.\n7. Season with salt and pepper, and serve immediately."
  }
  ```
- **Response**:
  ```json
  {
      "success": true,
      "message": "Recipe saved successfully"
  }
  ```

---

#### **Chatbot Query**
- **URL**: `http://localhost:3000/chatbot`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "userInput": "What is the recipe for cake?"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "response": [
      {
        "generated_text": "Recipe Name: Chocolate Cake\nIngredients: Flour, Sugar, Eggs, Milk, Butter, Chocolate\nInstructions: Mix flour, sugar, eggs, and milk together. Melt the chocolate with butter and fold into the mixture. Bake at 180°C for 25-30 minutes until a skewer comes out clean."
      }
    ]
  }
  ```
```
