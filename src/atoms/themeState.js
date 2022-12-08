import {atom, selector} from "recoil";


export const themeState = atom({
    key: "themeState",
    default: 'light'
})

export const toggleTheme = selector({
    key: 'toggleTheme', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
        const toggle = get(themeState);
        switch (toggle) {
            case 'light':
                return 'dark';
            case 'dark':
                return 'light';
        }
    },
});
