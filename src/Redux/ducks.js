import axios from "axios";

//types

const OBTENER_VIDEOS_EXITO = "OBTENER_VIDEOS_EXITO";
const SIGUIENTES_VIDEOS_EXITO = "SIGUIENTES_VIDEOS_EXITO";

// constants

const dataInicial = {
  array: [],
  // offset: 0,
};

//reducer

export default function videosReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_VIDEOS_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTES_VIDEOS_EXITO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

//actions

export const obtenerVideosAction = () => async (dispatch, getState) => {
  // const offset = getState().videosAgea.offset;
  try {
    const res = await axios.get(
      "http://api-editoriales.clarin.com/api/mobile/v2/oletv/home"
    );
    const info = res.data.items;
    dispatch({
      type: OBTENER_VIDEOS_EXITO,
      payload: info,
    });
  } catch (error) {
    console.log(error);
  }
};

//?${offset}=0&limit=10

export const siguienteVideosAccion = () => async (dispatch, getState) => {
  const offset = getState().videosAgea.offset;
  const siguiente = offset + 2;

  try {
    const response = await axios.get(
      `http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?${siguiente}=0&limit=1`
    );
    dispatch({
      type: SIGUIENTES_VIDEOS_EXITO,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
