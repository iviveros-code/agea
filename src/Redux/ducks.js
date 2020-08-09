import axios from "axios";

//types

const OBTENER_VIDEOS_EXITO = "OBTENER_VIDEOS_EXITO";
const SIGUIENTES_VIDEOS_EXITO = "SIGUIENTES_VIDEOS_EXITO";
const FAVORITO_VIDEOS_EXITO = "FAVORITO_VIDEOS_EXITO";

// constants

const dataInicial = {
  items: [],
  offset: 0,
  favorites: [],
};

//reducer

export default function videosReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_VIDEOS_EXITO:
      return { ...state, ...action.payload };
    case SIGUIENTES_VIDEOS_EXITO:
      return {
        ...state,
        items: action.payload.items,
        offset: action.payload.offset,
      };
    case FAVORITO_VIDEOS_EXITO:
      return { ...state, favorites: action.payload.favorites };
    default:
      return state;
  }
}

//actions

export const obtenerVideosAction = () => async (dispatch, getState) => {
  const { offset } = getState().videosAgea;
  try {
    const res = await axios.get(
      `http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=${offset}&limit=2`
    );
    dispatch({
      type: OBTENER_VIDEOS_EXITO,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const siguienteVideosAccion = (number) => async (dispatch, getState) => {
  const { offset } = getState().videosAgea;
  const siguiente = offset + number;

  try {
    const res = await axios.get(
      `http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=${siguiente}&limit=2`
    );
    dispatch({
      type: SIGUIENTES_VIDEOS_EXITO,
      payload: {
        items: res.data.items,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const anteriorVideosAccion = (number) => async (dispatch, getState) => {
  const { offset } = getState().videosAgea;
  const siguiente = offset - number;

  try {
    const res = await axios.get(
      `http://api-editoriales.clarin.com/api/mobile/v2/oletv/home?offset=${siguiente}&limit=2`
    );
    dispatch({
      type: SIGUIENTES_VIDEOS_EXITO,
      payload: {
        items: res.data.items,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const favoritoVideosAccion = (url) => async (dispatch, getState) => {
  try {
    const res = await axios.get(url);
    dispatch({
      type: FAVORITO_VIDEOS_EXITO,
      payload: {
        favorites: res.data.items,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
