import Todo from "../models/todoModels.js"

export async function createList(req,res){

  try{

    const formData = { ...req.body };

    // validation
    if(!formData.title || !formData.description){

      return res.status(401).send({
        success:false,
        message:"all field required"
      })

    }

    // create
    const data = await Todo.create(formData);

    // success response
    res.status(200).send({
      success:true,
      message:"successfully added",
      data
    })

  }catch(err){

    console.log(err)

    res.status(500).send({
      success:false,
      message:"error"
    })

  }

}


export async function showList(req,res){
  try{
    const data=await Todo.find({});
    res.status(200).send({
      success:true,
      message:"all",
      data
    })

  }catch(err){
    console.log(err);
    res.status(500).send({
      success:false,
      message:"error"
    })
  }
}

export async function deleteTask(req,res){
  try{
const data=await Todo.findByIdAndDelete(req.body.id);
res.status(200).send({
  success:true,
  message:"deleted successfully",
  data
})

  }catch(err){
    console.log(err);
    res.status(401).send({
      success:false,
      message:"error"
    })
  }
}

export async function updateShow(req, res) {

  try {

    const data = await Todo.findById(req.params.id);

    res.status(200).send({
      success: true,
      message: "fetch",
      data
    });

  } catch (err) {

    console.log(err);

    res.status(500).send({
      success: false,
      message: "error"
    });

  }

}

export async function updateTodo(req,res){
  try{
const data=await Todo.findByIdAndUpdate(req.params.id,req.body,{
  new:true
});
res.status(200).send({
  success:true,
  message:"UPDATED Successfully",
  data
})

  }catch(err){
    console.log(err);
    res.status(500).send({
      success:false,
      message:"error"
    })
  }
}