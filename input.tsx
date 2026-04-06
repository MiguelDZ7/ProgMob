import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
    return <TextInput style={styles.input} placeholder={props.placeholder} />;
    
}
const styles = StyleSheet.create({
    input: {
        height: 48,
        width: "100%",
        borderWidth: 1,
        borderColor: "#000000",
        fontSize: 16,
        paddingLeft: 12,
    },
});