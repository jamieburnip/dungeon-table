const initialState = {
  messages: [],
  //   amount: "12.00",
  //   currencyCode: "USD",
  //   currencyData: { USD: 1.0 },
  //   supportedCurrencies: ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"],
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    // case CURRECY_CODE_CHANGED:
    //   return { ...state, currencyCode: action.payload };
    // case RATES_RECEIVED: {
    //   const codes = Object.keys(action.payload).concat(state.currencyCode);
    //   return {
    //     ...state,
    //     currencyData: action.payload,
    //     supportedCurrencies: codes,
    //   };
    // }
    default:
      return state;
  }
};

// Selectors
export const getMessages = (state) => state.chat.messages;
// export const getCurrencyCode = (state) => state.rates.currencyCode;
// export const getCurrencyData = (state) => state.rates.currencyData;
// export const getSupportedCurrencies = (state) =>
//   state.rates.supportedCurrencies;

// Action types
export const NEW_MESSAGE = "chat/newMessage";
// export const CURRECY_CODE_CHANGED = "rates/currencyCodeChanged";
// export const RATES_RECEIVED = "rates/ratesReceived";

// Action creators
export const newMessage = (message) => ({
  type: NEW_MESSAGE,
  payload: message,
});
