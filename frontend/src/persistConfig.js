import storage from 'redux-persist/lib/storage'; // Utilisez le stockage local par défaut

const persistConfig = {
  key: 'root',
  storage,
};

export default persistConfig;
