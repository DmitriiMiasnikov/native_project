import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export const TodoScreen = (props) => {
    return (
        <View>
            <Text>{props.todo.text}</Text>
            <Button title={'назад'} onPress={props.goBack}/>
        </View>
    )
}

const styles = StyleSheet.create({
    
})