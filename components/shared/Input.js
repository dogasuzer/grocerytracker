import { View, Text, TextInput, StyleSheet } from "react-native";
import CustomText from "../../components/ui/customTexts/CustomText";
import COLORS from "../ui/colors";

function Input({
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
  placeholder,
  style,
  maxLength,
  label,
  background,
}) {
  return (
    <View style={[styles.inputContainer]}>
      <CustomText style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </CustomText>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid, style]}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        placeholderTextColor={COLORS.secondary300}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    minWidth: 250,
    alignItems: "center",
  },

  labelInvalid: {
    color: COLORS,
  },
  input: {
    padding: 20,
    height: 50,
    borderRadius: 20,
    paddingVertical: 0,
    fontSize: 17,
    minWidth: 200,
  },
  inputInvalid: {
    backgroundColor: COLORS.error,
  },
});
