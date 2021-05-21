import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

 const initialMessages = [
    {id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/hussein.jpg') 
    },
    {id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/hussein.jpg') 
    },
    {id: 3,
        title: 'Hussein Salloum',
        description: 'Hey! Is this still availabe?',
        image: require('../assets/hussein.jpg') 
        },
]; 

function MessageScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // delete the message from initialMessages
        setMessages(messages.filter((m) => m.id !== message.id));
    };
    return (
        <Screen>
        <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => 
        <ListItem 
        title={item.content}
        subTitle={item.description}
        image={item.image}
        onPress={() => console.log("Message selected", item)}
        renderRightActions={ () => 
            <ListItemDeleteAction onPress={ () => handleDelete(item)} />} />} 
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)
           /* setMessages(
                [
                    {id: 3,
                        title: 'Hussein Salloum',
                        description: 'Hey! Is this still availabe?',
                        image: require('../assets/hussein.jpg') 
                        }
                ] 
            )*/
        }/>
        </Screen>
    );
}



const styles = StyleSheet.create({

})

export default MessageScreen;