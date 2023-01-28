import { Sequelize } from "sequelize-typescript";
import Ciudad from "../ciudad";
import Direccion from "../direccion";
import Empleado from "../empleado";
import Rol from "../rol";
import Sector from "../sector";
import { CiudadesService } from "../../services/index.service";

const sequelize = new Sequelize({
  database: "empleados",
  dialect: "postgres",
  username: "postgres",
  password: "12345",
  host: "127.0.0.1",
  storage: ":memory",
  models: [Empleado, Ciudad, Direccion, Rol, Sector],
  define: {
    freezeTableName: true,
  },
  logging: false,
});
//Si la base de datos es nueva, inicializa la lista de ciudades
sequelize.sync({ force: true }).then((_seq) => {
  new CiudadesService().init();
});

export default sequelize;
