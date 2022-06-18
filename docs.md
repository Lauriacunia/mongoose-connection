## Mongoose queries - examples
### Connection
```
 mongoose.connect(
            "mongodb+srv://<user>:<pass>@cluster0.cyfup.mongodb.net/<dbName>?retryWrites=true&w=majority",
            { useNewUrlParser: true ,
              useUnifiedTopology: true 
            });
        
        mongoose.connection.on("connected", () => {
            console.log("connected to mongoDB");
        });
```
### Recuerden importar  los models
```
import { articuloModel } from "./models/articulos.js";
import { estudianteModel } from "./models/estudiantes.js";
```

### Create
```
 const primerArticulo = {
            nombre: "Pantalon",
            precio: 100,
            stock: 10
        };

const modelo = new articuloModel(primerArticulo);
await modelo.save();

// create many
alumnos.forEach(async (alumno) => {
            const modelo = new estudianteModel(alumno);
            await modelo.save();
```
### Read
```
 const articulos = await articuloModel.find();
 console.log(articulos);
```
### Update
```
  const articulo = await articuloModel.updateOne(
            { nombre: "Pantalon" },
            { precio: 200 }
        );
```
### Delete
```
const articulo = await articuloModel.deleteOne({ nombre: "Pantalon" });
```