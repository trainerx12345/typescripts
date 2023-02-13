/* https://www.youtube.com/watch?v=72_5_YuDCNA 
* !This is a sample of snipping for typescript for easy management
* C:\Users\{UserName}\AppData\Roaming\Code\User\snippets\typescript.json 
* TODO: Add file typescript.json on the user files
* Sample  inside the json file code
* @prefix  : snipping name 
* @body : body to be changes
* @params ${1:ModelName}, first to change if every called

{
  "CRUD Mongo":{
    "prefix": "crudmongocontroller",
    "body":[
      "",
"import { NextFunction, Request, Response } from 'express';",
"import mongoose from 'mongoose';",
"import ${1:ModelName} from '../models/${1:ModelName}';",
"",
"const create${1:ModelName} = (req: Request, res: Response, next: NextFunction) => {",
"    const { ${3:StartName} } = req.body;",
"",
"    const ${2:VariableName} = new ${1:ModelName}({",
"        _id: new mongoose.Types.ObjectId(),",
"${3:StartName}",
"    });",
"",
"    return ${2:VariableName}",
"        .save()",
"        .then((${2:VariableName}) => res.status(201).json({ ${2:VariableName} }))",
"        .catch((error) => res.status(500).json({ error }));",
"};",
"",
"const read${1:ModelName} = (req: Request, res: Response, next: NextFunction) => {",
"    const ${2:VariableName}Id = req.params.${2:VariableName}Id;",
"",
"    return ${1:ModelName}.findById(${2:VariableName}Id)",
"        .then((${2:VariableName}) => (${2:VariableName} ? res.status(200).json({ ${2:VariableName} }) : res.status(404).json({ ","message: 'not found' })))",
"        .catch((error) => res.status(500).json({ error }));",
"};",
"",
"const readAll = (req: Request, res: Response, next: NextFunction) => {",
"    return ${1:ModelName}.find()",
"        .then((${2:VariableName}s) => res.status(200).json({ ${2:VariableName}s }))",
"        .catch((error) => res.status(500).json({ error }));",
"};",
"",
"const update${1:ModelName} = (req: Request, res: Response, next: NextFunction) => {",
"    const ${2:VariableName}Id = req.params.${2:VariableName}Id;",
"",
"    return ${1:ModelName}.findById(${2:VariableName}Id)",
"        .then((${2:VariableName}) => {",
"            if (${2:VariableName}) {",
"                ${2:VariableName}.set(req.body);",
"",
"                return ${2:VariableName}",
"                    .save()",
"                    .then((${2:VariableName}) => res.status(201).json({ ${2:VariableName} }))",
"                    .catch((error) => res.status(500).json({ error }));",
"            } else {",
"                return res.status(404).json({ message: 'not found' });",
"            }",
"        })",
"        .catch((error) => res.status(500).json({ error }));",
"};",
"",
"const delete${1:ModelName} = (req: Request, res: Response, next: NextFunction) => {",
"    const ${2:VariableName}Id = req.params.${2:VariableName}Id;",
"",
"    return ${1:ModelName}.findByIdAndDelete(${2:VariableName}Id)",
"        .then((${2:VariableName}) => (${2:VariableName} ? res.status(201).json({ ${2:VariableName}, message: 'Deleted' }) : res.","status(404).json({ message: 'not found' })))",
"        .catch((error) => res.status(500).json({ error }));",
"};",
"",
"export default { create${1:ModelName}, read${1:ModelName}, readAll, update${1:ModelName}, delete${1:ModelName} };",

    ]
  }
}
*/