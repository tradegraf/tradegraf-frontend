import { all, fork, put, take } from 'redux-saga/effects';

import { Types } from '../actions/languageSelection';
// import { changeLangua}

const setSelectedLanguageToLocalStorage = selectedLanguage => {
  localStorage.setItem('selectedLanguage', selectedLanguage);
};

export function* setSelectedLanguage() {
  while (true) {
    const { selectedLanguage } = yield take(Types.SET_SELECTED_LANGUAGE);
    setSelectedLanguageToLocalStorage(JSON.stringify(selectedLanguage));
    yield put({ type: Types.SET_SELECTED_LANGUAGE, selectedLanguage });
    window.location.reload(true);
  }
}

export default function* languageSelection() {
  yield all([
    fork(setSelectedLanguage),
  ]);
}
