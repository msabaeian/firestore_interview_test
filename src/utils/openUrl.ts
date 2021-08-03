import { Linking } from "react-native";

export const openUrl = (url: string) => () => {
    Linking.canOpenURL(url)
        .then(supported => {
            if (!supported) {
                console.log("Can't handle url: " + url);
            } else {
                return Linking.openURL(url);
            }
        })
        .catch(err => console.error("An error occurred", err));
};
