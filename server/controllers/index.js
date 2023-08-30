import TodoSchema from "../model/todoModel.js";

//Add new Todo
export async function addNewTodo(req, res) {
  try {
    const newTodo = await TodoSchema.create({
      data: req.body.data,
      createdAt: Date.now(),
    });

    await newTodo.save();

    return res.status(200).json(newTodo);
  } catch (error) {
    console.log(`Error in Add Todo controller. --->Error:: ${error}`);
    return res.json(500).json(error.message);
  }
}

//Get all todo
export async function getAllTodo(req, res) {
  try {
    const todo = await TodoSchema.find({}).sort("-createdAt");

    return res.status(200).json(todo);
  } catch (error) {
    console.log(`Error in Get Todo controller. --->Error:: ${error}`);
    return res.json(500).json(error.message);
  }
}

//Toggle Todo
export async function toggleTodo(req, res) {
  try {
    const todoRef = await TodoSchema.findById(req.params.id);

    const toggledTodo = await TodoSchema.findOneAndUpdate(
      { _id: req.params.id },
      { done: !todoRef.done }
    );

    await toggledTodo.save();

    return res.status(200).json(toggledTodo);
  } catch (error) {
    console.log(`Error in Toggle Todo controller. --->Error:: ${error}`);
    return res.json(500).json(error.message);
  }
}

//Update Todo
export async function updateTodo(req, res) {
  try {
    await TodoSchema.findOneAndUpdate(
      { _id: req.params.id },
      { data: req.body.data }
    );

    const updateTodo = await TodoSchema.findById(req.params.id);

    return res.status(200).json(updateTodo);
  } catch (error) {
    console.log(`Error in Update Todo controller. --->Error:: ${error}`);
    return res.json(500).json(error.message);
  }
}

//Delete Todo
export async function deleteTodo(req, res) {
  try {
    const deletedTodo = await TodoSchema.findByIdAndDelete(req.params.id);

    return res.status(200).json(deletedTodo);
  } catch (error) {
    console.log(`Error in Delete Todo controller. --->Error:: ${error}`);
    return res.json(500).json(error.message);
  }
}
