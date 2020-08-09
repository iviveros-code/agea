import firebase from "../Utils/Firebase";

const GUARDAR_VIDEOS_FAVORITOS_EXITO = "GUARDAR_VIDEOS_FAVORITOS_EXITO";
const OBTENER_VIDEOS_FAVORITOS_EXITO = "OBTENER_VIDEOS_FAVORITOS_EXITO";

const dataInicial = {
  favorites: [],
};

export default function firebaseReducer(state = dataInicial, action) {
  switch (action.type) {
    case GUARDAR_VIDEOS_FAVORITOS_EXITO:
      return {};
    case OBTENER_VIDEOS_FAVORITOS_EXITO:
      return {};
    default:
      return state;
  }
}
