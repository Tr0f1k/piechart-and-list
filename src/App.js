import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./translations/en.json";
import he from "./translations/he.json";
import PieCharts from './PieCharts';
import DataGrid from './DataGrid';
import "./styles/App.css";

//Translations usage
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he }
    },
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  //Handling language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange('he')}>עִברִית</button>
      <button onClick={() => handleLanguageChange('en')}>English</button>
      <PieCharts t={t} />
      <DataGrid t={t} />
    </div>
  );
}

export default App;