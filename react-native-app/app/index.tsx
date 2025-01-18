import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { items } from '../assets/data'


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#121212",
		padding: 20,
	},
	title: { fontSize: 24, color: "white", marginBottom: 10 },
	card: {
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
    },
    cardTitle: { fontSize: 18, color: "white" },
    cardBody: { fontSize: 14, color: "white" },
})

const index = () => {
    const router = useRouter()

  return (
    <GestureHandlerRootView>
<View style={styles.container}>
			<Text style={styles.title}>Notes App</Text>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<TouchableOpacity
						onPress={() =>
							router.push({ pathname: "/notes/[id]", params: { id: item.id } })
						}
					>
						<View style={styles.card}>
							<Text style={styles.cardTitle}>{item.title}</Text>
							<Text style={styles.cardBody}>{item.body}</Text>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
        </GestureHandlerRootView>
  )
}

export default index