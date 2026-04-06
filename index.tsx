import { Input } from "@/app/components/input";
import { Image, StyleSheet, Text, View } from "react-native"
export default function Index(){
    return(
        <View style={{ flex:1, justifyContent: "center", alignItems: "center" }}>
          <Text style={styles.title}>Programação Mobile.</Text>
          <Text style={styles.subtitle}>Acesse sua conta</Text>
          <View style={styles.form}>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </View>  

          <Image
            source={require("@/src/app/assets/PR-GUY.jpg")}
            style={styles.illustration}
           />
        </View>    
        
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
  },
  form: {
    marginTop: 30,
    gap:24,
  },
  illustration: {
    width: "25%",
    height: 300,
  },
})