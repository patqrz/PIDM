import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    header: {
        backgroundColor:"#EE594A",
        textAlign: "center",
        padding: 10,
        
    },

    imagem: {
        width: 200,
        height: 200,
        alignItems: "center",

    },

    card: {
        width: 300,  
        borderWidth: 1,
        borderColor: "#e8e6f0",
        backgroundColor: "#fcfcfc",
        padding: 25,
        borderRadius: 7,
        alignItems: "center",
        margin: 5,
    },

    titleprincipal: {
        fontWeight: "bold",
        fontSize: "20px",
        textAlign: "center",
    },

    title: {
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        alignItems: "center",

    },

    buttonsecundario: {
        borderRadius: 5,
        margin: 3,
    },

    tituloheader: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15,
    },

    modal: {
        flex: 1,
        alignItems: "center",
        textAlign: "center",
        },

})

export {estilo}